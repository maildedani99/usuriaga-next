import CarouselWrapper from "./CarouselWrapper";
import ButtonAddToCart from "./ButtonAddToCart";
import CloseModalIcon from "./CloseModalIcon";

export default function ProductViewCard({ product }) {
  if (!product || typeof product !== 'object') {
    return null;
  }

  return (
    <div className="flex flex-1 relative md:container mx-auto text-[#636364]">
      <CloseModalIcon />
      <div className="flex flex-col lg:flex-row flex-1 justify-evenly mt-20">
        <div className="flex my-auto w-full justify-center lg:w-4/12">
          <CarouselWrapper product={product} />
        </div>
        <div className="text-2xl flex flex-col my-auto w-full lg:w-2/6">
          <div className="flex flex-col text-justify w-6/6">
            <span className="text-3xl font-medium">{product.name}</span>
            <span className="text-lg font-medium mt-4">{product.price.toString().replace('.', ',')}€  {product.reduced_price.toString().replace('.', ',')}€</span>
            <span className="font-body text-base tracking-wider font-light mt-4">
              {product.description}
            </span>
          </div>
          <div className="flex w-full">
            <ButtonAddToCart item={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
