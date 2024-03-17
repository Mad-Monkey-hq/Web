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









function Home() {
  return (
    <div>

      {/* part-1 */}
      <div className='flex-col'>
        <div className='flex gap-40'>
          <div className='gilroy-semibold text-yellow-400 mt-40 ml-10 mr-20 text-5xl'>
            <h2 className='font-semibold'>
              India’s Leading <br />Product Marketing<br /> Agency
            </h2>
          </div>
          <div className='flex bg-orange-500 mt-20 rounded-full h-96 w-96 justify-center items-center'>
            <img className='h-64 w-64' src={astro}></img>
          </div>
        </div>
        <div className='gilroy-regular text-white ml-10 text-xl'>
          With Madmonkey by the side, Recognition goes<br /> bananas for your brand!
        </div>
        <div className='ml-10 mr-20 mt-5'>
          <Link to="#">
            <button class="bg-white text-black hover:bg-yellow-500 hover:bg-blue-700 font-bold rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-lg p-2">Get in Touch</button>
          </Link>
        </div>
      </div>

      {/* part 2 */}
      <div className='flex ml-10 mt-40'>
        <img className='h-1/3 w-1/3' src={monkey2}></img>
        <div className='flex-col ml-10'>
          <div className='gilroy-semibold text-yellow-400 mt-10'>ABOUT US ---</div>
          <div className='text-white text-4xl gilroy-semibold mt-5'>Your Brand, Our Reach,<br /> a saga forged in heaven</div>
          <div className='text-white mt-10 text-lg gilroy-medium text-justify mr-10'>Welcome to the jungle of Madmonkey. To put into layman’s terms, we are a group of service providers who “curate-with-care”, the most impactful solutions to your marketing needs.<br /><br />
            In other words, we put the “fun” in the “fun-damentals” of your marketing needs,from transformation, development to execution.<br /><br />
            Our motto is to customize solutions to suit your Brand needs that make an impact in the market!<br /><br />
            Connect with us to leave your worry behind and go ballistic into the wide world of brands, and this is our Madmonkey promise.
          </div>
        </div>
      </div>

      {/* part-3 */}
      <div className='flex-col ml-10 mt-40'>
        <div className='gilroy-semibold text-yellow-400 mt-20'>SERVICES ---</div>
        <div className='gilroy-semibold mt-5 text-white text-4xl'>Our offerings which will <br />make you grow</div>
        <div className='flex gap-10 mt-10'>
          <div className='rounded-3xl bg-gradient-to-r from-amber-500 via-red-400 to-pink-500 h-192 w-1/2 mt-5 mb-5'>
            <img className="mt-10 ml-10" src={card1}></img>

            <div className='text-white mt-10 ml-10 gilroy-semibold text-2xl'>Customer Review Management</div>

            <div className='text-white ml-10 mt-5 mr-20 mb-10 gilroy-medium'><p className='text-justify'>customer reviews are an integral part of your brand. It builds trust, increases traffic and enhances sales. We have a host of product review solutions if you are a brand who needs to make a mark in the industry. Starting from brands who need footfall, to new brands looking to make an impact, we customize product review services across diverse e-commerce platforms to help your brand leave a mark.</p></div>
          </div>

          <div className='rounded-3xl bg-gradient-to-r from-amber-500 via-red-400 to-pink-500 h-192 w-1/2 mr-10 mt-5 mb-5'>
            <img className="mt-10 ml-10" src={card2}></img>

            <div className='text-white mt-10 ml-10 gilroy-semibold text-2xl'>Influencer Marketing</div>

            <div className='text-white ml-10 mt-5 mr-10 mb-10 gilroy-medium text-justify'>Ever wonder if your brand can start a trend? Well, with our bandwidth of macro and micro influencers, you sure can fructify your brand into a trend! The influencer marketing factory is a well oiled machine in this digital era. Thus, we curate brand trends with our verified social media influencers to invent, curate and deliver trends with a promise to turn your products and services into the hype of tomorrow.</div>
          </div>
        </div>
      </div>

      {/* part 4 services */}
      <div className='flex-col ml-10 mt-40'>
        <div className='gilroy-semibold text-yellow-400 mt-20'>KEY PROCESS ---</div>
        <div className='gilroy-semibold mt-5 text-white text-4xl'>We believe in Design <br />Thinking</div>
      </div>

      <div className='flex'>
        <div className='ml-10 flex-col'>
          <div className='mt-5 text-white underline decoration-yellow-400 decoration-2 gilroy-regular'>01</div>
          <div className='text-white gilroy-bold mt-5'>Research</div>
          <div className='gilroy-medium text-white'><p className='text-justify'>To understand your marketing needs, we study your business and come up with a tailored solution</p></div>
          <div className='h-4/5 w-92 mt-20 rounded-3xl'><img src={yimg}></img></div>
        </div>

        <div className='ml-10 flex-col'>
          <div className='mt-5 text-white underline decoration-yellow-400 decoration-2 gilroy-regular'>02</div>
          <div className='text-white gilroy-bold mt-5'>Strategy</div>
          <div className='gilroy-medium text-white'><p className='text-justify'>The possible solutions are then churned with a cup of coffee into strategizing for the best possible outcome</p></div>
          <div className='h-4/5 w-92 mt-20 rounded-3xl'><img src={rimg}></img></div>
        </div>

        <div className='ml-10 flex-col mr-10'>
          <div className='mt-5 text-white underline decoration-yellow-400 decoration-2 gilroy-regular'>03</div>
          <div className='text-white gilroy-bold mt-5'>Execution</div>
          <div className='gilroy-medium text-white'><p className='text-justify'>Our highly skilled and determined team then put their heart and soul to execute these strategies.</p></div>
          <div className='h-4/5 w-92 mt-20 rounded-3xl'><img src={bimg}></img></div>
        </div>
      </div>

     
    <div className='text-center bg-white w-screen h-96 mt-10 pt-20 gilroy-semibold'>
      <div>WHAT DO YOU NEED TO GET YOUR BUSINESS MOVING?</div>
      <div className='mt-10 text-4xl '>Join the Mad Monkey bandwagon and solidify your brand in this concrete jungle now!</div>
      
      <button class="transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300 mt-10 bg-black text-white rounded-lg p-2">speak to us</button>
    </div>

    {/* part 5 */}
    <div className='flex'>
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
    <div className='ml-10 mt-20'>
      <div className='gilroy-semibold mt-5 text-white text-4xl'>We are everywhere </div>
      <div className='gilroy-medium text-white mr-40 mt-10'><p className='text-justify'>From A to Z, we work through a diverse array of e-commerce portals to deliver<br/> the best of media and marketing solutions for your brand</p></div>
    </div>
    <div><img src={market}></img></div>
    
    {/* part 7 */}
    <div className='flex'>
      <div className='mt-20 w-1/2 ml-10'><img src={sample}></img></div>
      <div className='flex-col w-1/2'>
        <div className='gilroy-semibold mt-20 text-white text-4xl'>Want campaigns on your own platform ?</div>
        <div className='gilroy-medium text-white mt-10 mr-10'><p className='text-justify'>The brand is all about how your customers think about you. With our extensive experience in E-commerce marketing, grow your brand name from scratch. Kick-start your platform, Ignite the fire, sit back and watch Madmonkey spread your light in the "Lanka" of budding entrepreneurship.</p></div>
        <button class="gilroy-bold transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300 mt-10 bg-white text-black rounded-lg p-2">speak to us</button>
      </div>
    </div>

    {/* part 8 */}
    <div className='flex-col'>
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
    <div className='w-screen h-96 mt-20'>
      <img src={green}></img>
    </div>

    {/* below stats whats it like */}
    <div className='flex'>
      <div className='flex-col w-1/2 ml-20'>
        <div className='gilroy-semibold mt-20 text-white text-4xl'>What it’s like to collaborate together.</div>
        <div className='gilroy-medium text-white mt-5 mr-10'><p className='text-justify'>Become partners for the long run</p></div>
        <div className='flex mt-40 gap-10'>
          <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'><img src={lefta}></img></button>
          <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'><img src={righta}></img></button>
        </div>
      </div>
      <div className='mt-10 ml-10'>
        <img src={yagami}></img>
      </div>
    </div>

    {/* clients */}
    <div className='w-screen mt-10 mb-10'>
      <img src={clients}></img>
    </div>

    {/* pink card */}
    <div className='h-72 w-100 m-20 rounded-3xl bg-gradient-to-r from-red-600 via-red-600 to-fuchsia-500'>
      <div className='flex'>
        <div className='flex-col mt-10'>
          <div className='m-10 gilroy-bold text-white text-4xl'>Make Mad Monkey your growth partner today </div>
          <div className='flex gilroy-bold text-white ml-10 text-xl underline decoration-white underline-offset-2'>
            <a href="#">Contact Us</a>
            <img className='h-7 w-10' src={arrowlogo}></img>
          </div>
        </div>

        <img src={glasses} className='h-64 mt-8 mr-10 ml-10'></img>
      </div>
    </div>

    {/* footer */}

    <div className='flex bg-white w-screen h-96 gap-5'>
    
      <div className='flex-col ml-10 mt-24'>
        <img src={img1}></img>
        <div className='gilroy-semibold text-orange-500 mt-5'>India’s Leading Product Marketing Agency</div>
      </div>

      <div className='flex-col ml-20 mt-20'>
        <div className='gilroy-bold text-orange-500 text-xl'>Navigation</div>
        <div className='gilroy-medium mt-5'><a href="#">Home</a></div>
        <div className='gilroy-medium mt-5'><a href="#">About Us</a></div>
        <div className='gilroy-medium mt-5'><a href="#">Case Studies</a></div>
        <div className='gilroy-medium mt-5'><a href="#">Contact Us</a></div>
      </div>

      <div className='flex-col ml-20 mt-20'>
        <div className='gilroy-bold text-orange-500 text-xl'>Reach Us</div>
        <div className='gilroy-medium mt-5'><a href="#">+91 9110660335</a></div>
        <div className='gilroy-medium mt-5'><a href="#">connect@madmonkey.in</a></div>
      </div>

      <div className='flex-col ml-20 mt-20'>
        <div className='gilroy-bold text-orange-500 text-xl'>Connect with us</div>
        <div className='flex gap-5 mt-5'>
          <a href="https://www.linkedin.com/company/madmonkeyhq/about/"><img src={linkedin}></img></a>
          <a href="#"><img src={instagram}></img></a>
          <a href="#"><img src={facebook}></img></a>
        </div>
      </div>
    </div>

    <div className='gilroy-semibold bg-orange-500 text-center text-white h-10'>Designed & built with passion in India 🚀</div>
      
    </div>

 
  )
}

export default Home;