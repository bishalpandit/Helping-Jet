import React from 'react'
import { Navbar, Nav, Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import HelpingOld1 from '../Components/Images/helping-old-1.svg'
import HelpingOld2 from '../Components/Images/helping-old-2.svg'
import Navibar from '../Components/Navbar'
import './Volunteer.css'
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Volunteer() {
    return (
        <div>
            <Navibar />
            <h2 className="text-center my-4 ">Our Volunteer Work and Recreational Activities for Elderly People</h2>
            <Container fluid>
                <Row>
                    <Col className="para-wrap  text-center" sm={12} md={6} lg={6} xl={6}>
                        <h4 className="my-4  text-center">  <AiOutlineArrowRight size="1em" /> Recreational Activites</h4>
                        <p >We organise recreational activites as well as oragnise events where we invite senior citizens to participate in activities such as Bird Watching, Sports, Gardening, Mental Exercise,etc.</p>
                        <h4 className="my-4 text-center"> <AiOutlineArrowRight size="1em" /> Helping Elderly People to Learn New Technologies</h4>
                        <p >As elderly people have difficult to adapt to new technology like using smartphones, internet, etc. So, our volunteers teach elderlies simple things such as how to save phone numbers, how to send a message, how to take advantage of internet, etc.</p>
                        <h4 className="my-4  text-center"> <AiOutlineArrowRight size="1em" /> Visiting Old Age Homes</h4>
                        <p >We visit old age homes to bring smile to their faces by taking gifts and taking them on short tours around the city.</p>
                        <h4 className="my-4 text-center"> <AiOutlineArrowRight size="1em" /> Arranging Fun Talk Sessions</h4>
                        <p >Based on the interest of elder people, We arrange talk sessions on interesting topics to mitigate their loneliness.</p>

                    </Col>
                    <Col sm={12} md={6} lg={6} xl={6}>
                        <Image fluid src={HelpingOld1} style={{ height: 500 }, { width: 500 }} />
                        <Image fluid src={HelpingOld2} style={{ height: 500 }, { width: 500 }} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
