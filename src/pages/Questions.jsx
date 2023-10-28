import React, { useState } from "react";
import Collapse from "../components/Collapse";

export default function Questions() {
  return (
    <>
      <section className="w-full h-auto my-8 xl:w-[60%] mx-auto">
        <span>
          <h1 className="text-3xl lg:text-4xl whitespace-normal text-center font-bold leading-snug text-[#242946] mb-6 xl:mb-8 px-3 ">
            Frequently Asked Questions
          </h1>
          <p className="text-base lg:text-xl  text-center font-semibold leading-8 text-[#9194a1] px-5 xl:mx-36">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </span>

        <div className=" mx-auto w-[90%] lg:xl:w-[65%] xl:w-[65%] mb-16">
          <Collapse
            title={"What is Bookmark?"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
            }
          />

          <Collapse
            title={"How can I request a new browser?"}
            text={
              "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
            }
          />

          <Collapse
            title={"Is there a mobile app?"}
            text={
              "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
            }
          />

          <Collapse
            title={"What about other Chromium browsers?"}
            text={
              "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
            }
          />
        </div>

        <button className="px-6 py-4 bg-[#5368df] rounded text-[#fff] font-semibold mx-auto block">
          More info
        </button>
      </section>
    </>
  );
}
