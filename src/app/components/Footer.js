import Link from "next/link";
import { SiInstagram } from "react-icons/si";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {

  const iconSize = 12;

  return (
    <div className="flex flex-col w-full bg-primary text-white mt-10  text-sm">

      <div className="flex  w-full borde border-white mt-5 py-8">
        <div className="flex flex-col lg:flex-row container mx-auto  justify-around">
          <div className="flex flex-col w-4/12  text-2xl  ">
            <h3 className="my-auto text-center">¡Suscríbete y consigue acceso a descuentos y promociones!</h3>
            <div className="mx-auto">

              <div className="text-lg mt-8 ">
                <input type="text" className="p-2 rounded-md text-text" placeholder="Introduce tu email...  " />
                <button className="border  rounded-md ml-2 p-2 ">Suscribirme</button>
              </div>
              <div className=" flex text-sm mt-2">
                <input className="h-4 w-4 my-auto" type="checkbox" />
                <span className="my-auto ml-2"> He leído y acepto la política de privacidad.</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-4/12  px-10">
            <h3 className="text-xl font-medium mx-auto">Información legal</h3>
            <div className="flex flex-col mx-auto text-md">
            <Link className="mx-auto mt-3" href="/terms">
              - Ternimos y condiciones
            </Link>
            <Link className="mx-auto mt-2" href="/legals">
              - Aviso Legal y Privacidad
            </Link>
            </div>
          </div>

          <div className="flex flex-col w-4/12 text-center  px-10">
            <h3 className="text-xl font-medium">Contactanos</h3>
          <div className="mx-auto text-md">
            <div className="flex mt-3">
              <SiInstagram size={iconSize} className="my-auto " />
              <span className="my-auto ml-3 ">@usuriagacollection</span>
            </div>
            <div className="flex mt-2">
              <BsTelephone size={iconSize} className="my-auto " />
              <span className="my-auto ml-3 ">666 666 666</span>
            </div>
            <div className="flex mt-2">
              <FiMail size={iconSize} className="my-auto " />
              <span className="my-auto ml-3 ">info@usuriaga.com</span>
            </div>{" "}
            <div className="flex mt-2 ">
              <BsWhatsapp size={iconSize} className="my-auto " />
              <span className="my-auto ml-3 ">666 666 666</span>
            </div>
          </div>

          </div>
        </div>
      </div>
      <div className=" hidden lg:flex flex-col w-full mx-auto py-10 my-auto">
            
            <p className="mx-auto text-base">© 2024 USURIAGA COLLECTION. Todos los derechos reservados.

</p>
          </div>
    </div>
  );
}
