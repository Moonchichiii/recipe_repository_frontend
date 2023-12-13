import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './common/Layout/Layout';
import ProtectedRoute from './utils/ProtectedRoute';

import News from './pages/News/News';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import Login from './components/Authentication/Login/Login';
import Signup from './components/Authentication/Signup/Signup';
import Dashboard from './components/Authentication/DashBoard/DashBoard';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
    return (
        <Router>
            <Layout>
                <div className="main">
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/dashboard" element={
                            
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        } />

                    </Routes>
                </div>
            </Layout>
        </Router>
    );
}

export default App;
