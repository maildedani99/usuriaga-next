"use client"

import React, { createContext, useEffect, useState } from "react";
import { getColors, getSizes } from "./data";

export const AppContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [sizeSelectedOption, setSizeSelectedOption] = useState(null);
  const [colorSelectedOption, setColorSelectedOption] = useState(null);
  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);



  const addItemToCart = (item, sizeSelectedOption) => {
    const matchSizeIndex = cartItems.findIndex(
      (object) => object.id === item.id && object.size.id === sizeSelectedOption.id
    );
    if (matchSizeIndex !== -1) {
      cartItems[matchSizeIndex].quantity += 1;
      setCartItems(cartItems)
    } else {
      const quantityItem = { ...item, quantity: 1, size: sizeSelectedOption }
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

  useEffect(() => {
    const getColorsSizes = async () => {
      const resColors = await getColors();
      const resSizes = await getSizes();
      setColors(resColors)
      setSizes(resSizes)
    }
    getColorsSizes()
  }, [])

  return (
    <AppContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart, addQuantity, sizeSelectedOption, setSizeSelectedOption, removeQuantity, searchBarIsOpen, setSearchBarIsOpen, searchTerm, setSearchTerm, colors, sizes, colorSelectedOption, setColorSelectedOption }}
    >
      {children}
    </AppContext.Provider>
  );
};