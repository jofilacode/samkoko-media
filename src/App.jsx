import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
