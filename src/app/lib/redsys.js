const fetchApiData = async (url) => {

  const bodyData = {
    DS_MERCHANT_AMOUNT: "145",
    DS_MERCHANT_CURRENCY: "978",
    DS_MERCHANT_MERCHANTCODE: "347790438",
    DS_MERCHANT_MERCHANTURL: "http://www.prueba.com/urlNotificacion.php",
    DS_MERCHANT_ORDER: "1446068581",
    DS_MERCHANT_TERMINAL: "1",
    DS_MERCHANT_TRANSACTIONTYPE: "0",
    DS_MERCHANT_URLKO: "http://www.prueba.com/urlKO.php",
    DS_MERCHANT_URLOK: "http://www.prueba.com/urlOK.php"
  };

  const body = JSON.stringify(bodyData);
  const base64EncodedBody = Buffer.from(body).toString("base64");

  const options = {
    method: "POST",
    headers: new Headers({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      "Content-type": "application/json",
      "Authorization": `Basic ${base64EncodedBody}`
    }),
    mode: "cors",

  }

  try {
    console.log(base64EncodedBody)
    const response = await fetch(url, options);
    if (!response.ok) {
      console.log(response)
      return Promise.reject(response.status);
    }
    const payload = await response.json();
    console.log(payload)
    return payload;
  } catch (error) {
    console.log(error)
    return error;
  }
};

export async function sendPayInfo() {
  console.log("sendPayInfo ejecutandose")
  const url = process.env.NEXT_PUBLIC_REDSYS_URL;
  const res = await fetchApiData(url);
  return res;
}