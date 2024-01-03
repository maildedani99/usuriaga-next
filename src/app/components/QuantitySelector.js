"use client"
import { FiMinus, FiPlus } from "react-icons/fi";
import { CartContext } from "../lib/cartContext";
import { useContext, useState } from "react";

export default function QuantitySelector({ item }) {

  const { addQuantity, removeQuantity } = useContext(CartContext)

  const [quantity, setQuantity] = useState(item.quantity ? item.quantity : 1)

  const handlePlus = (item) => {
    setQuantity(quantity + 1);
    addQuantity(item)
  };

  const handleMinus = (item) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      removeQuantity(item)
    }
  };


  return (
    <div className="mx-auto text-slate-500">
      <div className="flex border px-3 py-2 my-auto">
        <FiMinus
          size={15}
          color="#636364"
          className="mt-1.5 cursor-pointer"
          onClick={() => handleMinus(item)}
        />
        <span className="mx-6 select-none text-base ">{quantity}</span>
        <FiPlus
          size={15}
          color="#636364"
          className="mt-1.5 cursor-pointer"
          onClick={() => handlePlus(item)}
        />
      </div>
      <div></div>
    </div>
  );
};


