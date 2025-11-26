import axios from "axios";

const API_BASE_URL = "http://localhost:8087/api";

export const fetchVenues = async () => {
  const response = await fetch(`${API_BASE_URL}/venues`, {
    credentials: "include"
  });
  if (!response.ok) throw new Error("Failed to fetch events");
  return response.json();
};

export const fetchVenueById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/venues/${id}`, {
    credentials: "include"
  });
  if (!response.ok) throw new Error("Failed to fetch event");
  return response.json();
};

export const createVenue = async (formData) => {
  return axios.post(
    "http://localhost:8080/api/venues/admin",
    formData
  );
};

export const addWorker = async (venueID, workers) => {
  // workers must be an array of { fullName, username, email }
  const response = await fetch(`${API_BASE_URL}/venues/${venueID}/workers`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(workers),
  });

  if (!response.ok) throw new Error("Failed to create workers");

  return response.json();
};

