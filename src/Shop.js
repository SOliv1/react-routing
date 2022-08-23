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

     console.log(items.data.daily.entries);
     setItem(items.data.daily.entries);

   };

   return (
    <div>
      <nav>
        <h1>Shop Page</h1>
      </nav>
        {items.map(item => (
          <h2 key={item.items[0].id}>{item.items[0].name}</h2>
        ))}
    </div>

  );

}

export default Shop;