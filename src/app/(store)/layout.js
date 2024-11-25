

export default function Layout({children, products }) {


    return (
        <div className= "flex container flex-wrap mx-auto mt-38 sm:mt-40 lg:mt-56  " >
            {children}
            {products}
            
        </div>
    )
}