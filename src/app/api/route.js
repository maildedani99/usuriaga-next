// pages/api/api.js
export default async function POST(req, res) {
    const { body, method } = req;
    console.log(method)
    const redsysUrl = 'https://sis-t.redsys.es:25443/sis/realizarPago';

    const options = {
        method: "POST",
        headers: new Headers({
          "Content-type": "application/json",
          "Authorization": `Basic ${base64EncodedBody}`
        }),
        mode: "cors",
        body:body
        
      }

    try {
        const response = await fetch(redsysUrl, options);

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
