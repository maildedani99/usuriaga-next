"use client"
import { useContext, useEffect, useState } from "react";
import { getRedsysData } from "../lib/data";
import { AppContext } from "../lib/AppContext";


export default function FinalizeButton() {

    const { redsysData, setRedsysData } = useContext(AppContext);

    const dataFetchRedsys = redsysData;
  

    const onGetRedsysData = async () => {
      
    console.log('dataFetchRedsys el finalizebutton',dataFetchRedsys)
        // Llamar a la función getRedsysData con el nuevo objeto modificado
        const data = await getRedsysData(dataFetchRedsys);
        setRedsysData(data)
        console.log(data);
        return data;
    }
    
     

    useEffect(() => {
        if (redsysData) {
             onGetRedsysData();
        }
    }, [])


    return (
      
        <form name="form" action="https://sis-t.redsys.es:25443/sis/realizarPago" method="POST">
            <input type="hidden" name="Ds_SignatureVersion" value="HMAC_SHA256_V1" />
            <input type="hidden" name="Ds_MerchantParameters" value={redsysData.jsonData}/>
            <input type="hidden" name="Ds_Signature" value={redsysData.signature}/>
            <button type="submit">Realizar Pago</button>
        </form>
    );
}
