import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Sigup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordref = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        let email = emailRef.current.value;
        let password = passwordRef.current.value;
        let confirmPassword = confirmPasswordref.current.value;

        if (password !== confirmPassword) {
            return setError('Password does not Match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password);
            history.push("/home");
        }
        catch {
            setError('Failed to Create an Account')
        }
        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2>Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="confirm-password">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={confirmPasswordref} required />
                        </Form.Group>
                        <Button disabled={loading} type="submit" >Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2" >
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    )
}
