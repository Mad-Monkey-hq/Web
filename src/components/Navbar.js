import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/Mad Monkey-logo.svg";
import navbaricon from "../images/navbar-icon.svg";
import close from "../images/close.svg";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => setShowNav(!showNav);

  const NavbarMenu = () => (
    // <nav className="phone:text-center items-center justify-center h-screen">
    //   <Link to="/Web" className="transition duration-0.3 hover:text-yellow-700">
    //     Home
    //   </Link>
    //   <Link
    //     to="/Services"
    //     className="transition duration-0.3 hover:text-yellow-700"
    //   >
    //     Services
    //   </Link>
    //   <Link
    //     to="/Testimonials"
    //     className="transition duration-0.3 hover:text-yellow-700"
    //   >
    //     Testimonials
    //   </Link>
    //   <Link
    //     to="/Vision"
    //     className="transition duration-0.3 hover:text-yellow-700"
    //   >
    //     Our Vision
    //   </Link>
    //   <Link
    //     to="/Contact"
    //     className="transition duration-0.3 hover:text-yellow-700"
    //   >
    //     Contact Us
    //   </Link>
    //   <Link to="#">
    //     <button className="p-2 w-40 rounded-full bg-gradient-to-br from-fuchsia-500 via-blue-500 to-indigo-900 hover:bg-blue-700 text-white font-bold">
    //       1 hour free advice
    //     </button>
    //   </Link>
    // </nav>
    <h1 className="text-white text-4xl">hi bro</h1>
  );

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
          <Link
            to="/Services"
            className="transition duration-0.3 hover:text-yellow-700"
          >
            Services
          </Link>
          <Link
            to="/Testimonials"
            className="transition duration-0.3 hover:text-yellow-700"
          >
            Testimonials
          </Link>
          <Link
            to="/Vision"
            className="transition duration-0.3 hover:text-yellow-700"
          >
            Our Vision
          </Link>
          <Link
            to="/Contact"
            className="transition duration-0.3 hover:text-yellow-700"
          >
            Contact Us
          </Link>
          <Link to="#">
            <button className="p-2 w-40 rounded-full bg-gradient-to-br from-fuchsia-500 via-blue-500 to-indigo-900 hover:bg-blue-700 text-white font-bold">
              1 hour free advice
            </button>
          </Link>
        </nav>

        <div className="laptop:hidden">
        {showNav && <NavbarMenu />}
        <button
          onClick={handleClick}
          className="laptop:hidden phone:absolute right-0 top-0 phone:w-10 phone:mt-7"
        >
          {showNav ? <img src={close} alt="Close" /> : <img src={navbaricon} alt="Navbar" />}
        </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;