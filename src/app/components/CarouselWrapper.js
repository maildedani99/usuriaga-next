"use client";
import { useRouter } from "next/navigation";
import Carousel from "./Carousel";
export default function CarouselWrapper({ product }) {
  return (
    <div className="w-full h-auto max-w-md md:max-w-[450px] md:h-[680px] mx-auto">
      <Carousel product={product} />
    </div>
  );
}
