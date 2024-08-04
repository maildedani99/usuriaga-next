'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import OrderComfirmed from '../../components/OrderComfirmed';
import Spinner from '../../components/Spinner';
import { comfirmOrder } from '../../lib/data';
import Error from '../../components/Error';

export default function PaymentOk() {
    const searchParams = useSearchParams();
    const [paymentData, setPaymentData] = useState(null);

    useEffect(() => {
        const dsMerchantParameters = searchParams.get('Ds_MerchantParameters');
        
        if (dsMerchantParameters) {
            try {
                const decodedParams = atob(dsMerchantParameters);
                const parsedParams = JSON.parse(decodedParams);
                setPaymentData(parsedParams);
            } catch (error) {
                console.error("Error decoding parameters:", error);
            }
        }
    }, [searchParams]);

    return (
        <Suspense fallback={<Spinner />}>
            <div className="flex w-full h-screen">
                <div className="mt-36 flex flex-1">
                    {paymentData ? 
                        <OrderComfirmed ds_order={paymentData.Ds_Order} /> : 
                        <Error />
                    }
                </div>
            </div>
        </Suspense>
    );
}

