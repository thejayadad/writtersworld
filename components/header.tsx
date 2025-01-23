import Link from 'next/link';
import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';

const Header = () => {
  return (
    <header className='border-b w-full bg-gradient-to-r from-gray-900 via-gray-700 to-orange-500'>
      <div className='mx-auto max-w-screen-lg px-4 flex items-center justify-between py-6'>
        
        {/* Stylish Logo with Shape */}
        <div className='flex items-center space-x-2'>
          <div className='bg-white p-2 rounded-full shadow-lg'>
            <span className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-gray-300 to-orange-500'>
              W
            </span>
          </div>
          <h1 className='text-2xl font-extrabold text-white tracking-wide'>
            Writers<span className="text-orange-300">World</span>
          </h1>
        </div>

        {/* Stylish New Post Link */}
        <Link
          href={'/new'}
          className="relative flex items-center gap-2 text-white font-semibold after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-orange-300 after:transition-all after:duration-300 hover:after:w-full"
        >
          <FiPlusCircle className="h-6 w-6 text-orange-300" />
          New Post
        </Link>
      </div>
    </header>
  );
};

export default Header;
