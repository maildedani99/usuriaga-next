import Link from "next/link";
import Image from "next/image";
import ClientImage from "./ClientImage";

export default function ProductCard({ product }) {
  const promo = 0.75;

  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col mx-auto p-4 justify-start tracking-wider text-[#515151] cursor-pointer mt-8 text-sm sm:text-base"
    >
      <div className="relative">
        {product.outlet === false && (
          <span className="absolute bg-primary text-sm top-2 right-8 font-normal text-white px-2 uppercase">
            Outlet
          </span>
        )}
        <ClientImage
          src={product.images[0].url && product.images[0].url}
          width={300}
          height={450}
          alt="foto"
          className="mx-auto"
        />
      </div>
      <span className="mx-auto mt-2">{product.name}</span>
      {product.reduced_price !== 0 ? (
        <div className="flex flex-row flex-1 w-full mx-auto ml-1 justify-center">
          <span className="mt-2 line-through mr-1">
            {product.price.toFixed(2).replace(".", ",")}€{" "}
          </span>
          <span className="text-base mt-2 text-red-600 ml-1">
            {product.reduced_price.toFixed(2).replace(".", ",")}€
          </span>
        </div>
      ) : (
        <span className="text-base mx-auto mt-2">
          {product.price.toFixed(2).replace(".", ",")}€
        </span>
      )}
      <div className="flex flex-row  w-1/3 mt-2 mx-auto  text-xl text-primary justify-center font-bold bg-[#1B1B1B] shadow shadow-black ">
        <span>
          {product.reduced_price
            ? (product.reduced_price * promo).toFixed(2).replace(".", ",")
            : (product.price * promo).toFixed(2).replace(".", ",")}
          €
        </span>
      </div>
    </Link>
  );
}
