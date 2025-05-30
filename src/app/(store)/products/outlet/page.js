"use client";

import useSWR from "swr";
import ProductsView from "../../../components/ProductsView";
import { fetcher } from "../../../utils/fetcher";
import Spinner from "../../../components/Spinner";
import Error from "../../../components/Error";
import { useState } from "react";

export default function Outlet() {
  const [hasRetried, setHasRetried] = useState(0);
  const MAX_RETRIES = 3;

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}products/outlet/all`,
    fetcher,
    {
      revalidateOnFocus: false,
      errorRetryCount: MAX_RETRIES,
      errorRetryInterval: 2000,
      onErrorRetry: (err, key, config, revalidate, { retryCount }) => {
        setHasRetried(retryCount);

        if (retryCount >= MAX_RETRIES) return; // no más reintentos
        setTimeout(() => revalidate({ retryCount }), config.errorRetryInterval);
      },
    }
  );

  const showError = error && hasRetried >= MAX_RETRIES;

  if (isLoading) return <Spinner />;
  if (showError) return <Error />;

  return <ProductsView products={data} title="Outlet" />;
}
