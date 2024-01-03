import CarouselWrapper from './CarouselWrapper';
import ButtonAddToCart from './ButtonAddToCart';
import Modal from './Modal';
import CloseModalIcon from './CloseModalIcon';


export default function ProductViewCard({ product }) {


    return (
        <Modal>
        <div className="flex relative  container mx-auto justify-evenly 	 	text-[#636364]">
           <CloseModalIcon />

            <div className=" flex my-auto	w-4/12  top-10 ">
                <CarouselWrapper product={product} />
            </div>
            <div className="text-2xl flex flex-col 	w-2/6 ">
                <div className="flex flex-col p-8 text-justify mx-auto 	w-6/6 ">
                    <span className="text-3xl font-medium mt-4">{product.name}</span>
                    <span className="text-lg font-medium mt-4">{product.price}€</span>
                    <span className="   font-body text-base tracking-wider	font-light	  	mt-4">
                        {product.description}
                    </span>
                   
                </div>
                <div className="flex w-5/6 p-8 mx-auto">
                    <ButtonAddToCart item={product} />
                </div>
            </div>
        </div>
        </Modal>


    )
}