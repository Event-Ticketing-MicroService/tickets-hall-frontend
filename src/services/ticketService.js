import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

export const fetchTickets = async (id) => {
  const response = await fetch(`${API_BASE_URL}/events/${id}/ticket`);
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }
  return response.json();
};

export const fetchEventById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/events/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch event");
  }
  return response.json();
};

export const reserveTicket = async (ticketData) => {
  console.log("ticketService: reserveTicket called with", ticketData);
  try {
    const response = await fetch(`${API_BASE_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticketData),
    });

    console.log("ticketService: response status", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const data = await response.json();
    console.log("ticketService: response data", data);
    return data;
  } catch (error) {
    console.error("ticketService: error", error);
    throw error;
  }
};