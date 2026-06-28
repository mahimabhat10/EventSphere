import { api } from "@/lib/api";

export const EventService = {
  getEvents() {
    return api("/events/");
  },

  getEvent(id: number) {
    return api(`/events/${id}/`);
  },

  createEvent(data: any) {
    return api("/events/", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },
};