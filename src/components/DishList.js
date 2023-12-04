// components/DishList.js
import React, { useEffect, useState } from 'react';
import { getRestaurantData } from '../util/api';

const DishList = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      const data = await getRestaurantData();
      setMenuItems(data.restaurant.menu);
    };

    fetchRestaurantData();
  }, []);

  if (!menuItems.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dishes</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default DishList;
