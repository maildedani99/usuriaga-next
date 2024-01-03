"use client"

import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [sizeSelectedOption, setSizeSelectedOption] = useState("");



    const addItemToCart = (item, sizeSelectedOption) => {
    console.log(item, sizeSelectedOption)
    console.log(cartItems)
    const matchSizeIndex = cartItems.findIndex(
      (object) => object.id === item.id && object.size.id === sizeSelectedOption.id
    );
    if (matchSizeIndex !== -1) {
      cartItems[matchSizeIndex].quantity += 1;
      console.log("Incrementando la cantidad del item en el carro.");
      setCartItems(cartItems)
    } else {
      const quantityItem = { ...item, quantity: 1, size: sizeSelectedOption }
      console.log("Añadiendo un nuevo item al carro.");
      setCartItems([...cartItems, quantityItem]);
    }
  };

  const addQuantity = (item) => {
    const resItemMatch = cartItems.find(object => object.id === item.id & object.size.id === item.size.id);
    resItemMatch.quantity = resItemMatch.quantity + 1;
    setCartItems([...cartItems])
  }

  const removeQuantity = (item) => {
    const resItemMatch = cartItems.find(object => object.id === item.id & object.size.id === item.size.id);
    resItemMatch.quantity = resItemMatch.quantity - 1;
    setCartItems([...cartItems])

  }

  const removeItemFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id || cartItem.size.id !== item.size.id);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, addQuantity, sizeSelectedOption, setSizeSelectedOption, removeQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};