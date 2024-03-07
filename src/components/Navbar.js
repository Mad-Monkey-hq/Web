import React from "react";
import {
  Link,
  Routes
} from "react-router-dom";
import img1 from "../images/Mad Monkey.jpeg"

function Navbar() {
  return (
    <div>
      <header className="top-0 left-0 w-full h-16 flex justify-between items-center">
        <div className="mt-20 ml-10"><img src={img1} /></div>
        <nav className="text-base text-white font-medium mt-20 mr-10">
          <Link to="/" className="p-8 transition duration-0.3 hover:text-yellow-700">
            Home
          </Link>
          <Link to="/Services" className="p-8 transition duration-0.3 hover:text-yellow-700">
            Services
          </Link>
          <Link to="/Testimonials" className="p-8 transition duration-0.3 hover:text-yellow-700">
            Testimonials
          </Link>
          <Link to="/Vision" className="p-8 transition duration-0.3 hover:text-yellow-700">
            Our Vision
          </Link>
          <Link to="/Contact Us" className="p-8 transition duration-0.3 hover:text-yellow-700">
            Contact Us
          </Link>
          <Link to="#">
            <button class="bg-gradient-to-br from-fuchsia-500 via-blue-500 to-indigo-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">1 hour free advice</button>
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
