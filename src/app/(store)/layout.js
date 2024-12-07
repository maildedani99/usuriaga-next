

export default function Layout({children, products }) {


    return (
        <div className= "flex container flex-wrap mx-auto mt-32 sm:mt-40 lg:mt-48  " >
            {children}
            {products}
            
        </div>
    )
}