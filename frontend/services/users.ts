import { api } from "@/lib/api";

export const UserService = {
  profile() {
    return api("/users/profile/");
  },
};