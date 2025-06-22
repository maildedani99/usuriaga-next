
import CarouselWrapper from "./CarouselWrapper";
import ButtonAddToCart from "./ButtonAddToCart";
import CloseModalIcon from "./CloseModalIcon";
import Spinner from "./Spinner";
import { BsShareFill } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function ProductViewCard({ product }) {
  const router = useRouter();

  const formatDescription = (description) => {
    return description.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const handleShare = async () => {
    try {
      const baseUrl = window.location.origin;
      const sharedUrl = `${baseUrl}/sharedProduct/${product.id}`;
      await navigator.clipboard.writeText(sharedUrl);
      router.push(`/alert?messageId=alert_5`);
    } catch (err) {
      console.error('Error al copiar el enlace: ', err);
    }
  };

  return (
    <div className="relative flex flex-col lg:flex-row items-start gap-10 p-5 lg:p-20 text-[#636364] max-w-[1300px] mx-auto">
      <CloseModalIcon />

      {product ? (
        <>
          {/* Carousel section */}
          <div className="w-full lg:w-1/2">
            <CarouselWrapper product={product} />
          </div>

          {/* Product info section */}
          <div className="w-full lg:w-1/2 text-2xl">
            <div className="flex flex-col text-justify">
              <span className="text-3xl font-medium">{product.name}</span>

              {product.reduced_price !== 0 ? (
                <div className="flex flex-row text-xl mt-2">
                  <span className="line-through mr-2">
                    {product.price.toFixed(2).replace('.', ',')} €
                  </span>
                  <span className="text-red-600">
                    {product.reduced_price.toFixed(2).replace('.', ',')} €
                  </span>
                </div>
              ) : (
                <span className="mt-2 text-xl">
                  {product.price.toFixed(2).replace('.', ',')} €
                </span>
              )}

              <span className="font-body text-base tracking-wider font-light mt-4">
                {formatDescription(product.description)}
              </span>

              <div
                className="flex mt-10 text-lg cursor-pointer items-center"
                onClick={handleShare}
              >
                <BsShareFill size={20} />
                <span className="ml-3">Compartir producto</span>
              </div>

              <div className="w-full mt-6">
                <ButtonAddToCart item={product} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}