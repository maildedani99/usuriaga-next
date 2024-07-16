"use client"
import useSWR from "swr";
import ProductsView from "../../../components/ProductsView";
import { getDiscounts } from "../../../lib/data";
import { fetcher } from "../../../utils/fetcher";
import Error from "../../../components/Error";


export default  function Discounts () {

  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}products/discounts/all`, fetcher);

  // Manejo de errores y estado de carga
  if (error) return <Error />;
    return (
      <ProductsView products={data} title="Rebajas" />
    )
}