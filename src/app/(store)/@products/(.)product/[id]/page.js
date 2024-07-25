"use client"
import useSWR from 'swr';
import Modal from '../../../../components/Modal';
import ProductViewCard from '../../../../components/ProductViewCard';
import { fetcher } from '../../../../utils/fetcher';


export default  function Product({ params }) {

    const { data , error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}products/${params.id}`, fetcher);
   
  
    return (
        <Modal>
                <ProductViewCard product={data} />
        </Modal>
    )

}