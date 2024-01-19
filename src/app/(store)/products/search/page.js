import ProductsView from "../../../components/ProductsView";
import Searcher from "../../../components/Searcher";
import { getProducts } from "../../../lib/data";

export default async function Search () {

    const products = await getProducts();
    

    return (
        <Searcher products={products} />
    )
}