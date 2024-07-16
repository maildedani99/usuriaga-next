"use client"
import useSWR from "swr";
import ProductsView from "../../../components/ProductsView";
import { getProductsBySubcategory, getSubcategory } from "../../../lib/data"
import { fetcher } from "../../../utils/fetcher";
import Error from "../../../components/Error";


export default function Products({ params }) {

  const { data , error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}products/getBySubCategory/${params.id}`, fetcher);
  console.log(data, error)
  const { data : subcategory, error : errorSubcategory } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}subcategories/getById/${params.id}`, fetcher);

  if (error) return <Error />;

  return (

      <ProductsView products={data} title={subcategory ? subcategory[0]?.name : ""} />
  )
}