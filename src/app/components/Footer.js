import Link from "next/link";
import { SiInstagram } from "react-icons/si";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
  const iconSize = 12;

  return (
    <div className="flex flex-1 bg-primary text-white mt-20 py-20 text-sm">
      <div className="flex flex-col lg:flex-row container mx-auto  justify-around">
      <div className=" hidden lg:block my-auto">
          <Image src="/logo_blanco.png" width={277} height={47} alt="Logo" />
        </div>
      <div className="flex flex-col  px-10">
          <h3 className="text-lg font-medium">Información legal</h3>
          <Link className="mx-auto mt-3" href="/terms">
            - Ternimos y condiciones
          </Link>
          <Link className="mx-auto mt-2" href="/legals">
            - Aviso Legal y Privacidad
          </Link>
        </div>
        
        <div className="flex flex-col px-10">
          <h3 className="text-lg font-medium">Contactanos</h3>
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
  );
}
