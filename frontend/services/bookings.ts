import { api } from "@/lib/api";

export const BookingService = {
  createBooking(data: any) {
    return api("/bookings/", {
      method: "POST",
      body: JSON.stringify(data),
    });
  },

  getBookings() {
    return api("/bookings/");
  },
};