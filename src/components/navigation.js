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


  const NavbarMenu = () => (
    <nav className="fixed inset-0 flex flex-col">
      <div className="bg-white h-3/4 w-full p-6 transition duration-800 ease-in-out">
        <nav className="phone:grid phone:place-items-left gap-4 gilroy-semibold text-black">
          <Link to="/Web" className="flex" onClick={() => setShowNav(false)}>
            <img className="h-5 w-5 mr-2" src={home} alt="Home" />
            Home
          </Link>
          <Link to="/Services" className="flex" onClick={() => setShowNav(false)}>
            <img className="h-4 w-4 mr-2" src={service} alt="Services" />
            Services
          </Link>
          <Link to="/Vision" className="flex" onClick={() => setShowNav(false)}>
            <img className="h-5 w-5 mr-2" src={vision} alt="Vision" />
            Vision
          </Link>
          <Link to="/Contact" className="flex" onClick={() => setShowNav(false)}>
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
      <header className="sticky top-0 flex laptop:mx-10 desktop:mx-20 tablet:mx-5 my-2">
        <img
          className="phone:w-2/5 phone:m-5 tablet:w-1/6 tablet:m-10"
          src={img1}
          alt="Logo"
        />
        <nav className="phone:hidden tablet:flex tablet:text-md tablet:gap-2 desktop:text-4xl tablet:mt-6 absolute right-0 top-0 laptop:gap-10 desktop:gap-10 text-white gilroy-regular">

          <Link to="/Web" className="transition tablet:ml-60 ml-10  p-5 duration-0.3 hover:underline hover:decoration-2 hover:rouded-full hover:decoration-orange-500 hover:underline-offset-4 hover:decoration-rounded-full">
            Home
          </Link>

          <Link to="/Services" className="transition p-5 duration-0.3 hover:underline hover:decoration-orange-500 hover:decoration-2 hover:underline-offset-4">
            Services
          </Link>
          <Link to="/Vision" className="transition p-5 duration-0.3 hover:underline hover:decoration-orange-500 hover:decoration-2 hover:underline-offset-4">
            Our Vision
          </Link>
          <Link to="/Contact" className="transition  p-5 duration-0.3 hover:underline hover:decoration-orange-500 hover:decoration-2 hover:underline-offset-4">
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
            className="tablet:hidden phone:absolute right-0 top-0 phone:w-1/6 phone:my-2 phone:opacity-80"
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