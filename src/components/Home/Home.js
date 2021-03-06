import React, { useState } from "react";
import { Card, Button, Alert, Navbar, Nav } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Home() {
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
                    <Nav.Link href="#" >Feeds</Nav.Link>
                    <Nav.Link href="#" >Notification</Nav.Link>
                    <Nav.Link href="#" >Message</Nav.Link>
                    <Nav.Link href="/profile" >Profile</Nav.Link>
                </Nav>
            </Navbar>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Home</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
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