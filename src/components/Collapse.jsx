import React from "react";

export default function Collapse({ title, text }) {
  return (
    <>
      <div className="relative w-full overflow-hidden mx-auto my-10">
        <input
          type="checkbox"
          className="absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"
        />

        <span className="bg-transparent h-12 w-full  flex items-center pb-3 border-b-2 peer-checked:border-none">
          <h1 className="text-base xl:text-xl font-medium text-black">{title}</h1>
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          className="absolute top-5 right-3 text-white  rotate-0 stroke-[#5267DF] peer-checked:rotate-180 peer-checked:stroke-red-700"
        >
          <path fill="none" stroke="" stroke-width="3" d="M1 1l8 8 8-8" />
        </svg>

        <div className="bg-white overflow-hidden  max-h-0  peer-checked:max-h-full border-0 peer-checked:border-collapse peer-checked:border-b-2">
          <p className="py-8 text-base xl:text-xl">{text}</p>
        </div>
      </div>
    </>
  );
}
