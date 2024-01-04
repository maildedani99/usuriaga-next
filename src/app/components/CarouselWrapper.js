"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "./Carousel";
export default function CarouselWrapper({ product }) {
  const router = useRouter();


  return (
    <div>
      
      <Carousel product={product} />
        
    </div>
  );
}
