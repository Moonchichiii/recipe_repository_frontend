import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './common/Layout/Layout';
import ProtectedRoute from './utils/ProtectedRoute';

import LoginModal from './components/Authentication/Login/Login';

import SignUpModal from './components/Authentication/SignUp/SignUp';

import { AuthProvider } from './components/Authentication/Contexts/AuthContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const ProfileCreation = React.lazy(() => import('./components/Authentication/ProfileCreation/ProfileCreation'));

const Dashboard = React.lazy(() => import('./components/Authentication/DashBoard/DashBoard'));
const News = React.lazy(() => import('./pages/News/News'));

const About = React.lazy(() => import('./pages/About/About'));

const Contact = React.lazy(() => import('./pages/Contact/Contact'));


function App() {
    return (
        <AuthProvider>
            <Router>
                <Layout>
                    <div className="main">
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/login" element={<LoginModal />} />
                            <Route path="/signup" element={<SignUpModal />} />                            
                            
                            <Route path="/news" element={
                                <Suspense fallback={<div className="d-flex justify-content-center align-items-center"><h3>Loading...</h3></div>}><News /></Suspense>
                            } />


                            <Route path="/about" element={
                                <Suspense fallback={<div className="d-flex justify-content-center align-items-center"><h3>Loading...</h3></div>}><About /></Suspense>
                            } />
                            <Route path="/contact" element={
                                <Suspense fallback={<div className="d-flex justify-content-center align-items-center"><h3>Loading...</h3></div>}><Contact /></Suspense>
                            } />
                            <Route path="/dashboard" element={
                                <Suspense fallback={<div className="d-flex justify-content-center align-items-center"><h3>Loading...</h3></div>}>
                                    <ProtectedRoute><Dashboard /></ProtectedRoute>
                                </Suspense>
                            } />
                            <Route path="/profilecreation" element={
                                <Suspense fallback={<div className="d-flex justify-content-center align-items-center"><h3>Loading...</h3></div>}>
                                    <ProtectedRoute><ProfileCreation /></ProtectedRoute>
                                </Suspense>
                            } />
                        </Routes>
                    </div>
                </Layout>
            </Router>
        </AuthProvider>
    );
}

function LandingPage() {
    return (
        <div>
            <section className="diagonal">
                <div className="wrapper">

                    <h2 className="section-title">Post your own recipes!</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                </div>

            </section>

        </div>
    );
}

export default App;
