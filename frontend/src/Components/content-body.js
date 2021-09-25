import React from "react";
import { Navbar, Carousel, CarouselItem, Nav, Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import Mission from "./Images/content-mission.svg";
import Community from "./Images/helping-about.svg";
import "../Pages/HomeScreen.css";
function Content() {
    return (
        <Container className="fluid" id="Main">
            <div className="Mission">
                <h1>Our Mission</h1>
                <div className="Mission-content">
                    <Image className="Mission-image" src={Mission} width="250px" height="250px" />
                    <p>Our Mission is to make a safer Environment for the living of Elder People where we provide help to them by Connecting them to different particular NGO's for their welfare and we also provide 50% of our Donation amount to the needy Elders.  </p>
                </div>
            </div>
            <div className="Community">
                <h1>Community</h1>
                <div className="Community-content">
                    <p>We are a Growing Community of large amount of people and other Communities who consents to our Mission and Ideology for the Welfare of the Elderly People </p>
                    <Image className="Community-image" src={Community} width="250px" height="250px" />
                </div>
            </div>
            <Carousel id="Review" className="bg-dark">
                <CarouselItem className="items text-light">
                    <p>This Website Helped me to find Medical Support by linking me to a Specific NGO and also they provided moral and social support to me.</p>
                    <small>-A Helped Elder</small>
                </CarouselItem>
                <CarouselItem className="items text-light" >
                    <p>The volunteers and members of this team often comes to our Old Age Home to Meet us every month </p>
                    <small>-A Resident of a Old Age House</small>
                </CarouselItem>
                <CarouselItem className="items text-light">
                    <p>This Website helped me when i needed Financial support for my Surgery and they provided all Hospital charge</p>
                    <small>-A Saved Elder</small>
                </CarouselItem>
                <CarouselItem className="items text-light">
                    <p >They provided our Hospital with some Ambulances with the help of their Donation money and thanks to that our Hospital can work Efficiently in times of Emergency.</p>
                    <small>-A Hospital Staff</small>
                </CarouselItem>

            </Carousel>
        </Container>
    );
}
export default Content;