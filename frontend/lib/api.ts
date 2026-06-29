const API_URL = "http://127.0.0.1:8000/api";

export async function api(
  endpoint: string,
  options: RequestInit = {}
) {
  const token = localStorage.getItem("access");

  const response = await fetch(`${API_URL}${endpoint}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw await response.json();
  }

  return response.json();
}