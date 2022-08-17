
import React, { useState, useEffect } from 'react';
import './App.css';


function Item() {
    useEffect(() => {
        fetchItem();
    }, []);

     const [Item, setItem] = useState({});

     const fetchItem = async () => {
       const fetchItem = await fetch(
         'https://fortnite1.p.rapidapi.com/upcoming/get?id=${ match.params.id }'

      );

     }

  return (
    <div>
      <h1>Item</h1>
    </div>

  );

}

export default Item;
