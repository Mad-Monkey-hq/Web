import React from 'react';
import lady1 from "../images/Group1.svg";
import lady2 from "../images/Group2.svg";
import lady3 from "../images/Group3.svg";
import lady4 from "../images/Group4.svg";
import lady5 from "../images/Group5.svg";
import img1 from "../images/Mad Monkey-logo.svg"
import linkedin from "../images/linkedin.svg"
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"

function Services() {
    return (
        <div>
        <div className='phone:mt-20 tablet:flex-col desktop:flex-col phone:text-center w-screen bg-black'>
            <h1 className='tablet:text-left tablet:mx-20 phone:mt-12 tablet:mt-10 phone:m-18 text-white phone:text-4xl tablet:text-5xl desktop:ml-28 desktop:my-32 desktop:text-7xl gilroy-semibold'>
                Our offerings to boost your growth
            </h1>
            {/* orange lady */}
            <div className='phone:hidden tablet:flex phone:text-justify tablet:mt-20 tablet:ml-20 tablet:gap-10 desktop:gap-40'>
                <img src={lady1} className='tablet:w-6/12 desktop:w-1/3 desktop:ml-60 mx-10' alt="Orange Lady" />
                <div className='text-white p-5 bg-orange-500 phone:text-justify phone:w-full laptop:w-5/6 desktop:w-2/4 tablet:w-5/6 tablet:h-1/2 tablet:mt-20 tablet:rounded-l-[40px]'>
                    <h1 className='desktop:text-5xl desktop:m-20 gilroy-bold tablet:m-8 tablet:text-2xl tablet:text-left laptop:text-5xl'>Customer Review Management</h1>
                    <h3 className='desktop:text-4xl desktop:pb-40 tablet:text-xl tablet:m-8 tablet:pb-10 laptop:pb-20 laptop:text-2xl gilroy-medium phone:m-5'>Customer reviews are important for building trust, increasing traffic, and enhancing sales. We offer product review solutions for brands looking to make an impact in the industry. Our services are customizable and can be used across various e-commerce platforms.</h3>
                </div>
            </div>
            {/* ornage phone */}
            <div className='tablet:hidden phone:mx-5 phone:text-center phone:text-justify'>
                <img src={lady1} className='phone:mt-16 w-full phone:h-2/3' alt="Orange Lady" />
                <div className='phone:text-justify phone:rounded-xl phone:m-5 tablet:mt-20 tablet:w-full tablet:h-[450px] tablet:rounded-r-3xl text-white p-5 text-xl bg-orange-600'>
                    <h1 className='phone:text-xl phone:m-2 phone:text-center gilroy-bold'>Customer Review Management</h1>
                    <h3 className='phone:text-lg gilroy-medium mt-10'>Customer reviews are important for building trust, increasing traffic, and enhancing sales. We offer product review solutions for brands looking to make an impact in the industry. Our services are customizable and can be used across various e-commerce platforms.</h3>
                </div>
            </div>

            {/* violet lady */}
            <div className='phone:hidden tablet:flex phone:text-justify tablet:mt-20 tablet:mr-20 tablet:gap-10 desktop:gap-40'>
                <div className='text-white p-5 bg-indigo-600 phone:text-justify phone:w-full laptop:w-5/6 desktop:w-2/4 tablet:w-1/2 tablet:h-1/2 tablet:mt-20 tablet:rounded-r-[40px]'>
                    <h1 className='desktop:text-5xl desktop:m-20 gilroy-bold tablet:m-8 tablet:text-2xl tablet:text-right laptop:text-5xl'>Influencer Marketing</h1>
                    <h3 className='desktop:text-4xl desktop:pb-40 tablet:text-xl tablet:m-8 tablet:pb-10 laptop:pb-20 laptop:text-2xl gilroy-medium phone:m-5'>Influencer Marketing is the new big thing. We at Mad Monkey enable your brand to collaborate with different micro and macro influencers. Through them, you can reach out to different target audiences so far as to start a new social media trend of your own! With our influencer community establish your own tribe today.</h3>
                </div>
                <img src={lady2} className='tablet:w-1/3 desktop:w-1/3 laptop:1/2 mx-10' alt="Violet Lady" />
            </div>
            {/* violet phone */}
            <div className='tablet:hidden phone:mx-5 phone:text-center phone:text-justify'>
                <img src={lady2} className='phone:mt-16 w-full phone:h-2/3' alt="Orange Lady" />
                <div className='phone:text-justify phone:rounded-xl phone:m-5 tablet:mt-20 tablet:w-full tablet:h-[450px] tablet:rounded-r-3xl text-white p-5 text-xl bg-indigo-600'>
                    <h1 className='phone:text-xl phone:m-2 phone:text-center gilroy-bold'>Influencer Marketing</h1>
                    <h3 className='phone:text-lg gilroy-medium mt-10'>Influencer Marketing is the new big thing. We at Mad Monkey enable your brand to collaborate with different micro and macro influencers. Through them, you can reach out to different target audiences so far as to start a new social media trend of your own! With our influencer community establish your own tribe today.</h3>
                </div>
            </div>


            {/* crimson lady */}
            <div className='phone:hidden tablet:flex phone:text-justify tablet:mt-20 tablet:ml-20 tablet:gap-10 desktop:gap-40'>
                <img src={lady3} className='tablet:w-1/3 desktop:w-1/3 desktop:ml-60 mx-10' alt="crimson Lady" />
                <div className='text-white p-5 bg-red-500 phone:text-justify phone:w-full laptop:w-5/6 desktop:w-2/4 tablet:w-5/6 tablet:h-1/2 tablet:mt-20 tablet:rounded-l-[40px]'>
                    <h1 className='desktop:text-5xl desktop:m-20 gilroy-bold tablet:m-8 tablet:text-2xl tablet:text-left laptop:text-5xl'>Branding</h1>
                    <h3 className='desktop:text-4xl desktop:pb-40 tablet:text-xl tablet:m-8 tablet:pb-10 laptop:pb-20 laptop:text-2xl gilroy-medium phone:m-5'>Looking to revamp your brand? The Mad Monkeys of our agency are here to help! We'll swing into action to create a unique and memorable brand identity that will make your business stand out from the competition. From logos to slogans as well as a mission statement, we've got you covered.</h3>
                </div>
            </div>

            {/* crimson phone */}
            <div className='tablet:hidden phone:mx-5 phone:text-center phone:text-justify'>
                <img src={lady3} className='phone:mt-16 w-full phone:h-2/3' alt="Crimson Lady" />
                <div className='phone:text-justify phone:rounded-xl phone:m-5 tablet:mt-20 tablet:w-full tablet:h-[450px] tablet:rounded-r-3xl text-white p-5 text-xl bg-red-500'>
                    <h1 className='phone:text-xl phone:m-2 phone:text-center gilroy-bold'>Branding</h1>
                    <h3 className='phone:text-lg gilroy-medium mt-10'>Looking to revamp your brand? The Mad Monkeys of our agency are here to help! We'll swing into action to create a unique and memorable brand identity that will make your business stand out from the competition. From logos to slogans as well as a mission statement, we've got you covered.</h3>
                </div>
            </div>

            {/* green lady */}
            <div className='phone:hidden tablet:flex phone:text-justify tablet:mt-20 tablet:mr-20 tablet:gap-10 desktop:gap-40'>
                <div className='text-white p-5 bg-emerald-600 phone:text-justify phone:w-full laptop:w-5/6 desktop:w-2/4 tablet:w-5/6 tablet:h-1/2 tablet:mt-20 tablet:rounded-r-[40px]'>
                    <h1 className='desktop:text-5xl desktop:m-20 gilroy-bold tablet:m-8 tablet:text-2xl tablet:text-right laptop:text-5xl'>Social Media Marketing</h1>
                    <h3 className='desktop:text-4xl desktop:pb-40 tablet:text-xl tablet:m-8 tablet:pb-10 laptop:pb-20 laptop:text-2xl gilroy-medium phone:m-5'>Are you tired of the same old boring social media posts? Look no further than Mad Monkey! Our team of mischievous marketing experts will help your business climb to the top of the social media jungle with clever & engaging content that will make your brand stand out.</h3>
                </div>
                <img src={lady4} className='tablet:w-1/3 desktop:w-1/3 laptop:1/2 mx-10' alt="Green Lady" />
            </div>

            {/* green phone */}
            <div className='tablet:hidden phone:mx-5 phone:text-center phone:text-justify'>
                <img src={lady4} className='phone:mt-16 w-full phone:h-2/3' alt="Orange Lady" />
                <div className='phone:text-justify phone:rounded-xl phone:m-5 tablet:mt-20 tablet:w-full tablet:h-[450px] tablet:rounded-r-3xl text-white p-5 text-xl bg-emerald-600'>
                    <h1 className='phone:text-xl phone:m-2 phone:text-center gilroy-bold'>Social Media Marketing</h1>
                    <h3 className='phone:text-lg gilroy-medium mt-10'>Are you tired of the same old boring social media posts? Look no further than Mad Monkey! Our team of mischievous marketing experts will help your business climb to the top of the social media jungle with clever & engaging content that will make your brand stand out.</h3>
                </div>
            </div>
            {/* blue lady */}
            <div className='phone:hidden tablet:flex phone:text-justify tablet:mt-20 tablet:ml-20 tablet:gap-10 desktop:gap-40 mb-32'>
                <img src={lady5} className='tablet:w-1/3 desktop:w-1/3 desktop:ml-60 mx-10' alt="Blue Lady" />
                <div className='text-white p-5 bg-blue-600 phone:text-justify phone:w-full laptop:w-5/6 desktop:w-2/4 tablet:w-5/6 tablet:h-1/2 tablet:mt-20 tablet:rounded-l-[40px]'>
                    <h1 className='desktop:text-5xl desktop:m-20 gilroy-bold tablet:m-8 tablet:text-2xl tablet:text-left laptop:text-5xl'>Product Shoot</h1>
                    <h3 className='desktop:text-4xl desktop:pb-40 tablet:text-xl tablet:m-8 tablet:pb-10 laptop:pb-20 laptop:text-2xl gilroy-medium phone:m-5'>Need to make your product look picture-perfect? Our team of skilled photographers will capture your product in its best light, creating stunning images that will make your product stand out and attract customers.</h3>
                </div>
            </div>

            <div className='tablet:hidden phone:mx-5 phone:text-center phone:text-justify'>
                <img src={lady5} className='phone:mt-16 w-full phone:h-2/3' alt="Orange Lady" />
                <div className='phone:text-justify phone:rounded-xl phone:m-5 tablet:mt-20 tablet:w-full tablet:h-[450px] tablet:rounded-r-3xl text-white p-5 text-xl bg-blue-600'>
                    <h1 className='phone:text-xl phone:m-2 phone:text-center gilroy-bold'>Product Shoot</h1>
                    <h3 className='phone:text-lg gilroy-medium phone:m-5 mt-10'>Need to make your product look picture-perfect? Our team of skilled photographers will capture your product in its best light, creating stunning images that will make your product stand out and attract customers.</h3>
                </div>
            </div>
        </div>


        </div>
    );
}

export default Services;
