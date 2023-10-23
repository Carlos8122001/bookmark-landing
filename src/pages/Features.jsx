import React, { useState } from "react";

export default function Features() {
  const [tabs, setTabs] = useState(0);

  return (
    <>
      <section className="w-full h-full flex justify-center mx-auto flex-col items-center">
        <span className="mb-10">
          <h1 className="text-4xl whitespace-normal text-center font-bold leading-snug text-[#242946] mb-6 ">
            Features
          </h1>
          <p className="text-xl text-center font-semibold leading-8 text-[#9194a1] px-2 mb-6">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </span>

        <ul className="flex flex-col md:flex-row  justify-center items-center w-full h-full  mb-10">
          <li
            className="border-t-[2px] border-indigo-50 w-[80%] list-none text-center"
            onClick={() => setTabs(0)}
          >
            <button
              className={`text-[#242946] p-4  ${
                tabs === 0 ? "border-b-4 border-red-500" : ""
              } font-semibold text-lg`}
            >
              Simple Bookmarking
            </button>
          </li>
          <li
            className="border-t-[2px] border-indigo-50 w-[80%] list-none text-center"
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
            className="border-y-[2px] border-indigo-50 w-[80%] list-none text-center"
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
        <section className="mt-10 mb-10 w-full h-auto flex flex-col justify-center items-center md:flex-row">
          <div className="w-full h-full mx-auto before:block before:absolute before:top-[15%] before:w-[87%] before:h-[78%] before:-left-1 before:bg-[#5368df] before:rounded-r-full relative inline-block overflow-hidden mb-5 pb-16">
            <img
              src="\images\illustration-features-tab-1.svg"
              alt="hero"
              className="object-cover object-center relative mx-auto w-[90%] h-[90%] "
            />
          </div>

          <span>
            <h1 className="text-4xl whitespace-normal text-center font-bold leading-snug text-[#242946] mb-6 ">
              Bookmark in one click
            </h1>
            <p className="text-xl text-center font-semibold leading-8 text-[#9194a1] px-2">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
          </span>
        </section>
      ) : tabs === 1 ? (
        <section className="mt-10 mb-10 w-full h-auto flex flex-col justify-center items-center md:flex-row">
          <div className="w-full h-full mx-auto before:block before:absolute before:top-[30%] before:w-[87%] before:h-[60%] before:-left-1 before:bg-[#5368df] before:rounded-r-full relative inline-block overflow-hidden mb-5 pb-16">
            <img
              src="\images\illustration-features-tab-2.svg"
              alt="hero"
              className="object-cover object-center relative mx-auto w-[90%] h-[90%] "
            />
          </div>

          <span>
            <h1 className="text-4xl whitespace-normal text-center font-bold leading-snug text-[#242946] mb-6 ">
              Intelligent search
            </h1>
            <p className="text-xl text-center font-semibold leading-8 text-[#9194a1] px-2">
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
          </span>
        </section>
      ) : tabs === 2 ? (
        <section className="mt-10 mb-10 w-full h-auto flex flex-col justify-center items-center md:flex-row">
          <div className="w-full h-full mx-auto before:block before:absolute before:top-[15%] before:w-[87%] before:h-[78%] before:-left-1 before:bg-[#5368df] before:rounded-r-full relative inline-block overflow-hidden mb-5 pb-16">
            <img
              src="\images\illustration-features-tab-3.svg"
              alt="hero"
              className="object-cover object-center relative mx-auto w-[90%] h-[90%] "
            />
          </div>

          <span>
            <h1 className="text-4xl whitespace-normal text-center font-bold leading-snug text-[#242946] mb-6 ">
              Share your bookmarks
            </h1>
            <p className="text-xl text-center font-semibold leading-8 text-[#9194a1] px-2">
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
