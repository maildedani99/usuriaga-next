import ProductCard from "./ProductCard";

export default function ProductsView({ products, title }) {
  return (
    <>
      <div className=" flex text-5xl justify-center w-full tracking-wider capitalize font-light	text-[#515151] text-center ">
        <span className="">{title}</span>
      </div>
      <div className=" grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3  text-5xl justify-center w-full tracking-wider capitalize font-light	text-[#515151] text-center" >
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <div className="flex flex-1">
            <div className="mx-auto ">
              <h1 className="text-4xl text-primary">
                Ups!!!! No hay productos en esta categoria.
              </h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
