import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      <div className="h-full w-full bg-gray-200 mb-8 rounded-xl">
        <div className=" flex flex-col text-center  py-16 aboutMeAnimation">
          <h1 className="text-4xl font-semibold tracking-wide text-gray-800">
            What Services I'm Providing
          </h1>
          <p className="my-2 text-lg text-center px-10 md:p-0  ">
            FrontEnd & BackEnd Development and DataBase Managment
          </p>
          <span className="my-2 self-center w-80 md:w-40 border-b-2 border-orange-400"></span>
        </div>
        <div className="flex  flex-col md:flex-row justify-center items-center gap-16 px-14 pb-20 ">
          <div className="w-[22rem] h-[30rem] bg-white shadow-2xl rounded-2xl flex flex-col gap-8 justify-center items-center">
            <img
              className=" w-20 h-20 object-cover rounded-full"
              src="https://www.namasteui.com/wp-content/uploads/2019/07/Full-Stack-Developer.jpg"
              alt=""
            />
            <h1 className="text-center text-2xl text-gray-800 font-link
">
              Full Stack Development
            </h1>
            <p className="text-center tracking-wide  text-lg px-4">
            MERN stack developers can create end-to-end web applications, handling both the front-end (UI/UX) and back-end development. They use React for the client-side and Node.js with Express for the server-side,
            </p>
            <Link>
              <span className="w-10 h-10 justify-center itemes-center flex py-2 text-xl border-2 border-orange-500 rounded-full">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Link>
          </div>
          <div className="w-[22rem] h-[30rem] bg-white shadow-2xl rounded-2xl flex flex-col gap-8 justify-center items-center">
            <img
              className=" w-20 h-20 object-cover  rounded-full"
              src="https://www.itrobes.com/wp-content/uploads/2022/05/custom-web-app-development-e1651730534609-1024x924.jpg"
              alt=""
            />
            <h1 className="text-center text-2xl text-gray-800">
              Custom Web Apps Development
            </h1>
            <p className="text-center tracking-wide  text-lg px-4 ">
            Developers can build custom web apps tailored to the specific needs & requirements of clients. These apps may range from content management systems (CMS) and e-commerce platforms
            </p>
            <Link>
              <span className="w-10 h-10 justify-center itemes-center flex py-2 text-xl border-2 border-orange-500 rounded-full">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Link>
          </div>
          <div className="w-[22rem] h-[30rem] bg-white shadow-2xl rounded-2xl flex flex-col gap-8 justify-center items-center">
            <img
              className=" w-20 h-20 object-cover  rounded-full"
              src="https://secureservercdn.net/198.12.144.78/skm.ce6.myftpupload.com/wp-content/uploads/2019/09/Illustration-for-API-Integration-Interface.jpg"
              alt=""
            />
            <h1 className="text-center text-2xl text-gray-800">
              API Development and <br /> Integration
            </h1>
            <p className="text-center  tracking-wide  text-lg px-4">
            MERN stack developers can design and implement RESTful APIs using Express.js on the server side. They can also integrate third-party APIs to enhance the functionality of web applications, enabling features.
            </p>
            <Link>
              <span className="w-10 h-10 justify-center itemes-center flex py-2 text-xl border-2 border-orange-500 rounded-full">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
