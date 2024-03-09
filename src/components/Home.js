import React from 'react'
import {
  Link,
} from "react-router-dom";
import monkey2 from "../images/home-white-monkey.svg";
import card1 from "../images/card-img1.svg"
import card2 from "../images/card-img2.svg"
import astro from "../images/astronaut.svg"


function Home() {
  return (
    <div>

      {/* part-1 */}
      <div className='flex-col'>
        <div className='flex'>
          <div className='gilroy-semibold text-yellow-400 mt-40 ml-20 mr-20 text-5xl'>
            <h2 className='font-semibold'>
              India’s Leading <br />Product Marketing<br /> Agency
            </h2>
          </div>
          <div className='flex bg-orange-500 mt-20 ml-40 rounded-full h-96 w-96 justify-center items-center'>
            <img className='h-32 w-32' src={astro}></img>
          </div>
        </div>
        <div className='gilroy-regular text-white ml-20 mr-20'>
          With Madmonkey by the side, Recognition goes<br /> bananas for your brand!
        </div>
        <div className='ml-20 mr-20 mt-5'>
          <Link to="#">
            <button class="bg-gradient-to-br from-fuchsia-500 via-blue-500 to-indigo-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Get in Touch</button>
          </Link>
        </div>
      </div>

      {/* part 2 */}
      <div className='flex ml-20 mt-40'>
        <img className='h-1/3 w-1/3' src={monkey2}></img>
        <div className='flex-col ml-20'>
          <div className='gilroy-semibold text-yellow-400 mt-10'>ABOUT US ---</div>
          <div className='text-white text-4xl gilroy-semibold mt-5'>Your Brand, Our Reach,<br /> a saga forged in heaven</div>
          <div className='text-white mt-10 text-lg gilroy-medium'>Welcome to the jungle of Madmonkey. To put into layman’s terms, we are a <br/>group of service providers who “curate-with-care”, the most impactful solutions <br/>to your marketing needs.<br/><br/>
            In other words, we put the “fun” in the “fun-damentals” of your marketing needs,<br/> from transformation, development to execution.<br/><br/>
            Our motto is to customize solutions to suit your Brand needs that make an impact in the market!<br/><br/>
            Connect with us to leave your worry behind and go ballistic into the wide world of brands, and this is our Madmonkey promise.
          </div>         
        </div>
      </div>

      {/* part-3 */}
      <div className='flex-col ml-10 mt-40'>
        <div className='gilroy-semibold text-yellow-400 mt-20 ml-10'>SERVICES ---</div>
        <div className='gilroy-semibold mt-5 text-white text-4xl ml-10'>Our offerings which will <br/>make you grow</div>
        <div className='flex gap-10 mt-10'>
          <div className='rounded-3xl bg-gradient-to-r from-amber-500 via-red-400 to-pink-500 h-192 w-1/2 ml-10 mt-5 mb-5'>
            <img className="mt-10 ml-10" src={card1}></img>

            <div className='text-white mt-10 ml-10 gilroy-semibold text-2xl'>Customer Review Management</div>

            <div className='text-white ml-10 mt-5 mr-10 mb-10'>customer reviews are an integral part of your brand. It builds trust, increases traffic and enhances sales. We have a host of product review solutions if you are a brand who needs to make a mark in the industry. Starting from brands who need footfall, to new brands looking to make an impact, we customize product review services across diverse e-commerce platforms to help your brand leave a mark.</div>
          </div>
          
          <div className='rounded-3xl bg-gradient-to-r from-amber-500 via-red-400 to-pink-500 h-192 w-1/2 mr-10 mt-5 mb-5'>
            <img className="mt-10 ml-10" src={card2}></img>

            <div className='text-white mt-10 ml-10 gilroy-semibold text-2xl'>Influencer Marketing</div>

            <div className='text-white ml-10 mt-5 mr-10 mb-10'>Ever wonder if your brand can start a trend? Well, with our bandwidth of macro and micro influencers, you sure can fructify your brand into a trend! The influencer marketing factory is a well oiled machine in this digital era. Thus, we curate brand trends with our verified social media influencers to invent, curate and deliver trends with a promise to turn your products and services into the hype of tomorrow.</div>
          </div>
        </div>
      </div>

      {/* part 4 */}


    </div>
  )
}

export default Home;