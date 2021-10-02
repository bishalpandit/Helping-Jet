import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "./Images/logo.png";
import "../Pages/HomeScreen.css";

export default function Navibar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img src={logo} height="80px" width="80px" />
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link >Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/volunteer">
                                <Nav.Link >Volunteer</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/ngo-oldage">
                                <Nav.Link>Nearby NGO</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="https://pages.razorpay.com/pl_I2YcFN8rBp9lEC/view"><Button className="rounded-pill btn-lg btn-info light">Donate</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
