import { api } from "@/lib/api";

export const EventService = {
  async getEvents() {
    return await api("/events/");
  },

  getEvent(id: string | string[]) {
  return api(`/events/${id}/`);
},
  async getFeaturedEvents() {
    return await api("/events/featured/");
  },

  async getUpcomingEvents() {
    return await api("/events/upcoming/");
  },
};