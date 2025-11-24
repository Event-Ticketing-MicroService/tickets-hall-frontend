const API_BASE_URL = "http://localhost:8080/api" 

export const fetchEvents = async ({queryKey}) => {

  const [_key, selectedCategory, selectedDate, searchTerm] = queryKey;

  const params = new URLSearchParams();
  
  if(searchTerm?.trim()) params.append("name" , searchTerm.trim());
  if (selectedCategory?.trim()) params.append("categoryIds", selectedCategory.trim());
  if (selectedDate) {
    // create YYYY-MM-DDTHH:mm:ss.SSS (no Z)
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