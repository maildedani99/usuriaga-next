
export default function SummaryCart  (props) {
  return (
    <div className="flex flex-1 h-75 mb-10   border-2 border-[#DAC895]">
      <div className="flex-col flex-1">
        <div className="mt-8 text-2xl px-6">
          <span>Resumen Carrito</span>
        </div>
        <div className="flex w-3/3  border-y-2 border-[#DAC895] py-3 justify-between	mx-6 mt-10">
          <div>
            <span className="uppercase text-lg ">subtotal</span>
            <span> (impuestos inc.) </span>
          </div>
          <div>
            <span>112.89 €</span>
          </div>
        </div>
        <div className="flex w-3/3  py-3 justify-between	mx-6 mt-6">
          <div>
            <span className="uppercase text-lg ">envío</span>
          </div>
          <div>
            <span>3.90 €</span>
          </div>
        </div>
        <div className="flex w-3/3  border-t-2 border-[#DAC895] py-3 justify-between	mx-6 mt-10">
          <div>
            <span className="uppercase text-lg ">total</span>
            <span> (incluye 19.59€ IVA) </span>
          </div>
          <div>
            <span>112.89 €</span>
          </div>
        </div>
        <div className="flex w-5/6 p-8 mx-auto mt-16">
          <input
            className=" flex flex-1 p-4 text-xl text-white   text-center mb-8 capitalize "
            value="Comprar"
            readOnly
            style={{ backgroundColor: "#dac895" }}
          />
        </div>
      </div>
    </div>
  );
};

