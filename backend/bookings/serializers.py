from rest_framework import serializers
from .models import Booking
from events.serializers import EventSerializer


class BookingSerializer(serializers.ModelSerializer):
    event_details = EventSerializer(
        source="event",
        read_only=True,
    )

    class Meta:
        model = Booking
        fields = "__all__"

        read_only_fields = [
            "user",
            "total_price",
            "status",
            "booked_at",
        ]