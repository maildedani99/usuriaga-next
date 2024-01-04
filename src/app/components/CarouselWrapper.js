"use client";
import { useRouter } from "next/navigation";
import Carousel from "./Carousel";
export default function CarouselWrapper({ product }) {
  const router = useRouter();


  return (
      <Carousel product={product} />
  );
}
