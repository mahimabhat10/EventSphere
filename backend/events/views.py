from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Event
from .serializers import EventSerializer


class EventListCreateView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class FeaturedEventsView(APIView):
    def get(self, request):
        events = Event.objects.all()[:6]
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)


class UpcomingEventsView(APIView):
    def get(self, request):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)


class CategoriesView(APIView):
    def get(self, request):
        return Response([
            "Music",
            "Technology",
            "Business",
            "Sports",
            "Education",
            "Food",
            "Gaming",
            "Startup",
        ])