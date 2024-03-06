import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import CallToAction from "../Component/CallToAction";
import Footer from "../Component/Footer";
import { Button } from "@material-tailwind/react";
import { Progress, Typography } from "@material-tailwind/react";

export default function About() {
  return (
    <>
      <section className="h-full w-full">
        <div className="h-full flex flex-col justify-center items-center p-40 gap-4 bg-gray-200 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide text-gray-800 bounce">
            About Me
          </h1>
          <span className="my-2 self-center w-80 md:w-40 border-b-2 border-orange-400"></span>
        </div>
        {/* ------------------------- */}
        <div className="grid md:grid-cols-3 grid-col-1  gap-10 p-24 h-full w-full items-center justify-center">
          <div className="bg-orange-500 w-[20rem] h-[32rem] rounded-2xl py-4 self-center">
            <img
              src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/section-1-bg1.jpg"
              className="rounded-2xl relative right-7 w-[20rem] h-[30rem] shadow-2xl"
            />
          </div>
          {/* 
        
        
        
        */}
          <div className=" flex flex-col gap-4 relative md:bottom-10 bottom-0 ">
            <h1 className="text-3xl font-semibold tracking-wider text-gray-800">
              Developing With Passion While Expolring The World
            </h1>
            <span className="my-2 text-left w-40 border-b-2 border-orange-400"></span>
            <p className="text-xl leading-relaxed tracking-wider p-0">
              A dedicated web developer, I bring expertise in in designing and
              building dynamic websites. Proficient in languages like HTML, CSS,
              JavaScript, and frameworks and frameworks such as React, I am
              committed to
              <br className="hidden md:block" />
              <br className="hidden md:block" /> delivering user-centric,
              visually appealing, to and responsive web applications.
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-lg">Let's talk_ </span>
              <span className="text-2xl italic tracking-widest text-blue-gray-900 font-bold">
                paragagarwal675@gmail.com
              </span>
            </div>
          </div>

          {/*
         
         
         
         */}
          <div className=" flex flex-col gap-4 md:relative top-0 left-8">
            <h1 className="text-3xl font-semibold tracking-wider text-gray-800 ">
              I Create Masterpiece Not Just Products
            </h1>
            <span className="my-2 text-left w-40 border-b-2 border-orange-400"></span>
            <p className="text-xl leading-relaxed tracking-wider p-0">
              In my hands, projects become timeless masterpieces. I design with
              passion, infusing creativity and innovation into every detail,
              surpassing mere product creation.
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              With a touch of artistry, I redefine projects into extraordinary
              masterpieces, blending creativity and precision for enduring and
              remarkable results.
            </p>
            <div className="relative top-0 left-0">
              <ul className="flex gap-10">
                <li>
                  <Link to="" className="text-3xl text-gray-800 ">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-3xl text-gray-800 ">
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-3xl text-gray-800 ">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-3xl text-gray-800 ">
                    <FontAwesomeIcon icon={faDribbble} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ------------------------- */}
        <div className="w-full h-full bg-gray-200 p-10 flex flex-col gap-8 rounded-lg">
          <div className="grid md:grid-cols-2 grid-col-1 md:gap-2 gap-8  ">
            <div className=" flex flex-col gap-4">
              <h1 className="text-4xl font-semibold text-gray-800 leading-normal">
                Frontend Developer
              </h1>
              <span className="my-2 self-left w-20 border-b-2 border-orange-400"></span>
              <p className="text-left pr-16 text-lg leading-loose">
                As a frontend developer, I specialize in crafting engaging user
                interfaces. Proficient in HTML, CSS, and JavaScript, I bring
                designs to life with responsive and visually appealing web
                applications. My expertise includes working with popular
                frontend frameworks like React and Vue.js. I am passionate about
                optimizing user experiences, ensuring seamless interactions, and
                staying current with evolving web technologies. Collaborative
                and detail-oriented, I thrive in transforming design concepts
                into dynamic and efficient frontend solutions. From creating
                responsive layouts to integrating interactive elements, I am
                dedicated to delivering visually stunning and highly functional
                digital experiences.
              </p>
            </div>
            <div className="w-full h-full flex flex-col md:relative top-20 left-0">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="h6">
                  HTML
                </Typography>
                <Typography color="blue-gray" variant="h6">
                  80%
                </Typography>
              </div>
              <Progress
                value={80}
                className="bg-white h-4 shadow-md mb-4  aboutAnimation"
                color="amber"
              />

              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="h6">
                  CSS
                </Typography>
                <Typography color="blue-gray" variant="h6">
                  80%
                </Typography>
              </div>
              <Progress
                value={80}
                className="bg-white h-4 shadow-md mb-4 aboutAnimation"
                color="amber"
              />

              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="h6">
                  JavaScript
                </Typography>
                <Typography color="blue-gray" variant="h6">
                  50%
                </Typography>
              </div>
              <Progress
                value={50}
                className="bg-white h-4 shadow-md mb-4 aboutAnimation"
                color="amber"
              />

              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="h6">
                  React.js
                </Typography>
                <Typography color="blue-gray" variant="h6">
                  80%
                </Typography>
              </div>
              <Progress
                value={80}
                className="bg-white h-4 shadow-md mb-4 aboutAnimation"
                color="amber"
              />

              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="h6">
                  Material UI
                </Typography>
                <Typography color="blue-gray" variant="h6">
                  60%
                </Typography>
              </div>
              <Progress
                value={60}
                className="bg-white h-4 shadow-md mb-4 aboutAnimation"
                color="amber"
              />

              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="h6">
                  Tailwind CSS
                </Typography>
                <Typography color="blue-gray" variant="h6">
                  80%
                </Typography>
              </div>
              <Progress
                value={80}
                className="bg-white h-4 shadow-md mb-4 aboutAnimation"
                color="amber"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-col-1 md:gap-20 gap-8">
            <div className=" flex flex-col gap-4 md:order-2 order-1">
              <h1 className="text-4xl font-semibold text-gray-800 leading-normal">
                Backend Developer
              </h1>
              <span className="my-2 self-left w-20 border-b-2 border-orange-400"></span>
              <p className="text-left text-lg leading-loose">
                As a backend developer, I specialize in server-side
                technologies, database management, and server logic. Proficient
                in languages like Node.js, Python, and Java, I architect robust
                and scalable backend systems. My expertise includes designing
                APIs, optimizing databases, and ensuring the seamless
                functionality of web applications. I am committed to creating
                efficient, secure, and high-performance server-side solutions.
              </p>
            </div>
            <div className="w-full h-full flex flex-col md:order-1 order-2 md:relative top-20 left-0">
              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="h6">
                  Node.js
                </Typography>
                <Typography color="blue-gray" variant="h6">
                  60%
                </Typography>
              </div>
              <Progress
                value={60}
                className="bg-white h-4 shadow-md mb-4 aboutMeAnimation"
                color="amber"
              />

              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="h6">
                  Express
                </Typography>
                <Typography color="blue-gray" variant="h6">
                  40%
                </Typography>
              </div>
              <Progress
                value={40}
                className="bg-white h-4 shadow-md mb-4 aboutMeAnimation"
                color="amber"
              />

              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="h6">
                  MongoDB
                </Typography>
                <Typography color="blue-gray" variant="h6">
                  50%
                </Typography>
              </div>
              <Progress
                value={50}
                className="bg-white h-4 shadow-md mb-4 aboutMeAnimation"
                color="amber"
              />

              <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="h6">
                  Git || GitHub
                </Typography>
                <Typography color="blue-gray" variant="h6">
                  80%
                </Typography>
              </div>
              <Progress
                value={80}
                className="bg-white h-4 shadow-md mb-4 aboutMeAnimation"
                color="amber"
              />

              {/* <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="h6">
                  Material UI
                </Typography>
                <Typography color="blue-gray" variant="h6">
                  60%
                </Typography>
              </div>
              <Progress
                value={60}
                className="bg-white h-4 shadow-md mb-4"
                color="amber"
              /> */}

              {/* <div className="mb-2 flex items-center justify-between gap-4">
                <Typography color="blue-gray" variant="h6">
                  Tailwind CSS
                </Typography>
                <Typography color="blue-gray" variant="h6">
                  80%
                </Typography>
              </div>
              <Progress
                value={80}
                className="bg-white h-4 shadow-md mb-4"
                color="amber"
              /> */}
            </div>
          </div>
          <Button className="tracking-widest w-52 text-base self-center md:relative top-5 left-0">
            Download CV
          </Button>
        </div>
        {/* ---------------------- */}
      </section>
      <CallToAction />
      <Footer />
    </>
  );
}
