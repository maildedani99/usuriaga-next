"use client"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../lib/cartContext";



export default function SizesOptions ( { product } ) {

    const { sizeSelectedOption, setSizeSelectedOption } = useContext(CartContext)

    const handleSelection = (id) => {
        console.log(id)
        setSizeSelectedOption(id);
    };

    useEffect(()=> {
         setSizeSelectedOption(product.sizes[0].id)
    },[])

    return (

        product.sizes &&
        product.sizes.map((size) => (
            <div
            key={size.id}
            className={`border mr-3 p-2 mt-2 font-normal text-center flex cursor-pointer ${
                sizeSelectedOption === size.id ? 'bg-primary   text-white' : ''
            }`}
            onClick={()=>handleSelection(size.id)}
          >
            <span  className="mx-auto">{size.name}</span>
          </div>
        ))
        

    )
}