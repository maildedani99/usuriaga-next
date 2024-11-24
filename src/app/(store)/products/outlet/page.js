"use client"
import useSWR from "swr";
import ProductsView from "../../../components/ProductsView";
import { getOutletProducts } from "../../../lib/data";
import { fetcher } from "../../../utils/fetcher";
import Spinner from "../../../components/Spinner";


export default  function Outlet () {

  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}products/outlet/all`, fetcher);

  // Manejo de errores y estado de carga
  if (error) return <div>Error al cargar las novedades</div>;


    return (
      <ProductsView products={data} title="Outlet" />
    )
}