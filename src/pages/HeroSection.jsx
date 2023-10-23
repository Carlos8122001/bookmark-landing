import React from "react";

export default function HeroSection() {
  return (
    <>
      <section className="mt-20 mb-10 w-full h-auto flex flex-col items-center justify-center md:flex-row-reverse overflow-hidden">
        <div className="h-full mx-auto before:block before:absolute before:top-[23%] before:w-[75%] before:h-[75%] before:-right-1 before:bg-[#5368df] before:rounded-l-full relative inline-block overflow-hidden mb-14">
          <img
            src="\images\illustration-hero.svg"
            alt="hero"
            className="object-contain object-center relative"
          />
        </div>

        <div>
          <span>
            <h1 className="text-4xl whitespace-normal text-center font-bold leading-snug text-[#242946] mb-6 ">
              A Simple Bookmark Manager
            </h1>
            <p className="text-xl text-center font-semibold leading-8 text-[#9194a1] px-2">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
          </span>
          <div className="w-full flex justify-center gap-x-4 mt-12">
            <button className="px-6 py-4 bg-[#5368df] rounded text-[#fff] font-semibold">
              Get it on Chrome
            </button>
            <button className="px-6 py-4 bg-white-300 rounded text-[#9194a1] font-semibold shadow-lg">
              Get it on Firefox
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
