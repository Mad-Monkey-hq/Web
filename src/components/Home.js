import React from 'react'
import {
  Link,
} from "react-router-dom";
import monkey2 from "../images/home-white-monkey.svg"

import card1 from "../images/card-img1.svg"
import card2 from "../images/card-img2.svg"
import astro from "../images/astronaut.svg"
import bimg from "../images/bimg.png"
import rimg from "../images/rimg.png"
import yimg from "../images/yimg.svg"
import test from "../images/Simply Whyte Design.svg"
import market from "../images/marketplaces.svg"
import sample from "../images/sample.svg"
import cost from "../images/cost-effective.svg"
import brand from "../images/brand-camaraderie.svg"
import personalized from "../images/personalized-assistance.svg"
import green1 from "../images/green1.svg"
import green2 from "../images/green2.svg"
import lefta from "../images/arrow-left.svg"
import righta from "../images/arrow-right.svg"
import yagami from "../images/yagami.svg"
import arrowlogo from "../images/arrowlogo.svg"
import mobclient from "../images/mobile-clients.svg"
import Carousel from './Carousel'
import pinkbg from '../images/pinkbg.svg'



function Home() {
  return (
    <div>

      {/* astro-monkey page */}
      <div className='mt-8 pt-20 tablet:flex phone:center'>
        <div className='flex-col phone:text-center desktop:mt-5 tablet:text-left tablet:w-3/5 tablet:ml-5 desktop:text-4xl'>
          <h2 className='phone:text-3xl desktop:text-8xl desktop:mx-20 desktop:p-10 laptop:text-6xl laptop:mx-20 tablet:text-5xl tablet:ml-10 tablet:text-left tablet:mt-10 mt-10 text-yellow-400 gilroy-semibold'>
            India’s Leading Product Marketing Agency
          </h2>
          <h3 className='tablet:mt-10 tablet:text-xl tablet:ml-10 laptop:text-xl laptop:mx-20 phone:m-5 phone:text-md desktop:text-4xl desktop:mx-32 gilroy-regular text-white'>With Madmonkey by the side, Recognition goes bananas for your brand! </h3>

          <Link to="#"><button className="gilroy-semibold p-5 phone:p-2 phone:mt-10 phone:w-2/5 phone:h-[40px] laptop:mt-10 tablet:my-10 tablet:w-1/3 tablet:h-[60px] tablet:mt-16 tablet:text-xl desktop:text-4xl desktop:mt-20 desktop:h-[100px] desktop:mx-32 tablet:ml-10 laptop:mx-20 rounded-xl bg-gradient-to-br from-pink-500 via-zinc-450 to-cyan-800 hover:bg-blue-700 text-white font-bold">
            Get in Touch
          </button></Link>

        </div>
      
        <img className='phone:hidden tablet:flex tablet:w-2/4 tablet:h-[480px] tablet:mr-20 laptop:h-[600px] laptop:mr-10 desktop:h-[900px] desktop:mr-20' src={astro}></img>

      </div>

      {/*phone our clients*/}
      <img className='tablet:hidden desktoop:hidden laptop:hidden phone:w-full mt-20' src={mobclient}></img>


      {/* about us */}
      <div className='tablet:flex phone:grid phone:justify-items-center mt-20'>
        <img className='phone:hidden tablet:flex laptop:flex laptop:mr-12 tablet:w-2/6 tablet:mx-12 tablet:mr-12 desktop:ml-20 desktop:mr-40 desktop:w-[700px]' src={monkey2}></img>
        <div className='tablet:w-1/2 tablet:h-[80px] laptop:m-16 tablet:m-5 desktop:mt-40'>
          <div className='tablet:flex tablet:mt-8 tablet:text-xl tablet:ml-5 desktop:text-4xl phone:hidden gilroy-semibold text-yellow-400'>ABOUT US ---</div>
          <div className='phone:text-center phone:m-5 tablet:hidden phone:text-lg phone:mt-5 gilroy-semibold text-yellow-400'>- ABOUT US -</div>
          <div className='text-white phone:text-center phone:m-5 desktop:text-6xl desktop:mt-10 laptop:text-5xl phone:text-2xl phone:mt-5 tablet:text-left tablet:text-3xl gilroy-semibold'>Your Brand, Our Reach,a saga forged in heaven</div>
          <div className='desktop:text-4xl desktop:text-justify tablet:text-lg tablet:mt-10 tablet:ml-5 tablet:text-justify laptop:text-xl laptop:mt-10 phone:text-sm phone:text-justify phone:m-5 text-white gilroy-medium'>
            <p>Welcome to the jungle of Madmonkey. To put into layman’s terms, we are a group of service providers who “curate-with-care”, the most impactful solutions to your marketing needs.</p><br />
            <p>In other words, we put the “fun” in the “fun-damentals” of your marketing needs,from transformation, development to execution.</p><br />
            <p>Our motto is to customize solutions to suit your Brand needs that make an impact in the market!</p><br />
            <p>Connect with us to leave your worry behind and go ballistic into the wide world of brands, and this is our Madmonkey promise.</p>
          </div>
        </div>
        <img className='phone:m-10 phone:h-3/4 tablet:hidden laptop:hidden desktop:hidden' src={monkey2}></img>
      </div>

      {/* services */}
      <div className='tablet:flex-col tablet:m-5 desktop:m-10'>
        <div className='tablet:flex tablet:mt-20 tablet:ml-10 tablet:text-xl laptop:mt-40 laptop:ml-20 desktop:text-4xl desktop:mt-80 desktop:ml-20 desktop:mr-20 phone:hidden gilroy-semibold text-yellow-400'>SERVICES ---</div>
        <div className='phone:text-center tablet:hidden phone:text-lg phone:mt-5 gilroy-semibold text-yellow-400'>- SERVICES -</div>
        <div className='text-white phone:text-center desktop:text-6xl desktop:mt-10 desktop:ml-20 desktop:mr-20 laptop:text-5xl laptop:mx-20 phone:text-2xl phone:mt-5 phone:text-justify-center tablet:text-left tablet:ml-10 tablet:text-3xl gilroy-semibold'><p>Our offerings which will<br /> make you grow</p></div>
        <div className='tablet:flex desktop:mt-20 desktop:ml-10 desktop:mr-10 laptop:mt-10 laptop:mx-10 gap-10 mt-5'>

          <div className='laptop:rounded-[40px] desktop:rounded-[40px] tablet:rounded-[40px] bg-gradient-to-r from-amber-500 via-red-400 to-pink-500 tablet:h-1/6 tablet:mx-10 tablet:w-1/2 phone:rounded-xl phone:m-5 phone:p-2'>
            <img className="desktop:w-1/3 desktop:m-24 laptop:m-12 phone:m-6 mt-10 ml-10" src={card1}></img>
            <div className='text-white mt-10 gilroy-semibold tablet:px-5 tablet:text-2xl tablet:my-10 desktop:text-6xl desktop:px-20 phone:text-lg phone:m-4'>Customer Review Management</div>
            <div className='text-white tablet:text-lg desktop:text-4xl desktop:px-14 desktop:pb-20 desktop:mt-8 gilroy-semibold tablet:m-10 phone:m-4 phone:text-md gilroy-medium'><p className='text-justify'>Ever wonder if your brand can start a trend? Well, with our bandwidth of macro and micro influencers, you sure can fructify your brand into a trend! The influencer marketing factory is a well oiled machine in this digital era. Thus, we curate brand trends with our verified social media influencers to invent, curate and deliver trends with a promise to turn your products and services into the hype of tomorrow.</p></div>
          </div>

          <div className='laptop:rounded-[40px] desktop:rounded-[40px] tablet:rounded-[40px] bg-gradient-to-r from-amber-500 via-red-400 to-pink-500 tablet:h-1/6 tablet:w-1/2 phone:text-sm phone:rounded-xl phone:m-5 phone:p-2'>
            <img className="desktop:w-1/3 desktop:m-24 laptop:m-12 phone:m-6 mt-10 ml-10" src={card2}></img>
            <div className='text-white mt-10 ml-10 gilroy-semibold tablet:px-5 tablet:text-2xl tablet:my-10 desktop:text-6xl desktop:px-20 phone:text-xl phone:m-4'>Influencer Marketing</div>
            <div className='text-white tablet:text-lg desktop:text-4xl desktop:px-14 desktop:pb-20 desktop:mt-8 gilroy-semibold tablet:m-10 phone:m-4 gilroy-medium'><p className='text-justify'>Ever wonder if your brand can start a trend? Well, with our bandwidth of macro and micro influencers, you sure can fructify your brand into a trend! The influencer marketing factory is a well oiled machine in this digital era. Thus, we curate brand trends with our verified social media influencers to invent, curate and deliver trends with a promise to turn your products and services into the hype of tomorrow.</p></div>
          </div>

        </div>
      </div>

      {/* key processes */}
      <div className='tablet:flex-col desktop:mt-40 phone:text-center mt-10 mx-10'>
        <div className='tablet:flex tablet:mt-20 tablet:ml-10 tablet:text-xl laptop:mt-40 desktop:text-4xl desktop:mt-80 desktop:ml-20 desktop:mr-20 phone:hidden gilroy-semibold text-yellow-400'>KEY PROCESSES ---</div>
        <div className='phone:text-center tablet:hidden phone:text-lg phone:mt-20 gilroy-semibold text-yellow-400'>- KEY PROCESSES -</div>
        <div className='text-white phone:text-center desktop:text-8xl desktop:mt-10 desktop:ml-20 desktop:mr-20 laptop:text-5xl laptop:ml-10 phone:text-2xl phone:mt-5 phone:text-justify-center tablet:text-left tablet:ml-10 tablet:text-3xl gilroy-semibold'>We believe in Design<br /> Thinking</div>
      </div>
      
      <div className='tablet:flex desktop:flex laptop:flex phone:text-center desktop:mx-20 laptop:mx-10 tablet:mx-10'>
        <div className='phone:text-justify laptop:w-1/3 desktop:w-1/3 tablet:flex-col m-10'>
          <div className='phone:text-center phone:gap-2 text-white'>
            <div className='text-white phone:hidden tablet:text-2xl desktop:text-4xl desktop:mr-20 desktop:mt-20'>
              <p className='gilroy-regular underline decoration-yellow-400 decoration-2'>01.</p>
              <br />
              <p className='gilroy-bold desktop:mt-10 laptop:mt-10 laptop:text-3xl'>Research</p>
            </div>
            <div className='text-white tablet:text-2xl phone:text-left desktop:text-4xl desktop:mr-20 desktop:mt-20 gilroy-bold laptop:mt-10 laptop:text-3xl'>
              <div className='underline decoration-yellow-400 decoration-2'>01.</div>
              <div>Research</div>
            </div>
          </div>
          <div className='tablet:text-lg laptop:text-xl desktop:text-4xl desktop:mt-12 desktop:mr-20 phone:text-lg text-white gilroy-medium mt-5'>
            <p className='text-justify'>To understand your marketing needs, we study your business and come up with a tailored solution</p>
          </div>
          <img className='phone:mt-5 tablet:h-2/3 tablet:mt-10 desktop:h-[1200px] desktop:mt-20 desktop:mr-20 phone:w-full rounded-3xl' src={yimg} alt="Research" />
        </div>

        <div className='phone:text-justify laptop:w-1/3 desktop:w-1/3 m-10'>
          <div className='phone:text-center phone:gap-2 text-white'>
            <div className='text-white phone:hidden tablet:text-2xl desktop:text-4xl desktop:mr-20 desktop:mt-20'>
              <p className='gilroy-regular underline decoration-yellow-400 decoration-2'>02.</p>
              <br />
              <p className='gilroy-bold desktop:mt-10 laptop:mt-10 laptop:text-3xl'>Strategy</p>
            </div>
            <div className='text-white tablet:text-2xl phone:text-left desktop:text-4xl desktop:mr-20 desktop:mt-20 gilroy-bold laptop:mt-10 laptop:text-3xl'>
              <div className='underline decoration-yellow-400 decoration-2'>02.</div>
              <div>Strategy</div>
            </div>
          </div>
          <div className='tablet:text-lg laptop:text-xl desktop:text-4xl desktop:mt-12 desktop:mr-20 phone:text-lg text-white gilroy-medium mt-5'>
            <p className='text-justify'>The possible solutions are then churned with a cup of coffee into strategizing for the best possible outcome</p>
          </div>
          <img className='phone:mt-5 tablet:h-2/3 tablet:mt-10 desktop:h-[1200px] desktop:mt-20 desktop:mr-20 phone:w-full rounded-3xl' src={rimg} alt="Research" />
        </div>

                

        <div className='phone:text-justify laptop:w-1/3 desktop:w-1/3 m-10'>
          <div className='phone:text-center phone:gap-2 text-white'>
            <div className='text-white phone:hidden tablet:text-2xl desktop:text-4xl desktop:mr-20 desktop:mt-20'>
              <p className='gilroy-regular underline decoration-yellow-400 decoration-2'>03.</p>
              <br />
              <p className='gilroy-bold desktop:mt-10 laptop:mt-10 laptop:text-3xl'>Execution</p>
            </div>
            <div className='text-white tablet:text-2xl phone:text-left desktop:text-4xl desktop:mr-20 desktop:mt-20 gilroy-bold laptop:mt-10 laptop:text-3xl'>
              <div className='underline decoration-yellow-400 decoration-2'>03.</div>
              <div>Execution</div>
            </div>
          </div>
          <div className='tablet:text-lg laptop:text-xl desktop:text-4xl desktop:mt-12 desktop:mr-20 phone:text-lg text-white gilroy-medium mt-5'>
            <p className='text-justify'>Our highly skilled and determined team then put their heart and soul to execute these strategies.</p>
          </div>
          <img className='phone:mt-5 tablet:h-2/3 tablet:mt-10 desktop:h-[1200px] desktop:mt-20 desktop:mr-20 phone:w-full rounded-3xl' src={bimg} alt="Research" />
        </div>

      </div>

      <div className='text-center bg-white w-full tablet:p-20 tablet:mt-[-150px] laptop:mt-[-300px] desktop:mt-[-400px] phone:mt-5 phone:p-10 gilroy-semibold'>
        <div className='tablet:mt-28 laptop:mt-60 desktop:pt-32 phone:text-md desktop:text-3xl laptop:text-xl'>WHAT DO YOU NEED TO GET YOUR BUSINESS MOVING?</div>
        <div className='mt-5 tablet:text-4xl laptop:text-5xl phone:text-2xl desktop:text-8xl desktop:mt-10'>Join the Mad Monkey bandwagon and solidify your brand in this concrete jungle now!</div>
        <button class="gilroy-medium bg-black text-white rounded-lg ml-3 mt-5 desktop:w-[250px] desktop:h-[60px] desktop:mt-10 desktop:text-3xl laptop:w-[200px] laptop:h-[50px] px-10 py-2">speak to us</button>
      </div>

      {/* result driven solutions*/}
      <div className='tablet:flex phone:hidden'>
        <div className='flex-col ml-10 w-2/3'>
          <div className='tablet:flex tablet:mt-20 tablet:ml-10 tablet:text-xl laptop:mt-40 desktop:text-4xl desktop:mt-80 desktop:ml-20 desktop:mr-20 phone:hidden gilroy-semibold text-yellow-400'>RESULT-DRIVEN SOLUTIONS ---</div>
          <div className='phone:text-center tablet:hidden phone:text-lg phone:mt-20 gilroy-semibold text-yellow-400'>- KEY PROCESSES -</div>
          <div className='text-white phone:text-center desktop:text-8xl desktop:mt-10 desktop:ml-20 desktop:mr-20 laptop:text-5xl laptop:ml-10 phone:text-2xl phone:mt-5 phone:text-justify-center tablet:text-left tablet:ml-10 tablet:text-3xl gilroy-semibold'>We learn, adapt &<br /> innovate</div>
          <div className='gilroy-medium text-white laptop:mr-20 laptop:ml-10 laptop:mt-10 laptop:text-xl desktop:mr-40 desktop:mt-20 desktop:ml-20 desktop:text-4xl tablet:mt-10 tablet:ml-10 tablet:text-md tablet:mr-20'><p className='text-justify'>In today’s progressive world, we analyse the results and then innovate to find a better solution customized to your need. These solutions are backed by research that makes sure to drive better results.</p></div>
        </div>
        <img className='w-2/4 laptop:h-[500px] laptop:mr-20 laptop:mt-20 desktop:mt-20 desktop:h-[1000px] tablet:mt-10 tablet:mr-10' src={test}></img>
      </div>

      {/* we are everywhwere */}

      <div className='text-white phone:text-center desktop:mt-60 desktop:text-8xl desktop:ml-32 desktop:mr-20 laptop:text-5xl laptop:ml-20 laptop:mt-40 phone:text-2xl phone:mt-5 phone:mx-10 phone:text-justify-center tablet:text-left tablet:ml-20 tablet:mt-20 tablet:text-3xl gilroy-semibold'>We are everywhere </div>
      <div className='text-justify text-white phone:text-center desktop:mt-10 desktop:text-4xl desktop:ml-32 desktop:mr-20 laptop:text-xl laptop:ml-20 laptop:mt-10 phone:text-sm phone:mt-5 phone:mx-10 phone:text-justify tablet:text-left tablet:ml-20 tablet:mt-5 tablet:text-md gilroy-regular'>From A to Z, we work through a diverse array of e-commerce portals to deliver<br /> the best of media and marketing solutions for your brand</div>
      <img className='w-screen mt-5' src={market}></img>

      {/*want campaigns sections*/}
      <div className='tablet:flex desktop:mt-40 phone:hidden'>
        <img className='w-1/3 desktop:my-20 desktop:ml-12 h-[600px] tablet:ml-16 laptop:ml-20 laptop:mr-10' src={sample}></img>
        <div className='flex-col desktop:mr-20 laptop:mr-20 tablet:mt-28 tablet:mr-12 laptop:mt-16 w-2/3 mt-10 text-left'>
          <div className='text-white phone:text-center desktop:text-8xl desktop:text-justify desktop:mr-20 laptop:text-5xl laptop:ml-3 laptop:mr-20 phone:text-2xl phone:mt-5 phone:text-justify-center tablet:text-left tablet:text-3xl tablet:ml-4 gilroy-semibold'>Want campaigns on your<br /> own platform ? </div>
          <div className='gilroy-medium text-white phone:text-center phone:m-5 laptop:mt-10 laptop:text-2xl text-justify tablet:mr-10 mt-10 desktop:text-4xl desktop:mt-10'><p className='text-justify'>The brand is all about how your customers think about you. With our extensive experience in E-commerce marketing, grow your brand name from scratch. Kick-start your platform, Ignite the fire, sit back and watch Madmonkey spread your light in the "Lanka" of budding entrepreneurship.</p></div>
          <button class="gilroy-medium bg-white text-black rounded-lg ml-3 mt-5 desktop:w-[250px] desktop:text-2xl laptop:w-[200px] laptop:h-[50px] px-10 py-2">speak to us</button>

        </div>
      </div>

      <div className='tablet:hidden laptop:hidden desktop:hidden phone:flex phone:flex-col phone:justify-center phone:items-center phone:mx-10'>
        <div className='gilroy-semibold mt-10 text-white text-2xl'>Want campaigns on your own platform ?</div>
        <div><img className='my-10' src={sample}></img></div>
        <div className='gilroy-medium text-white'><p className='text-justify'>The brand is all about how your customers think about you. With our extensive experience in E-commerce marketing, grow your brand name from scratch. Kick-start your platform, Ignite the fire, sit back and watch Madmonkey spread your light in the "Lanka" of budding entrepreneurship.</p></div>
        <button class="gilroy-bold bg-white text-black place-self-center rounded-lg w-40 mt-10 p-2">speak to us</button>
      </div>

      {/* why us */}
      <div>
        <div className='phone:hidden tablet:flex tablet:mt-5 tablet:ml-16 tablet:text-xl laptop:mt-20 laptop:ml-20 desktop:text-4xl desktop:mt-60 desktop:ml-28 gilroy-semibold text-yellow-400'>WHY US ---</div>
        <div className='phone:hidden text-white desktop:flex laptop:flex tablet:flex desktop:text-8xl desktop:mt-10 desktop:mx-28 laptop:text-5xl laptop:ml-20 phone:text-2xl phone:mt-5 phone:text-justify-center tablet:text-left tablet:ml-16 tablet:text-3xl gilroy-semibold'>We believe in a customized<br /> approach</div>
        <div className='phone:hidden laptop:grid desktop:grid tablet:grid grid-cols-3 desktop:gap-10 desktop:m-24 laptop:gap-8 laptop:m-20 tablet:gap-5 tablet:m-16 text-white '>
          <img className='w-full desktop:m-5' src={cost}></img>
          <img className='w-full desktop:m-5' src={brand}></img>
          <img className='w-full desktop:m-5' src={personalized}></img>
        </div>
      </div>
      {/* stats part */}
      <img className='my-40 tablet:my-20 w-full laptop:flex desktop:flex tablet:flex phone:hidden' src={green1}></img>
      <img className='laptop:hidden desktop:hidden tablet:hidden mt-20 phone:w-full' src={green2}></img>



      {/* whats it like to collaborate together */}
      <div className='laptop:flex desktop:flex tablet:flex phone:grid phone:justify-items-center'>
        <div className='desktop:w-1/2 laptop:w-1/2 tablet:w-1/2 tablet:mx-10 phone:text-center'>
          <div className='text-white desktop:text-[100px] desktop:mt-36 desktop:ml-32 laptop:text-5xl laptop:ml-20 laptop:mt-20 phone:text-4xl phone:mt-16 phone:text-justify-center tablet:text-left tablet:ml-10 tablet:mt-16 tablet:text-4xl gilroy-semibold'>What it’s like <br />to collaborate together.</div>
          <div className='gilroy-medium phone:mt-5 desktop:text-3xl desktop:ml-32 tablet:text-md tablet:mt-2 tablet:ml-10 tablet:text-left laptop:text-left laptop:mt-10 laptop:ml-20 text-white'>Become partners for the long run.</div>
          <div className='desktop:flex laptop:flex tablet:flex gap-10 desktop:mt-60 desktop:ml-28 tablet:mt-40 tablet:ml-10 laptop:ml-20 phone:hidden'>
            <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><img className='desktop:w-[70px] tablet:w-[30px]' src={lefta}></img></button>
            <button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'><img className='desktop:w-[70px] tablet:w-[30px]' src={righta}></img></button>
            
          </div>
        </div>
        <img className='desktop:w-2/3 desktop:mr-24 laptop:w-1/2 tablet:w-1/2 phone:w-5/6 phone:ml-8 phone:place-items-center' src={yagami}></img>
        <div className='laptop:hidden tablet:hidden desktop:hidden phone:my-10 flex gap-10'>
          <button><img src={lefta}></img></button>
          <button><img src={righta}></img></button>
        </div>
      </div>


      {/* our clients carousel*/}
      <Carousel />

      {/* make mad monkey your growth partner */}

      <div className="relative laptop:m-10 tablet:m-10 desktop:m-10 phone:m-3">
        <img src={pinkbg} alt="Pink Background" className="w-full laptop:my-20 desktop:my-40 phone:my-5 tablet:my-20" />
        <button className="flex absolute phone:text-sm text-left tablet:ml-8 laptop:ml-10 laptop:text-2xl desktop:text-6xl desktop:ml-20 top-2/3 underline underline-offset-4 tablet:w-[200px] tablet:text-xl gilroy-semibold text-white phone:px-3 phone:py-0 px-4 py-2 rounded"> Contact Us <img className='w-10 h-8 phone:w-5 phone:h-5 tablet:h-8 tablet:w-6 desktop:h-16 desktop:w-16' src={arrowlogo}></img></button>
      </div>

    </div>


  )
}

export default Home;