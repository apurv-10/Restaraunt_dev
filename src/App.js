import React from 'react';
import RestaurantDetails from './components/RestaurantDetails';
import RestaurantMenu from './components/RestaurantMenu';
import DishList from './components/DishList';
import './App.css';

function App() {
  return (
    <div className="App">
      <RestaurantDetails />
      <RestaurantMenu />
      <DishList />
    </div>
  );
}

export default App;

