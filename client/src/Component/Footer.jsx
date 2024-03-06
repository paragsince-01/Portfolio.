import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="w-full p-8 bg-gray-200 h-48 rounded-xl">
      <div className="flex md:flex-row flex-wrap sm:flex-col items-center justify-start sm:gap-x-6 md:gap-y-6 md:gap-x-12 bg-gray-200 text-center md:justify-between">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="cursor-pointer py-1.5 font-bold text-3xl w-36"
        >
          Portfolio.
        </Typography>
        <ul className="ml-2 mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 md:gap-x-8 text-2xl">
          
        <Typography
              as="li"
              href="#"
              color="blue-gray"
              className="font-medium tracking-wide transition-colors text-gray-800 hover:underline"
            >
            <Link to="/about">About Me</Link>
            </Typography>
            <Typography
              as="li"
              href="#"
              color="blue-gray"
              className="font-medium tracking-wide transition-colors text-gray-800 hover:underline"
            >
               <Link to="/">License</Link>
            </Typography>
            <Typography
              as="li"
              href="#"
              color="blue-gray"
              className="font-medium tracking-wide transition-colors text-gray-800 hover:underline"
            >
              Contribute
            </Typography>
            <Typography
              as="li"
              href="#"
              color="blue-gray"
              className="font-medium tracking-wide transition-colors text-gray-800 hover:underline"
            >
              <Link to='/contact'>Contact Us </Link>
            </Typography>          
        </ul>
      </div>
      <hr className="my-3 md:my-6 border-b border-gray-800" />
      <div className="flex justify-between items-center">
      <Typography color="blue-gray" className="text-left font-normal">
        &copy; 2024 Portfolio.
      </Typography>
      <div className='relative top-0 right-4'>
          <ul className='flex gap-4'>
            <li><Link to="" className='text-2xl text-gray-800 '><FontAwesomeIcon icon={faLinkedin} /></Link></li>
            <li><Link to="" className='text-2xl text-gray-800 '><FontAwesomeIcon icon={faGithub} /></Link></li>
            <li><Link to="" className='text-2xl text-gray-800 '><FontAwesomeIcon icon={faInstagram} /></Link></li>
            <li><Link to="" className='text-2xl text-gray-800 '><FontAwesomeIcon icon={faDribbble} /></Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
