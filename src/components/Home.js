import React from 'react'
import {
  Link,
} from "react-router-dom";
import monkey2 from "../images/home-white-monkey.svg";
import card1 from "../images/card-img1.svg"
import card2 from "../images/card-img2.svg"
import astro from "../images/astronaut.svg"
import bimg from "../images/bimg.png"
import rimg from "../images/rimg.png"
import yimg from "../images/yimg.png"
import test from "../images/Simply Whyte Design.svg"
import market from "../images/marketplaces.svg"
import sample from "../images/sample.svg"
import emo1 from "../images/emo1.svg"
import emo2 from "../images/emo2.svg"
import emo3 from "../images/emo3.svg"
import green from "../images/1.svg"
import lefta from "../images/arrow-left.svg"
import righta from "../images/arrow-right.svg"
import yagami from "../images/yagami.svg"
import clients from "../images/clients.svg"
import arrowlogo from "../images/arrowlogo.svg"
import glasses from "../images/Glasses.svg"
import img1 from "../images/Mad Monkey-logo.svg"
import linkedin from "../images/linkedin.svg"
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"
import orange from "../images/orangef.svg"


function Home() {
  return (
    <div>

      {/* astro-monkey page */}
      <div className='tablet:flex-col phone:text-center'>
        <div className='tablet:flex phone:center'>
          <div className='flex-col phone:text-center desktop:mt-5 tablet:text-left tablet:text-3xl tablet:w-3/5 tablet:mt-2 desktop:text-4xl'>
            <h2 className='phone:text-3xl desktop:text-9xl desktop:mr-10 desktop:p-10 tablet:text-6xl text-yellow-400 tablet:text-left mt-20 tablet:ml-10 gilroy-semibold'>
              India’s Leading Product Marketing Agency
            </h2>
            <div className='tablet:mt-10 tablet:text-xl laptop:text-2xl laptop:mr-60 phone:m-10 phone:mt-5 phone:text-md desktop:text-5xl desktop:ml-20 gilroy-regular text-white'>With Madmonkey by the side, Recognition goes bananas for your brand! </div>

            <Link to="#"><button className="w-1/8 p-5 tablet:text-xl desktop:text-4xl desktop:ml-20 ml-10 rounded-xl bg-gradient-to-br from-pink-500 via-zinc-450 to-cyan-800 hover:bg-blue-700 text-white font-bold">
              Get in Touch
            </button></Link>

          </div>
            <img className='phone:hidden tablet:flex tablet:w-2/5 m-2' src={astro}></img>
        </div>
      
      </div>

      {/* about us */}
      <div className='tablet:flex phone:justify-self-center m-5'>
        <img className='phone:w-full tablet:w-1/3' src={monkey2}></img>
        <div className='tablet:m-10'>
          <div className='tablet:text-left phone:hidden gilroy-semibold text-yellow-400'>ABOUT US ---</div>
          <div className='phone:text-center tablet:hidden phone:mt-5 gilroy-semibold text-yellow-400'>- ABOUT US -</div>
          <div className='text-white phone:text-center phone:text-2xl phone:mt-5 tablet:text-left tablet:text-4xl gilroy-semibold mt-10'>Your Brand, Our Reach,<br /> a saga forged in heaven</div>
          <div className='tablet:text-2xl text-justify phone:text-sm mt-10 text-white gilroy-medium'>Welcome to the jungle of Madmonkey. To put into layman’s terms, we are a group of service providers who “curate-with-care”, the most impactful solutions to your marketing needs.<br /><br />
            In other words, we put the “fun” in the “fun-damentals” of your marketing needs,from transformation, development to execution.<br /><br />
            Our motto is to customize solutions to suit your Brand needs that make an impact in the market!<br /><br />
            Connect with us to leave your worry behind and go ballistic into the wide world of brands, and this is our Madmonkey promise.
          </div>
        </div>
      </div>

      {/* part-3 */}
      <div className='tablet:flex-col tablet:m-5'>
        <div className='tablet:flex phone:hidden tablet:ml-10 mt-20 gilroy-semibold text-yellow-400'>SERVICES ---</div>
        <div className='tablet:hidden phone:text-center mt-20 gilroy-semibold text-yellow-400'>- SERVICES -</div>
        <div className='phone:text-justify gilroy-semibold text-white tablet:text-4xl phone:text-3xl phone:m-10'>Our offerings which will make you grow</div>
        <div className='tablet:flex gap-10 mt-10'>
          <div className='rounded-3xl bg-gradient-to-r from-amber-500 via-red-400 to-pink-500 tablet:h-192 tablet:w-1/2 phone:w-100 phone:h-50 phone:m-5 phone:p-2'>
            <img className="mt-10 ml-10" src={card1}></img>

            <div className='text-white mt-10 ml-10 gilroy-semibold tablet:text-2xl phone:text-xl'>Customer Review Management</div>

            <div className='text-white tablet:text-xl gilroy-semibold tablet:m-10 phone:m-5 gilroy-medium'><p className='text-justify'>customer reviews are an integral part of your brand. It builds trust, increases traffic and enhances sales. We have a host of product review solutions if you are a brand who needs to make a mark in the industry. Starting from brands who need footfall, to new brands looking to make an impact, we customize product review services across diverse e-commerce platforms to help your brand leave a mark.</p></div>
          </div>

          <div className='rounded-3xl bg-gradient-to-r from-amber-500 via-red-400 to-pink-500 tablet:h-192 tablet:w-1/2 phone:w-100 phone:h-50 phone:m-5 phone:p-2'>
            <img className="mt-10 ml-10" src={card2}></img>

            <div className='text-white mt-10 ml-10 gilroy-semibold tablet:text-2xl phone:text-xl'>Influencer Marketing</div>

            <div className='text-white tablet:m-10 phone:m-5 gilroy-medium tablet:text-xl gilroy-semibold'><p className='text-justify'>Ever wonder if your brand can start a trend? Well, with our bandwidth of macro and micro influencers, you sure can fructify your brand into a trend! The influencer marketing factory is a well oiled machine in this digital era. Thus, we curate brand trends with our verified social media influencers to invent, curate and deliver trends with a promise to turn your products and services into the hype of tomorrow.</p></div>
          </div>

        </div>
      </div>

      {/* part 4 services */}
      <div className='tablet:flex-col phone:text-center mt-10'>
        <div className='phone:hidden tablet:flex tablet:text-2xl gilroy-semibold text-yellow-400 m-10'>KEY PROCESS ---</div>
        <div className='tablet:hidden phone:text-center gilroy-semibold text-yellow-400 mt-20'>- KEY PROCESS -</div>
        <div className='phone:text-center tablet:text-left tablet:ml-10 gilroy-semibold mt-5 text-white text-5xl'>We believe in Design Thinking</div>
      </div>

      <div className='tablet:flex phone:text-center'>

        <div className='phone:text-justify tablet:flex-col m-10'>
          <div className='phone:flex phone:gap-2 text-white gilroy-bold'>
            <div className='text-white underline text-2xl decoration-yellow-400 decoration-2 gilroy-regular'>01</div>
            <div className='text-2xl'>Research</div>
          </div>
          <div className='gilroy-medium tablet:text-xl text-white phone:text-lg mt-5'><p className='text-justify'>To understand your marketing needs, we study your business and come up with a tailored solution</p></div>
          <img className='phone:mt-5 phone:w-full rounded-3xl' src={yimg}></img>
        </div>

        <div className='phone:text-justify tablet:flex-col m-5'>
          <div className='phone:flex tablet:text-2xl phone:gap-2 text-white gilroy-bold'>
            <div className='text-white underline decoration-yellow-400 decoration-2 gilroy-regular'>02</div>
            <div>Strategy</div>
          </div>
          <div className='gilroy-medium tablet:text-xl text-white phone:text-lg mt-5'><p className='text-justify'>The possible solutions are then churned with a cup of coffee into strategizing for the best possible outcome</p></div>
          <img className='phone:mt-5 phone:w-full rounded-3xl' src={rimg}></img>
        </div>

        <div className='phone:text-justify tablet:text-2xl tablet:flex-col m-10'>
          <div className='phone:flex phone:gap-2 text-white gilroy-bold'>
            <div className='text-white underline decoration-yellow-400 decoration-2 gilroy-regular'>03</div>
            <div>Execution</div>
          </div>
          <div className='gilroy-medium tablet:text-xl text-white phone:text-lg mt-5'><p className='text-justify'>Our highly skilled and determined team then put their heart and soul to execute these strategies.</p></div>
          <img className='phone:mt-5 phone:w-full rounded-3xl' src={bimg}></img>
        </div>
      </div>

     
    <div className='text-center bg-white w-screen h-96 tablet:mt-10 tablet:p-20 phone:mt-5 phone:p-10 gilroy-semibold'>
      <div className='phone:text-md'>WHAT DO YOU NEED TO GET YOUR BUSINESS MOVING?</div>
      <div className='mt-5 tablet:text-4xl phone:text-2xl'>Join the Mad Monkey bandwagon and solidify your brand in this concrete jungle now!</div>
      
      <button class="transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300 mt-10 bg-black text-white rounded-lg p-2">speak to us</button>
    </div>

    {/* part 5 */}
    <div className='tablet:flex phone:hidden'>
      <div className='flex-col ml-10 mt-20 w-2/3'>
        <div className='gilroy-semibold text-yellow-400 mt-20'>RESULT-DRIVEN SOLUTIONS ---</div>
        <div className='gilroy-semibold mt-5 text-white text-4xl'>We learn, adapt &<br/> innovate</div>
        <div className='gilroy-medium text-white mr-20 mt-10'><p className='text-justify'>In today’s progressive world, we analyse the results and then innovate to find a better solution customized to your need. These solutions are backed by research that makes sure to drive better results.</p></div>
      </div>
      <div className='mt-40 mr-20 w-1/3'>
        <img src={test}></img>
      </div>
    </div>

    {/* part 6 */}
    <div className='tablet:ml-10 tablet:mt-20 phone:text-center'>
      <div className='gilroy-semibold mt-5 text-white tablet:text-4xl phone:text-center phone:text-2xl'>We are everywhere </div>
      <div className='gilroy-medium text-white phone:text-center phone:m-5 text-justify tablet:mr-40 mt-10'><p className='text-justify'>From A to Z, we work through a diverse array of e-commerce portals to deliver<br/> the best of media and marketing solutions for your brand</p></div>
    </div>
    <img className='align-center' src={market}></img>
    
    {/* part 7 */}
    <div className='tablet:flex phone:hidden'>
      <div className='mt-20 w-1/2 ml-10'><img src={sample}></img></div>
      <div className='flex-col w-1/2'>
        <div className='gilroy-semibold mt-20 text-white text-4xl'>Want campaigns on your own platform ?</div>
        <div className='gilroy-medium text-white mt-10 tablet:mr-10'><p className='text-justify'>The brand is all about how your customers think about you. With our extensive experience in E-commerce marketing, grow your brand name from scratch. Kick-start your platform, Ignite the fire, sit back and watch Madmonkey spread your light in the "Lanka" of budding entrepreneurship.</p></div>
        <button class="gilroy-bold transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300 mt-10 bg-white text-black rounded-lg p-2">speak to us</button>
      </div>
    </div>

    <div className='tablet:hidden phone:text-center'>
        <div className='gilroy-semibold mt-10 text-white text-4xl'>Want campaigns on your own platform ?</div>
        <div className='m-5'><img src={sample}></img></div>
        <div className='gilroy-medium text-white m-5'><p className='text-justify'>The brand is all about how your customers think about you. With our extensive experience in E-commerce marketing, grow your brand name from scratch. Kick-start your platform, Ignite the fire, sit back and watch Madmonkey spread your light in the "Lanka" of budding entrepreneurship.</p></div>
        <button class="gilroy-bold m-5 transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300 bg-white text-black rounded-lg w-40 p-2">speak to us</button>
    </div>

    {/* part 8 */}
    <div className='tablet:flex-col phone:hidden'>
      <div className='gilroy-semibold text-yellow-400 mt-20 ml-10'>WHY US ---</div>
      <div className='gilroy-semibold mt-5 text-white text-4xl ml-10'>We believe in a customized <br/>approach</div>
      <div className='flex'>

        <div className='flex-col bg-red-500 h-80 w-100 ml-5 mt-10 rounded-lg'>
          <div className='ml-5 mt-5'><img src={emo1}></img></div>
          <div className='gilroy-semibold text-white mt-5 ml-5 text-2xl'>Cost Effective </div>
          <div className='m-5 text-white text-justify gilroy-medium'>Less like the shopping malls, and more like the Sarojini Nagar, we believe in cost and quality. Now that you have found Madmonkey, we promise the most reasonable investment to most effective solutions, in the least time possible.</div>
        </div>

        <div className='flex-col bg-red-500 h-80 w-100 ml-5 mt-10 rounded-lg'>
          <div className='ml-5 mt-5'><img src={emo2}></img></div>
          <div className='gilroy-semibold text-white mt-5 ml-5 text-2xl'>Brand Camaraderie </div>
          <div className='m-5 text-white text-justify gilroy-medium'>The best way to get to know someone is to spend time, analyze and understand. That is exactly what we do! We take our time to know your brand, personalize solutions to your problems and et voila! double your profits both in money and mirth. </div>
        </div>

        <div className='flex-col bg-red-500 h-80 w-100 ml-5 mr-5 mt-10 rounded-lg'>
          <div className='ml-5 mt-5'><img src={emo3}></img></div>
          <div className='gilroy-semibold text-white mt-5 ml-5 text-2xl'>Personalized assistance </div>
          <div className='m-5 text-white text-justify gilroy-medium'>We have trained our team to service our clients in the best way possible. So, rest assured any time you have a query, we will be there on the other side of the call walking you out of every doubt.</div>
        </div>
      </div>
    </div>
    {/* stats part */}
      <img className='mt-5 h-100' src={green}></img>
  

    {/* below stats whats it like */}
    <div className='tablet:flex phone:text-center'>
      <div className='tablet:flex-col tablet:text-left tablet:mt-5 tablet:w-1/2 tablet:ml-10'>
        <div className='gilroy-semibold mt-20 text-white text-4xl'>What it’s like to collaborate together.</div>
        <div className='phone:text-center tablet:text-left gilroy-medium text-white mt-5'>Become partners for the long run</div>
        <img className='phone:ml-5 tablet:hidden' src={yagami}></img>
        <div className='tablet:flex tablet:mt-20 phone:mt-10'>
          <button className='transition mr-5 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'><img src={lefta}></img></button>
          <button className='transition ml-5 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'><img src={righta}></img></button>
        </div>
      </div>
      <div className='phone:hidden tablet:flex mt-10 tablet:ml-10'>
        <img src={yagami}></img>
      </div>
    </div>

    {/* clients */}
  
    <img className='w-screen mt-20' src={clients}></img>
 

    {/* pink card */}
    <div className='tablet:h-72 tablet:w-100 h-100 mt-10 mb-10 ml-5 mr-5 rounded-3xl bg-gradient-to-r from-red-600 via-red-600 to-fuchsia-500'>
      <div className='tablet:flex tablet:gap-40'>
        <div className='flex-col mt-10'>
          <div className='tablet:m-10 phone:text-center phone:m-8 gilroy-bold text-white tablet:text-4xl phone:text-xl'>Make Mad Monkey your growth partner today </div>

          <div className='tablet:flex phone:hidden gilroy-bold text-white phone:m-8 tablet:m-10 p-2 tablet:text-4xl underline decoration-white underline-offset-2'>
            <a href="#">Contact Us</a>
            <img className='h-10 w-10' src={arrowlogo}></img>
          </div>

          <div className='tablet:hidden phone:text-center gilroy-bold text-white phone:m-8 tablet:m-10 p-2 tablet:text-4xl underline decoration-white underline-offset-2'>
            <button class="gilroy-bold m-5 transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300 bg-white text-black rounded-lg w-40 p-2">speak to us</button>
          </div>
        </div>

        <img src={glasses} className='tablet:flex phone:hidden tablet:mr-5 tablet:mt-4 tablet:w-1/4 desktop:mt-2 desktop:w-1/5'></img>
      </div>
    </div>

    {/* footer */}

    <div className='tablet:flex phone:hidden tablet:bg-white w-screen h-96 gap-5'>
    
      <div className='flex-col justify-center items-center m-10'>
        <img className='ml-5' src={img1}></img>
        <div className='phone:m-5 tablet:text-2xl gilroy-semibold text-orange-500 tablet:mt-5'>India’s Leading Product Marketing Agency</div>
      </div>

      <div className='tablet:flex-col ml-20 mt-20'>
        <div className='gilroy-bold text-orange-500 text-xl'>Navigation</div>
        <div className='gilroy-medium mt-5'><a href="#">Home</a></div>
        <div className='gilroy-medium mt-5'><a href="#">About Us</a></div>
        <div className='gilroy-medium mt-5'><a href="#">Case Studies</a></div>
        <div className='gilroy-medium mt-5'><a href="#">Contact Us</a></div>
      </div>

      <div className='tablet:flex-col ml-20 mt-20'>
        <div className='gilroy-bold text-orange-500 text-xl'>Reach Us</div>
        <div className='gilroy-medium mt-5'><a href="#">+91 9110660335</a></div>
        <div className='gilroy-medium mt-5'><a href="#">connect@madmonkey.in</a></div>
      </div>

      <div className='tablet:flex-col ml-20 mt-20 mr-10'>
        <div className='gilroy-bold text-orange-500 text-xl'>Connect with us</div>
        <div className='flex gap-5 mt-5'>
          <a href="https://www.linkedin.com/company/madmonkeyhq/about/"><img src={linkedin}></img></a>
          <a href="#"><img src={instagram}></img></a>
          <a href="#"><img src={facebook}></img></a>
        </div>
      </div>
    </div>

    {/* phone footer */}
    <div className='tablet:hidden phone:text-center bg-white'>

      <div className='p-4'>
        <img className='m-5' src={img1}></img>
        <div className='phone:m-5 gilroy-semibold text-orange-500'>India’s Leading Product Marketing Agency</div>
      </div>

      <div className='phone:flex-col'>
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

      <div className='mt-10 gilroy-semibold bg-orange-500 text-center text-white h-10'>Designed & built with passion in India 🚀</div>
    </div>
      
    </div>

 
  )
}

export default Home;