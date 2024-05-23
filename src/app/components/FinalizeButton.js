"use client"
import { useContext, useEffect, useState } from "react";
import { getRedsysData } from "../lib/data";
import { AppContext } from "../lib/AppContext";


export default function FinalizeButton() {

    const { redsysData, setRedsysData } = useContext(AppContext);

    const dataFetchRedsys = redsysData;
  

    const onGetRedsysData = async () => {
        const data = await getRedsysData(dataFetchRedsys);
        console.log(data)
        setRedsysData(data)
        return data;
    }
    
     

    useEffect(() => {
        if (redsysData) {
             onGetRedsysData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
      
        <form  name="form" action="https://sis-t.redsys.es:25443/sis/realizarPago" method="POST">
            <input type="hidden" name="Ds_SignatureVersion" value="HMAC_SHA256_V1" />
            <input type="hidden" name="Ds_MerchantParameters" defaultValue="" value="eyJEU19NRVJDSEFOVF9BTU9VTlQiOjY0ODAsIkRTX01FUkNIQU5UX0NVUlJFTkNZIjoiOTc4IiwiRFNfTUVSQ0hBTlRfTUVSQ0hBTlRDT0RFIjoiMzQ3NzkwNDM4IiwiRFNfTUVSQ0hBTlRfTUVSQ0hBTlRVUkwiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9yZWRzeXNcL2hhbmRsZS1ub3RpZmljYXRpb24iLCJEU19NRVJDSEFOVF9PUkRFUiI6IjAxMjQwMTYxIiwiRFNfTUVSQ0hBTlRfVEVSTUlOQUwiOiIxIiwiRFNfTUVSQ0hBTlRfVFJBTlNBQ1RJT05UWVBFIjoiMCIsIkRTX01FUkNIQU5UX1VSTEtPIjoiaHR0cHM6XC9cL2xvY2FsaG9zdDozMDAwXC9wYXlPayIsIkRTX01FUkNIQU5UX1VSTE9LIjoiaHR0cHM6XC9cL2xvY2FsaG9zdDozMDAwXC9wYXlPayJ9"/>
            <input type="hidden" name="Ds_Signature" defaultValue="" value="2Ajise0C5BsYl4Ik02dPuXfgZiaHj35bXxVMu2UO+CQ="/>
            <button className="flex w-3/12 p-4 text-xl text-white text-center mb-8  cursor-pointer bg-primary justify-center mx-auto" type="submit">Realizar Pago</button>
        </form>
    );
}
