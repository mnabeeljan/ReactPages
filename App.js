import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Components/css/App.css';
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import Account from './Components/Account';

function App() {
  return (
    <div id="root">
      <Router>
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        <br /> <br />
        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
