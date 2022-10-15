import Gallery from './components/gallery';
import Nav from './components/Nav';
import ImaveViewer from './components/imageViewer';
import { ImagesContext } from './context';
import { useContext } from 'react';
function App() {
  const { isViewerOpen } = useContext(ImagesContext);
  return (
    <div className="bg-indigo-600 h-screen">
      <Nav />
      <Gallery />
      {isViewerOpen && <ImaveViewer />}
    </div>
  );
}

export default App;
