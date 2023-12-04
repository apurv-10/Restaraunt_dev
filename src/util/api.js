const API_BASE_URL = 'http://localhost:3001';

export const getRestaurantData = async () => {
  const response = await fetch(`${API_BASE_URL}/restaurant`);
  return response.json();
};
