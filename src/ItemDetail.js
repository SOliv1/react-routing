
import React, { useState, useEffect } from 'react';
import './App.css';


function ItemDetail({ match }) {
    useEffect(() => {
        fetchItem();
        console.log('match');
    }, []);

     const [item, setItem] = useState({
       images: {}
     });

     const fetchItem = async () => {
       const fetchItem = await fetch(
         'https://fortnite-api.com/v2/shop/br/get?id=${ match.params.id }'

      );
      const item = await fetchItem.json();
      setItem(item);
      console.log(item);

    };

  return (
    <div>
      <h1>{item.name}</h1>
      <img src={item.images.transparent} alt="" />
    </div>

  );

}

export default ItemDetail;
