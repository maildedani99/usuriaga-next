"use client"
import useSWR from "swr";
import ProductsView from "../../../components/ProductsView";
import { fetcher } from "../../../utils/fetcher";
import Error from "../../../components/Error";


export default function Novelties() {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}products/novelties/all`,
    fetcher,
    {
      revalidateOnFocus: false,
      errorRetryCount: 3,
      errorRetryInterval: 2000,
    }
  );
  


  return (
      <ProductsView products={data} title="Novedades" />
    )
}