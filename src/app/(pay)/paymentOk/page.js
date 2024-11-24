"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import OrderComfirmed from "../../components/OrderComfirmed";
import Spinner from "../../components/Spinner";
import { comfirmOrder } from "../../lib/data";
import Error from "../../components/Error";
import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import OrderConfirmedWrapper from "../../components/OrderConfirmedWrapper";

export default function PayOk() {
  return (
    <Suspense fallback={<Spinner />}>
      <div className="flex w-full h-screen">
        <div className="mt-36 flex flex-1">
          <OrderConfirmedWrapper  />
        </div>
      </div>
    </Suspense>
  );
}
