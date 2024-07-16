"use client"
import useSWR from 'swr';
import Modal from '../../../components/Modal'
import ProductViewCard from '../../../components/ProductViewCard'
import { getProductById } from '../../../lib/data'
import { fetcher } from '../../../utils/fetcher';
import Error from '../../../components/Error';


export default  function Product({ params }) {

    const { data , error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}products/${params.id}`, fetcher);
    console.log(data, error)
   
  
    return (
        <Modal>
                <ProductViewCard product={data} />
        </Modal>
    )

}