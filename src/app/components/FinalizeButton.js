import crypto from 'crypto';

// Función para diversificar la clave utilizando 3DES
function diversifyKey(data, key) {
    const cipher = crypto.createCipheriv('des-ede3', key, Buffer.alloc(8, 0)); // No se usa IV para ECB
    let encrypted = cipher.update(data, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
}

const orderNumber = "1446068581"

export default function FinalizeButton() {
    const transactionData = {
        DS_MERCHANT_AMOUNT: "1455",
        DS_MERCHANT_CURRENCY: "978",
        DS_MERCHANT_MERCHANTCODE: "347790438",
        DS_MERCHANT_MERCHANTURL: "http://www.usuriaga.com",
        DS_MERCHANT_ORDER: "1446068581",
        DS_MERCHANT_TERMINAL: "1",
        DS_MERCHANT_TRANSACTIONTYPE: "0",
        DS_MERCHANT_URLKO: "http://www.prueba.com/urlKO.php",
        DS_MERCHANT_URLOK: "http://www.prueba.com/urlOK.php"
    };

  // Convertir el objeto a una cadena JSON
const jsonTransactionData = JSON.stringify(transactionData);

// Codificar la cadena JSON en BASE64
const base64MerchantParameters = Buffer.from(jsonTransactionData).toString('base64');



// Verificar si la cadena contiene espacios
if (!/\s/.test(base64MerchantParameters)) {
  console.log("La cadena BASE64 no contiene espacios en blanco.");
} else {
  console.log("La cadena BASE64 contiene espacios en blanco.");
}

console.log(base64MerchantParameters)

    // Clave secreta proporcionada por Redsys
    const secretKeyBase64 = 'sq7HjrUOBfKmC576ILgskD5srU870gJ7'; // Reemplaza esto por tu clave real
    const secretKey = Buffer.from(secretKeyBase64, 'base64');
    console.log(secretKey)

    // Asegúrate de que la clave tenga la longitud adecuada para 3DES (24 bytes)
let tripleDesKey = secretKey;
if (secretKey.length < 24) {
  tripleDesKey = Buffer.concat([secretKey, secretKey.slice(0, 24 - secretKey.length)]); // Ejemplo de cómo ajustar la longitud de la clave
}
console.log(tripleDesKey)


// Cifra el número de pedido con 3DES
const cipher = crypto.createCipheriv('des-ede3', tripleDesKey, Buffer.alloc(8, 0)); // DES-EDE3 utiliza tres claves, por lo que la longitud total es 24 bytes. No se usa IV para ECB.
let encryptedOrder = cipher.update(transactionData.DS_MERCHANT_ORDER, 'utf8', 'base64');
encryptedOrder += cipher.final('base64');

console.log(encryptedOrder); 


// Asumiendo que 'diversifiedKey' es la clave de firma diversificada que obtuviste en el paso anterior
// y 'base64MerchantParameters' es tu cadena Ds_MerchantParameters codificada en BASE64

const hmac = crypto.createHmac('sha256', encryptedOrder);
hmac.update(base64MerchantParameters);
const signature = hmac.digest('base64');

console.log(signature);


    return (
        <form name="form" action="https://sis-t.redsys.es:25443/sis/realizarPago" method="POST">
            <input type="hidden" name="Ds_SignatureVersion" value="HMAC_SHA256_V1" />
            <input type="hidden" name="Ds_MerchantParameters" value={base64MerchantParameters} />
            <input type="hidden" name="Ds_Signature" value="" />
            <button type="submit">Realizar Pago</button>
        </form>
    );
}
