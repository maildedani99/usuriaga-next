    
"use client"
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../lib/cartContext";


export default function ProductCard ( {product} ) {

    const isDesktop =true;

    const { addItemToCart } = useContext(CartContext);


    return (
        <Link
        href="/modal1"
        /* href={`/productView/${product.id}`} */
        className={
          isDesktop
            ? "flex flex-col w-3/12 p-4 justify-start tracking-wider	 text-[#515151]	cursor-pointer mt-8 "
            : "flex flex-col w-6/12 p-2 justify-center cursor-pointer mt-8 tracking-wider	 text-[#515151]"
        }
        //onClick={() => ProductHandleClick(product.id)}
      >
        <img src={product.images[0].url && product.images[0].url} alt="foto" />
        <span className=" text-base	 mx-auto mt-2">{product.name}</span>
        {product.discount == true && product.reduced_price !== 0 ? (
          <div className="flex  mx-auto ml-1  ">
            <span className=" text-base	mt-2 line-through mr-2">
              {product.price} €{" "}
            </span>
            <span className=" text-base	  mt-2 text-red-600  ">
              {product.reduced_price} €
            </span>
          </div>
        ) : (
          <span className=" text-base	 mx-auto mt-2 ">{product.price} €</span>
        )}
       
      </Link>
    )
}