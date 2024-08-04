"use client"
import { useSearchParams } from 'next/navigation';
import {  useEffect, useState } from 'react';
import OrderComfirmed from '../../components/OrderComfirmed';
import Spinner from '../../components/Spinner';
import { comfirmOrder } from '../../lib/data';
import Error from '../../components/Error';

export default function PayOk() {
    //const searchParams = useSearchParams();
    const [paymentData, setPaymentData] = useState(null);

    const onConfirmOrder = async (orderId) => {
        const res = comfirmOrder(orderId)
    }

    useEffect(() => {
        const dsMerchantParameters = null

        if (dsMerchantParameters) {
            try {
                // Decodificar los parámetros de Base64
                const decodedParams = atob(dsMerchantParameters);
                
                // Parsear los parámetros decodificados
                const parsedParams = JSON.parse(decodedParams);
                onConfirmOrder(parsedParams.Ds_Order)

                parsedParams && setPaymentData(parsedParams);
            } catch (error) {
                console.error("Error decodificando los parámetros:", error);
            }
        }
    }, []);

    return (
        <div className="flex w-full h-screen">
            <div className="mt-36 flex flex-1">
          <h1>Pedido confirmado</h1>
            </div>
        </div>
      
    );
}
