import React from "react";

export default function NavBar() {
  return (
    <>
      <header className="w-full h-20 flex justify-around items-center pt-8 px-6 md:pt-14 ">
        <div className="w-full">
          <img
            src="\images\logo-bookmark.svg"
            alt="logo"
            className="object-center object-cover"
          />
        </div>
        <div className="block md:hidden">
          <img src="\images\icon-hamburger.svg" alt="menu" className="h-4 cursor-pointer" />
        </div>
        <nav className="hidden md:flex gap-x-10 text-sm items-center">
          <a href="#" className="font-semibold text-[#242946]">
            FEATURES
          </a>
          <a href="#" className="font-semibold text-[#242946]">
            PRICING
          </a>
          <a href="#" className="font-semibold text-[#242946]">
            CONTACT
          </a>
          <a
            href="#"
            className="bg-[#fa5757] px-9 py-3 rounded font-semibold text-white"
          >
            LOGIN
          </a>
        </nav>
      </header>
    </>
  );
}
