import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import img1 from "../images/Mad Monkey-logo.svg";
import navbaricon from "../images/navbar-icon.svg";
import home from "../images/home-icon.svg";
import service from "../images/services-icon.svg";
import vision from "../images/vision-icon.svg";
import phone from "../images/phone-icon.svg";
import close from "../images/close.svg"
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {
  let Links = [
    { name: "Home", link: "/Web" },
    { name: "Service", link: "/Services" },
    { name: "Vision", link: "/Vision" },
    { name: "Contact", link: "/Contact" },

  ];
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full mb-20 fixed'>
      <div className='md:flex md:h-[62px] items-center justify-between bg-black py-4 md:px-10 px-7'>
        <img className="phone:w-1/2 tablet:ml-5 md:w-1/5 phone:mt-4" src={img1}></img>
        <div onClick={()=>setOpen(!open)} className='absolute right-4 top-7 cursor-pointer phone:bg-orange-500 phone:rounded-xl md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
        </div>

        <ul className={`gilroy-semibold tablet:bg-black desktop:bg-black laptop:bg-black phone:bg-white phone:w-full phone:h-full phone:mt-2 phone:text-black md:flex md:w-1/2 md:items-center md:pb-0 pb-12 absolute md:static md:z-auto md:pl-0 px-5 phone:fixed phone:rounded-r-3xl transition-all duration-500 ease-out ${open ? 'left-0' : 'left-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl phone:text-center md:bg-black md:text-white md:my-0 my-7'>
                <a href={link.link} className='md:text-white hover:underline hover:decoration-4 hover:decoration-orange-500 rounded-xl'>{link.name}</a>
              </li>
            ))
          }
          <Link to="#">
            <button className="p-3 phone:hidden md:flex tablet:text-lg desktop:text-4xl md:mx-5 rounded-full bg-gradient-to-br from-pink-500 via-zinc-450 to-cyan-800 hover:bg-blue-700 text-white font-bold">
              1 hour free advice
            </button>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Nav