import { request as api } from "@/lib/api";

export const UserService = {
  me() {
    return api("/users/me/");
  },

  profile() {
    return api("/users/profile/");
  },

  updateProfile(data: FormData) {
    return api("/users/profile/", {
      method: "PUT",
      data,
    });
  },
};