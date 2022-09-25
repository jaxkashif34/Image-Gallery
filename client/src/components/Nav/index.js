import React, { useState } from 'react';
import axios from 'axios';
const Nav = () => {
  const handleChange = async (e) => {
    e.preventDefault();
    const files = e.target.files;
    const images = Object.keys(files).map((key) => {
      return files[key];
    });

    if (images.length > 10) {
      alert(`you can select only 10 images but ${images.length} images were selected`);
      return;
    }
    const data = new FormData();
    images.forEach((image) => {
      data.append('images', image);
    });

    try {
      const response = await axios({ url: 'http://localhost:8000/upload', data, method: 'POST' });

      console.log('response', response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="h-28">
      <div className="flex justify-center items-center flex-col space-y-4 h-full">
        <h1 className="text-4xl font-black text-gray-50">Gallery</h1>
        <form encType="multipart/form-data">
          <label htmlFor="files" className="bg-gray-800 p-1 cursor-pointer rounded-md text-xl font-semibold text-gray-50 shadow-md">
            Select File
          </label>
          <input type="file" id="files" name="images" multiple hidden onChange={handleChange} accept="image/*" />
        </form>
      </div>
    </div>
  );
};

export default Nav;
