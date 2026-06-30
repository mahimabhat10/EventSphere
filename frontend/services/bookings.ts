import { request as api } from "@/lib/api";

export const BookingService = {
  createBooking(data: any) {
    return api("/bookings/", {
      method: "POST",
      data,
    });
  },

  getBookings() {
    return api("/bookings/");
  },

  cancelBooking(id: number) {
    return api(`/bookings/${id}/`, {
      method: "DELETE",
    });
  },
};