import React, { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [errorinput, setErrorinput] = useState(false);
  const validadEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const validateEmail = (value) => {
    if (value !== "" && validadEmail.test(value)) {
      setErrorinput(false);
      setEmail("");
    } else {
      setErrorinput(true);
    }
  };

  return (
    <>
      <section className="w-full h-full flex flex-col justify-center items-center mt-28 bg-[#5368df] py-16">
        <span>
          <h2 className="text-white text-center lg:text-sm font-semibold uppercase tracking-[7px] text-xs font-Rubik mb-2 xl:mb-8">
            35,000+ already joined
          </h2>
          <h1 className="text-white text-center font-semibold text-3xl lg:text-4xl mb-7 lg:w-[80%] lg:mx-auto">
            Stay up-to-date with what we’re doing
          </h1>
        </span>
        <form
          className="w-full flex justify-center  gap-y-4  lg:gap-0 lg:w-auto lg:gap-x-4 lg:items-center overflow-hidden"
          onSubmit={(event) => {
            event.preventDefault();
            validateEmail(email);
          }}
        >
          <div className="flex flex-col gap-y-4 lg:flex-row gap-x-4">
            <div className="relative">
              <input
                type="text"
                id="hs-trailing-icon"
                name="hs-trailing-icon"
                className={`w-[360px] h-14 mx-auto  text-start pl-4 xl:w-[340px] focus:outline-none border-[3px] ${
                  errorinput
                    ? "border-[#fa5757] rounded-t-md"
                    : "border-none rounded-md"
                }`}
                placeholder="Enter your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <div>
                <p
                  className={`${
                    errorinput ? "block" : "hidden"
                  } text-start text-xs font-medium text-[#fff] pl-3 py-2 bg-[#fa5757] rounded-b-md italic`}
                >
                  Whoops, make sure it's an email
                </p>
              </div>

              <div
                className={`${
                  errorinput ? "absolute" : "hidden"
                } inset-y-0 right-0 -top-8 flex items-center pointer-events-none z-20 pr-4`}
              >
                <img src="/images/icon-error.svg" alt="error" />
              </div>
            </div>

            <button className="w-[360px] border-2 border-transparent h-14 lg:w-32 font-medium mx-auto text-white rounded-lg bg-[#fa5757] hover:border-[#fa5757] hover:bg-white transition-all duration-300 hover:text-[#fa5757]">
              Contact Us
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
