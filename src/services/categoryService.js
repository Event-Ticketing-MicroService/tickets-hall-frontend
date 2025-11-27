const API_BASE_URL = "http://localhost:8083/api"

export const fetchCategories = async () => {
  const response = await fetch(`${API_BASE_URL}/categories`);
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }
  return response.json();
};