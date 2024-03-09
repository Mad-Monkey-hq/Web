import React from 'react';
import lady1 from "../images/Group1.svg";
import lady2 from "../images/Group2.svg";
import lady3 from "../images/Group3.svg";
import lady4 from "../images/Group4.svg";
import lady5 from "../images/Group5.svg";

function Services() {
    return (
        <div className=' w-screen bg-black'>
            {/* orange lady */}
            <div className='text-white mt-40 ml-20 mr-20 text-6xl'>
                <h1 className='font-semibold'>
                    Our offerings to boost your <br/>growth
                </h1>
            </div>
            <div className='flex items-stretch'>
                <div className="mt-20 ml-20">
                    <img src={lady1} alt="Orange Lady" />
                </div>
                <div className='text-white text-xl bg-orange-500 h-96 w-3/4 mt-40 ml-20 rounded-l-3xl'>
                    <h1 className='gilroy-bold ml-20 mt-10 text-3xl'>Customer Review Management</h1>
                    <h3 className='ml-20 mr-40 mt-5'>Customer reviews are important for building trust, increasing traffic, and enhancing sales. We offer product review solutions for brands looking to make an impact in the industry. Our services are customizable and can be used across various e-commerce platforms.</h3>
                </div>
            </div>

            {/* violet lady */}
            <div className='flex'>
                <div className='text-white text-xl bg-indigo-600 h-96 w-3/4 mt-40 mr-20 rounded-r-3xl'>
                    <h1 className='gilroy-bold ml-60 mt-10 text-3xl'>Influencer Marketing</h1>
                    <h3 className='ml-60 mr-20 mt-5'>Influencer Marketing is the new big thing. We at Mad Monkey enable your brand to collaborate with different micro and macro influencers. Through them, you can reach out to different target audiences so far as to start a new social media trend of your own! With our influencer community establish your own tribe today.</h3>
                </div>
                <div className="mt-40 mr-20">
                    <img src={lady2} alt="Blue Lady" />
                </div>
            </div>

            {/* crimson lady */}
            <div className='flex items-stretch'>
                <div className="mt-40 ml-20">
                    <img src={lady3} alt="Orange Lady" />
                </div>
                <div className='text-white text-xl bg-red-500 h-96 w-3/4 mt-40 ml-20 rounded-l-3xl'>
                    <h1 className='gilroy-bold ml-20 mt-10 text-3xl'>Branding</h1>
                    <h3 className='ml-20 mr-40 mt-5'>Looking to revamp your brand? The Mad Monkeys of our agency are here to help! We'll swing into action to create a unique and memorable brand identity that will make your business stand out from the competition. From logos to slogans as well as a mission statement, we've got you covered.</h3>
                </div>
            </div>

            {/* green lady */}
            <div className='flex'>
                <div className='text-white text-xl bg-emerald-600 h-96 w-3/4 mt-40 mr-20 rounded-r-3xl'>
                    <h1 className='gilroy-bold ml-60 mt-10 text-3xl'>Social Media Marketing</h1>
                    <h3 className='ml-60 mr-20 mt-5'>Are you tired of the same old boring social media posts? Look no further than Mad Monkey! Our team of mischievous marketing experts will help your business climb to the top of the social media jungle with clever and engaging content that will make your brand stand out.</h3>
                </div>
                <div className="mt-40 mr-20">
                    <img src={lady4} alt="Blue Lady" />
                </div>
            </div>

            {/* blue lady */}
            <div className='flex items-stretch'>
                <div className="mt-40 ml-20">
                    <img src={lady5} alt="Orange Lady" />
                </div>
                <div className='text-white text-xl bg-blue-600 h-96 w-3/4 mt-40 ml-20 rounded-l-3xl'>
                    <h1 className='gilroy-bold ml-20 mt-10 text-3xl'>Product Shoot</h1>
                    <h3 className='ml-20 mr-40 mt-5'>Need to make your product look picture-perfect? Our team of skilled photographers will capture your product in its best light, creating stunning images that will make your product stand out and attract customers.</h3>
                </div>
            </div>

        </div>
    );
}

export default Services;
