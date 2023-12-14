import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AuthContext } from '../Contexts/AuthContext';


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
                                                                       
                        <Link to="/post" className={'outline-primary btn-sm ms-2'}>Post Recipe</Link>
                        <Link to="/profile" className={'outline-primary btn-sm ms-2'}>Edit Profile</Link>
                        <Button onClick={handleLogout} variant="outline-primary btn-sm" className="ms-2">Logout</Button>
                        
                    </>
                ) : (
                    <>
                        <Link to="/signup" className={`btn btn-primary btn-sm ${styles.buttonStyle} me-1`}>Sign Up</Link>

                        <Link to="/login" className={`btn btn-secondary btn-sm ${styles.buttonStyle}`}>Login</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default AuthNavbar;
