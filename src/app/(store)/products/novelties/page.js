import ProductCard from "../../../components/ProductCard";
import ProductsView from "../../../components/ProductsView";
import { getNovelties } from "../../../lib/data";


export default async function Novelties() {

  const products = await getNovelties()

  console.log("recarga novelties")

  return (
    <>
    
      <ProductsView products={products} title="Novedades" />
    </>
  )


}