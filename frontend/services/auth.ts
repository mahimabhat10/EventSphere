import { api } from "@/lib/api";

export const AuthService = {
  login(email: string, password: string) {
    return api("/users/login/", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });
  },

  logout() {
    return api("/users/logout/", {
      method: "POST",
    });
  },

  profile() {
    return api("/users/profile/");
  },
};