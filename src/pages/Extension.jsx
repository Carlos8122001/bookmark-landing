import React from "react";

export default function Extension() {
  return (
    <>
      <section className="w-full h-full mt-10 mb-10 flex justify-center flex-col">
        <span>
          <h1 className="text-3xl lg:text-5xl whitespace-normal text-center font-bold leading-snug text-[#242946] mb-6 ">
            Download the extension
          </h1>
          <p className="text-lg lg:text-xl text-center font-semibold leading-8 mx-auto text-[#9194a1] px-14 lg:w-[55%]">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </span>

        <section className="w-full h-full flex flex-col justify-center items-center mt-10 gap-y-10 lg:gap-x-10 lg:flex-row xl:justify-center">

          <div className="pb-6 pt-14 w-[340px] h-full flex justify-center flex-col text-center rounded-2xl shadow-lg">
            <img
              src="images/logo-chrome.svg"
              alt="chrome"
              className="object-cover object-center w-36 mx-auto mb-7"
            />
            <h2 className="font-bold text-[#242946] text-xl mb-1  ">
              Add to Chrome
            </h2>
            <h3 className="text-base text-[#9194a1]">Minimum version 62</h3>
            <div className="mt-10  w-full">
              <img src="/images/bg-dots.svg" alt="dots" className="w-full h-full mb-5" />
              <button className="w-[80%] py-3 rounded border-2 border-transparent bg-[#5368df] font-bold text-white transition-all duration-300 hover:bg-transparent hover:border-[#5368df] hover:text-[#5368df]">Add & Install Extension</button>
            </div>
          </div>

          <div className="pb-6 pt-14 w-[340px] h-full flex justify-center flex-col text-center rounded-2xl shadow-lg lg:mt-20">
            <img
              src="images/logo-firefox.svg"
              alt="chrome"
              className="object-cover object-center w-36 mx-auto mb-7"
            />
            <h2 className="font-bold text-[#242946] text-xl mb-1 ">
            Add to Firefox
            </h2>
            <h3 className="text-base text-[#9194a1]">Minimum version 55</h3>
            <div className="mt-10  w-full">
              <img src="/images/bg-dots.svg" alt="dots" className="w-full h-full mb-5" />
              <button className="w-[80%] py-3 rounded border-2 border-transparent bg-[#5368df] font-bold text-white transition-all duration-300 hover:bg-transparent hover:border-[#5368df] hover:text-[#5368df]">Add & Install Extension</button>
            </div>
          </div>

          <div className="pb-6 pt-14 w-[340px] h-full flex justify-center flex-col text-center rounded-2xl shadow-lg lg:mt-40">
            <img
              src="images/logo-opera.svg"
              alt="chrome"
              className="object-cover object-center w-36 mx-auto mb-7"
            />
            <h2 className="font-bold text-[#242946] text-xl mb-1 ">
            Add to Opera
            </h2>
            <h3 className="text-base text-[#9194a1]">Minimum version 46</h3>
            <div className="mt-10  w-full">
              <img src="/images/bg-dots.svg" alt="dots" className="w-full h-full mb-5" />
              <button className="w-[80%] py-3 rounded border-2 border-transparent bg-[#5368df] font-bold text-white transition-all duration-300 hover:bg-transparent hover:border-[#5368df] hover:text-[#5368df]">Add & Install Extension</button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
