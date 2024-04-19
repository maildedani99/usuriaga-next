"use client"
import { useContext, useState } from "react";
import InputForm from "../../components/InputText";
import ShoppingList from "../../components/ShoppingList";
import Link from "next/link";
import { AppContext } from "../../lib/AppContext";
import { completeOrderProcess } from "../../lib/data";

export default function PayForm() {


  const { formData, setFormData,   orderItems, order, setOrder, setRedsysData } = useContext(AppContext);

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [requestedInvoice, setRequestedInvoice] = useState(false);
  const [validated, setValidated] = useState(false);
  

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxRequestedInvoice = () => {
    setRequestedInvoice(!requestedInvoice)
  }

  const handleCheckboxAceptedTerms = () => {
    setAcceptedTerms(!acceptedTerms)
  }

  const allRequiredFieldsCompleted = () => {
    const alwaysRequired = ['first_name', 'last_name', 'address', 'province', 'city', 'postal_code', 'phone', 'email'];
    for (let field of alwaysRequired) {
      if (!formData[field]) {
        return false;
      }
    }
    if (requestedInvoice && !formData['dni']) {
      return false;
    }
    if (!acceptedTerms) {
      return false;
    }
    return true;
  };

  const handleLinkClick = (e) => {
    setValidated(true);
    if (!allRequiredFieldsCompleted()) {
      e.preventDefault();
    } else {
      handleConfirm();
    }
  };

  const handleConfirm  = async () => {
    const resPayment = await completeOrderProcess(formData, orderItems, order);
    console.log(resPayment)
    resPayment && setRedsysData(resPayment.order)
  }



  return (
    <div className="  flex flex-col container mx-auto mt-32 py-10 px-4 lg:px-0 justify-center w-full tracking-wider  font-light	 text-center">
      <h2 className="mx-auto  text-4xl lg:text-5xl">Formulario de compra</h2>
      <div className="flex flex-col lg:flex-row w-full grid-col-2 mx-auto">
        <div className="flex w-3/6 flex-col flex-1 mt-28 lg:mb-10">
          <div className="flex flex-col md:flex-row  ">
            <InputForm inputPlaceholder="Nombre *" inputType="text" handleInputChange={handleInputChange} name="first_name" validated={validated} formData={formData} required={true} />
            <div className="w-8 h-4"></div>
            <InputForm inputPlaceholder="Apellidos *" inputType="text" handleInputChange={handleInputChange} name="last_name" validated={validated} formData={formData} required={true} />

          </div>
          <div className="flex  mt-6">
            <InputForm inputPlaceholder="Dirección *" inputType="text" handleInputChange={handleInputChange} name="address" validated={validated} formData={formData} required={true} />
          </div>
          <div className="flex flex-col md:flex-row  mt-6">
            <InputForm inputPlaceholder="Provincia *" inputType="text" handleInputChange={handleInputChange} name="province" validated={validated} formData={formData} required={true} />
            <div className="w-8 h-4"></div>
            <InputForm inputPlaceholder="Población *" inputType="text" handleInputChange={handleInputChange} name="city" validated={validated} formData={formData} required={true} />
          </div>
          <div className="flex flex-col md:flex-row  mt-6">
            <InputForm inputPlaceholder="Código postal *" inputType="text" handleInputChange={handleInputChange} name="postal_code" validated={validated} formData={formData} required={true} />
            <div className="w-8 h-4"></div>
            <InputForm inputPlaceholder="Teléfono *" inputType="tel" handleInputChange={handleInputChange} name="phone" validated={validated} formData={formData} required={true} />
          </div>
          <div className="flex mt-6">
            <InputForm
              inputPlaceholder="Correo electrónico *" inputType="email" handleInputChange={handleInputChange} name="email" validated={validated} formData={formData} required={true} />
          </div>
          <div className="flex mt-6 md:w-3/6 w-full ">
            <InputForm
              inputPlaceholder={requestedInvoice ? 'DNI *' : 'DNI'} handleInputChange={handleInputChange} name="dni" inputType="text" validated={validated} formData={formData} required={requestedInvoice} />
          </div>
          <div className="flex mt-6">
            <input type="checkbox" name="terms" onChange={handleCheckboxAceptedTerms} id="" className="my-auto h-5 w-5 text-secondary focus:ring-primary  focus:outline-primary accent-primary rounded  " />
            <label className="my-auto ml-4"> He leído y estoy de acuerdo con los <Link href="/terms" className="text-primary underline font-medium" > términos y condiciones</Link> de la web. *{validated && !acceptedTerms && <span className='ml-4 text-md	 text-red-600 '><br></br>  Debes aceptar los terminos y condiciones.</span>}</label>
          </div>
          <div className="flex mt-6">
            <input type="checkbox" name="terms" onChange={handleCheckboxRequestedInvoice} id="" className="my-auto h-5 w-5 text-secondary focus:ring-primary  focus:outline-primary accent-primary rounded  " />
            <label className="my-auto ml-4">Quiero recibir factura por correo electrónico.</label>
          </div>
        </div>
        <div className="flex flex-1 w-full lg:mt-28 mt-16">
          <ShoppingList />
        </div>

      </div>
      <Link href={"/paySummary"} legacyBehavior>
        <a
          onClick={handleLinkClick}
          className="flex w-1/3 mx-auto p-4 text-xl text-white text-center mb-8 cursor-pointer bg-primary"
        >
          <span className="mx-auto uppercase">
            Finalizar compra
          </span>
        </a>
      </Link>
      {/* <RedsysPaymentForm /> */}
    </div>
  );
}
