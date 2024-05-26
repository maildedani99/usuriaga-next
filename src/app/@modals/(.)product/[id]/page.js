import ProductViewCard from 'src/app/components/ProductViewCard'
import Modal from '../../../components/Modal'
import { getProductById } from 'src/app/lib/data'


export default async function Product({ params }) {

    const product = await getProductById(params.id)



    return (
        <Modal>
            <div className='min-h-screen'>
                <ProductViewCard product={product[0]} />
            </div>
        </Modal>
    )

}