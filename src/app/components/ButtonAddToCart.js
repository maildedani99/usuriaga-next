
"use client"

import { useContext, useEffect } from "react";
import { CartContext } from "../lib/cartContext";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function ButtonAddToCart({ item }) {

    const { addItemToCart, sizeSelectedOption, setSizeSelectedOption } = useContext(CartContext);

    const handleSelection = (size) => {
        setSizeSelectedOption(size);
    };

    
    const showToastMessage = () => {
        toast.success("Tu producto se ha añadido a la cesta", {
            position: toast.POSITION.TOP_CENTER,
            autoClose:2000
        });
    };
    
    const handleAddItemToCard = () => {
        addItemToCart(item, sizeSelectedOption)
        showToastMessage()
    }
    
    useEffect(() => {
        setSizeSelectedOption(item.sizes[0])
          // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return (
        <div className="flex flex-col  w-6/6 mt-8 text-lg font-medium ">
            Tallas
            <div className="flex   ">
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
                className=" flex mt-10 flex-1 p-4 text-xl text-white  cursor-pointer text-center mb-8 capitalize focus:outline-none"
                defaultValue="Añadir al Carro"
                readOnly
                onClick={handleAddItemToCard}
                style={{ backgroundColor: "#dac895" }}
            />
            <ToastContainer />
        </div>

    )
}