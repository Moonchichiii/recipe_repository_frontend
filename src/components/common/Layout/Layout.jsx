import React from 'react';
import Navbar from './';
import AuthNavbar from './Authentication/AuthNavbar/AuthNavbar';
import Footer from './Footer/Footer';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <AuthNavbar />
    {children}
    <Footer />
  </>
);

export default Layout;
