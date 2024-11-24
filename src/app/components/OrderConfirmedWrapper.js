"use client"

import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { comfirmOrder } from "../lib/data";
import OrderConfirmed from "./OrderComfirmed";

export default function OrderConfirmedWrapper({ }) {


    const searchParams = useSearchParams();
    const dsMerchantParameters = searchParams.get('Ds_MerchantParameters');

    const [paymentData, setPaymentData] = useState(null);

    const onConfirmOrder = async (orderId) => {
        const res = comfirmOrder(orderId)
    }

    useEffect(() => {

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
    }, [dsMerchantParameters]);


    return (
        paymentData &&
        <OrderConfirmed dsOrder={paymentData.Ds_Order} />
    )
}