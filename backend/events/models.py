from django.db import models
from django.conf import settings


class Event(models.Model):
    title = models.CharField(max_length=200)

    description = models.TextField()

    location = models.CharField(max_length=200)

    date = models.DateField()

    time = models.TimeField()

    image = models.URLField(blank=True)

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
    )

    capacity = models.PositiveIntegerField()

    organizer = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )

    created_at = models.DateTimeField(
        auto_now_add=True,
    )

    def __str__(self):
        return self.title