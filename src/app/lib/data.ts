
const fetchApiData = async (url) => {
    const options = {
      method: "GET",
      headers: new Headers(),
    };
    try {
      const response = await fetch(url, options);
      if (response.status === 200) {
        const payload = await response.json();
        return payload;
      }
      return Promise.reject(response.status);
    } catch (error) {
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

