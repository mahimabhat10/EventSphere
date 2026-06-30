export interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  category: string;
  date: string;
  time: string;
  image: string;
  price: number;
  capacity: number;
  available_seats: number;
}

export interface Booking {
  id: number;
  quantity: number;
  total_price: number;
  status: string;
  event_details: Event;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  avatar?: string;
}