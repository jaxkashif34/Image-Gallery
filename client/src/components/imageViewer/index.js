import React, { useContext } from 'react';
import ImagePreview from 'react-simple-image-viewer';
import { ImagesContext } from '../../context';
const ImaveViewer = () => {
  const { setIsViewerOpen, currentImage, setCurrentImage, imagesUrls } = useContext(ImagesContext);

  console.log({ currentImage, setCurrentImage, imagesUrls });
  return (
    <>
      <ImagePreview
        src={imagesUrls}
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
