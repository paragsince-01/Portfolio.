import React from "react";
import { Button } from "@material-tailwind/react";

export default function CallToAction() {
  return (
    <>
      <div className=" flex flex-col  w-full h-full py-20 md:py-24 justify-center items-center gap-4 md:gap-8">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-wide text-gray-800 aboutMeAnimation">
          Stay In Touch
        </h1>
        <p className="flex self-center text-center px-10 md:px-20 text-base md:text-xl leading-8 text-gray-800 aboutMeAnimation">
          You donn't want to loose me so better stay in touch
        </p>
        <span className="my-2 self-center w-80 md:w-40 border-b-2 border-orange-400 aboutMeAnimation"></span>
        <form className="flex md:flex-row gap-4 flex-col ">
          <input
            type="text"
            placeholder="Enter email address"
            className="rounded-md w-80 md:w-96 h-14 text-xl"
          />
          <Button className="h-14  w-80 md:w-40 tracking-wider bg-gray-800 text-base md:text-xl">
            Subscribe
          </Button>
        </form>
      </div>
    </>
  );
}
