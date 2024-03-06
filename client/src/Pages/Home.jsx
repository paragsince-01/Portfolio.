import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import CallToAction from '../Component/CallToAction';
import Footer from '../Component/Footer';
import AboutMe from '../Component/AboutMe';
import Services from '../Component/Services';
export default function Home() {
  return (
    <>
    <div className='justify-start items-center pt-40 pb-12 md:py-40 px-10 md:px-20 w-full h-full flex flex-row bg-gray-200 rounded-xl relative top-10 mb-10'>
      <div className="flex flex-row relative bottom-5 md:bottom-0">
        <div className='relative top-0 right-4'>
          <ul className='flex flex-col gap-4'>
            <li><Link to="" className='text-2xl text-gray-800 '><FontAwesomeIcon icon={faLinkedin} /></Link></li>
            <li><Link to="" className='text-2xl text-gray-800 '><FontAwesomeIcon icon={faGithub} /></Link></li>
            <li><Link to="" className='text-2xl text-gray-800 '><FontAwesomeIcon icon={faInstagram} /></Link></li>
            <li><Link to="" className='text-2xl text-gray-800 '><FontAwesomeIcon icon={faDribbble} /></Link></li>
          </ul>
        </div>
        <div className="flex flex-col homeAnimation">
          <h1 className='p-0 text-3xl md:text-7xl text-gray-800 font-bold tracking-wide'>I'm Web Developer <br /> 
          Parag Aggarwal</h1>
          <p className='my-4 tracking-wide md:text-lg text-base leading-normal text-gray-800 '>A web developer builds websites utilizing programming  languages, <br className='hidden md:block' />  frameworks, and technologies to create  functional and visually <br className='hidden md:block' /> appealing online experiences.</p>
        <Button className='w-40 tracking-wide bg-gray-800 text-base'>Learn More</Button>
        </div>
      </div>
      <div className=""></div>
    </div>
    <AboutMe />
    <Services />
    <CallToAction />
    <Footer />
    </>

  )
}
