import React from "react";
import {
  Navbar,
  Carousel,
  CarouselItem,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  CardImg,
  CardDeck,
  CardGroups,
  CardColumns,
} from "react-bootstrap";
import Mission from "./Images/content-mission.svg";
import Community from "./Images/helping-about.svg";
import Delivery from "./Images/deliveries.svg";
import Hospital from "./Images/Hospital.svg";
import Medical from "./Images/medical Care.svg";
import Blood from "./Images/donateBlood.svg";
import Money from "./Images/Donate.svg";
import "../Pages/HomeScreen.css";
import { Link } from 'react-router-dom'
function Content() {
  return (
    <Container className="fluid" id="Main">
      <div className="Mission">
        <h1>Our Mission</h1>
        <div className="Mission-content">
          <Image
            className="Mission-image"
            src={Mission}
            width="250px"
            height="250px"
          />
          <p>
            Our Mission is to make a safer Environment for the living of Elder
            People where we provide help to them by Connecting them to different
            particular NGO's for their welfare and we also provide 50% of our
            Donation amount to the needy Elders.{" "}
          </p>
        </div>
      </div>
      <div className="Request">
        <Card className="col-lg-4 bg-light text-dark cards">
          <CardImg src={Money} width="125px" height="125px" />
          <h1 className="Request-Heading">Fund Donation</h1>
          <CardColumns className="Request-Content">
            <p>
              Please feel free to donate the smallest amount of money for the
              cause of Elders, it can impact many lives and can help the ones in
              need.
            </p>
          </CardColumns>
          <CardDeck>
            <a href="https://pages.razorpay.com/pl_I2YcFN8rBp9lEC/view">
              <button type="button" className="btn btn-lg btn-primary">
                Donate
              </button>
            </a>
          </CardDeck>
        </Card>
        <Card className="col-lg-4 bg-light text-dark cards">
          <CardImg src={Blood} width="125px" height="125px" />
          <h1 className="Request-Heading">Blood Donation</h1>
          <CardColumns className="Request-Content">
            <p>
              Donate Blood at your nearest place. Your Donated Blood could save
              a life, Be a saviour and Donate your blood for the people in need.
            </p>
          </CardColumns>
          <CardDeck>
            <a href="#">
              <button type="button" className="btn btn-lg btn-danger">
                Donate
              </button>
            </a>
          </CardDeck>
        </Card>
      </div>
      <div className="About">
        <h1 className="Work-Top"> How We Work </h1>
        <div className="Work">
          <Card className="col-lg-4 bg-light text-dark cards">
            <CardImg src={Delivery} width="125px" height="125px" />
            <h1 className="Request-Heading">Deliver Food</h1>
            <CardColumns className="Request-Content">
              <p>
                During this period of Lockdown, we provide Old Age Houses and
                The Elders living alone with Food and Medical Supplies and
                collaborate with Other Communities for the welfare of the
                Elders.
              </p>
            </CardColumns>
          </Card>
          <Card className="col-lg-4 bg-light text-dark cards">
            <CardImg src={Medical} width="125px" height="125px" />
            <h1 className="Request-Heading">Provide Support</h1>
            <CardColumns className="Request-Content">
              <p>
                We provide support to Elders financially, medically and
                socically by connecting to their nearest NGO and our Volunteers
                inspects the working of the NGO once in a week and also supplies
                medicines and Ration.
              </p>
            </CardColumns>
          </Card>
          <Card className="col-lg-4 bg-light text-dark cards">
            <CardImg src={Hospital} width="125px" height="125px" />
            <h1 className="Request-Heading">Ambulances</h1>
            <CardColumns className="Request-Content">
              <p>
                We also are involved in buying Ambulances for the local Hospital
                where the number of Ambulances are below Average from the amount
                of our donation leading to the welfare of the needy patients.
              </p>
            </CardColumns>
          </Card>
        </div>
      </div>
      <div className="Community">
        <h1>Community</h1>
        <div className="Community-content">
          <p>
            We are a Growing Community of large amount of people and other
            Communities who consents to our Mission and Ideology for the Welfare
            of the Elderly People{" "}
          </p>
          <Image
            className="Community-image"
            src={Community}
            width="250px"
            height="250px"
          />
        </div>
      </div>
      <Carousel id="Review" className="bg-primary">
        <CarouselItem className="items text-light">
          <p>
            This Website Helped me to find Medical Support by linking me to a
            Specific NGO and also they provided moral and social support to me.
          </p>
          <small>-A Helped Elder</small>
        </CarouselItem>
        <CarouselItem className="items text-light">
          <p>
            The volunteers and members of this team comes to our Old Age House
            to Meet us every month{" "}
          </p>
          <small>-A Resident of a Old Age House</small>
        </CarouselItem>
        <CarouselItem className="items text-light">
          <p>
            This Website helped me when i needed Financial support for my
            Surgery and they provided all Hospital charge
          </p>
          <small>-A Saved Elder</small>
        </CarouselItem>
        <CarouselItem className="items text-light">
          <p>
            They provided our Hospital with some Ambulances with the help of
            their Donation money and thanks to that our Hospital can work
            Efficiently in times of Emergency.
          </p>
          <small>-A Hospital Staff</small>
        </CarouselItem>
      </Carousel>
    </Container>
  );
}
export default Content;
