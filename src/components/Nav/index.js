import React, { useContext } from 'react';
import { ImagesContext } from '../../context';
const Nav = () => {
  const { handleChange } = useContext(ImagesContext);
  return (
    <div className="h-28">
      <div className="flex justify-center items-center flex-col space-y-4 h-full">
        <h1 className="text-4xl font-black text-gray-50">Gallery</h1>
        <form encType="multipart/form-data">
          <label htmlFor="files" className="bg-gray-800 p-1 cursor-pointer rounded-md text-xl font-semibold text-gray-50 shadow-md">
            Upload
          </label>
          <input type="file" id="files" name="images" multiple hidden accept="image/*" onChange={handleChange} />
        </form>
      </div>
    </div>
  );
};

export default Nav;
