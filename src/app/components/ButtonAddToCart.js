"use client";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../lib/AppContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiLockClosed } from "react-icons/hi2";
import useProducts from "../lib/utils";

export default function ButtonAddToCart({ item }) {
  const {
    addItemToCart,
    sizeSelectedOption,
    setSizeSelectedOption,
    colorSelectedOption,
    setColorSelectedOption,
    colors,
    sizes,
  } = useContext(AppContext);

  const { getColorById, getSizeById } = useProducts()


  const stock = item.stock;

  const itemWithDetails = {
    ...item,
    colors: stock.reduce((result, stockItem) => {
      const color = getColorById(stockItem.color_id);
      const size = getSizeById(stockItem.size_id);
      const existingColor = result.find((item) => item?.color?.id === color?.id);
      if (existingColor) {
        existingColor.sizes.push(size);
        existingColor.quantity += stockItem.quantity;
      } else {
        result.push({
          color,
          sizes: [size],
          quantity: stockItem.quantity,
        });
      }

      return result;
    }, []),
  };



  const handleSelection = (size) => {
    setSizeSelectedOption(size);
  };

  const showToastMessage = (item) => {
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

useEffect(()=> {
   setColorSelectedOption(itemWithDetails.colors[0].color)
},[])




  return (
    <div className="flex flex-1 flex-col w-full mt-8 text-lg font-medium ">
      Colores
      <div className="flex mt-2 mb-4">
        {itemWithDetails && itemWithDetails.colors?.map((e) => {

          return (
            <div
              key={e.id}
              onClick={() => setColorSelectedOption(e.color)}
              className={`w-5 h-5 border-2 border-[#929292] rounded-full inline-block mr-2 ${colorSelectedOption && e.color?.id === colorSelectedOption?.id ? "border-black" : "border-[#929292]"
                }`}
              style={{ background: e?.color?.color }}
            ></div>
          );
        })}
      </div>
      Tallas
      {colorSelectedOption &&
       itemWithDetails.colors?.map((e) => {
        if (colorSelectedOption?.id === e.color?.id) {
          return (
            <div key={e.color?.id} className="flex w-full flex-row">
              {e.sizes?.map((size, index) => (
                <div key={index} className="border mr-3 p-2 mt-2 font-normal size">
                  {size?.name}
                </div>
              ))}
            </div>
          );
        } else {
          return null;
        }
      })

      }

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
