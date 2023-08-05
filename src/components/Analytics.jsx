import React from "react";
import Laptop from "../assets/laptop.jpg";
import TextButton from "./TextButton";

const Analytics = () => {
  return (
    <div className="w-full bg-white px-4 py-6">
      <div className="mx-auto grid max-w-screen-xl md:grid-cols-2">
        <img className="mx-auto my-4 w-[500px]" src={Laptop} alt="/" />
        <div className="flex flex-col items-start justify-center">
          <p className="font-bold uppercase text-emerald-400">
            Data analytics dashboard
          </p>
          <h1 className="mt-2 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
            Manage Data Analytics Centrally
          </h1>
          <p className="mt-2 text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus, veniam? Quibusdam ut delectus, sequi eligendi
            accusantium saepe aliquid officia tenetur commodi ratione dolor
            nesciunt, molestias inventore repellat vitae adipisci ipsum!
          </p>
          <div className="self-center">
            <TextButton text="Get started" type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
