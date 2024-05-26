
export default function Modal({ children }) {


    return (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-40" >
            <div className="bg-white p-20 rounded-8 container h-[90%] overflow-auto">
                {children}
            </div>
        </div>
    )
}



