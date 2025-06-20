export interface Event {
  id: string;
  eventName: string;
  eventStart: string;
  eventEnd: string;
  clientName: string;
  contactInfo: string;
  venue: string;
  description?: string;
  status?: "pending" | "approved" | "rejected";
}

export interface User {
  name: string;
  avatar: string;
  role: string;
}
