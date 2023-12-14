import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { AuthContext } from '../Contexts/AuthContext';
import { login, setAuthToken } from '../../../service/Api/Api';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password)
        .then(response => {
            const { token } = response.data;
            localStorage.setItem('token', token);
            setAuthToken(token);
                handleLogin(response.data);                
                navigate('/dashboard');
                closeModal();
            })
            .catch(error => {
                if (error.response && error.response.data) {
                    setError(error.response.data);
                } else {
                    setError({ general: 'An error occurred!' });
                }
            });
    };

    return (
        <div className="form-container">                         
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="md-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                            {error.username?.map((message, idx) => (
                            <Alert key={idx} variant="danger">{message}</Alert>      
                            ))}                        
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                              
                               {error.password?.map((message, idx) => (
                            <Alert key={idx} variant="danger">{message}</Alert>                            
                            ))}
                            </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                   
                </div>            
    );
}

export default Login;