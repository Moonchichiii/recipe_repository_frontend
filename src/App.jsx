import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  return (

    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>          
          
        </Routes>
      </div>
    </Router>

  );
}

export default App;
