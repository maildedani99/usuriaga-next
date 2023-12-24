"use client"
import { FiMinus, FiPlus } from "react-icons/fi";
import { CartContext } from "../lib/cartContext";
import { useContext } from "react";

export default function QuantitySelector  ({ item })  {

  const { handlePlus } = useContext(CartContext)
  /* const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    quantity > 1 && setQuantity(quantity - 1);
  }; */

  const quantity = item.quantity ? item.quantity : 1

  return (
    <div className="mx-auto text-slate-500">
      <div className="flex border px-3 py-2 my-auto">
        <FiMinus
          size={15}
          color="#636364"
          className="mt-1.5 cursor-pointer"
          /* onClick={handleMinus} */
        />
        <span className="mx-6 select-none text-base ">{quantity}</span>
        <FiPlus
          size={15}
          color="#636364"
          className="mt-1.5 cursor-pointer"
          onClick={()=>handlePlus(item.id)}
        />
      </div>
      <div></div>
    </div>
  );
};


