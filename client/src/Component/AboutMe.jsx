import { Button } from "@material-tailwind/react";
import React from "react";

export default function AboutMe() {
  return (
    <>
      <div className="w-full h-full text-gray-800 mb-10">
        <div className=" flex flex-col text-center py-10 aboutMeAnimation">
          <h1 className=" text-4xl md:text-6xl font-semibold tracking-wide text-gray-800">
            About Me
          </h1>
          <p className="my-2 text-lg text-center md:p-0 px-10 ">
          Passionate web developer creating innovative and user-centric digital experiences.
          </p>
          <span className="my-2 self-center w-80 md:w-40 border-b-2 border-orange-400"></span>
        </div>
        <div className="flex md:flex-row flex-col md:gap-4 md:px-10">
          <div className="flex flex-col px-10 md:px-5">
            <h1 className="text-4xl font-semibold text-gray-800 leading-normal">
              Developing With a Passion <br className="hidden md:block" />
              While Enjoying The World
            </h1>
            <span className="my-2 self-left w-20 border-b-2 border-orange-400"></span>
            <p className="text-lg leading-8">
            A dedicated web developer, I bring expertise in 
              <br className="hidden md:block" /> in designing and building dynamic websites. Proficient <br className="hidden md:block" />
              in languages like HTML, CSS, JavaScript, and frameworks
              <br className="hidden md:block" /> and frameworks such as React, I am committed to <br className="hidden md:block" />
              <br className="hidden md:block" /> delivering user-centric, visually appealing, <br className="hidden md:block" /> to  and responsive web applications. With a passion
              <br className="hidden md:block" /> for coding and problem-solving,
            </p>

            <Button className="w-80 md:w-40 tracking-wide bg-gray-800 my-4 text-base">
              Contact Me
            </Button>
          </div>
          <div className="py-6 px-10 md:px-0 md:py-36">
            <p className="leading-7 text-lg">
            I strive for innovation, ensuring efficient,
              <br className="hidden md:block" />
              secure, and scalable solutions. Continuously
              <br className="hidden md:block" />
              exploring emerging technologies, I am
              <br className="hidden md:block" />  dedicated to creating impactful and intuitive <br className="hidden md:block" />
              <br className="hidden md:block" /> digital experiences for clients and users alike.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-orange-500 w-[20rem] h-[28rem] rounded-2xl md:relative left-16 top-0 py-4">
              <img
                src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1.jpg"
                className="rounded-2xl relative right-7 w-[20rem] h-[26rem] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
