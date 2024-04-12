import React from 'react'
import img1 from "../images/Mad Monkey-logo.svg"
import linkedin from "../images/linkedin.svg"
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"

function Vision() {
    return (
        <div className='flex-col'>
            <div className='bg-black text-justify text-white desktop:text-5xl desktop:m-5 desktop:p-20 tablet:text-2xl tablet:mt-2 tablet:p-10 phone:text-md phone:m-10 gilroy-semibold'>
                <p>Our agency, Mad Monkey, was founded with the belief that all brands, big or small, deserve the opportunity to succeed on a global scale. We believe that Indian brands have the potential to dominate the international market, with their diverse and innovative products.<br></br><br></br>
                    Our mission is to help local brands reach their full potential and become global powerhouses. We understand that not all brands have the resources or strategies needed to succeed in today's competitive market, and that's where we come in.<br></br><br></br>
                    At Mad Monkey, our motto is to provide impeccable services to all brands, helping them to achieve the success they deserve. We are dedicated to pushing the boundaries and finding new ways to promote and market our clients' products to a wider audience.<br></br><br></br>
                    We believe that every brand has the potential to become a global leader, and we are committed to helping them get there. If you are a brand looking to take your business to the next level, Mad Monkey is here to help. Let us help you achieve your global ambitions and dominate the international market.<br></br><br></br>
                </p>
            </div>
            <div className="bg-black desktop:text-5xl desktop:m-10 desktop:p-20 tablet:text-2xl tablet:p-10 phone:m-10 phone:p-5 bg-gradient-to-br from-violet-800 via-pink-600 to-yellow-400 rounded-xl shadow">
                <p className="mb-3 font-sans text-white gilroy-semibold">We want to hear about your brand and business challenges, even if you're unsure of your next steps. We promise that there will be no sales pitch and no strings attached.</p>
                <a href="#" className="flex gilroy-bold text-white hover:underline">
                    Sound Good? Let’s Talk
                    <svg width="25" height="25" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.2132 7.07102C17.3079 3.16575 10.9763 3.16578 7.07107 7.07102C3.16582 10.9763 3.16582 17.3079 7.07107 21.2132C10.9763 25.1184 17.308 25.1184 21.2132 21.2132C25.1184 17.3079 25.1184 10.9763 21.2132 7.07102ZM18.8561 9.42808C18.9395 9.51496 19.0051 9.61045 19.0035 9.77929L19.1847 15.7625C19.1934 16.0381 18.964 16.287 18.6803 16.2894C18.4117 16.2917 18.1665 16.0594 18.1591 15.7907L18.0176 10.9918L10.1533 18.8561C9.95299 19.0564 9.62835 19.0563 9.42815 18.8561C9.22782 18.6557 9.22795 18.3311 9.42815 18.1309L17.2924 10.2666L12.4933 10.125C12.2249 10.1175 11.9749 9.86632 11.989 9.59806C12.0048 9.29795 12.2461 9.09484 12.5217 9.09951L18.5049 9.28072C18.6104 9.28325 18.7723 9.34421 18.8561 9.42806L18.8561 9.42808Z" fill="white" />
                    </svg>

                </a>
            </div>
        </div>
    )
}

export default Vision;
