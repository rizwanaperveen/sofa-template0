import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-12 text-center">
      {/* Title Section */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">Our Blogs</h1>
        <p className="text-sm text-gray-500 max-w-lg mx-auto mt-2">
          Find a bright idea to suit your taste with our great selection.
        </p>
      </div>

      {/* Blog Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center items-center">
        <div className="flex justify-center">
          <Image src="/Group50.png" alt="Blog 1" width={393} height={555} className="rounded-lg shadow-md" />
        </div>
        <div className="flex justify-center">
          <Image src="/Group49.png" alt="Blog 2" width={393} height={555} className="rounded-lg shadow-md" />
        </div>
        <div className="flex justify-center">
          <Image src="/Group48.png" alt="Blog 3" width={393} height={555} className="rounded-lg shadow-md" />
        </div>
      </div>

      {/* Button Section */}
      <div className="mt-10">
        <Link href="/blog">
          <button className="px-6 py-3 text-lg border-2 border-black rounded-lg hover:bg-gray-800 hover:text-white transition duration-300">
            View All Posts
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
