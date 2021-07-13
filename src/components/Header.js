import React from "react";
import Image from "next/image";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import {
  ShoppingCartIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const [session] = useSession();
  const router = useRouter();

  const items = useSelector(selectItems);

  return (
    <>
      <header className="">
        {/* top nav */}
        <div className="flex items-center bg-amazon_blue p-1 py-2 flex-grow ">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Image
              onClick={() => router.push("/")}
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              objectFit="contain"
              className="cursor-pointer"
            />
          </div>
          {/* Custom serch input */}
          <div className="flex flex-grow  items-center h-10 rounded-md cursor-pointer bg-yellow-400 hover:bg-yellow-500 ">
            <input
              type="text"
              className="p-2 h-full flex-grow rounded-l-md focus:outline-none"
            />
            <SearchIcon className="h-12 p-4" />
          </div>
          {/* three div dection which contain cart account */}
          <div className="text-white flex items-center text-xs space-x-6 mx-6">
            <div onClick={!session ? signIn : signOut} className="header_link">
              <p>{session ? `Hello ${session.user.name}` : "Signin"}</p>
              <p className="font-extrabold md:text-sm">Account & Lists</p>
            </div>
            <div className="header_link">
              <p>Returns</p>
              <p className="font-extrabold md:text-sm">& Orders</p>
            </div>
            <div
              className="header_link relative flex items-center"
              onClick={() => router.push("/Checkout")}
            >
              <span className="cursor-default absolute top-0 right-5 md:right-6 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold text-black ">
                {items.length}
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="  md:inline font-extrabold md:text-sm mt-2">Cart</p>
            </div>
          </div>
        </div>
        {/* buttom div */}
        <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
          <p className="header_link flex items-center">
            <MenuIcon className="h-6 mr-1" />
            All
          </p>
          <p className="header_link font-bold text-md ">Best Sellers</p>
          <p className="header_link font-bold text-md ">Mobiles</p>
          <p className="header_link font-bold text-md ">Fashion</p>
          <p className="header_link font-bold text-md ">Eletroics</p>
          <p className="header_link font-bold text-md ">New Releses</p>
          <p className="header_link font-bold text-md flex ">
            prime <ChevronDoubleDownIcon className="h-4 mt-1 cursor-pointer" />
          </p>
          <p className="header_link font-bold text-md ">Coustomer Service</p>
          <p className="header_link font-bold text-md ">Computers</p>
          <p className="header_link font-bold text-md ">Amazon Pay</p>
          <p className="header_link font-bold text-md ">Home & kitchen</p>
          <p className="header_link font-bold text-md  md:inline ">
            Toys & Games
          </p>
          {/* classname="hidden " for responsive but not working for now */}
        </div>
      </header>
    </>
  );
};

export default Header;
