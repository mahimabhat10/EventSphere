from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),

    # Users / Authentication
    path("api/users/", include("users.urls")),

    # Events
    path("api/events/", include("events.urls")),

    # Bookings
    path("api/bookings/", include("bookings.urls")),
]