import { createContext, useEffect, useState } from 'react';
import Loader from '../components/loader';
export const ImagesContext = createContext();
const API_RROUTE = process.env.REACT_APP_NODE_ENV === "development" ? "http://localhost:8000" : process.env.REACT_APP_API_RROUTE;
export const ContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesUrls, setImagesUrls] = useState([]);
  const getImages = async () => {
    setLoading(true);
    await fetch(`${API_RROUTE}/api`)
      .then(async (response) => {
        const data = await response.json();
        setImages(data.data);
        setLoading(false);
        setImagesUrls(data.data.map((image) => image.secure_url));
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const handleDelete = async (id) => {
    const updatedlist = images.filter((image) => {
      return image.id !== id;
    });
    setImages(updatedlist);
    const getTheUrls = updatedlist.map((image) => image.secure_url);
    setImagesUrls(getTheUrls);
    await fetch(`${API_RROUTE}/delete-image/${id}`, { method: 'DELETE' });
  };

  const handleChange = async (e) => {
    setLoading(true);
    e.preventDefault();
    const files = e.target.files;
    const images = Object.keys(files).map((key) => {
      return files[key];
    });

    if (images.length > 10) {
      alert(`you can select only 10 images but ${images.length} images were selected `);
      return;
    }
    const data = new FormData();
    images.forEach((image) => {
      data.append('images', image);
    });

    try {
      const response = await fetch(`${API_RROUTE}/upload`, { body: data, method: 'POST' });
      const datainjson = await response.json();
      const newUrls = datainjson.data.map((image) => image.secure_url);
      setImagesUrls((prev) => [...prev, ...newUrls]);
      setImages((prev) => [...prev, ...datainjson.data]);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getImages();
  }, []); // eslint-disable-line

  const value = {
    images,
    handleDelete,
    handleChange,
    isViewerOpen,
    setIsViewerOpen,
    currentImage,
    setCurrentImage,
    imagesUrls,
  };

  return <ImagesContext.Provider value={value}>{loading ? <Loader loading={loading} /> : children}</ImagesContext.Provider>;
};
