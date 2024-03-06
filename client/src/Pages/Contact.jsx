import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faInbox } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-tailwind/react";
import { faLinkedin, faInstagram, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import CallToAction from '../Component/CallToAction.jsx'
import Footer from '../Component/Footer.jsx'
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <>
      <section className="w-full h-full">
        <div className="h-full flex flex-col justify-center items-center p-40 gap-4 bg-gray-200 rounded-lg">
          <h1 className="text-3xl md:text-6xl font-semibold tracking-wide text-gray-800 bounce">
            Contact Us
          </h1>
          <span className="my-2 self-center w-80 md:w-40 border-b-2 border-orange-400"></span>
        </div>

        <div className="parent w-full h-full p-10 flex flex-col gap-16">
          <div className="1stChild flex flex-wrap gap-16 justify-around items-center">
            <div className=" border border-orange-500 hover:shadow-xl w-80 h-40 rounded-lg flex flex-col text-center gap-4 p-5">
              <FontAwesomeIcon
                icon={faMobile}
                className="text-2xl  text-gray-800"
              />
              <span className="text-xl font-semibold tracking-wide text-gray-800">
                +91 2222 547487
              </span>
              <span className="text-xl tracking-wide text-gray-800">
                Monday-Friday || 10am - 10pm
              </span>
            </div>
            <div className=" border border-orange-500 hover:shadow-xl w-80 h-40 rounded-lg flex flex-col text-center gap-4 p-5">
              <FontAwesomeIcon
                icon={faCity}
                className="text-2xl  text-gray-800"
              />
              <span className="text-xl font-semibold tracking-wide text-gray-800">
                Haryana, India
              </span>
              <span className="text-xl tracking-wide text-gray-800">
                Gurugram-122504
              </span>
            </div>
            <div className=" border border-orange-500 hover:shadow-xl w-80 h-40 rounded-lg flex flex-col text-center gap-4 p-5">
              <FontAwesomeIcon
                icon={faInbox}
                className="text-2xl  text-gray-800"
              />
              <span className="text-xl font-semibold tracking-wide text-gray-800">
                paragagarwal675@gmail.com
              </span>
              <span className="text-xl tracking-wide text-gray-800">
                Keep in touch
              </span>
            </div>
          </div>
          <div className="2ndChild flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="w-[25rem] md:w-[50rem] h-[32rem] rounded-lg flex flex-col text-left gap-[1.5rem] p-6 shadow-xl border border-orange-500 ">
              <div className="flex flex-col text-left">
                <h1 className="text-5xl font-semibold tracking-wide text-gray-800">
                  Get In Touch
                </h1>
                <span className="my-4 w-40 border-b-2 border-orange-400"></span>
              </div>

              <form className="flex flex-col gap-[1rem] w-full h-full">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  id="name"
                  className="rounded-lg border border-gray-800 h-12"
                />
                <input
                  type="text"
                  placeholder="Enter Your Email Adress"
                  id="email"
                  className="rounded-lg border border-gray-800 h-12"
                />
                <textarea
                  id="text"
                  cols="10"
                  rows="5"
                  maxLength="200"
                  placeholder="Message"
                  className="rounded-lg border border-gray-800"
                />
                <span>max length : 200</span>
                <Button className="tracking-widest w-52 text-base">
                  Send Message
                </Button>
              </form>
            </div>
            <div className=" w-[26rem] md:w-72">
            <div className="h-full flex flex-col p-5 justify-start items-start gap-4">
          <h1 className="text-3xl font-semibold tracking-wide text-gray-800">
            Message Me
          </h1>
          <span className="my-4 w-20 border-b-2 border-orange-400"></span>
          <p className="text-left text-lg tracking-widest">Feel free to reach out and message me. I'm here to assist and answer any questions you may have.</p>
          {/*  <SocialIcons /> */}
          <div className='relative top-5 left-0'>
          <ul className='flex gap-8'>
            <li><Link to="" className='text-3xl text-gray-800 '><FontAwesomeIcon icon={faLinkedin} /></Link></li>
            <li><Link to="" className='text-3xl text-gray-800 '><FontAwesomeIcon icon={faGithub} /></Link></li>
            <li><Link to="" className='text-3xl text-gray-800 '><FontAwesomeIcon icon={faInstagram} /></Link></li>
            <li><Link to="" className='text-3xl text-gray-800 '><FontAwesomeIcon icon={faDribbble} /></Link></li>
          </ul>
        </div>
        </div>
            </div>
          </div>
        </div>
        <CallToAction />
        <Footer />
      </section>
    </>
  );
}
