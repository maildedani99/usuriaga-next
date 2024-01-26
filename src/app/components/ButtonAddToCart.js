"use client";

import { useContext, useEffect } from "react";
import { AppContext } from "../lib/AppContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiLockClosed } from "react-icons/hi2";

export default function ButtonAddToCart({ item }) {
  const {
    addItemToCart,
    sizeSelectedOption,
    setSizeSelectedOption,
    colors,
    sizes,
  } = useContext(AppContext);

  const handleSelection = (size) => {
    setSizeSelectedOption(size);
  };

  const showToastMessage = (item) => {
    console.log(item);
    toast.success("Este producto se ha añadido a la cesta", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  const handleAddItemToCard = () => {
    addItemToCart(item, sizeSelectedOption);
    showToastMessage(item);
  };

  /*  useEffect(() => {
         setSizeSelectedOption(item.sizes[0])
         // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []) */

     console.log(sizes)

  return (
    <div className="flex flex-1 flex-col w-full mt-8 text-lg font-medium ">
      Colores
      <div className="flex mt-2 mb-4">
        {item.stock.map((e) => (
          <div key={e.id}>
            {colors &&
              colors?.map((color) => {
                if (color.id === e.color_id)
                  return (
                    <div
                      key={color.id}
                      className={`w-5 h-5 border-2 border-[#929292] rounded-full inline-block mr-2 bg-[${color.color}]`}
                      style={{ background: color.color }}
                    ></div>
                  );
              })}
          </div>
        ))}
      </div>
      Tallas
      <div className="flex flex-1">
        {item.stock.map((e) => (
          <div key={e.id}>
            {sizes &&
      sizes?.map((size) => {
        if (size.id === e.size_id) {
          return (
            <div key={size.id}>
              {size.name}
            </div>
          );
        }
        return null; // Agrega esta línea para manejar el caso en que no haya coincidencia
      })}
          </div>
        ))}
      </div>
      <input
        className="flex mt-10 flex-1 p-4 font-normal text-xl text-white uppercase cursor-pointer text-center mb-8 focus:outline-none"
        defaultValue="Añadir al carrito"
        readOnly
        onClick={handleAddItemToCard}
        style={{ backgroundColor: "#dac895" }}
      />
      <div className="flex">
        <HiLockClosed size={20} color="#dac895" className="my-auto" />{" "}
        <span className="text-base text-primary my-auto ml-1 mt-1">
          Pago seguro
        </span>
      </div>
      <ToastContainer />
    </div>
  );
}
