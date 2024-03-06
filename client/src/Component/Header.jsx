import React, { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
// import { Bars3Icon, XMarkIcon } from "@";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function NavList() {
  const [activeLink, setActiveLink] = useState("Home");
  return (
    <ul className="my-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:justify-between md:gap-4 lg:gap-x-10 pr-12">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-xl rounded-md font-link"
      >
        <Link
          to="/"
          className="flex items-center"
          id="Home"
          onClick={() => setActiveLink("Home")}
          style={{borderBottom: activeLink === "Home" ? "2px solid orange" : "none"}}
        >
          Home
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-xl rounded-md font-link"
      >
        <Link
          to="/about"
          className="flex items-center "
          id="About"        
          onClick={() => setActiveLink("About")}
          style={{borderBottom: activeLink === "About" ? "2px solid orange" : "none"}}
        >
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-xl rounded-md font-link"
      >
        <Link
          to="/projects"
          className="flex items-center "
          id="Projects"        
          onClick={() => setActiveLink("Projects")}
          style={{borderBottom: activeLink === "Projects" ? "2px solid orange" : "none"}}
        >
          Projects
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-xl rounded-md font-link"
      >
        <Link
          to="/contact"
          className="flex items-center"
          id="Contact"        
          onClick={() => setActiveLink("Contact")}
          style={{borderBottom: activeLink === "Contact" ? "2px solid orange" : "none"}}
        >
          Contact
        </Link>
      </Typography>
    </ul>
  );
}

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
    
    <Navbar className=" fixed w-full px-6 py-3 ml-2 bg-gray-200 z-50">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 font-semibold text-4xl font-link"
        >
          Portfolio.
        </Typography>        
        <div className="hidden md:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="md:hidden lg:hidden inline-block ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            // <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            <FontAwesomeIcon
              icon={faTimes}
              className="h-6 w-6"
              strokeWidth={2}
            />
          ) : (
            // <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            <FontAwesomeIcon
              icon={faBars}
              className="h-6 w-6"
              strokeWidth={2}
            />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>    
    </>
  );
}
//
