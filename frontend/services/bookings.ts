import { request as api } from "@/lib/api";

export const BookingService = {
  // Create Booking
  createBooking(data: any) {
    return api("/bookings/", {
      method: "POST",
      data,
    });
  },

  // Get My Bookings
  getMyBookings() {
    return api("/bookings/");
  },

  // (Optional - backward compatibility)
  getBookings() {
    return api("/bookings/");
  },

  // Cancel Booking
  cancelBooking(id: number) {
    return api(`/bookings/${id}/`, {
      method: "DELETE",
    });
  },
};