import React from "react";

function Navbar() {
  return (
    <div>
      <header className="top-0 left-0 w-full h-16 flex justify-between items-center">
      <a
          href="#"
          className="ml-4 mt-20 px-10 text-3xl font-bold text-white drop-shadow-xl"
        >
          <img src="./images/Mad Monkey.jpeg"/>
        </a>

        <nav className="text-base text-white font-medium mt-20 mr-10">
          <a href="#" className="p-8 transition duration-0.3 hover:text-black">
            Home
          </a>
          <a href="#" className="p-8 transition duration-0.3 hover:text-black">
            About
          </a>
          <a href="#" className="p-8 transition duration-0.3 hover:text-black">
            Services
          </a>
          <a href="#" className="p-8 transition duration-0.3 hover:text-black">
            Contact
          </a>
          <a href="#">
          <button class="bg-gradient-to-br from-fuchsia-500 via-blue-500 to-indigo-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Button</button>
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
