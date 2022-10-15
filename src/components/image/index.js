import { Iconnify } from '../Icon';
import React, { useContext } from 'react';
import { ImagesContext } from '../../context';
const Image = ({ image, i }) => {
  const { handleDelete, setCurrentImage, setIsViewerOpen } = useContext(ImagesContext);
  const { created_at, bytes, name, secure_url, id } = image; // height and width are also available in object
  const size = (bytes / 1024 / 1024).toFixed(1);
  const displaySize = size > 1 ? `${size}Mb` : `${size * 1024}Kb`;
  const date = created_at.split('T')[0];
  return (
    <div className="h-48 relative group" key={id}>
      <img src={secure_url} alt={name} className="h-full w-full object-cover rounded-md" />
      <span className="w-full h-full transition-all absolute top-0  bg-gray-900 bg-opacity-20 rounded-md  invisible flex justify-center items-center group-hover:visible ">
        <span className="text-gray-50 text-sm font-semibold select-none transition absolute top-4 left-5 hover:text-gray-300 ">{displaySize}</span>
        <span className="text-gray-50 transition absolute top-4 right-5 cursor-pointer hover:text-indigo-600 transform hover:-translate-y-1" onClick={() => handleDelete(id)}>
          <Iconnify icon="fluent:delete-12-regular" />
        </span>
        <span
          className="hover:text-indigo-600 transform hover:-translate-y-1 cursor-pointer transition  text-gray-50 text-xl font-semibold select-none"
          onClick={() => {
            setCurrentImage(i);
            setIsViewerOpen(true);
          }}>
          preview
        </span>
        <span className="text-gray-50 text-sm font-semibold select-none transition absolute bottom-1  hover:text-gray-300 ">{date}</span>
      </span>
    </div>
  );
};

export default Image;
