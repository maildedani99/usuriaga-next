"use client"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../lib/cartContext";

export default function SummaryCart  (props) {

  const { cartItems } = useContext(CartContext);

  const [subtotal, setSubtotal] = useState(0);

  const envio = 3.90;
  const iva = 21;

  const getPaymentData = () => {
    const amount = cartItems?.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0);
   setSubtotal(amount);
  }

  useEffect(()=> {
    getPaymentData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cartItems]);



  return (
    <div className="flex flex-1 h-75 mb-10   border-2 border-[#DAC895]">
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
            <span>{(((subtotal * iva) / 100)+ subtotal ).toFixed(2)} €</span>
          </div>
        </div>
        <div className="flex w-3/3  py-3 justify-between	mx-6 mt-6">
          <div>
            <span className="uppercase text-lg ">envío</span>
          </div>
          <div>
            <span>{envio.toFixed(2)} €</span>
          </div>
        </div>
        <div className="flex w-3/3  border-t-2 border-[#DAC895] py-3 justify-between	mx-6 mt-10">
          <div>
            <span className="uppercase text-lg ">total</span>
            <span> (incluye 19.59€ IVA) </span>
          </div>
          <div>
            <span>{subtotal ? (((subtotal * iva) / 100) + subtotal + envio ).toFixed(2) : "0.00"} €</span>
          </div>
        </div>
        <div className="flex w-5/6 p-8 mx-auto mt-16">
          <input
            className=" flex flex-1 p-4 text-xl text-white   text-center mb-8 capitalize "
            value="Comprar"
            readOnly
            style={{ backgroundColor: "#dac895" }}
          />
        </div>
      </div>
    </div>
  );
};

