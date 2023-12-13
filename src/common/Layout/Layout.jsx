import React from 'react';
import NavBar from '../Navbar/NavBar';
import AuthNavbar from '../../components/Authentication/AuthNavbar/AuthNavbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <>
    <NavBar />
    <AuthNavbar />
    {children}
    <Footer />
  </>
);

export default Layout;