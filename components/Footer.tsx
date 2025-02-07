import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
        <div className='sm:w-full md:w-[1440px] sm:h-full md:h-[550px] md:ml-60'>
            <div className='sm:w-full md:w-[1240.01] sm:h-full md:h-[419px]'>
               <div className='sm:w-full md:w-[1131px] md:h-[312px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        <div className='w-[285px] h-[72px] md:my-6 text-[#9F9F9F] md:mx-8 md:py-6'>
            <p>400 University Drive Suite 200 Coral</p> 
            <p> Gables,</p>
            <p>FL 33134 USA</p>
        </div>
        <div className='md:w-[68px] md:h-[312px] my-6 md:mx-8 md:gap-14'>
            <h1 className='text-[#9F9F9F]'>Links</h1>
            <ul>
                <li className='md:my-6'>Home</li>
                <li className='sm:my-4 md:my-6'>Shop</li>
                <li className='md:my-6'>Shop</li>
                <li className='md:my-6'>About</li>
                <li className='md:my-6'>Conact</li>
            </ul>
        </div>
        <div className='sm:w-full md:w-[140px] sm:full md:h-[242px] md:my-6 md:mx-8'>
            <h1 className='text-[#9F9F9F] my-6'>Help</h1>
            <ul>
                <li className='my-6'><Link href="/myaccount">Payment Options</Link></li>
                <li className='my-6'>Returns</li>
                <li className='my-6'>Privacy Policies</li>
            </ul>
        </div>
        <div className='sm:w-full md:w-[286px] sm:full md:h-[101px] md:my-6 md:mx-8'>
            <p className='text-[#9F9F9F]'>NewsLetter</p>
            <br/>
            <div className='flex justify-between underline'>
            <p className='text-[#9F9F9F]'>Enter Your Email Address</p>
            <p>SUBSCRIBE</p>
            </div>
        </div>
        </div>
               <div className='w-[1240.01] h-[59px] mt-10 border-t-2 border-slate-400 flex items-center'>2022 Meubel House. All rights reverved</div>
            </div>
        </div>
    </div>
  )
}

export default Footer

