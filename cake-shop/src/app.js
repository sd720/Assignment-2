import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CakeCategories from './pages/CakeCategories';
import CakeDetailPage from './pages/CakeDetailPage';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cake-categories" element={<CakeCategories />} />
        <Route path="/cake/:id" element={<CakeDetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
