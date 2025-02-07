import React from 'react';
import Image from 'next/image';

const Content = () => {
  return (
    <div>
        <div className='sm:h-full md:h-full lg:h-[672px] lg:w-[1440px] sm:w-full md:w-full bg-[#FAF4F4] lg:flex lg:justify-around items-center flex-col md:flex-row mt-48 xs:mb-96'>
              <div className='lg:w-[605px] h-[400px]'><Image src="/Group9.png" alt="image" width={500} height={400} /></div>
              <div className='lg:w-[605px] h-[400px]'><Image src="/Group8.png" alt="image" width={500} height={400} /></div>
    
    
            </div>
    </div>
  )
}

export default Content