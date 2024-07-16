"use client"
import useSWR from "swr";
import Error from "../../../components/Error";
import ProductsView from "../../../components/ProductsView";
import Searcher from "../../../components/Searcher";
import { getProductsStock } from "../../../lib/data";
import { fetcher } from "../../../utils/fetcher";

export default  function Search () {

    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}products/allStock`, fetcher);

    if (error) return <Error />;
    

    return (
        <Searcher products={data} />
    )
}