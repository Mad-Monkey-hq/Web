import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import img1 from "../images/Mad Monkey-logo.svg";
import navbaricon from "../images/navbar-icon.svg";
import home from "../images/home-icon.svg";
import service from "../images/services-icon.svg"; 
import vision from "../images/vision-icon.svg";
import phone from "../images/phone-icon.svg";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  const handleClick = () => setShowNav(!showNav);

  const NavbarMenu = () => (
    <nav className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-orange-500 rounded-lg p-6">
        <nav className="phone:grid phone:place-items-left gap-4 gilroy-semibold text-black">
          <Link
            to="/Web"
            className="flex"
            onClick={() => setShowNav(false)}
          >
            <img className='h-5 w-5 mr-2' src={home}></img>Home
          </Link>
          <Link
            to="/Services"
            className="flex"
            onClick={() => setShowNav(false)}
          >
            <img className='h-4 w-4 mr-2' src={service}></img>Services
          </Link>
          <Link
            to="/Vision"
            className="flex"
            onClick={() => setShowNav(false)}
          >
            <img className='h-5 w-5 mr-2' src={vision}></img>Vision
          </Link>
          <Link
            to="/Contact"
            className="flex"
            onClick={() => setShowNav(false)}
          >
            <img className='h-5 w-5 mr-2' src={phone}></img>Contact Us
          </Link>
          <Link to="#">
            <button
              className="p-2 w-40 rounded-full hover:bg-blue-700 bg-black text-white font-bold"
              onClick={() => setShowNav(false)}
            >
              1 hour free advice
            </button>
          </Link>
        </nav>
      </div>
    </nav>
  );

  useEffect(() => {
    const handleRouteChange = () => {
      setShowNav(false);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <div>
      <header className="sticky top-0 flex laptop:mx-10 desktop:mx-20 tablet:mx-5 my-2">
        <img
          className="phone:w-1/3 phone:m-4 tablet:w-1/6 tablet:m-10"
          src={img1}
          alt="Logo"
        />
        <nav className="phone:hidden tablet:flex tablet:text-md tablet:gap-2 desktop:text-4xl tablet:mt-6 absolute right-0 top-0 laptop:gap-10 desktop:gap-10 text-white gilroy-regular">
          
          <Link to="/Web" className="transition tablet:ml-60 ml-10  p-5 duration-0.3 hover:underline hover:decoration-orange-500 hover:decoration-4 hover:underline-offset-3">
            Home
          </Link>
          <Link to="/Services" className="transition p-5 duration-0.3 hover:underline hover:decoration-orange-500 hover:decoration-4 hover:underline-offset-3">
            Services
          </Link>
          <Link to="/Vision" className="transition p-5 duration-0.3 hover:underline hover:decoration-orange-500 hover:decoration-4 hover:underline-offset-3">
            Our Vision
          </Link>
          <Link to="/Contact" className="transition  p-5 duration-0.3 hover:underline hover:decoration-orange-500 hover:decoration-4 hover:underline-offset-3">
            Contact Us
          </Link>
          <Link to="#">
            <button className="w-1/8 p-5 tablet:text-xl desktop:text-4xl mr-10 rounded-full bg-gradient-to-br from-pink-500 via-zinc-450 to-cyan-800 hover:bg-blue-700 text-white font-bold">
              1 hour free advice
            </button>
          </Link>
        </nav>
      
        <div className="tablet:hidden phone:grid">
          <button
            onClick={() => setShowNav(true)}
            className="tablet:hidden phone:absolute right-0 top-0 phone:w-1/6 phone:m-1 phone:opacity-80"
          >
            <img className='w-[32px] mt-1' src={navbaricon} alt="Navbar" />
          </button>
          {showNav && <NavbarMenu />}
        </div>
      </header>
    </div>
  );
}

export default Navbar;