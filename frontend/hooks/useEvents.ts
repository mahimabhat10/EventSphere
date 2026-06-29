"use client";

import { useEffect, useState } from "react";
import { EventService } from "@/services/events";

export default function useEvents() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    EventService.getEvents()
      .then((data) => {
        console.log("API RESPONSE:", data);

        if (Array.isArray(data)) {
          setEvents(data);
        } else if (Array.isArray(data.results)) {
          setEvents(data.results);
        } else {
          setEvents([]);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return { events, loading };
}