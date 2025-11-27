const API_BASE_URL = "http://localhost:8083/api"

export const fetchEvents = async ({ queryKey }) => {

  const [_key, selectedCategory, selectedDate, searchTerm] = queryKey;

  const params = new URLSearchParams();

  if (searchTerm?.trim()) params.append("name", searchTerm.trim());
  if (selectedCategory?.trim()) params.append("categoryIds", selectedCategory.trim());
  if (selectedDate) {
    const date = new Date(selectedDate);
    const localISO = date.toISOString().slice(0, 23);
    params.append("startsAt", localISO);
  }


  const response = await fetch(`${API_BASE_URL}/events?${params.toString()}`);
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

export const createEvent = async (eventData) => {
  const response = await fetch(`${API_BASE_URL}/events`, {
    method: "POST", // <-- specify POST
    headers: {
      "Content-Type": "application/json", // tell backend it’s JSON
    },
    credentials: "include", // if your backend uses allowCredentials
    body: JSON.stringify(eventData), // send the data
  })
  if (!response.ok) throw new Error("Failed to create event");
  return response.json();
};