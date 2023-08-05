import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full px-4 py-12 text-white">
      <div className="mx-auto grid max-w-screen-xl lg:grid-cols-5">
        <div className="my-4 lg:col-span-3">
          <h1 className="py-2 text-xl font-bold sm:text-2xl md:text-3xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="font-bold">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div className="my-4 lg:col-span-2">
          <div className="flex w-full flex-col items-center justify-between sm:flex-row">
            <input
              type="email"
              placeholder="Enter email"
              className="flex w-full rounded-xl p-3 font-medium text-black focus:outline-none"
            />
            <button
              className="my-6 ml-4 w-[200px] rounded-xl bg-emerald-400 px-6 py-3 font-bold text-black 
                        transition  ease-in-out hover:scale-105 hover:bg-emerald-500 active:bg-emerald-600 "
            >
              Notify me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our{" "}
            <span className="cursor-pointer text-emerald-400 underline">
              privacy policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
