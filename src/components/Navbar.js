import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import img1 from "../images/Mad Monkey-logo.svg";
import navbaricon from "../images/navbar-icon.svg";
import close from "../images/close.svg";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  const handleClick = () => setShowNav(!showNav);

  const NavbarMenu = () => (
    <nav className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg p-8">
        <nav className="phone:grid phone:place-items-center justify-center gap-4 text-black">
          <Link
            to="/Web"
            className="transition duration-0.3 hover:text-yellow-700"
            onClick={() => setShowNav(false)}
          >
            Home
          </Link>
          <Link
            to="/Services"
            className="transition duration-0.3 hover:text-yellow-700"
            onClick={() => setShowNav(false)}
          >
            Services
          </Link>
          <Link
            to="/Testimonials"
            className="transition duration-0.3 hover:text-yellow-700"
            onClick={() => setShowNav(false)}
          >
            Testimonials
          </Link>
          <Link
            to="/Vision"
            className="transition duration-0.3 hover:text-yellow-700"
            onClick={() => setShowNav(false)}
          >
            Our Vision
          </Link>
          <Link
            to="/Contact"
            className="transition duration-0.3 hover:text-yellow-700"
            onClick={() => setShowNav(false)}
          >
            Contact Us
          </Link>
          <Link to="#">
            <button
              className="p-2 w-40 rounded-full bg-gradient-to-br from-fuchsia-500 via-blue-500 to-indigo-900 hover:bg-blue-700 text-white font-bold"
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
      <header className="sticky top-0">
        <img
          className="phone:w-30 phone:w-40 w-1/3 absolute left-0 top-0 m-10"
          src={img1}
          alt="Logo"
        />
        <nav className="phone:hidden laptop:flex m-10 absolute right-0 top-0 gap-10 text-white gilroy-regular">
          <Link to="/Web" className="transition duration-0.3 hover:text-yellow-700">
            Home
          </Link>
          <Link to="/Services" className="transition duration-0.3 hover:text-yellow-700">
            Services
          </Link>
          <Link to="/Testimonials" className="transition duration-0.3 hover:text-yellow-700">
            Testimonials
          </Link>
          <Link to="/Vision" className="transition duration-0.3 hover:text-yellow-700">
            Our Vision
          </Link>
          <Link to="/Contact" className="transition duration-0.3 hover:text-yellow-700">
            Contact Us
          </Link>
          <Link to="#">
            <button className="p-2 w-40 rounded-full bg-gradient-to-br from-fuchsia-500 via-blue-500 to-indigo-900 hover:bg-blue-700 text-white font-bold">
              1 hour free advice
            </button>
          </Link>
        </nav>
        <div className="laptop:hidden">
          <button
            onClick={() => setShowNav(true)}
            className="laptop:hidden phone:absolute right-0 top-0 phone:w-10 phone:mt-7"
          >
            <img src={navbaricon} alt="Navbar" />
          </button>
          {showNav && <NavbarMenu />}
        </div>
      </header>
    </div>
  );
}

export default Navbar;