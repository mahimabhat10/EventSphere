from django.db import models
from django.conf import settings


class Event(models.Model):

    CATEGORY_CHOICES = (
        ("Technology", "Technology"),
        ("Music", "Music"),
        ("Business", "Business"),
        ("Sports", "Sports"),
        ("Education", "Education"),
        ("Food", "Food"),
        ("Gaming", "Gaming"),
        ("Startup", "Startup"),
    )

    title = models.CharField(max_length=200)

    description = models.TextField()

    location = models.CharField(max_length=200)

    category = models.CharField(
        max_length=100,
        choices=CATEGORY_CHOICES,
        default="Technology",
    )

    date = models.DateField()

    time = models.TimeField()

    image = models.URLField(blank=True)

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )

    capacity = models.PositiveIntegerField()

    available_seats = models.PositiveIntegerField(default=0)

    organizer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="events",
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    def save(self, *args, **kwargs):
        # Set available seats only when creating the event
        if not self.pk:
            self.available_seats = self.capacity
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title