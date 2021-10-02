import React from "react";
import CustomCard from "./Card";
import {
  Container,
} from "react-bootstrap";
import Work from "./Work";
import NewsletterCard from "./NewsletterCard";
import CarouselCard from "./CarouselCard";
import Mission from "./Images/content-mission.svg";
import CommunityCard from "./Community";
import MissionCard from "./Mission";
import Community from "./Images/helping-about.svg";
import Delivery from "./Images/deliveries.svg";
import Hospital from "./Images/Hospital.svg";
import Medical from "./Images/medical Care.svg";
import Blood from "./Images/donateBlood.svg";
import Money from "./Images/Donate.svg";
import "../Pages/HomeScreen.css";
function Content() {
  return (
    <Container className="fluid" id="Main">
      <MissionCard heading= "Our Mission" content="Our Mission is to make a safer Environment for the living of Elder
            People where we provide help to them by Connecting them to different
            particular NGO's for their welfare and we also provide 50% of our
            Donation amount to the needy Elders."  image={Mission} />
      <div className="Request">
        <CustomCard Image={Money} heading="Fund Donation" content=" Please feel free to donate the smallest amount of money for the
              cause of Elders, it can impact many lives and can help the ones in
              need." button_name="Donate" link="https://pages.razorpay.com/pl_I2YcFN8rBp9lEC/view" button="btn btn-lg btn-primary"></CustomCard> 
        <CustomCard Image={Blood} heading="Blood Donation" content ="Donate Blood at your nearest place. Your Donated Blood could save
              a life, Be a saviour and Donate your blood for the people in need." button_name="Donate" link="/blood-donate" button="btn btn-lg btn-danger"></CustomCard>
      </div>
      <div className="About">
        <h1 className="Work-Top"> How We Work </h1>
        <div className="Work">
          <Work image ={Delivery} heading="Deliver Food" content="During this period of Lockdown, we provide Old Age Houses and
                The Elders living alone with Food and Medical Supplies and
                collaborate with Other Communities for the welfare of the
                Elders." />
          <Work image ={Medical} heading ="Provide Support" content="We provide support to Elders financially, medically and
                socically by connecting to their nearest NGO and our Volunteers
                inspects the working of the NGO once in a week and also supplies
                medicines and Ration." />
          <Work image = {Hospital} heading="Ambulances" content="We also are involved in buying Ambulances for the local Hospital
                where the number of Ambulances are below Average from the amount
                of our donation leading to the welfare of the needy patients." />
        </div>
      </div>
      <CommunityCard heading="Community" content="We are a Growing Community of large amount of people and other
            Communities who consents to our Mission and Ideology for the Welfare
            of the Elderly People." image={Community} />
      <CarouselCard/>
      <NewsletterCard/>
    </Container>
  );
}
export default Content;
