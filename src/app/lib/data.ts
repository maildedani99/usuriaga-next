
const fetchApiData = async (url, method = "GET", body = null) => {
  const options = {
    method: method,
    headers: new Headers({
      "Content-type": "application/json",
    }),
    mode: "cors",
    body: body ? JSON.stringify(body) : null,
    redirect: 'follow', 
  };
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        return Promise.reject(response.status);
      }
      const payload = await response.json();
      return payload;
    } catch (error) {
      return error;
    }
  };

export  async function getCategories () {
    const url = process.env.NEXT_PUBLIC_API_URL +  "categories/all";
    const resCategories = fetchApiData(url);
    return resCategories;
}

export  async function getProductsBySubcategory (id) {
    const url = process.env.NEXT_PUBLIC_API_URL + "products/getBySubCategory/" + id;
    return fetchApiData(url);
  };

  export  async function getNovelties () {
    const url = process.env.NEXT_PUBLIC_API_URL + "products/novelties/all";
    return fetchApiData(url);
  };

  export  async function getDiscounts () {
    const url = process.env.NEXT_PUBLIC_API_URL + "products/discounts/all";
    return fetchApiData(url);
  };

  export  async function getOutletProducts () {
    const url = process.env.NEXT_PUBLIC_API_URL + "products/outlet/all";
    return fetchApiData(url);
  };

  export  async function getSubcategory (id) {
    const url = process.env.NEXT_PUBLIC_API_URL + "subcategories/getById/" + id;
    return fetchApiData(url);
  };

  export  async function getProductById (id) {
    const url = process.env.NEXT_PUBLIC_API_URL + "products/" + id;
    return fetchApiData(url);
  };

  export  async function getProducts () {
    const url = process.env.NEXT_PUBLIC_API_URL + "products/all";
    return fetchApiData(url);
  };

  export  async function getColors () {
    const url = process.env.NEXT_PUBLIC_API_URL +  "colors/all";
    return fetchApiData(url);
}

export  async function getSizes () {
  const url = process.env.NEXT_PUBLIC_API_URL +  "sizes/all";
  return fetchApiData(url);
}

export  async function createEmail (data) {
  const body = {
    email : data.email
  }
  const url = process.env.NEXT_PUBLIC_API_URL +  "email/create";
  return fetchApiData(url, "POST", body);
}

export  async function getRedsysData (redsysData) {
  const body = {
    amount: redsysData.total?.toFixed(2),
    order: redsysData.ds_order
  }
  const url = process.env.NEXT_PUBLIC_API_URL +  "redsys/generate-signature";
  return fetchApiData(url, "POST", body);
}

export  async function completeOrderProcess (formData, orderItems, order) {
   const body = {
    customer: formData,
      order: order,
      items: orderItems
    }
    const url = process.env.NEXT_PUBLIC_API_URL +  "orders/completeOrderProcess";
  return fetchApiData(url, "POST",body);
}










