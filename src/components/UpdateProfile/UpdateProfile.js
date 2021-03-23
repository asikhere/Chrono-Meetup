import React, { useState } from "react";
import { Card, Button, Alert, Navbar, Nav, Form, Image } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function UpdateProfile() {
    const [error, setError] = useState("");
    const [file, setFile] = useState(null);
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    const types = ['image/jpeg', 'image/png'];

    async function handleLogout() {
        setError("")
        try {
            await logout();
            history.push("/login");
        } catch {
            setError("Failed to log out");
        }
    }

    const handleChange = (e) => {
        let profilePicture = e.target.files[0];
        if (profilePicture && types.includes((profilePicture.type))) {
            profilePicture = URL.createObjectURL(profilePicture);
            setFile(profilePicture);
            setError('');
        }
        else {
            setFile(null);
            setError("Please select an image file")
        }
        console.log('ppppppppp', profilePicture);
        console.log(file)
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
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
            </Navbar>
            <Card>
                <Card.Body>
                    <Form>
                        <h2 className="text-center mb-4">Update Profile</h2>
                        <strong>Email:</strong> {currentUser.email}
                        <Form.Group id="file">
                            <Form.Label></Form.Label>
                            <Form.Control type="file" onChange={handleChange} required />
                        </Form.Group>
                        {file && <Image src={file} className="img-thumbnail" style={{ width: 100 }} />}
                        <Form.Group>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control className="w-25" type="email" defaultValue={currentUser.email} readOnly />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control className="w-25" type="text" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Profile Name</Form.Label>
                            <Form.Control className="w-25" type="text" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <Form.Control className="w-25" type="text" required />
                        </Form.Group>
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