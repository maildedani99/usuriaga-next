"use client";
import { useRouter } from "next/navigation";
import Carousel from "./Carousel";
export default function CarouselWrapper({ product }) {
  const router = useRouter();


  return (
    <div className=" md:w-[450px] md:h-[680px]">
      <Carousel product={product} />
    </div>
  );
}
