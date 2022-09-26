import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const ImagesContext = createContext();

export const ContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getImages = async () => {
    setLoading(true);
    axios.get('http://localhost:8000/').then((response) => {
      setImages(response.data.data);
      setLoading(false);
    });
  };

  const handleDelete = async (id) => {
    const updatedlist = images.filter((image) => {
      return image.id !== id;
    });
    setImages(updatedlist);
    await axios({ url: `http://localhost:8000/delete-image/${id}`, method: 'DELETE' });
  };

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

      setImages(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getImages();
  }, []); // eslint-disable-line

  const value = {
    images,
    setImages,
    handleDelete,
    handleChange,
  };

  return <ImagesContext.Provider value={value}>{loading ? <h1>Loading...</h1> : children}</ImagesContext.Provider>;
};
