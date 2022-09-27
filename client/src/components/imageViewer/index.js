import React, { useContext } from 'react';
import ImagePreview from 'react-simple-image-viewer';
import { ImagesContext } from '../../context';
const ImaveViewer = () => {
  const { setIsViewerOpen, currentImage, setCurrentImage, imagesArray } = useContext(ImagesContext);

  console.log({ currentImage, setCurrentImage, imagesArray });
  return (
    <>
      <ImagePreview
        src={imagesArray}
        onClose={() => {
          setIsViewerOpen(false);
          setCurrentImage(0);
        }}
        currentIndex={currentImage}
        disableScroll={false}
        closeOnClickOutside={true}
        backgroundStyle={{
          backgroundColor: 'rgba(0,0,0,0.9)',
        }}
      />
    </>
  );
};

export default ImaveViewer;
