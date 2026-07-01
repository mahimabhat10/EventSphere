import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Let Axios set multipart/form-data automatically
  if (!(config.data instanceof FormData)) {
    config.headers["Content-Type"] = "application/json";
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refresh = localStorage.getItem("refresh");

        const response = await axios.post(
          `${API_URL}/users/token/refresh/`,
          {
            refresh,
          }
        );

        localStorage.setItem("access", response.data.access);

        originalRequest.headers.Authorization =
          `Bearer ${response.data.access}`;

        return api(originalRequest);

      } catch {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");

        window.location.href = "/login";

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export async function request(endpoint: string, options: any = {}) {
  console.log("API URL:", API_URL);
  console.log("REQUEST:", endpoint);

  const response = await api({
    url: endpoint,
    ...options,
  });

  return response.data;
}