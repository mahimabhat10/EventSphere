import { request as api } from "@/lib/api";

export const UserService = {
  me() {
    return api("/users/me/");
  },

  profile() {
    return api("/users/profile/");
  },

  updateProfile(data: {
    first_name?: string;
    last_name?: string;
    avatar?: string;
  }) {
    return api("/users/profile/", {
      method: "PUT",
      data,
    });
  },
};