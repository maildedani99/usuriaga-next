"use client"
import InputForm from "../../components/InputText";
import ShoppingList from "../../components/ShoppingList";

export default function PayForm() {
  return (
    <div className="  flex flex-col container mx-auto mt-32 py-10 px-4 lg:px-0 justify-center w-full tracking-wider capitalize font-light	 text-center">
      <h2 className="mx-auto  text-4xl lg:text-5xl">Formulario de compra</h2>
      <div className="flex flex-col lg:flex-row w-full grid-col-2 mx-auto">
        <div className="flex flex-col flex-1 mt-28 lg:mb-36">
          <div className="flex flex-col md:flex-row  ">
            <InputForm inputPlaceholder="Nombre *" inputType="text" />
            <div className="w-8 h-4"></div>
            <InputForm inputPlaceholder="Apellidos *" inputType="text" />
          </div>
          <div className="flex  mt-6">
            <InputForm inputPlaceholder="Dirección *" inputType="text" />
          </div>
          <div className="flex flex-col md:flex-row  mt-6">
            <InputForm inputPlaceholder="Provincia *" inputType="text" />
            <div className="w-8 h-4"></div>
            <InputForm inputPlaceholder="Población *" inputType="text" />
          </div>
          <div className="flex flex-col md:flex-row  mt-6">
            <InputForm inputPlaceholder="Código postal *" inputType="text" />
            <div className="w-8 h-4"></div>
            <InputForm inputPlaceholder="Teléfono *" inputType="tel" />
          </div>
          <div className="flex mt-6">
            <InputForm
              inputPlaceholder="Correo electrónico *"
              inputType="email"
            />
          </div>
          <div className="flex mt-6">
            <input type="checkbox" name="" id="" className="my-auto h-5 w-5 text-secondary focus:ring-primary  focus:outline-primary accent-primary rounded  "/>
            <label className="my-auto ml-4"> He leído y estoy de acuerdo con los términos y condiciones de la web *</label>
          </div>
        </div>
        <div className="flex flex-1 lg:mt-28 mt-16">
          <ShoppingList />
        </div>
       
      </div>
      <input value="Finalizar compra" className=" flex flex-1 w-4/12 mx-auto p-4 text-xl text-white text-center mb-8 capitalize cursor-pointer bg-primary"/>
    </div>
  );
}
