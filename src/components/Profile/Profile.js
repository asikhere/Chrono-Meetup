import React, { useState } from "react";
import { Card, Button, Alert, Navbar, Nav, Form } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Profile() {
    const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    const history = useHistory();


    async function handleLogout() {
        setError("")
        try {
            await logout();
            history.push("/login");
        } catch {
            setError("Failed to log out");
        }
    }

    return (
        <>
            <Navbar className="navbar navbar-light bg-warning">
                <Navbar.Brand>Chrono-Meetup</Navbar.Brand>
                <Nav className="mr-auto">
                </Nav>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#">Notification</Nav.Link>
                    <Nav.Link href="#">Message</Nav.Link>
                    <Nav.Link href="/update-profile">Update Profile</Nav.Link>
                </Nav>
            </Navbar>
            <Card>
                <Card.Body>
                    <Form>
                        <h2 className="text-center mb-4">Profile</h2>
                        <strong>Email:</strong> {currentUser.email}
                        {error && <Alert className="w-25" variant="danger">{error}</Alert>}
                        {/* <Link to="/update" className="btn btn-primary w-100 mt-3">Update</Link> */}
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button>
            </div>
        </>
    )
}