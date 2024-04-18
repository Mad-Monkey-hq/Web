import React from 'react'
import img1 from "../images/Mad Monkey-logo.svg"
import arrow from "../images/arrowlogo.svg"
import linkedin from "../images/linkedin.svg"
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"

function Vision() {
    return (
        <div className='flex-col phone:mt-20'>
            <div className='bg-black text-justify text-white desktop:text-5xl desktop:m-5 desktop:p-20 tablet:text-2xl tablet:mt-2 tablet:px-10 phone:text-md phone:m-10 gilroy-semibold'>
                <p>Our agency, Mad Monkey, was founded with the belief that all brands, big or small, deserve the opportunity to succeed on a global scale. We believe that Indian brands have the potential to dominate the international market, with their diverse and innovative products.<br></br><br></br>
                    Our mission is to help local brands reach their full potential and become global powerhouses. We understand that not all brands have the resources or strategies needed to succeed in today's competitive market, and that's where we come in.<br></br><br></br>
                    At Mad Monkey, our motto is to provide impeccable services to all brands, helping them to achieve the success they deserve. We are dedicated to pushing the boundaries and finding new ways to promote and market our clients' products to a wider audience.<br></br><br></br>
                    We believe that every brand has the potential to become a global leader, and we are committed to helping them get there. If you are a brand looking to take your business to the next level, Mad Monkey is here to help. Let us help you achieve your global ambitions and dominate the international market.<br></br><br></br>
                </p>
            </div>
            <div className="bg-black tablet:mx-20 desktop:text-5xl desktop:mx-20 desktop:py-40 tablet:text-2xl tablet:mb-16 tablet:p-10 phone:m-10 phone:p-5 bg-gradient-to-br from-violet-800 via-pink-600 to-yellow-400 rounded-xl shadow">
                <p className="mb-3 font-sans text-white gilroy-semibold py-10">We want to hear about your brand and business challenges, even if you're unsure of your next steps. We promise that there will be no sales pitch and no strings attached.</p>
                <a href="#" className="flex gilroy-bold text-white hover:underline desktop:mt-10">
                    Sound Good? Let’s Talk<img className='w-10 h-8 phone:w-5 phone:h-5 tablet:h-8 tablet:w-6 desktop:h-16 desktop:w-16' src={arrow}></img>
                </a>
            </div>
        </div>
    )
}

export default Vision;
