import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Link } from 'react-router-dom';
import LoginModal from '../Login/LoginModal';
import SignUpModal from '../Signup/SignUpModal';
import styles from './AuthNavbar.module.css';

const AuthNavbar = () => {
    // authentication state and user information, from AuthContext
    const { isAuthenticated, user, handleLogout } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid justify-content-end">
                {isAuthenticated ? (
                    // Displaying username, navigationbar signup/login/logout.                     
                    <>
                    <div className={`${styles.welcomeUserNavbar} me-5`}>Welcome, {user.username}!</div>
                        <Link to="/post" className={'outline-primary btn-sm ms-2'}>Post Recipe</Link>
                        <Link to="/profile" className={'outline-primary btn-sm ms-2'}>Edit Profile</Link>
                        <Button onClick={handleLogout} variant="outline-primary btn-sm" className="ms-2">Logout</Button>
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
