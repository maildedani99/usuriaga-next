"use client";

import useSWR from "swr";
import { useState } from "react";
import ProductsView from "../../../components/ProductsView";
import { fetcher } from "../../../utils/fetcher";
import Error from "../../../components/Error";
import Spinner from "../../../components/Spinner";

export default function Products({ params }) {
  const MAX_RETRIES = 3;
  const [retryCountProducts, setRetryCountProducts] = useState(0);
  const [retryCountSubcategory, setRetryCountSubcategory] = useState(0);

  const {
    data: products,
    error: errorProducts,
    isLoading: loadingProducts,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}products/getBySubCategory/${params.id}`,
    fetcher,
    {
      revalidateOnFocus: false,
      errorRetryCount: MAX_RETRIES,
      errorRetryInterval: 2000,
      onErrorRetry: (_err, _key, config, revalidate, context) => {
        setRetryCountProducts(context.retryCount);
        if (context.retryCount >= MAX_RETRIES) return;
        setTimeout(() => revalidate({ retryCount: context.retryCount }), config.errorRetryInterval);
      },
    }
  );

  const {
    data: subcategory,
    error: errorSubcategory,
    isLoading: loadingSubcategory,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}subcategories/getById/${params.id}`,
    fetcher,
    {
      revalidateOnFocus: false,
      errorRetryCount: MAX_RETRIES,
      errorRetryInterval: 2000,
      onErrorRetry: (_err, _key, config, revalidate, context) => {
        setRetryCountSubcategory(context.retryCount);
        if (context.retryCount >= MAX_RETRIES) return;
        setTimeout(() => revalidate({ retryCount: context.retryCount }), config.errorRetryInterval);
      },
    }
  );

  const isStillRetrying =
    (!products && retryCountProducts < MAX_RETRIES) ||
    (!subcategory && retryCountSubcategory < MAX_RETRIES);

  const hasError =
    (errorProducts && retryCountProducts >= MAX_RETRIES) ||
    (errorSubcategory && retryCountSubcategory >= MAX_RETRIES);

  if (loadingProducts || loadingSubcategory || isStillRetrying) return <Spinner />;
  if (hasError) return <Error />;

  const title = subcategory?.[0]?.name || "Productos";

  return <ProductsView products={products} title={title} />;
}
