"use client";
import Image from "next/image";
import QuantitySelector from "./QuantitySelector";
import { FaRegTrashAlt } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import { useContext } from "react";
import { CartContext } from "../lib/cartContext";
import Link from "next/link";

export default function CartItems({ item }) {
  const { cartItems, removeItemFromCart, handlePlus } = useContext(CartContext);

  
  return (
    <div className="flex flex-col flex-1 mx-10 h-48">
      {cartItems.length !== 0 ? (
        cartItems.map((item) => (
          <div key={item.id + item.size.id + item.price} className="flex flex-1 border-t border-[#DAC895] my-auto">
            <div className="my-2 w-2/12 ">
              <Image src={item.images[0].url} alt="imagen" width={80} height={100} />
            </div>
            <div className="flex my-auto flex-1">
              <div className="flex flex-col ml-4 text-lg w-2/6 font-medium">
                <span className="">{item.name}</span>
                <span className="mt-2">{item.price} €</span>
              </div>
              <div className="flex flex-col ml-4 text-lg  font-medium">
                <span className="">Talla</span>
                <span className="mt-2">{item.size.name}</span>
              </div>
              <QuantitySelector item={item} handlePlus={handlePlus} />
              <span className="font-bold text-lg mr-4">{item.price * item.quantity} €</span>
              <div
                className="flex b-0 mt-1 ml-4 cursor-pointer justify-end"
                onClick={() => removeItemFromCart(item)}
              >
                <FaRegTrashAlt />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-1 flex-col mx-auto ">
          <h1 className="text-primary text-4xl mx-auto mt-32 text-center">Tu carrito está vacío</h1>
          <Link href="/">
            <LiaCartPlusSolid size={100} color="#dac895" strokeWidth={0.1} className="mx-auto mt-8 " />
          </Link>
        </div>
      )}
    </div>

  );
}
