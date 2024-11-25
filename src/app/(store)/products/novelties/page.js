"use client"
import useSWR from "swr";
import ProductsView from "../../../components/ProductsView";
import { fetcher } from "../../../utils/fetcher";
import Error from "../../../components/Error";
import BannerPromo from "../../../components/BannerPromo";


export default function Novelties() {

  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}products/novelties/all`, fetcher);

  if (error) return <Error />;


  return (
    <>
      <ProductsView products={data} title="Novedades" />
    </>
    )
}