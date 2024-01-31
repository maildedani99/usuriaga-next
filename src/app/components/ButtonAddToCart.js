"use client";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../lib/AppContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HiLockClosed } from "react-icons/hi2";

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

  const [organizedStock, setOrganizedStock] = useState([]);

  const stock = item.stock;

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

  const organizeStock = (stock) => {
    const organizedData = new Map();
    stock.forEach((entry) => {
      const { color_id, size_id, quantity } = entry;
      if (!organizedData.has(color_id)) {
        organizedData.set(color_id, {
          colorId: color_id,
          sizes: [],
        });
      }
      organizedData.get(color_id).sizes.push({ sizeId: size_id, quantity: quantity });
    });
    return Array.from(organizedData.values()).map((entry) => ({
      colorId: entry.colorId,
      sizes: entry.sizes.map((sizeEntry) => ({
        sizeId: sizeEntry.sizeId,
        quantity: sizeEntry.quantity,
      })),
    }));
  }

  /*  useEffect(() => {
         setSizeSelectedOption(item.sizes[0])
         // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []) */

  useEffect(() => {
    const newStock = organizeStock(stock)
    setOrganizedStock(newStock)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    console.log(organizedStock)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [organizedStock])


  return (
    <div className="flex flex-1 flex-col w-full mt-8 text-lg font-medium ">
      Colores
      <div className="flex mt-2 mb-4">
        {organizedStock && organizedStock?.map((e) => (
          <div key={e.colorId}>
            {colors &&
              colors?.map((color) => {
                if (color.id === e.colorId)
                  return (
                    <div
                      key={color.id}
                      onClick={() => setColorSelectedOption(color)}
                      className={`w-5 h-5 border-2 border-[#929292] rounded-full inline-block mr-2  ${
                        colorSelectedOption && color.id === colorSelectedOption.id ? "border-black " : ""
                      }`}
                      style={{ background: color.color }}
                    ></div>
                  );
              })}
          </div>
        ))}
      </div>
      Tallas
      <div className="flex w-full flex-row">
        {organizedStock &&
          organizedStock?.map((e) => (
            <div className="flex" key={e.colorId}>
              {colorSelectedOption && e.colorId === colorSelectedOption.id &&
                e.sizes?.map((sizeEntry, index) => (
                  <div key={index} onClick={setSizeSelectedOption(sizeEntry)} className="border mr-3 p-2 mt-2 font-normal size">
                    {sizes &&
                      sizes.map((size) => {
                        if (size.id === sizeEntry.sizeId) {
                          return size.name;
                        }
                        return null;
                      })}
                  </div>
                ))}
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
