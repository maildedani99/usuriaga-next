"use client"

import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [sizeSelectedOption, setSizeSelectedOption] = useState("")


  const addItemToCart = (item) => {
    const res = cartItems.some(item => item.id === item.id)
    if (res == true) {console.log("is true")} else {console.log("is fasle")}
   const quantityItem = {...item, quantity:1, size:sizeSelectedOption}
    setCartItems([...cartItems, quantityItem]);
    console.log(cartItems)
  };

  const handlePlus = (id) => {
    const resMap = cartItems.map((item)=> {
        if (item.id === id) {
            return  {...item, }
        }
    })
      console.log(id)
      console.log(cartItems)
  }

  const removeItemFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, handlePlus, sizeSelectedOption, setSizeSelectedOption }}
    >
      {children}
    </CartContext.Provider>
  );
};