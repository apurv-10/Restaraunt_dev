import { getRestaurantData } from '../util/api';

import React, { useEffect } from 'react';

export const fetchRestaurantData = async () => {
  try {
    const response = await fetch('http://localhost:3001/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Data from Server:', data.data.menu);
    if (!data || !data.menu) {
      console.error('Invalid data structure. Missing "menu" property.', data);
      return [];
    }
    return data.menu;
  } catch (error) {
    console.error('Error fetching restaurant data:', error.message);
    throw error;
  }
};
const RestaurantDetails = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuData = await fetchRestaurantData();
        console.log('Fetched menu data:', menuData);
      } catch (error) {
        console.error('Error in fetchData:', error.message);
      }
    };
    fetchData();
  }, []); 
  return (
    <div>
      {/* RestaurantDetails component */}
    </div>
  );
};

export default RestaurantDetails;
