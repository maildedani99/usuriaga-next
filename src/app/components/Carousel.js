"use client"
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ClientImage from "./ClientImage";

/**
 * Carousel component for nextJS and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices (optional)
 *
 * @param images - Array of images with src and alt attributes
 * @returns React component
 */
export default function Carousel({ product }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % product.images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="relative w-full">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-4xl inset-y-1/2 cursor-pointer text-gray-400 z-10"
      />

      <div className="w-full overflow-hidden">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="w-full"
        >
          {product?.images?.map((image, index) =>
            index === currentSlide ? (
              <ClientImage
                key={image.id}
                alt="Imagen"
                src={image.url}
                width={450}
                height={680}
                className="w-full h-auto object-cover"
              />
            ) : null
          )}
        </Swipe>
      </div>

      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-4xl inset-y-1/2 cursor-pointer text-gray-400 z-10"
      />

      <div className="flex justify-center p-2">
        {product?.images?.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full mx-1 mb-2 cursor-pointer ${
              index === currentSlide ? 'bg-gray-700' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
