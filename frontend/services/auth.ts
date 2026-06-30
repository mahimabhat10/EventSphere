import { request as api } from "@/lib/api";

export const AuthService = {
  async login(email: string, password: string) {
    const data = await api("/users/login/", {
      method: "POST",
      data: {
        email,
        password,
      },
    });

    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);

    return data.user;
  },

  async register(payload: any) {
    const result = await api("/users/register/", {
      method: "POST",
      data: payload,
    });

    localStorage.setItem("access", result.access);
    localStorage.setItem("refresh", result.refresh);

    return result.user;
  },

  async logout() {
    const refresh = localStorage.getItem("refresh");

    await api("/users/logout/", {
      method: "POST",
      data: {
        refresh,
      },
    });

    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  },

  profile() {
    return api("/users/profile/");
  },

  me() {
    return api("/users/me/");
  },
};