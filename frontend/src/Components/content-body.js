import React from "react";
import { Navbar, Nav, Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import Mission from "./Images/content-mission.svg";
import Community from "./Images/helping-about.svg";
import "../Pages/HomeScreen.css";
function Content() {
    return (
        <Container className="fluid">
            <div className="Our Mission">
                <div className="Mission-content">
                <h1>Our Mission</h1> 
                <Image className = " " src= {Mission} width ="300px" height="300px"/>
                <p>Our Mission is to make a safer Environment for the living of Elder People where we provide help to them by Connecting them to different particular NGO's for their welfare and we also provide 50% of our Donation amount to the needy Elders.  </p>
                 </div>
            </div>
            <div className="Community">
                    <h1>Community</h1>
                    <div className="Community-content">
                    <Image className = "" src ={Community} width = "300px" height = "300px"/>    
                    <p>We are a Growing Community of large amount of people and other Communities who consents to our Mission and Ideology for the Welfare of the Elderly People </p>
                    </div>
            </div>
        </Container>
    );
}
export default Content;