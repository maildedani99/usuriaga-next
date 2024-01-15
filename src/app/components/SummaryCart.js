"use client"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../lib/cartContext";
import Link from "next/link";

export default function SummaryCart(props) {

  const { cartItems } = useContext(CartContext);

  const [subtotal, setSubtotal] = useState(0);

  const totalPrice =
    cartItems &&
    cartItems?.reduce((total, item) => {
      const itemTotal = item.price * item.quantity;
      return total + itemTotal;
    }, 0);

  const envio = totalPrice >= 80 ? 0 : 3.90;


  const getPaymentData = () => {
    const amount = cartItems?.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0);
    setSubtotal(amount);
  }

  useEffect(() => {
    getPaymentData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);



  return (
    <div className="flex flex-col  flex-1 ">
      <div className="flex flex-1   border-2 border-[#DAC895]">
        <div className="flex-col flex-1">
          <div className="mt-8 text-2xl px-6">
            <span>Resumen Carrito</span>
          </div>
          <div className="flex w-3/3  border-y-2 border-[#DAC895] py-3 justify-between	mx-6 mt-10">
            <div>
              <span className="uppercase text-lg ">subtotal</span>
              <span> (impuestos inc.) </span>
            </div>
            <div>
              <span>{(totalPrice).toFixed(2)} €</span>
            </div>
          </div>
          <div className="flex w-3/3  py-3 justify-between	mx-6 mt-6">
            <div>
              <span className="uppercase text-lg ">envío</span>
            </div>
            <div>
              <span>{totalPrice !== 0 ? envio.toFixed(2) : 0} €</span>
            </div>
          </div>
          <div className="flex w-3/3  border-t-2 border-[#DAC895] py-3 justify-between	mx-6 mt-10">
            <div>
              <span className="uppercase text-lg ">total</span>
            </div>
            <div>
              <span>{totalPrice ? (totalPrice + envio).toFixed(2) : "0.00"} €</span>
            </div>
          </div>
          <div className="flex w-5/6 p-8 mx-auto mt-16">
            <Link
              href={cartItems.length > 0 ? "/payForm" : "#"}
              className={`flex flex-1 p-4 text-xl text-white text-center mb-8  cursor-pointer bg-primary ${cartItems.length === 0 && ' cursor-default opacity-50'}`}
            >
              <span className="mx-auto">
                Comprar
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-1">

      </div>
    </div>

  );
};

