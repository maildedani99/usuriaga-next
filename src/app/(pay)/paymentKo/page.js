'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import OrderComfirmed from '../../components/OrderComfirmed';
import Spinner from '../../components/Spinner';
import { comfirmOrder } from '../../lib/data';
import OrderPending from '../../components/OrderPending';
import Error from '../../components/Error';

export default function PaymentKo() {
    const searchParams = useSearchParams();
    const [paymentData, setPaymentData] = useState(null);

    const onConfirmOrder = async (orderId) => {
        const res = comfirmOrder(orderId)
    }

    useEffect(() => {
        const dsMerchantParameters = searchParams.get('Ds_MerchantParameters');

        if (dsMerchantParameters) {
            try {
                // Decodificar los parámetros de Base64
                const decodedParams = atob(dsMerchantParameters);
                
                // Parsear los parámetros decodificados
                const parsedParams = JSON.parse(decodedParams);
                //onConfirmOrder(parsedParams.Ds_Order)

                parsedParams && setPaymentData(parsedParams);
            } catch (error) {
                console.error("Error decodificando los parámetros:", error);
            }
        }
    }, [searchParams]);

    return (
        <div className="flex w-full h-screen">
            <div className="mt-36 flex flex-1">
                {paymentData ?
                    <OrderPending ds_order={paymentData.Ds_Order} />
                    :
                    <Error />
                }
            </div>
        </div>
    );
}
