import React from 'react'
import "../index.css"
function Vision() {
    return (
        <div>
            <div className='bg-black align-right text-white mt-20 ml-20 mr-20 text-l gilroy-semibold'>
                <p>Our agency, Mad Monkey, was founded with the belief that all brands, big or small, deserve the opportunity to succeed on a global scale. We believe that Indian brands have the potential to dominate the international market, with their diverse and innovative products.<br></br><br></br>
                    Our mission is to help local brands reach their full potential and become global powerhouses. We understand that not all brands have the resources or strategies needed to succeed in today's competitive market, and that's where we come in.<br></br><br></br>
                    At Mad Monkey, our motto is to provide impeccable services to all brands, helping them to achieve the success they deserve. We are dedicated to pushing the boundaries and finding new ways to promote and market our clients' products to a wider audience.<br></br><br></br>
                    We believe that every brand has the potential to become a global leader, and we are committed to helping them get there. If you are a brand looking to take your business to the next level, Mad Monkey is here to help. Let us help you achieve your global ambitions and dominate the international market.<br></br><br></br>
                </p>
            </div>
            <div className="bg-black mt-5 text-l mr-20 ml-20 pr-6 pl-6 pt-10 pb-10 bg-gradient-to-br from-violet-800 via-pink-500  to-yellow-200 border border-gray-200 rounded-xl shadow">
                <p className="mb-3 font-sans text-white gilroy-semibold">We want to hear about your brand and business challenges, even if you're unsure of your next steps. We promise that there will be no sales pitch and no strings attached.</p>
                <a href="#" className="flex gilroy-bold text-white hover:underline">
                    Sound Good? Let’s Talk
                    <svg xmlns="http://www.w3.org/2000/svg"  strokeWidth={3} stroke="currentColor" className="w-5 h-5 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </a>
            </div>

        </div>
    )
}

export default Vision;
