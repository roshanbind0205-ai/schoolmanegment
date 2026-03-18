import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Solution from "./components/Solution";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Career from "./components/Career";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Solution" element={<Solution />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Career" element={<Career />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;