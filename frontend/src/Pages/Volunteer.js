import React from 'react'
import { Container, Card, CardGroup, Image } from 'react-bootstrap'
import HelpingOld1 from '../Components/Images/helping-old-1.svg'
import HelpingOld2 from '../Components/Images/helping-old-2.svg'
import Navibar from '../Components/Navbar'
import './Volunteer.css'
import VolunteerCard from "../Components/Volunteer";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../Components/Footer";
export default function Volunteer() {
    return (
        <div>
            <Navibar />
            <Container fluid>
                <Container>
                    <h1 className="text-center mt-5 ">Helping Needy Elderly for their Welfare and Empowering them.</h1>
                    <div className="header-img">
                        <Image className="col-lg-6 header-img img-fluid img1" src={HelpingOld1} width="450px" height="450px"></Image>
                        <Image className="col-lg-6 header-img img-fluid img2" src={HelpingOld2} width="450px" height="450px"></Image>
                    </div>
                </Container>

                    <h2 className="text-center my-4 ">Our Volunteer Work and Recreational Activities for Elderly People</h2>
                <div className="fluid col-lg-12 volunteer" >
                    <VolunteerCard className="VolunteerCard" heading="Recreational Activites" content="We organise recreational activites as well as oragnise events where we invite senior citizens to participate in activities such as Bird Watching, Sports, Gardening, Mental Exercise,etc." />

                    <VolunteerCard className="VolunteerCard" heading="Helping Elders to Learn New Things" content="Our volunteers teach elderlies about simple things about Any Intersting topic that will help their day to day life such as how to send a message, how to take advantage of internet, etc." />
                </div>
                <div className="fluid col-lg-12 volunteer" >
                    <VolunteerCard className="VolunteerCard"  heading="Arranging Fun Talk Sessions" content="Based on the interest of elder people, We arrange talk sessions on interesting topics to mitigate their loneliness." />

                    <VolunteerCard className="VolunteerCard"  heading="Visiting Old Age Homes" content="We visit old age homes to bring smile to their faces by taking gifts and taking them on short tours around the city." />

                </div>
                <Footer></Footer>
            </Container>
        </div>
    )
}
