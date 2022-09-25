import Gallery from './components/gallery';
import Nav from './components/Nav';
// import { useEffect, useState } from 'react';
function App() {
  // const [images, setImages] = useState([]);

  // useEffect(() => {

  // }, []); // eslint-disable-line

  return (
    <div className="bg-indigo-600 h-screen">
      <Nav />
      <Gallery />
    </div>
  );
}

export default App;
