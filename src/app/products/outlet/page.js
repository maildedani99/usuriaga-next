import ProductCard from "../../components/ProductCard";
import { getOutletProducts } from "../../lib/data";


export default async function Outlet () {

    const products = await getOutletProducts()


    return (
        <div className={products ? "flex flex-wrap container mx-auto" : "flex flex-wrap "}>
        <div className="flex text-5xl justify-center w-full tracking-wider capitalize font-light	text-[#515151] text-center mt-40">
          <span className="">Outlet</span>
        </div>
        {products ? (
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <div className="flex flex-1">
            <div className="mx-auto mt-48">
           <h1>Cargando...</h1>
            </div>
          </div>
        )}
      </div>
    )
}