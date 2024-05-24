import { useContext, useEffect, useState } from "react";
import { getRedsysData } from "../lib/data";
import { AppContext } from "../lib/AppContext";


export default async function FinalizeButton() {

    const { redsysData, setRedsysData } = useContext(AppContext);

    const data = await getRedsysData(redsysData);

   /*  const dataFetchRedsys = redsysData;
    console.log(redsysData)
    console.log(dataFetchRedsys)
    const onGetRedsysData = async () => {
        const data = await getRedsysData(dataFetchRedsys);
        console.log(data)
        setRedsysData(data)
        return data;
    } */
    
     
/* 
    useEffect(() => {
        if (redsysData) {
             onGetRedsysData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) */


    return (

        data &&
        <>
        <form  name="form" action="https://sis-t.redsys.es:25443/sis/realizarPago" method="POST">
            <input type="hidden" name="Ds_SignatureVersion" value="HMAC_SHA256_V1" />
            <input type="hidden" name="Ds_MerchantParameters" value={data.jsonData}/>
            <input type="hidden" name="Ds_Signature"  value={data.signature}/>
            <button className="flex w-3/12 p-4 text-xl text-white text-center mb-8  cursor-pointer bg-primary justify-center mx-auto" type="submit">Realizar Pago</button>
        </form>
        </>
    );
}
