import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
    <div className='bg-[#FBEBB5] h-screen xs:w-full sm:w-full md:w-full w-[1440px] lg:flex lg:justify-around items-center flex-col md:flex-row'>
        {/*left*/}
        <div className='flex flex-col justify-center items-center'>
        <h1 className='sm:text-3xl  md:text-6xl font-bold text-black w-full lg:w-[440px] h-[192px] lg:ml-40'>Rocket single seater</h1>
        <h2 className='sm:text-2xl md:text-2xl text-black underline w-full lg:w-[121px] h-[49px] '>Shop Now</h2>
</div>
{/*right*/}
<div className='xs:w-40 h-auto md:w-[500px] sm:mb-40 md:mb-4 ml-0 items-center'>
    <Image src="/sofa1.png" alt="image" width={500} height={500} className='xs:w-40 md:w-[500px] h-full items-center sm:mb-40 md:mb-4 ml-0'/>
</div>
    </div>
    </>
  )
}

export default Hero