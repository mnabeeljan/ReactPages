import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Components/css/App.css';
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';


function App() {
  return (
    <div className="body-container ">
      <Router>
        <NavigationBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/signup" element={<SignUp />}/> 
          </Routes>
         
        </div>
        <br /> <br />  <br /> <br /> <br /> <br />
        
      </Router>
      <Router> <Footer /></Router>
    </div>
  );
}

// https://reactpages-f746f.web.app/

export default App;
