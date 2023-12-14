import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext'; 

function LogOut() {
    const navigate = useNavigate();
    const { handleLogout } = useContext(AuthContext);

    const performLogout = () => {
        handleLogout();
        navigate('/');
    };

    return (
        <button onClick={performLogout} variant="outline-primary btn-sm" className="me-2">Logout</button>
    );
}

export default LogOut;
