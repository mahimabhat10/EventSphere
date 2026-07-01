from decimal import Decimal

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Booking
from .serializers import BookingSerializer


class BookingListCreateView(generics.ListCreateAPIView):
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Booking.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        event = serializer.validated_data["event"]
        quantity = serializer.validated_data.get("quantity", 1)

        total_price = Decimal(event.price) * quantity

        serializer.save(
            user=self.request.user,
            total_price=total_price,
        )


class BookingDetailView(generics.RetrieveDestroyAPIView):
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Booking.objects.filter(user=self.request.user)