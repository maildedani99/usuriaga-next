import React from "react";
import PropTypes from "prop-types";
import "./navbar.css";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
//import { NavLink, useNavigate } from "react-router-dom";
import Image from "next/image";
import { getCategories } from "../lib/data";
import NavbarLink from "./NavbarLinks";
import Link from "next/link";
import CartIcon from "./CartIcon";
import NavbarMobile from "./navbarMobile/NavbarMobile";

export default async function Navbar() {
  const categories = await getCategories();

  return (
    <>
      <div className="hidden lg:flex w-full fixed flex-col bg-white top-0 z-10	">
        <div
          className="flex  flex-1 border-b 	"
          style={{ backgroundColor: "#dac895" }}
        >
          <div className="flex flex-1 w-3/5 justify-center  p-1 	 tracking-widest ">
            <span className="">
              ENVÍOS GRATIS para compras superiores a 60€
            </span>
          </div>
        </div>
        <div className="flex flex-row flex-1 border-b">
          <Link href="/products/novelties" className=" p-6 w-2/12	my-auto ">
            <Image
              className="mx-auto"
              src="/logogrisprueba.png"
              alt="Usuriaga"
              width={250}
              height={100}  
            />
          </Link>

          <div className="flex w-9/12 justify-center capitalize tracking-wide text-lg font-[400]		 ">
            <div className=" self-center">
              <div className="dropdown  hover:text-primary">
                <div className="bg-[#dac895] rounded-full ">
                  <Link
                    href="/products/novelties"
                    id="novelties"
                    /* onClick={(e) => CategoriesHandleClick(e.target.id)} */
                    className=" mx-6   cursor-pointer navLink hover:text-white  "
                  >
                    Novedades
                  </Link>
                </div>
              </div>
              <NavbarLink categories={categories} />
              <div className="dropdown  hover:text-primary">
                <div className="	">
                  <Link
                    href="/products/discounts"
                    className=" mx-6   cursor-pointer navLink hover:text-primary "
                    id="discount"
                    /* onClick={(e) => CategoriesHandleClick(e.target.id)} */
                  >
                    Rebajas
                  </Link>
                </div>
              </div>
              <div className="dropdown  hover:text-primary" name="/outletView">
                <Link
                  href="/products/outlet"
                  id="outlet"
                  className=" mx-6   cursor-pointer navLink hover:text-primary "
                  /*  onClick={(e) => CategoriesHandleClick(e.target.id)} */
                >
                  Outlet
                </Link>
              </div>
            </div>
          </div>
          <div className="flex  	py-10 px-4 justify-between w-1/12 max-w-sm opacity-70">
            {/*  <FiSearch size={25} color="#636364" /> */}
            {/*   <span className="cursor-pointer">
              <FiUser size={25} color="#636364" />
            </span> */}
            <CartIcon />
          </div>
        </div>
      </div>
      <div className="flex lg:hidden w-full fixed flex-col bg-white top-0 z-10	">
        <NavbarMobile categories={categories} />
      </div>
    </>
  );
}
