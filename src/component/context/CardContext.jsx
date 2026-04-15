import React, { Children, useEffect, useState } from "react";
import { createContext } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const CardContext = createContext();
export default function CardProvider({ children }) {

    //favourite
    const [favorites , setfavorites] = useState(() => {
    const savedfavorites = localStorage.getItem("favoritesitems");
    return savedfavorites ? JSON.parse(savedfavorites) : [];
  });

const addToFavorites = (item)=>{
    setfavorites((prev)=>{
        if(prev.some((i)=> i.id ===item.id))return prev
        return[...prev, item]
    })
}
useEffect(()=>{
    localStorage.setItem("favoritestems",JSON.stringify(favorites))
},[favorites])


const removeFromFavorites =(id)=> {
    setfavorites((prev)=> prev.filter((i) => i.id !==id ))
}









  const [cardItems, setcardItems] = useState(() => {
    const savedCard = localStorage.getItem("cardItems");
    return savedCard ? JSON.parse(savedCard) : [];
  });
  // incresacequantity
  const increaseQuantity = (id) => {
    setcardItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // decreaseQuantity
  const decreaseQuantity = (id) => {
    setcardItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  // removefromcard
  const removeFromCard = (id) => {
    setcardItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addToCard = (item) => {
    setcardItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  };
  useEffect(() => {
    localStorage.setItem("cardItems", JSON.stringify(cardItems));
  }, [cardItems]);
  return (
    <CardContext.Provider
      value={{
        cardItems,
        addToCard,
        increaseQuantity,
        decreaseQuantity,
        removeFromCard,
        addToFavorites,
        favorites,
        removeFromFavorites
        
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
