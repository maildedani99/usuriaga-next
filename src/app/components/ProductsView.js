import ProductCard from "./ProductCard";


export default function ProductsView ( {products, title} ) {


    return (

        <div className={products ? "flex flex-wrap container mx-auto min-h-screen " : "flex flex-wrap "}>
        <div className="flex text-5xl justify-center w-full tracking-wider capitalize font-light	text-[#515151] text-center mt-40">
          <span className="">{title}</span>
        </div>

        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
            ))
            ) : (
              <div className="flex flex-1">
            <div className="mx-auto ">
           <h1 className="text-4xl text-primary">Ups!!!!  No hay productos en esta categoria.</h1>
            </div>
          </div>
        )}
      </div>
    )
}