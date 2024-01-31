import React from 'react'
import hero from "../../assets/hero.png"
import { IoHomeOutline } from "react-icons/io5";
import logoBrand1 from "../../assets/brand/1.svg";
import logoBrand2 from "../../assets/brand/2.svg";
import logoBrand3 from "../../assets/brand/3.svg";
import logoBrand4 from "../../assets/brand/4.svg";
import logoBrand5 from "../../assets/brand/5.svg";
import playHero from "../../assets/play_hero.svg"
import { IoIosPlayCircle } from "react-icons/io";

function Hero (){
  return (
    <div>
            {/* Hero Section */}
    <section>
      <div className='container mx-auto p-4 py-4 lg:py-16'>
        <div class="grid grid-cols-12 items-center">
          <div class="col-span-12 lg:col-span-4 order-2 lg:order-1">
            <div>
              <button className='px-8 py-4 bg-white text-pink-500 flex gap-2 font-bold rounded-full mx-auto lg:mx-0'>
                Explore the world!
                <IoHomeOutline className='text-pink-500 text-2xl hover:text-purple-500' />
              </button>
              <h1 className='mt-4 mb-6 md:mb-[43px] md:mt-[43px] lg:text-[69px] font-bold text-[40px] md:text[52px] text-grey leading-tight text-center lg:text-start'>Travel <span className='text-pink-600'>top destination </span>of the world</h1>
              <p className='mb-8 md:mb-[43px] text-gray text-center lg:text-start opacity-50 md:text-[18px] md:w-3/4 lg:w-full mx-auto'>We always make our customer happy by providing as many choices as possible </p>
              <div className='flex flex-col md:flex-row justify-center gap-6 lg:justify-start'>
                <button className='py-6 px-8 bg-purple-500 drop-shadow-lg-shadow text-white rounded-full text-sm font-bold'>Get Started</button>
                <button className='justify-center items-center z-10 flex gap-2 py-6 px-8 bg-white border border-[#EEEEEE] text-sm font-bold'>
                  <img src={playHero} alt=''/>
                    Watch Demo
                </button>
              </div>
            </div>
          </div>
          <div class="col-span-12 lg:col-span-8 order-1 lg:order-2 text-center">
            <div>
                <img src={hero} alt='' className='w-full'/>
            </div>
          </div>
          <div className="col-span-12 order-3 py-8">
            <div className='flex justify-center lg:justify-between gap-6 sm:gap-7 flex-wrap'>
              <div><img src={logoBrand1} alt="" className='h-5 sm:h-8' /></div>
              <div><img src={logoBrand2} alt="" className='h-5 sm:h-8' /></div>
              <div><img src={logoBrand3} alt="" className='h-5 sm:h-8' /></div>
              <div><img src={logoBrand4} alt="" className='h-5 sm:h:8' /></div>
              <div><img src={logoBrand5} alt="" className='h-5 sm:h-8' /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero;