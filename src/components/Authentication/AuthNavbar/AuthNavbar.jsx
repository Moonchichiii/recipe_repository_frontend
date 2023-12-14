import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import LoginModal from '../Login/Login';
import SignUpModal from '../SignUp/SignUp';
import LogOut from '../LogOut/Logout';
import styles from './AuthNavbar.module.css';


function AuthNavbar() {
    // authentication state and user information, from AuthContext
    const { isAuthenticated, user, handleLogout } = useContext(AuthContext);
        
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid justify-content-start">
            
                {isAuthenticated ? ( 
                            // Displaying username, navigationbar signup/login/logout. 
                    <>
                        <div className="me-5 welcome-user-navbar">Welcome, {user.username}!</div>
                                                                       
                        <Link to="/post"  role={button} className={'outline-primary btn-sm me-2'}>Post Recipe</Link>
                        <Link to="/profile" role={button} className={'outline-primary btn-sm me-2'}>Edit Profile</Link>
                        <LogOut /> 
                        
                    </>
                ) : (
                    <>
                        <LoginModal />
                        <SignUpModal /> 
                    </>
                )}
            </div>
        </nav>
    );
}

export default AuthNavbar;
