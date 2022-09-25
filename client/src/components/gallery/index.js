import React from 'react';
import { Iconnify } from '../Icon';
const Gallery = () => {
  return (
    <div className=" p-3 max-w-6xl mx-auto my-3 rounded-lg shadow-lg ">
      <div className="grid grid-cols-4 gap-x-4 gap-y-2 overflow-y-auto max-h-96">
        <div className="h-48 relative group">
          {/* <img src="https://source.unsplash.com/random/300×300" alt="unsplash image" className="h-full w-full object-cover rounded-md" /> */}
          <span className="cursor-pointer w-full transition-all h-full absolute top-0  bg-gray-900 bg-opacity-20 rounded-md  invisible flex justify-center items-center group-hover:visible text-gray-50 text-xl font-semibold select-none ">
            <span>
              <Iconnify icon="fluent:delete-12-regular" className="transition-all absolute top-4 right-5 cursor-pointer hover:text-red-600 transform hover:-translate-y-1" />
            </span>
            Preview
          </span>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
