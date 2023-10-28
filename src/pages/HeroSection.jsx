import React from "react";

export default function HeroSection() {
  return (
    <>
      <section className="mt-20 mb-10 w-full h-auto flex flex-col items-center justify-center xl:flex-row-reverse overflow-hidden">

        <div className="h-full w-full mx-auto before:block before:absolute before:top-14 before:xl:top-32 before:w-[85%] before:h-[80%] before:xl:h-[73%] before:xl:w-[73%] py-2 md:py-5 xl:py-6 before:-right-1 before:bg-[#5368df] before:rounded-l-full relative inline-block overflow-hidden mb-10">
          <img
            src="\images\illustration-hero.svg"
            alt="hero"
            className="object-contain object-center relative w-[95%]"
          />
        </div>

        <div className="w-full px-4 md:px-14">
          <span>
            <h1 className="text-4xl xl:text-6xl whitespace-normal text-center xl:text-start font-bold leading-snug text-[#242946] mb-6">
              A Simple Bookmark Manager
            </h1>
            <p className="text-center xl:text-start  font-semibold leading-8 text-[#9194a1] px-2">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
          </span>
          <div className="w-full flex justify-center xl:justify-start gap-x-4 mt-8">
            <button className="px-4 py-3 md:px-6 md:py-4 bg-[#5368df] rounded text-[#fff] font-semibold">
              Get it on Chrome
            </button>
            <button className="px-4 py-3 md:px-6 md:py-4 bg-gray-100 rounded text-[#9194a1] font-semibold shadow-xl">
              Get it on Firefox
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
