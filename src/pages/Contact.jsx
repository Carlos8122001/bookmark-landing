import React from "react";

export default function Contact() {
  return (
    <>
      <section className="w-full h-full flex flex-col justify-center items-center mt-28 bg-[#5368df] py-16">
        <span className="text-center mx-auto">
          <h2 className="text-white lg:text-sm font-semibold uppercase tracking-[7px] text-xs font-Rubik mb-2 xl:mb-8">
            35,000+ already joined
          </h2>
          <h1 className="text-white font-semibold text-3xl lg:text-4xl px-6  mb-7 lg:w-[80%] xl:mx-auto">
            Stay up-to-date with what we’re doing
          </h1>
        </span>
        <form className="w-full flex justify-center flex-col gap-y-4 lg:flex-row lg:gap-0 lg:w-auto lg:gap-x-4">
          <input
            placeholder="Enter your email address"
            type="text"
            className="w-[360px] h-14 mx-auto rounded-md text-start pl-4 xl:w-[340px]"
          />
          <button className="w-[360px] h-14 lg:w-32 font-medium mx-auto text-white rounded-lg bg-[#fa5757]">
            Contact Us
          </button>
        </form>
      </section>
    </>
  );
}
