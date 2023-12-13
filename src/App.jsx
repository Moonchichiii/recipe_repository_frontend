import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';

import Footer from './components/common/Footer/Footer'
import News from './pages/News/News';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  return (

    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>          
        <Route path="/News" element={<News />} />
        <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
