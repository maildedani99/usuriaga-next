import ProductsView from "../../../components/ProductsView";
import ProductCard from "../../../components/ProductCard"
import { getProductsBySubcategory, getSubcategory } from "../../../lib/data"


export default async function Products({ params }) {

  const products = await getProductsBySubcategory(params.id)
  const subcategory = await getSubcategory(params.id)
  const title = subcategory[0].name

  return (

    <ProductsView products={products} title={title} />
  )
}