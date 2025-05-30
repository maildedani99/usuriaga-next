"use client";

import useSWR from "swr";
import { useState } from "react";
import Error from "../../../components/Error";
import ProductsView from "../../../components/ProductsView";
import Searcher from "../../../components/Searcher";
import { fetcher } from "../../../utils/fetcher";
import Spinner from "../../../components/Spinner";

export default function Search() {
  const MAX_RETRIES = 3;
  const [retryCount, setRetryCount] = useState(0);

  const {
    data,
    error,
    isLoading,
  } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}products/allStock`, fetcher, {
    revalidateOnFocus: false,
    errorRetryCount: MAX_RETRIES,
    errorRetryInterval: 2000,
    onErrorRetry: (_err, _key, config, revalidate, context) => {
      setRetryCount(context.retryCount);
      if (context.retryCount >= MAX_RETRIES) return;
      setTimeout(() => revalidate({ retryCount: context.retryCount }), config.errorRetryInterval);
    },
  });

  const isStillRetrying = !data && retryCount < MAX_RETRIES;
  const hasError = error && retryCount >= MAX_RETRIES;

  if (isLoading || isStillRetrying) return <Spinner />;
  if (hasError) return <Error />;

  return <Searcher products={data} />;
}
