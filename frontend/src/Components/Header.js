import React from 'react'
import HelpingOld1 from './Images/helping-old-1.svg'
import HelpingOld2 from './Images/helping-old-2.svg'
import Navibar from './Navbar'
import { Navbar, Nav, Container, Row, Col, Card, Button, Image } from 'react-bootstrap'

export default function Header() {
    return (
        <div className="header">
            <Navibar />
            <Container>
                
                <Row>
                <h1 className="text-center mt-5 ">Helping Needy Elderly for their Welfare and Empowering them.</h1>
                    <Col>
                        <Image className="header-img" src={HelpingOld1} height="450px" width="450px" />
                    </Col>
                    <Col>
                        <Image className="header-img" src={HelpingOld2} height="450px" width="450px" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
