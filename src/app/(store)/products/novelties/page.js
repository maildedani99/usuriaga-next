import ProductsView from "../../../components/ProductsView";
import { getNovelties } from "../../../lib/data";


export default async function Novelties() {

  const products = await getNovelties()

  //const plainProducts = JSON.parse(JSON.stringify(products));


  return (
    <>
    
      <ProductsView products={products} title="Novedades" />
    </>
  )


}