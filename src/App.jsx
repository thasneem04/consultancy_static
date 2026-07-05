import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Company from './pages/Company.jsx';
import Solutions from './pages/Solutions.jsx';
import Industries from './pages/Industries.jsx';
import WhyMncs from './pages/WhyMncs.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-night text-white">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/why-mncs" element={<WhyMncs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
