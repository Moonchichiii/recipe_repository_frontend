import React from 'react';
import NavBar from '../Navbar/NavBar';
import AuthNavbar from '../../components/Authentication/AuthNavbar/AuthNavbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <>
    <NavBar />
    <AuthNavbar />
    <main>{children}</main> 
    <Footer />
  </>
);

export default Layout;