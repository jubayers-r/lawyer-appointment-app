import React from 'react';
import banner from "/src/assets/banner-img-1.png"

const Header = () => {
    return (
       <div className='relative'>
       <img src={banner} alt="" className='rounded-2xl mx-auto w-9/11'/>
       <div className='text-white absolute md:bottom-10 bottom-5 space-y-5 text-center place-items-center w-full'>
       <h3 className='2xl:text-5xl/snug xl:text-3xl/tight lg:text-2xl/tight md:text-3xl w-[60%] font-bold'>It avoids subjective claims or exaggeration that might raise red flags legally</h3>
       <p className='w-[70%] lg:text-lg text-sm'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
       </div>
       </div>
    );
};

export default Header;