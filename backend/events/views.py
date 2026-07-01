from django.db.models import Sum
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.core.cache import cache
from bookings.models import Booking
from .models import Event
from .serializers import EventSerializer


# ==========================
# Events List + Create
# ==========================
class EventListCreateView(generics.ListCreateAPIView):
    serializer_class = EventSerializer

    def get_permissions(self):
        if self.request.method == "POST":
            return [IsAuthenticated()]
        return [AllowAny()]

    def get_queryset(self):
        queryset = Event.objects.all().order_by("-created_at")

        search = self.request.GET.get("search")
        category = self.request.GET.get("category")

        if search:
            queryset = queryset.filter(title__icontains=search)

        if category:
            queryset = queryset.filter(category__iexact=category)

        return queryset
def get(self, request, *args, **kwargs):
    cache_key = "all_events"

    cached_events = cache.get(cache_key)

    if cached_events:
        return Response(cached_events)

    response = super().get(request, *args, **kwargs)

    cache.set(cache_key, response.data, timeout=300)

    return response
def perform_create(self, serializer):
    serializer.save(organizer=self.request.user)
    cache.delete("all_events")


# ==========================
# Event Detail
# ==========================
class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = EventSerializer
    queryset = Event.objects.all()

    def get_permissions(self):
        if self.request.method in ["PUT", "PATCH", "DELETE"]:
            return [IsAuthenticated()]
        return [AllowAny()]

def perform_update(self, serializer):
    serializer.save()
    cache.delete("all_events")
def perform_destroy(self, instance):
    if instance.organizer != self.request.user:
        raise PermissionError("You cannot delete this event.")

    instance.delete()
    cache.delete("all_events")

# ==========================
# Featured Events
# ==========================
class FeaturedEventsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        events = Event.objects.all().order_by("-created_at")[:6]
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)


# ==========================
# Upcoming Events
# ==========================
class UpcomingEventsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        events = Event.objects.all().order_by("date")
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)


# ==========================
# Categories
# ==========================
class CategoriesView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        categories = (
            Event.objects.values_list("category", flat=True)
            .distinct()
            .order_by("category")
        )
        return Response(categories)


# ==========================
# Organizer Events
# ==========================
class MyEventsView(generics.ListAPIView):
    serializer_class = EventSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Event.objects.filter(
            organizer=self.request.user
        ).order_by("-created_at")


# ==========================
# Organizer Dashboard
# ==========================
class OrganizerDashboardView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):

        events = Event.objects.filter(
            organizer=request.user
        )

        bookings = Booking.objects.filter(
            event__organizer=request.user
        )

        revenue = (
            bookings.aggregate(
                total=Sum("total_price")
            )["total"]
            or 0
        )

        return Response(
            {
                "total_events": events.count(),
                "total_bookings": bookings.count(),
                "total_revenue": revenue,
                "recent_events": EventSerializer(
                    events[:5],
                    many=True,
                ).data,
            },
            status=status.HTTP_200_OK,
        )