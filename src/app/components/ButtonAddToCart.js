
"use client"

import { useContext, useEffect } from "react";
import { CartContext } from "../lib/cartContext";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { HiLockClosed } from "react-icons/hi2";

export default function ButtonAddToCart({ item }) {

    const { addItemToCart, sizeSelectedOption, setSizeSelectedOption } = useContext(CartContext);

    const handleSelection = (size) => {
        setSizeSelectedOption(size);
    };

    
    const showToastMessage = (item) => {
        console.log(item)
        toast.success("Este producto se ha añadido a la cesta", {
            position: toast.POSITION.TOP_CENTER,
            autoClose:2000
            
        });
    };
    
    const handleAddItemToCard = () => {
        addItemToCart(item, sizeSelectedOption)
        showToastMessage(item)
    }
    
    useEffect(() => {
        setSizeSelectedOption(item.sizes[0])
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return (
        <div className="flex flex-1 flex-col  w-full mt-8 text-lg font-medium ">
            Tallas
            <div className="flex flex-1  ">
                {
                    item.sizes &&
                    item.sizes.map((size) => (
                        <div
                            key={size.id}
                            className={`border mr-3 p-2 mt-2 font-normal text-center flex cursor-pointer ${sizeSelectedOption.id === size.id ? 'bg-primary   text-white' : ''
                                }`}
                            onClick={() => handleSelection(size)}
                        >
                            <span className="mx-auto">{size.name}</span>
                        </div>
                    ))
                }
            </div>
            <input
                className=" flex mt-10 flex-1 p-4 font-normal text-xl text-white uppercase cursor-pointer text-center mb-8  focus:outline-none"
                defaultValue="Añadir al carrito"
                readOnly
                onClick={handleAddItemToCard}
                style={{ backgroundColor: "#dac895" }}
            />
            <div className="flex">
            <HiLockClosed size={20} color="#dac895" className="my-auto" /> <span className="text-base text-primary my-auto ml-1 mt-1">Pago seguro</span>
            </div>
            <ToastContainer />
        </div>

    )
}