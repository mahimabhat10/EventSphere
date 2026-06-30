from django.urls import path

from .views import (
    EventListCreateView,
    EventDetailView,
    FeaturedEventsView,
    UpcomingEventsView,
    CategoriesView,
    MyEventsView,
    OrganizerDashboardView,
)

urlpatterns = [

    # All Events
    path(
        "",
        EventListCreateView.as_view(),
        name="events",
    ),

    # Featured
    path(
        "featured/",
        FeaturedEventsView.as_view(),
        name="featured-events",
    ),

    # Upcoming
    path(
        "upcoming/",
        UpcomingEventsView.as_view(),
        name="upcoming-events",
    ),

    # Categories
    path(
        "categories/",
        CategoriesView.as_view(),
        name="categories",
    ),

    # Organizer Dashboard
    path(
        "dashboard/",
        OrganizerDashboardView.as_view(),
        name="organizer-dashboard",
    ),

    # Organizer Events
    path(
        "my-events/",
        MyEventsView.as_view(),
        name="my-events",
    ),

    # Event Details
    path(
        "<int:pk>/",
        EventDetailView.as_view(),
        name="event-detail",
    ),
]