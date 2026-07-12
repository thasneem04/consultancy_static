import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Company from "./pages/Company.jsx";
import Solutions from "./pages/Solutions.jsx";
import Industries from "./pages/Industries.jsx";
import WhyMncs from "./pages/WhyMncs.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    function setHeaderHeight() {
      const header = document.querySelector("header");
      const height = header ? header.offsetHeight : 0;
      document.documentElement.style.setProperty(
        "--header-height",
        `${height}px`,
      );
    }

    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);
    return () => window.removeEventListener("resize", setHeaderHeight);
  }, []);

  return (
    <div
      className="site-canvas min-h-screen text-white"
      style={{
        paddingTop: "calc(var(--header-height, 64px) + var(--page-gap, 32px))",
      }}
    >
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
