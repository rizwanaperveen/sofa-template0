import React from 'react';
import Image from 'next/image';

const Insta = () => {
  return (
    <div className='sm:w-full md:w-full lg:w-[1440px] sm:h-full md:h-full lg:h-[450px] text-center flex justify-center items-center'>
      <div className='sm:w-full md:w-full lg:w-[1440px] sm:h-full md:h-full lg:h-[450px] text-center lg:ml-10'>
        <Image src="/Group47.png" alt="image" width={1440} height={450} />
    </div>
    </div>
  )
}

export default Insta