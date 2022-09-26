import Gallery from './components/gallery';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const getImages = async () => {
    setLoading(true);
    axios.get('http://localhost:8000/').then((response) => {
      setImages(response.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getImages();
  }, []); // eslint-disable-line

  console.log(images);
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="bg-indigo-600 h-screen">
      <Nav />
      <Gallery images={images} />
    </div>
  );
}

export default App;
