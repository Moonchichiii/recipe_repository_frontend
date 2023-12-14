import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { AuthContext } from '../Contexts/AuthContext';
import { register } from '../../../service/Api/Api';



function SignUp({ closeModal }) {


    const [username, setUsername] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const { handleRegister } = useContext(AuthContext);
    const navigate = useNavigate();

    const validateInputs = () => {

        if (!username || !email || !password || !confirmPassword) {
            setError({ general: ['All fields are required.'] });
            return false;
        }
        if (password !== confirmPassword) {
            setError({ confirm_password: ['Passwords do not match.'] });
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        if (!validateInputs()) return;

        setIsLoading(true);
        register(username, email, password, confirmPassword)
            .then(response => {

                localStorage.setItem('token', response.data.token);
                handleRegister(response.data);                
                navigate('/profilecreation');
                closeModal();

            })
            .catch(err => {
                if (err.response && err.response.data) {
                    setError(err.response.data);
                } else {
                    setError({ general: ['An unknown error occurred!'] });
                }
            })
            .finally(() => setIsLoading(false));
    };

    return (
        <div className="form-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    {error.username?.map((message, idx) => (
                        <Alert key={idx} variant="alert alert-danger">{message}</Alert>
                    ))}
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {error.email?.map((message, idx) => (
                        <Alert key={idx} variant="alert alert-danger">{message}</Alert>
                    ))}
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {error.password?.map((message, idx) => (
                        <Alert key={idx} variant="alert alert-danger">{message}</Alert>
                    ))}
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    {error.confirm_password?.map((message, idx) => (
                        <Alert key={idx} variant="alert alert-danger">{message}</Alert>
                    ))}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Signup
                </Button>
            </Form>
        </div>
    );
}

export default SignUp;
