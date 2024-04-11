import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../images/liveabit.svg';
import img2 from '../images/damensch.svg';
import img3 from '../images/manmatters.svg';
import img4 from '../images/bombayshaving.svg';
import img5 from '../images/flownmo.svg';
import img6 from '../images/vitaminfactory.svg';
import img7 from '../images/podonly.svg';
import img8 from '../images/menhood.svg'
import img9 from '../images/jmc.svg'
import img10 from '../images/soultatva.svg'






function Carousel() {
  return (
    <div className="bg-white laptop:flex tablet:flex phone:hidden desktop:flex">
        <Marquee className='w-fulld desktop:h-[400px] desktop:my-100 text-center border' direction="right" speed={100} delay={5}>
          <div className='p-10'>
            <img src={img1}/>
          </div>
          <div className="p-10">
            <img src={img2} alt="" />
          </div>
          <div className="p-10">
            <img src={img3} alt="" />
          </div>
          <div className="p-10">
            <img src={img4} alt="" />
          </div>
          <div className="p-10">
            <img src={img5} alt="" />
          </div>
          <div className="p-10">
            <img src={img6} alt="" />
          </div>
          <div className="p-10">
            <img src={img7} alt="" />
          </div>
          <div className="p-10">
            <img src={img8} alt="" />
          </div>
          <div className="p-10">
            <img src={img9} alt="" />
          </div>
          <div className="p-10">
            <img src={img10} alt="" />
          </div>
        </Marquee>
    </div>
  );
}

export default Carousel;