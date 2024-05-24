

export default function Redsysform () {


    return (
        <form  name="form" action="https://sis-t.redsys.es:25443/sis/realizarPago" method="POST">
            <input type="hidden" name="Ds_SignatureVersion" value="HMAC_SHA256_V1" />
            <input type="hidden" name="Ds_MerchantParameters" value={redsysData?.jsonData}/>
            <input type="hidden" name="Ds_Signature"  value={redsysData?.signature}/>
            <button className="flex w-3/12 p-4 text-xl text-white text-center mb-8  cursor-pointer bg-primary justify-center mx-auto" type="submit">Realizar Pago</button>
        </form>
    )
}