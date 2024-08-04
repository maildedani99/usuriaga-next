'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import OrderComfirmed from '../../components/OrderComfirmed';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';

export default function PaymentOk() {
    const [paymentData, setPaymentData] = useState(null);
    const searchParams = useSearchParams(); // Llama al hook incondicionalmente

    useEffect(() => {
        if (typeof window !== 'undefined') { // Verifica que estamos en el cliente
            const dsMerchantParameters = searchParams.get('Ds_MerchantParameters');

            if (dsMerchantParameters) {
                try {
                    // Decodificar los parámetros de Base64
                    const decodedParams = atob(dsMerchantParameters);
                    
                    // Parsear los parámetros decodificados
                    const parsedParams = JSON.parse(decodedParams);
                    setPaymentData(parsedParams);
                } catch (error) {
                    console.error("Error decodificando los parámetros:", error);
                }
            }
        }
    }, [searchParams]);

    return (
        <div className="flex w-full h-screen">
            <div className="mt-36 flex flex-1">
                {paymentData ? (
                    <OrderComfirmed ds_order={paymentData.Ds_Order} />
                ) : (
                    <Error />
                )}
            </div>
        </div>
    );
}
