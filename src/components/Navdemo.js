import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import img1 from "../images/Mad Monkey-logo.svg";
import navbaricon from "../images/navbar-icon.svg";
import home from "../images/home-icon.svg";
import service from "../images/services-icon.svg";
import vision from "../images/vision-icon.svg";
import phone from "../images/phone-icon.svg";
import close from "../images/close.svg"

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  const handleClick = () => setShowNav(!showNav);

  const NavbarMenu = () => (
    <nav className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-blur-50">
      <div className="bg-orange-500 rounded-lg p-6" onClick={(e) => e.stopPropagation()}>
        <nav className="sm:grid sm:place-items-left gap-4 gilroy-semibold text-black">
          <button onClick={() => setShowNav(false)}>
            <img src={close} alt="Close" className="ml-36 h-6 w-6" />
          </button>
          <Link to="/Web" className="flex transition-all duration-300 ease-in-out" onClick={() => setShowNav(false)}>
            <img className="h-5 w-5 mr-2" src={home} alt="Home" />
            Home
          </Link>
          <Link to="/Services" className="flex transition-all duration-300 ease-in-out" onClick={() => setShowNav(false)}>
            <img className="h-4 w-4 mr-2" src={service} alt="Services" />
            Services
          </Link>
          <Link to="/Vision" className="flex transition-all duration-300 ease-in-out" onClick={() => setShowNav(false)}>
            <img className="h-5 w-5 mr-2" src={vision} alt="Vision" />
            Vision
          </Link>
          <Link to="/Contact" className="flex transition-all duration-300 ease-in-out" onClick={() => setShowNav(false)}>
            <img className="h-5 w-5 mr-2" src={phone} alt="Contact" />
            Contact Us
          </Link>
          <Link to="#">
            <button
              className="p-2 w-40 rounded-full hover:bg-blue-700 bg-black text-white font-bold transition-all duration-300 ease-in-out"
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
      <header className="top-0 flex laptop:mx-10 desktop:mx-20 tablet:mx-5 my-2">
        <img
          className="sm:w-2/5 sm:m-5 tablet:w-1/6 tablet:m-10"
          src={img1}
          alt="Logo"
        />
        <nav className="sm:hidden tablet:sticky tablet:flex tablet:text-md tablet:gap-2 desktop:text-4xl tablet:mt-6 absolute right-0 top-0 laptop:gap-10 desktop:gap-10 text-white gilroy-regular">

          <Link to="/Web" className="hover:transition tablet:ml-60 ml-10  p-5 hover:duration-300 hover:underline hover:decoration-4 hover:decoration-orange-500 hover:underline-offset-4 hover:decoration-rounded-full">
            Home
          </Link>
          <Link to="/Services" className="transition p-5 duration-0.3 hover:underline hover:decoration-orange-500 hover:decoration-4 hover:underline-offset-4">
            Services
          </Link>
          <Link to="/Vision" className="transition p-5 duration-0.3 hover:underline hover:decoration-orange-500 hover:decoration-4 hover:underline-offset-4">
            Our Vision
          </Link>
          <Link to="/Contact" className="transition  p-5 duration-0.3 hover:underline hover:decoration-orange-500 hover:decoration-4 hover:underline-offset-4">
            Contact Us
          </Link>
          <Link to="#">
            <button className="w-1/8 p-5 tablet:text-xl desktop:text-4xl mr-10 rounded-full bg-gradient-to-br from-pink-500 via-zinc-450 to-cyan-800 hover:bg-blue-700 text-white font-bold">
              1 hour free advice
            </button>
          </Link>
        </nav>

        <div className="tablet:hidden sm:grid">
          <button
            onClick={() => setShowNav(true)}
            className="tablet:hidden sm:absolute right-0 top-0 sm:w-1/6 sm:my-2 sm:opacity-80"
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