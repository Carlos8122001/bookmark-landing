import React, { useState } from "react";

export default function Features() {
  const [tabs, setTabs] = useState(0);

  return (
    <>
      <section className="w-full lg:w-[40%] h-full flex justify-center mx-auto flex-col items-center mt-10">
        <span className="mb-10">
          <h1 className="text-3xl lg:text-5xl  whitespace-normal text-center font-bold leading-snug text-[#242946] mb-6 ">
            Features
          </h1>
          <p className=" text-base lg:text-xl text-center font-semibold leading-8 text-[#9194a1] px-6">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </span>

        <ul className="flex flex-col md:flex-row  justify-center items-center w-full h-full mb-10">
          <li
            className="border-t-[2px] lg:border-b-[2px] xl:border-t-0 border-indigo-50 w-[80%] list-none text-center"
            onClick={() => setTabs(0)}
          >
            <button
              className={`text-[#242946] p-4 whitespace-nowrap  ${
                tabs === 0 ? "border-b-4 border-red-500" : ""
              } font-semibold text-lg`}
            >
              Simple Bookmarking
            </button>
          </li>
          <li
            className="border-t-[2px] lg:border-b-[2px] xl:border-t-0 border-indigo-50 w-[80%] list-none text-center"
            onClick={() => setTabs(1)}
          >
            <button
              className={`text-[#242946] p-4  ${
                tabs === 1 ? "border-b-4 border-red-500" : ""
              } font-semibold text-lg`}
            >
              Speedy Searching
            </button>
          </li>
          <li
            className="border-y-[2px] lg:border-b-[2px] xl:border-t-0 border-indigo-50 w-[80%] list-none text-center"
            onClick={() => setTabs(2)}
          >
            <button
              className={`text-[#242946]  p-4 border-b-2 border-indigo-50  font-semibold text-lg ${
                tabs === 2 ? "border-b-4 border-red-500 " : ""
              }`}
            >
              Easy Sharing
            </button>
          </li>
        </ul>
      </section>

      {tabs === 0 ? (
        <section className="mt-10 mb-10 w-full h-auto flex flex-col justify-around items-center md:flex-row">
          <div className="w-full h-full mx-auto before:block before:absolute before:top-[15%] before:w-[87%] before:h-[78%] lg:before:w-[75%] lg:before:h-[80%] lg:before:pb-5 lg:before:top-[20%] before:-left-1 before:bg-[#5368df] before:rounded-r-full relative inline-block overflow-hidden mb-5 pb-16">
            <img
              src="\images\illustration-features-tab-1.svg"
              alt="hero"
              className="object-cover object-center relative mx-auto w-[90%] h-[90%] xl:w-[75%] xl:h-[75%]"
            />
          </div>

          <span className="lg:px-7 w-full lg:mx-2">
            <h1 className="text-3xl lg:text-5xl whitespace-normal text-center lg:text-start font-bold leading-snug text-[#242946] mb-6 px-2  ">
              Bookmark in one click
            </h1>
            <p className="text-base lg:text-xl text-center lg:text-start font-semibold leading-8 px-4 text-[#9194a1] mb-8 xl:pr-48">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <button className="hidden lg:block bg-[#5368df] text-white px-7 py-3 rounded ml-3">
              More info
            </button>
          </span>
        </section>
      ) : tabs === 1 ? (
        <section className="mt-10 mb-10 w-full h-auto flex flex-col justify-center items-center md:flex-row">

          <div className="w-full h-full mx-auto before:block before:absolute before:top-[15%] before:w-[80%] before:h-[78%] lg:before:w-[70%] lg:before:h-[75%] lg:before:pb-5 lg:before:top-[20%] before:-left-1 before:bg-[#5368df] before:rounded-r-full relative inline-block overflow-hidden mb-5 pb-16">
            <img
              src="\images\illustration-features-tab-2.svg"
              alt="hero"
              className="object-cover object-center relative mx-auto w-[90%] h-[90%] xl:w-[60%] xl:h-[50%]"
            />
          </div>

          <span>
            <h1 className="text-3xl lg:text-5xl whitespace-normal text-center xl:text-start font-bold leading-snug text-[#242946] mb-6 px-2">
              Intelligent search
            </h1>
            <p className="text-base lg:text-xl text-center  lg:text-start font-semibold leading-8 text-[#9194a1] px-4 mb-8 xl:pr-48">
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <button className="hidden xl:block bg-[#5368df] text-white px-7 py-3 rounded ml-3">
              More info
            </button>
          </span>
        </section>
      ) : tabs === 2 ? (
        <section className="mt-10 mb-10 w-full h-auto flex flex-col justify-center items-center md:flex-row">

          <div className="w-full h-full mx-auto before:block before:absolute before:top-[15%] before:w-[87%] before:h-[78%] lg:before:w-[70%] lg:before:h-[75%] lg:before:pb-5 lg:before:top-[20%] before:-left-1 before:bg-[#5368df] before:rounded-r-full relative inline-block overflow-hidden mb-5 pb-16">
            <img
              src="\images\illustration-features-tab-3.svg"
              alt="hero"
              className="object-cover object-center relative mx-auto w-[90%] h-[90%] xl:w-[60%] xl:h-[50%]"
            />
          </div>

          <span>
            <h1 className="text-3xl lg:text-5xl whitespace-normal text-center lg:text-start font-bold leading-snug text-[#242946] mb-6 px-2">
              Share your bookmarks
            </h1>
            <p className="text-base lg:text-xl text-center  lg:text-start font-semibold leading-8 text-[#9194a1] px-4 mb-8 xl:pr-48">
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
          </span>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
