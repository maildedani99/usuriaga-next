"use client";
import Image from "next/image";
import QuantitySelector from "./QuantitySelector";
import { FaRegTrashAlt } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import { useContext } from "react";
import { AppContext } from "../lib/AppContext";
import Link from "next/link";

export default function CartItems() {
  const { cartItems, removeItemFromCart, handlePlus } = useContext(AppContext);

  
  return (
    <div className="flex flex-col w-full lg:mx-10   ">
      {cartItems && cartItems.length !== 0 ? (
        cartItems?.map((item) => (
          <div key={item.id + item.size.id + item.price} className="flex  border-t border-[#DAC895]  h-auto">
            <div className="hidden sm:flex w-1/12 lg:w-2/12 my-auto ">
              <Image src={item.images[0].url} alt="imagen" width={80} height={100} className="py-2"/>
            </div>
            <div className="flex my-auto flex-1">
              <div className="flex flex-col ml-4 text-base lg:text-lg w-2/6 font-medium my-auto">
                <span className="">{item.name}</span>
                <span className="mt-2">{item.price} €</span>
              </div>
              <div className="flex flex-col ml-4 text-base lg:text-lg  font-medium my-auto text-center">
                <span className="">Talla</span>
                <span className="mt-2">{item.size.name}</span>
              </div>
              <div className="flex mx-auto flex-1 my-auto">
              <QuantitySelector item={item} handlePlus={handlePlus} />
              </div>
              <span className="font-bold text-base lg:text-lg mr-4 my-auto">{item.price * item.quantity} €</span>
              <div
                className="flex   mx-auto cursor-pointer justify-end my-auto"
                onClick={() => removeItemFromCart(item)}
              >
                <FaRegTrashAlt />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-1 flex-col mx-auto ">
          <h1 className="text-primary text-4xl mx-auto mt-32 text-center">Tu cesta está vacía</h1>
          <Link href="/">
            <LiaCartPlusSolid size={100} color="#dac895" strokeWidth={0.1} className="mx-auto mt-8 " />
          </Link>
        </div>
      )}
    </div>

  );
}
