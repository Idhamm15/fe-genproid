import React from 'react';
import service1 from "../../assets/destination 1.png";
import service2 from "../../assets/booking 1.png";
import service3 from "../../assets/cloudy 1.png";

function Service() {
  return (
    <div>
    {/* Service Section */}
    <section className='py-16 overflow-x-hidden'>
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-12 items-center">
          <div className="lg:col-span-4 col-span-12 flex gap-4 flex-col">
            <span className='text-pink-500 font-bold leading-tight text-center lg:text-start text-base sm:text-2xl'>SERVICE</span>
            <h1 className='font-bold text-5xl text-3xl leading-tight text-grey text-center lg:text-start'>Our top value categories for you</h1>
          </div>
          <div className="lg:col-span-8 col-span-12 flex flex-col sm:flex-row gap-5 lg:w-screen sm:w-auto lg:mt-0 sm:mt-16 mt-8">
            <div className='flex justify-center gap-16 flex-col items-center w-full sm:w-[350px] rounded-[32px] border lg:p-16 sm:p-10 bg-white'>
              <div><img src={service1} alt="" /></div>
              <div className='flex gap-8 flex-col'>
                <h2 className='font-bold text-grey text-lg text-center'>Best Tour Guide</h2>
                <p className='font-inter text-lg leading-relaxed text-grey opacity-50 text-center'>What looked like a small patch of purple grass, above five feet.</p>
              </div>
            </div>
            <div className='flex justify-center gap-16 flex-col items-center w-full sm:w-[350px] rounded-[32px] border lg:p-16 sm:p-10 drop-shadow-xl-shadow bg-white'>
              <div><img src={service2} alt="" /></div>
              <div className='flex gap-8 flex-col'>
                <h2 className='font-bold text-grey text-lg text-center'>Best Tour Guide</h2>
                <p className='font-inter text-lg leading-relaxed text-grey opacity-50 text-center'>What looked like a small patch of purple grass, above five feet.</p>
              </div>
            </div>
            <div className='flex justify-center gap-16 flex-col items-center w-full sm:w-[350px] rounded-[32px] border lg:p-16 sm:p-10 drop-shadow-xl-shadow bg-white'>
              <div><img src={service3} alt="" /></div>
              <div className='flex gap-8 flex-col'>
                <h2 className='font-bold text-grey text-lg text-center'>Best Tour Guide</h2>
                <p className='font-inter text-lg leading-relaxed text-grey opacity-50 text-center'>What looked like a small patch of purple grass, above five feet.</p>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Service;