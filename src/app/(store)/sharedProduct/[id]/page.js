"use client"
import useSWR from 'swr';
import { fetcher } from '../../../utils/fetcher';
import SharedProductViewCard from '../../../components/SharedProductViewCard';


export default  function SharedProduct({ params }) {

    const { data , error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}products/${params.id}`, fetcher);
   
  
    return (
                <SharedProductViewCard product={data} />
    )

}