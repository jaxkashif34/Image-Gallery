import React, { useContext } from 'react';
import { ImagesContext } from '../../context';
import NoImage from '../NoImage';
import Image from '../image';
const Gallery = () => {
  const { images } = useContext(ImagesContext);
  return (
    <div className=" p-3 max-w-6xl mx-auto my-3 rounded-lg shadow-lg ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-2 overflow-y-auto max-h-96 px-4 py-2 scrollbar">
        {images.length > 0 ? (
          images.map((image, i) => {
            return <Image key={i} image={image} i={i} />;
          })
        ) : (
          <NoImage />
        )}
      </div>
    </div>
  );
};

export default Gallery;
