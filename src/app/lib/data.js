
const fetchApiData = async (url, method = "GET", body = null) => {
  const options = {
    method: method,
    headers: {
      "Content-type": "application/json",
      'Cache-Control':'no-store',
    },
    mode: 'cors',
    redirect: 'follow',
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      return Promise.reject(response.status);
    }
    const payload = await response.json();
    return payload != null && payload != undefined ? JSON.parse(JSON.stringify(payload)) : [];
  } catch (error) {
    console.error('Error fetching:', error);
    return [];
  }
};


export  async function getCategories () {
    const url = process.env.NEXT_PUBLIC_API_URL +  "categories/all";
    return await   fetchApiData(url);
}

export  async function getProductsBySubcategory (id) {
    const url = process.env.NEXT_PUBLIC_API_URL + "products/getBySubCategory/" + id;
    return await fetchApiData(url);
  };

  export  async function getNovelties () {
    const url = process.env.NEXT_PUBLIC_API_URL + "products/novelties/all";
    return await fetchApiData(url);
  };

  export  async function getDiscounts () {
    const url = process.env.NEXT_PUBLIC_API_URL + "products/discounts/all";
    return await fetchApiData(url);
  };

  export  async function getOutletProducts () {
    const url = process.env.NEXT_PUBLIC_API_URL + "products/outlet/all";
    return await fetchApiData(url);
  };

  export  async function getSubcategory (id) {
    const url = process.env.NEXT_PUBLIC_API_URL + "subcategories/getById/" + id;
    return await fetchApiData(url);
  };

  export  async function getProductById (id) {
    const url = process.env.NEXT_PUBLIC_API_URL + "products/" + id;
    return await fetchApiData(url);
  };

  export  async function getProducts () {
    const url = process.env.NEXT_PUBLIC_API_URL + "products/all";
    return await fetchApiData(url);
  };

  export  async function getProductsStock () {
    const url = process.env.NEXT_PUBLIC_API_URL + "products/allStock";
    return await fetchApiData(url);
  };

  export  async function getColors () {
    const url = process.env.NEXT_PUBLIC_API_URL +  "colors/all";
    return await fetchApiData(url);
}

export  async function getSizes () {
  const url = process.env.NEXT_PUBLIC_API_URL +  "sizes/all";
  return await fetchApiData(url);
}

export  async function createEmail (data) {
  const body = {
    email : data.email
  }
  const url = process.env.NEXT_PUBLIC_API_URL +  "email/create";
  return await fetchApiData(url, "POST", body);
}

export  async function getRedsysData (redsysData) {
  const body = {
    amount: redsysData.total?.toFixed(2),
    order: redsysData.ds_order
  }
  console.log(body)
  const url = process.env.NEXT_PUBLIC_API_URL +  "redsys/generate-signature";
  return await fetchApiData(url, "POST", body);
}

export  async function completeOrderProcess (formData, orderItems, order) {
   const body = {
    customer: formData,
      order: order,
      items: orderItems
    }
    const url = process.env.NEXT_PUBLIC_API_URL +  "orders/completeOrderProcess";
  return await fetchApiData(url, "POST",body);
}










