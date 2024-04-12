import React from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

import Home from "./components/Home";
import Vision from "./components/Vision";
import Services from "./components/Services";
import Contact from "./components/Contact";
import img1 from "./images/Mad Monkey-logo.svg"
import linkedin from "./images/linkedin.svg"
import instagram from "./images/instagram.svg"
import facebook from "./images/facebook.svg"


function App() {
  return (
    <>
      <div className='bg-black h-screen w-screen overflow-x-scroll overflow-y-scroll no-scrollbar'>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/web" element={<Home />}></Route>
            <Route exact path="/Vision" element={<Vision />}></Route>
            <Route exact path="/Services" element={<Services />}></Route>
            <Route exact path="/Contact" element={<Contact />}></Route>
          </Routes>
        </Router>
        {/* footer */}

        <div className='tablet:flex laptop:flex desktop:flex phone:hidden bg-white w-screen tablet:gap-5'>

          <div className='flex-col w-2/4 mx-12 desktop:ml-20 desktop:my-10 tablet:my-20 laptop:m-16'>
            <img className='ml-5 laptop:w-1/2 desktop:my-10' src={img1}></img>
            <div className='phone:m-5 tablet:text-xl laptop:text-3xl desktop:text-5xl gilroy-semibold text-red-500 tablet:mt-5'>India’s Leading Product Marketing Agency</div>
          </div>

          <div className='w-1/5 desktop:text-3xl my-10 desktop:mb-20 tablet:flex-col mt-20'>
            <div className='gilroy-bold text-red-500 tablet:text-xl desktop:text-5xl laptop:text-2xl'>Navigation</div>
            <div className='gilroy-medium mt-5 desktop:text-2xl laptop:text-lg tablet:text-md'><a href="#">Home</a></div>
            <div className='gilroy-medium mt-5 desktop:text-2xl laptop:text-lg tablet:text-md'><a href="#">About Us</a></div>
            <div className='gilroy-medium mt-5 desktop:text-2xl laptop:text-lg tablet:text-md'><a href="#">Case Studies</a></div>
            <div className='gilroy-medium mt-5 desktop:text-2xl laptop:text-lg tablet:text-md'><a href="#">Contact Us</a></div>
          </div>

          <div className='w-1/5 desktop:text-5xl desktop:my-20 tablet:flex-col mt-20'>
            <div className='gilroy-bold text-red-500 desktop:text-5xl laptop:text-2xl'>Reach Us</div>
            <div className='gilroy-medium desktop:text-2xl mt-5'><a href="#">+91 9110660335</a></div>
            <div className='gilroy-medium desktop:text-2xl mt-5'><a href="#">connect@madmonkey.in</a></div>
          </div>

          <div className='w-1/5 my-10 desktop:mb-20 tablet:flex-col tablet:mr-10 mt-20'>
            <div className='gilroy-bold text-red-500 desktop:text-5xl laptop:text-2xl'>Connect with us</div>
            <div className='flex gap-5 mt-5'>
              <a href="https://www.linkedin.com/company/madmonkeyhq/about/"><img className='desktop:w-[60px]' src={linkedin}></img></a>
              <a href="#"><img className='desktop:w-[60px]' src={instagram}></img></a>
              <a href="#"><img className='desktop:w-[60px]' src={facebook}></img></a>
            </div>
          </div>

        </div>

        <div className='phone:hidden laptop:grid tablet:grid desktop:grid laptop:text-2xl tablet:text-2xl desktop:text-3xl text-white text-center bg-orange-500 p-2 w-screen gilroy-semibold'>Designed & built with passion in India 🚀</div>


        {/* phone footer */}
        <div className='tablet:hidden phone:text-center desktop:hidden phone:mt-12 bg-white'>

          <div className='p-4'>
            {/* <img className='m-5 desktop:w-1/2 desktop:h-[500px]' src={img1}></img> */}
            <div className='phone:m-5 desktop:text-5xl gilroy-semibold text-orange-500'>India’s Leading Product Marketing Agency</div>
          </div>

          <div className='phone:flex-col desktop:w-1/4'>
            <div className='flex justify-center items-center gap-5'>
              <a href="https://www.linkedin.com/company/madmonkeyhq/about/"><img src={linkedin}></img></a>
              <a href="#"><img src={instagram}></img></a>
              <a href="#"><img src={facebook}></img></a>
            </div>
          </div>

          <div className='phone:text-center phone:mt-5'>
            <div className='gilroy-bold text-orange-500 text-xl'>Reach Us</div>
            <div className='gilroy-medium mt-2'><a href="#">+91 9110660335</a></div>
            <div className='gilroy-medium mt-2'><a href="#">connect@madmonkey.in</a></div>
          </div>


          <div className='phone:text-center phone:mt-10'>
            <div className='gilroy-semibold text-orange-500 text-xl'>Navigation</div>
            <div className='gilroy-semibold mt-2'><a href="#">Home</a></div>
            <div className='gilroy-semibold mt-2'><a href="#">About Us</a></div>
            <div className='gilroy-semibold mt-2'><a href="#">Case Studies</a></div>
            <div className='gilroy-semibold mt-2'><a href="#">Contact Us</a></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
