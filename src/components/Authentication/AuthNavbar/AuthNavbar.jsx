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
                        <div className="me-1 welcome-user-navbar">Welcome, {user.username}!</div>
                        
                        <Link to="/post" className={`${styles.buttonStyle} btn btn-sm me-1`}>Post Recipe</Link>
                        <Link to="/profile" className={`${styles.buttonStyle} btn btn-sm me-1`}>Edit Profile</Link>

                      
                        
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
