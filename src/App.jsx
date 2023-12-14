import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './common/Layout/Layout';
import ProtectedRoute from './utils/ProtectedRoute';

import News from './pages/News/News';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './components/Authentication/Login/Login';
import Signup from './components/Authentication/Signup/Signup';
import AuthNavbar from './components/Authentication/AuthNavbar/AuthNavbar';
import Dashboard from './components/Authentication/DashBoard/DashBoard';
import { AuthProvider } from './components/Authentication/Contexts/AuthContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <AuthProvider>
        <Router>
            <Layout>
                <div className="main">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />                        
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
        </AuthProvider>
        
    );
}

export default App;

function LandingPage() {
    return <div>        
            <section className="diagonal">
                <div className="wrapper">
                    <h2 className="section-title">Post your own recipes!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </section>
    </div>;
}
