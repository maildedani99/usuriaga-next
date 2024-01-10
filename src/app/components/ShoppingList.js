import { useContext, useState } from "react";
import { CartContext } from "../lib/cartContext";
import Image from "next/image";

export default function ShoppingList() {
  const { cartItems } = useContext(CartContext);

  const totalPrice =
    cartItems &&
    cartItems?.reduce((total, item) => {
      const itemTotal = item.price * item.quantity;
      return total + itemTotal;
    }, 0);

  const envio = totalPrice >= 80 ? 0 : 3.9;

  return (
    <div className="flex flex-col flex-1  mx-10 h-auto  ">
      {cartItems &&
        cartItems?.length !== 0 &&
        cartItems?.map((item) => (
          <div
            key={item.id + item.size.id + item.price}
            className="flex w-full border-t border-[#DAC895]  h-auto"
          >
            <div className="hidden sm:flex w-2/12 my-auto ">
              <Image
                src={item.images[0].url}
                alt="imagen"
                width={30}
                height={50}
                className="py-2"
              />
            </div>
              <div className="flex  w-full  ml-4 text-sm  font-normal my-auto justify-between ">
                <span className="flex w-2/6">{item.name}</span>
                <span className="flex flex-1 mx-auto">{item.price} €</span>
                <span className="flex flex-1 mx-auto">{item.size.name}</span>
                <span className="flex flex-1 mx-auto">{item.quantity}</span>
                <span className="font-bold flex flex-1 justify-end">
                  {item.price * item.quantity} €
                </span>
              </div>
            </div>
        ))}
      <div className="text-base mx-auto mt-16 mb-16 border-t border-primary">
        <div className="flex flex-1 mx-auto justify-between mt-3">
          <span className="">Total compra: </span>
          <span className=" font-medium ml-3"> {totalPrice} €</span>
        </div>
        <div className="flex flex-1 mx-auto justify-between mt-1">
          <span className="">Envío: </span>
          <span className=" font-medium ml-3"> {envio} €</span>
        </div>
        <div className="flex flex-1 mx-auto justify-between mt-1">
          <span className="">Precio total: </span>
          <span className=" font-bold ml-3">
            {" "}
            {(totalPrice + envio).toFixed(2)} €
          </span>
        </div>
      </div>
    </div>
  );
}
