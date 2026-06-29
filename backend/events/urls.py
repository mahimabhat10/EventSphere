from django.urls import path
from .views import *

urlpatterns = [
    path("", EventListCreateView.as_view()),
    path("featured/", FeaturedEventsView.as_view()),
    path("upcoming/", UpcomingEventsView.as_view()),
    path("categories/", CategoriesView.as_view()),
    path("<int:pk>/", EventDetailView.as_view()),
]