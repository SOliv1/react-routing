
import React, { useEffect } from 'react';
import './App.css';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      'https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get'

    );


    const items = await data.json();
    console.log(items);

  };

  return (
      <nav>
        <h1>Shop Page</h1>
      </nav>

  );

}

export default Shop;
