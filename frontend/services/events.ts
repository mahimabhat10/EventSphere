import { request as api } from "@/lib/api";

export const EventService = {
  // ==========================
  // Public Events
  // ==========================

  getEvents(search?: string, category?: string) {
    let url = "/events/";

    const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (category) params.append("category", category);

    if (params.toString()) {
      url += `?${params.toString()}`;
    }

    return api(url);
  },

  getEvent(id: number | string) {
    return api(`/events/${id}/`);
  },

  getFeaturedEvents() {
    return api("/events/featured/");
  },

  getUpcomingEvents() {
    return api("/events/upcoming/");
  },

  getCategories() {
    return api("/events/categories/");
  },

  // ==========================
  // Organizer
  // ==========================

  getDashboard() {
    return api("/events/dashboard/");
  },

  getMyEvents() {
    return api("/events/my-events/");
  },

  createEvent(data: any) {
    return api("/events/", {
      method: "POST",
      data,
    });
  },

  updateEvent(id: number, data: any) {
    return api(`/events/${id}/`, {
      method: "PUT",
      data,
    });
  },

  deleteEvent(id: number) {
    return api(`/events/${id}/`, {
      method: "DELETE",
    });
  },
};