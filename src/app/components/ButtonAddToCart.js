
"use client"

import { useContext, useEffect } from "react";
import { CartContext } from "../lib/cartContext";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function ButtonAddToCart({ item }) {

    const { addItemToCart, cartItems, sizeSelectedOption } = useContext(CartContext);

    const showToastMessage = () => {
        toast.success("Tu producto se ha añadido a la cesta", {
            position: toast.POSITION.TOP_RIGHT,
        });
    };


    const handleAddItemToCard = () => {
        addItemToCart(item, sizeSelectedOption)
        showToastMessage()
    }

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])


    return (
        <>
            <input
                className=" flex flex-1 p-4 text-xl text-white  cursor-pointer text-center mb-8 capitalize focus:outline-none"
                defaultValue="Añadir al Carro"
                readOnly
                onClick={handleAddItemToCard}
                style={{ backgroundColor: "#dac895" }}
            />
            <ToastContainer />
        </>

    )
}