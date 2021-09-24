import React from 'react'
import HelpingOld1 from './Images/helping-old-1.svg'
import HelpingOld2 from './Images/helping-old-2.svg'
import logo from './Images/logo.png'
import { Navbar, Nav, Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import '../Pages/HomeScreen.css';
export default function Header() {
    return (
        <div className="header">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} height="80px" width="80px"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Volunteer</Nav.Link>
                            <Nav.Link href="#link">Partner</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="#link"><Button className="rounded-pill btn-lg btn-info light">Donate</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                
                <Row>
                <h1 className="text-center mt-5 ">Helping Needy Elderly for their Welfare and Empowering them.</h1>
                    <Col>
                        <Image className="header-img" src={HelpingOld1} height="500px" width="500px" />
                    </Col>
                    <Col>
                        <Image className="header-img" src={HelpingOld2} height="500px" width="500px" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
