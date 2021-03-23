import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import CenterContainer from "./../CenterContainer/CenterContainer";

export default function ForgotPassword() {
    const emailRef = useRef();
    const { forgotPassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        let email = emailRef.current.value;

        try {
            setError('');
            setMessage('');
            setLoading(true);
            await forgotPassword(email);
            setMessage('Check your inbox for further Instructions');
        }
        catch {
            setError('Failed to Reset Password');
        }
        setLoading(false);
    }

    return (
        <CenterContainer>
            <Card>
                <Card.Body>
                    <h2>Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Button className="w-100" disabled={loading} type="submit" >Forgot Password</Button>
                        <div className="w-100 text-center mt-3" >
                            <Link to="/login">Log In</Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2" >
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
        </CenterContainer>
    )
}
