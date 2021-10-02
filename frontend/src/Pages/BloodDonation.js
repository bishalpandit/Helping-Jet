import React from 'react'
import Navibar from '../Components/Navbar'
import Map from '../Components/Map'
import BloodDonate from '../Components/Images/bloodDonation.svg'
import './MapsPage.css'
import "./HomeScreen.css";
import { Container, Row, Col,Image } from 'react-bootstrap'

export default function BloodDonation() {
    return (
        <div>
            <Navibar />
            <h3 className="text-center my-4  blood-bank">Blood Bank Locator</h3>
            <Container fluid>
                <Row>
                    <Col className="para  text-center" sm={12} md={6} lg={6} xl={6}>
                        <p >Through our nearby Blood Bank Locator which provides you a map where all nearby Blood Banks are visible. People can donate blood to any of these blood banks which further can be used by elderly people (along with others) as they are more vulnerable to diseases being aged.  This will ultimately contribute towards helping the elderly in terms of health and emergency situations.</p>

                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <Image fluid src={BloodDonate} style={{ height: 500 }, { width: 500 }} />
                    </Col>
                </Row>
            </Container>
            <p className="text-center">Click on map to move to your current location</p>
            <Map page="BloodBank" />
        </div>
    )
}




