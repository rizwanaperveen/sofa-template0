import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Toppicks = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto mt-12 text-center px-4">
      {/* Title Section */}
      <h1 className="text-3xl md:text-4xl font-bold mt-8">Top Picks For You</h1>
      <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-2">
        Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
      </p>

      {/* Image Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        <div className="flex justify-center">
          <Image src="/Group18.png" alt="image" width={280} height={372} className="rounded-lg shadow-md" />
        </div>
        <div className="flex justify-center">
          <Image src="/Group15.png" alt="image" width={280} height={372} className="rounded-lg shadow-md" />
        </div>
        <div className="flex justify-center">
          <Image src="/Group16.png" alt="image" width={280} height={372} className="rounded-lg shadow-md" />
        </div>
        <div className="flex justify-center">
          <Image src="/Group17.png" alt="image" width={280} height={372} className="rounded-lg shadow-md" />
        </div>
      </div>

      {/* Button */}
      <div className="mt-10">
        <Link href="/Products">
          <button className="px-6 py-3 text-lg border-2 border-black rounded-lg hover:bg-gray-800 hover:text-white transition duration-300">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Toppicks;
