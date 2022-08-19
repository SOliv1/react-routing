
import React, { useState, useEffect } from 'react';
import './App.css';


function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItem] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      'https://fortnite-api.com/v2/shop/br'

    );

    const items = await data.json();
    console.log(items);
    setItem(items);
  };


  return (
      <div>
        <h1>Shop Page</h1>
      </div>

  );

}

export default Shop;
