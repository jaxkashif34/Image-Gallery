import React from 'react';
import { Iconnify } from '../Icon';
const Gallery = ({ images }) => {
  return (
    <div className=" p-3 max-w-6xl mx-auto my-3 rounded-lg shadow-lg ">
      <div className="grid grid-cols-4 gap-x-4 gap-y-2 overflow-y-auto max-h-96 px-4 py-2 scrollbar">
        {images.map((image) => {
          const { created_at, bytes, name, secure_url, asset_id } = image; // height and width are also available in object
          const size = (bytes / 1024 / 1024).toFixed(1);
          const displaySize = size > 1 ? `${size}Mb` : `${size * 1024}Kb`;
          const date = created_at.split('T')[0];
          return (
            <div className="h-48 relative group" key={asset_id}>
              <img src={secure_url} alt={name} className="h-full w-full object-cover rounded-md" />
              <span className="w-full h-full transition-all absolute top-0  bg-gray-900 bg-opacity-20 rounded-md  invisible flex justify-center items-center group-hover:visible ">
                <span className="text-gray-50 text-sm font-semibold select-none transition absolute top-4 left-5 hover:text-gray-300 ">{displaySize}</span>
                <span className="text-gray-50 transition absolute top-4 right-5 cursor-pointer hover:text-indigo-600 transform hover:-translate-y-1">
                  <Iconnify icon="fluent:delete-12-regular" />
                </span>
                <span className="hover:text-indigo-600 transform hover:-translate-y-1 cursor-pointer transition  text-gray-50 text-xl font-semibold select-none ">preview</span>
                <span className="text-gray-50 text-sm font-semibold select-none transition absolute bottom-1  hover:text-gray-300 ">{date}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
