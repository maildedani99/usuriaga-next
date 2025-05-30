"use client";

import useSWR from "swr";
import { useState } from "react";
import ProductsView from "../../../components/ProductsView";
import { fetcher } from "../../../utils/fetcher";
import Error from "../../../components/Error";
import Spinner from "../../../components/Spinner";

export default function Discounts() {
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}products/discounts/all`,
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

  if (isLoading || (!data && retryCount < MAX_RETRIES)) return <Spinner />;
  if (error && retryCount >= MAX_RETRIES) return <Error />;

  return <ProductsView products={data} title="Rebajas" />;
}
