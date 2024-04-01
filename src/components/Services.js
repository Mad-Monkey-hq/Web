import React from 'react';
import lady1 from "../images/Group1.svg";
import lady2 from "../images/Group2.svg";
import lady3 from "../images/Group3.svg";
import lady4 from "../images/Group4.svg";
import lady5 from "../images/Group5.svg";

function Services() {
    return (
        <div>
        <div className='laptop:flex-col phone:text-center w-screen bg-black'>
            <h1 className='laptop:text-left laptop:ml-10 phone:mt-24 laptop:mt-40 phone:m-18 text-white phone:text-4xl laptop:text-6xl font-semibold'>
                Our offerings to boost your<br/> growth
            </h1>
            {/* orange lady */}
            <div className='phone:hidden laptop:flex phone:text-justify'>
                <img src={lady1} className='laptop:mt-20 laptop:w-4/5 m-2' alt="Orange Lady" />
                <div className='text-white p-5 text-xl bg-orange-600 laptop:mt-20 phone:text-justify phone:w-full laptop:w-full laptop:h-[450px] laptop:rounded-l-3xl'>
                    <h1 className='laptop:text-right gilroy-bold m-10 text-3xl'>Customer Review Management</h1>
                    <h3 className='laptop:text-2xl gilroy-medium phone:m-5 mt-5'>Customer reviews are important for building trust, increasing traffic, and enhancing sales. We offer product review solutions for brands looking to make an impact in the industry. Our services are customizable and can be used across various e-commerce platforms.</h3>
                </div>
            </div>

            <div className='laptop:hidden phone:text-center phone:text-justify'>
                <img src={lady1} className='phone:w-full phone:h-2/3 phone:m-2' alt="Orange Lady" />
                <div className='phone:text-justify phone:rounded-xl phone:m-5 laptop:mt-20 laptop:w-full laptop:h-[450px] laptop:rounded-r-3xl text-white p-5 text-xl bg-orange-600'>
                    <h1 className='laptop:text-left phone:text-xl laptop:m-10 phone:m-2 phone:text-center gilroy-bold laptop:text-3xl'>Customer Review Management</h1>
                    <h3 className='laptop:text-2xl phone:text-lg gilroy-medium phone:m-5 mt-10'>Customer reviews are important for building trust, increasing traffic, and enhancing sales. We offer product review solutions for brands looking to make an impact in the industry. Our services are customizable and can be used across various e-commerce platforms.</h3>
                </div>
            </div>

            {/* violet lady */}
            <div className='phone:hidden laptop:flex phone:text-justify'>
                <div className='text-white p-5 text-xl bg-indigo-600 laptop:mt-20 phone:text-justify phone:w-full laptop:w-full laptop:h-[450px] laptop:rounded-r-3xl'>
                    <h1 className='laptop:text-right gilroy-bold m-10 text-3xl'>Influencer Marketing</h1>
                    <h3 className='laptop:text-2xl gilroy-medium phone:m-5 mt-5'>Influencer Marketing is the new big thing. We at Mad Monkey enable your brand to collaborate with different micro and macro influencers. Through them, you can reach out to different target audiences so far as to start a new social media trend of your own! With our influencer community establish your own tribe today.</h3>
                </div>
                <img src={lady2} className='laptop:mt-20 laptop:w-4/5 m-2' alt="Orange Lady" />
            </div>

            <div className='laptop:hidden phone:text-center phone:text-justify'>
                <img src={lady2} className='phone:w-full phone:h-2/3 phone:m-2' alt="Orange Lady" />
                <div className='phone:text-justify phone:rounded-xl phone:m-5 laptop:mt-20 laptop:w-full laptop:h-[450px] laptop:rounded-r-3xl text-white p-5 text-xl bg-violet-700'>
                    <h1 className='laptop:text-left phone:text-xl laptop:m-10 phone:m-2 phone:text-center gilroy-bold laptop:text-3xl'>Influencer Marketing</h1>
                    <h3 className='laptop:text-2xl phone:text-lg gilroy-medium phone:m-5 mt-10'>Influencer Marketing is the new big thing. We at Mad Monkey enable your brand to collaborate with different micro & macro influencers. Through them, you can reach out to different target audiences so far as to start a new social media trend of your own! With our influencer community establish your own tribe today.</h3>
                </div>
            </div>


            {/* crimson lady */}
            <div className='phone:hidden laptop:flex phone:text-justify'>
                <img src={lady3} className='laptop:mt-20 laptop:w-4/5 m-2' alt="crimson Lady" />
                <div className='text-white p-5 text-xl bg-red-500 laptop:mt-20 phone:text-justify phone:w-full laptop:w-full laptop:h-[450px] laptop:rounded-l-3xl'>
                    <h1 className='laptop:text-right gilroy-bold m-10 text-3xl'>Branding</h1>
                    <h3 className='laptop:text-2xl gilroy-medium phone:m-5 mt-5'>Looking to revamp your brand? The Mad Monkeys of our agency are here to help! We'll swing into action to create a unique and memorable brand identity that will make your business stand out from the competition. From logos to slogans as well as a mission statement, we've got you covered.</h3>
                </div>
            </div>

            <div className='laptop:hidden phone:text-center phone:text-justify'>
                <img src={lady3} className='phone:w-full phone:h-2/3 phone:m-2' alt="Crimson Lady" />
                <div className='phone:text-justify phone:rounded-xl phone:m-5 laptop:mt-20 laptop:w-full laptop:h-[450px] laptop:rounded-r-3xl text-white p-5 text-xl bg-red-500'>
                    <h1 className='laptop:text-left phone:text-xl laptop:m-10 phone:m-2 phone:text-center gilroy-bold laptop:text-3xl'>Branding</h1>
                    <h3 className='laptop:text-2xl phone:text-lg gilroy-medium phone:m-5 mt-10'>Looking to revamp your brand? The Mad Monkeys of our agency are here to help! We'll swing into action to create a unique and memorable brand identity that will make your business stand out from the competition. From logos to slogans as well as a mission statement, we've got you covered.</h3>
                </div>
            </div>

            {/* green lady */}
            <div className='phone:hidden laptop:flex phone:text-justify'>
                <div className='text-white p-5 text-xl bg-emerald-600 laptop:mt-20 phone:text-justify phone:w-full laptop:w-full laptop:h-[450px] laptop:rounded-r-3xl'>
                    <h1 className='laptop:text-right gilroy-bold m-10 text-3xl'>Social Media Marketing</h1>
                    <h3 className='laptop:text-2xl gilroy-medium phone:m-5 mt-5'>Are you tired of the same old boring social media posts? Look no further than Mad Monkey! Our team of mischievous marketing experts will help your business climb to the top of the social media jungle with clever and engaging content that will make your brand stand out.</h3>
                </div>
                <img src={lady4} className='laptop:mt-20 laptop:w-4/5 m-2' alt="Orange Lady" />
            </div>

            <div className='laptop:hidden phone:text-center phone:text-justify'>
                <img src={lady4} className='phone:w-full phone:h-2/3 phone:m-2' alt="Green Lady" />
                <div className='phone:text-justify phone:rounded-xl phone:m-5 laptop:mt-20 laptop:w-full laptop:h-[450px] laptop:rounded-r-3xl text-white p-5 text-xl bg-emerald-600'>
                    <h1 className='laptop:text-left phone:text-xl laptop:m-10 phone:m-2 phone:text-center gilroy-bold laptop:text-3xl'>Social Media Marketing</h1>
                    <h3 className='laptop:text-2xl phone:text-lg gilroy-medium phone:m-5 mt-10'>Are you tired of the same old boring social media posts? Look no further than Mad Monkey! Our team of mischievous marketing experts will help your business climb to the top of the social media jungle with clever and engaging content that will make your brand stand out.</h3>
                </div>
            </div>

            {/* blue lady */}
            <div className='phone:hidden laptop:flex phone:text-justify'>
                <img src={lady5} className='laptop:mt-20 laptop:w-4/5 m-2' alt="blue Lady" />
                <div className='text-white p-5 text-xl bg-blue-600 laptop:mt-20 phone:text-justify phone:w-full laptop:w-full laptop:h-[450px] laptop:rounded-l-3xl'>
                    <h1 className='laptop:text-right gilroy-bold m-10 text-3xl'>Product Shoot</h1>
                    <h3 className='laptop:text-2xl gilroy-medium phone:m-5 mt-5'>Need to make your product look picture-perfect? Our team of skilled photographers will capture your product in its best light, creating stunning images that will make your product stand out and attract customers.</h3>
                </div>
            </div>

            <div className='laptop:hidden phone:text-center phone:text-justify'>
                <img src={lady5} className='phone:w-full phone:h-2/3 phone:m-2' alt="Orange Lady" />
                <div className='phone:text-justify phone:rounded-xl phone:m-5 laptop:mt-20 laptop:w-full laptop:h-[450px] laptop:rounded-r-3xl text-white p-5 text-xl bg-blue-600'>
                    <h1 className='laptop:text-left phone:text-xl laptop:m-10 phone:m-2 phone:text-center gilroy-bold laptop:text-3xl'>Product Shoot</h1>
                    <h3 className='laptop:text-2xl phone:text-lg gilroy-medium phone:m-5 mt-10'>Need to make your product look picture-perfect? Our team of skilled photographers will capture your product in its best light, creating stunning images that will make your product stand out and attract customers.</h3>
                </div>
            </div>

        </div>
        </div>
    );
}

export default Services;
