
from django.contrib import admin
from django.urls import include, path

from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularSwaggerView,
)
urlpatterns = [
    path("admin/", admin.site.urls),

    # Swagger
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/docs/", SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"),

    # Users / Authentication
    path("api/users/", include("users.urls")),

    # Events
    path("api/events/", include("events.urls")),

    # Bookings
    path("api/bookings/", include("bookings.urls")),
]