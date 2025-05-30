"use client";

import React, { useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import { fetcher } from "../utils/fetcher";
import Error from "./Error";
import CartIcon from "./CartIcon";
import SearchButton from "./Searchbutton";
import NavbarLinksDesktop from "./NavbarLinksDesktop";
import NavbarMobile from "./navbarMobile/NavbarMobile";
import "./navbar.css";

export default function Navbar() {
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  const {
    data: categories,
    error,
    isLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}categories/all`,
    fetcher,
    {
      revalidateOnFocus: false,
      errorRetryCount: MAX_RETRIES,
      errorRetryInterval: 2000,
      onErrorRetry: (_err, _key, config, revalidate, context) => {
        setRetryCount(context.retryCount);
        if (context.retryCount >= MAX_RETRIES) return;
        setTimeout(() => revalidate({ retryCount: context.retryCount }), config.errorRetryInterval);
      },
    }
  );

  const isStillRetrying = !categories && retryCount < MAX_RETRIES;
  const hasError = error && retryCount >= MAX_RETRIES;

  if (isLoading || isStillRetrying) return null; // No mostrar navbar hasta que cargue
  if (hasError) return <Error />;

  return (
    <>
      {/* Versión de escritorio */}
      <div className="hidden lg:flex w-full fixed flex-col bg-white top-0 z-10">
        <div className="flex flex-1 border-b bg-primary">
          <div className="flex flex-1 w-3/5 justify-center p-1 tracking-widest">
            <span className="text-w">
              ENVÍOS GRATIS para compras superiores a 60€
            </span>
          </div>
        </div>

        <div className="flex flex-row flex-1 border-b">
          <Link href="/products/novelties" className="p-6 w-2/12 my-auto">
            <Image
              className="mx-auto"
              src="/logogrisprueba.png"
              alt="Usuriaga"
              width={250}
              height={100}
            />
          </Link>

          <NavbarLinksDesktop categories={categories || []} />

          <div className="flex py-10 px-6 justify-evenly w-2/12 max-w-sm opacity-70">
            <SearchButton />
            <CartIcon />
          </div>
        </div>
      </div>

      {/* Versión móvil */}
      <div className="flex lg:hidden w-full fixed flex-col bg-white top-0 z-10">
        {categories && <NavbarMobile categories={categories} />}
      </div>
    </>
  );
}
