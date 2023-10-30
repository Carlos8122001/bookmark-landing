import React, { useState } from "react";
import Drawer from "./Drawer";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className={`w-full lg:pl-12 h-20 flex justify-around items-center pt-8 px-6 lg:pt-14 ${open ? "hidden" : "flex"} `}>
        <div className="w-full">
          <img
            src="\images\logo-bookmark.svg"
            alt="logo"
            className="object-center object-cover"
          />
        </div>
        <div className="block md:hidden" onClick={()=> setOpen(true)}>
          <img src="\images\icon-hamburger.svg" alt="menu" className="h-4 cursor-pointer" />
        </div>
        <nav className="hidden md:flex gap-x-10 text-sm items-center ">
          <a href="#" className="font-semibold text-[#242946] hover:text-[#fa5757] transition-all duration-300">
            FEATURES
          </a>
          <a href="#" className="font-semibold text-[#242946] hover:text-[#fa5757] transition-all duration-300">
            PRICING
          </a>
          <a href="#" className="font-semibold text-[#242946] hover:text-[#fa5757] transition-all duration-300">
            CONTACT
          </a>
          <a
            href="#"
            className="bg-[#fa5757] px-9 py-3 rounded font-semibold text-white border-2 border-transparent transition-all duration-300 hover:border-[#fa5757] hover:bg-transparent hover:text-[#fa5757]"
          >
            LOGIN
          </a>
        </nav>
      </header>
      <Drawer open={open} setOpen={setOpen} />
    </>
  );
}
