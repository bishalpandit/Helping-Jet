import React from 'react'
import logo from './Images/logo.png'
import { Navbar, Nav, Container, Row, Col, Card, Button, Image } from 'react-bootstrap'

export default function Navibar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} height="80px" width="80px" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#link">Volunteer</Nav.Link>
                            <Nav.Link href="#link">Partner</Nav.Link>
                            <Nav.Link href="/maps">Nearby NGO</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="https://pages.razorpay.com/pl_I2YcFN8rBp9lEC/view"><Button className="rounded-pill btn-lg btn-info light">Donate</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
