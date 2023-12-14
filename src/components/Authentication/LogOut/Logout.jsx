import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';
import { Button } from 'react-bootstrap';



function LogOut() {
    const navigate = useNavigate();
    const { handleLogout } = useContext(AuthContext);

    const performLogout = () => {
        handleLogout();
        navigate('/');
    };

    return (
        <button onClick={performLogout} variant="btn-sm" className="me-2">Logout</button>
    );
}

export default LogOut;
