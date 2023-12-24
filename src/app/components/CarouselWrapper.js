"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export default function CarouselWrapper({ product }) {
  const router = useRouter();

  return (
    <div>
      
      <Carousel 
         showArrows={true}
         showIndicators={true}
         infiniteLoop={true}
         dynamicHeight={false}
      >
        {product.images ? (
          product.images.map((image) => (
            <img
              key={image.id}
              src={image.url}
              alt="foto"
              /* width={200}
              height={200} */
            />
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </Carousel>
    </div>
  );
}
