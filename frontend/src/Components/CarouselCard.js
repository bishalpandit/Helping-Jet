import React from "react";
import {
    Carousel,
    CarouselItem
} from "react-bootstrap";
import "../Pages/HomeScreen.css";
function CarouselCard() {
    return (
        <Carousel data-aos="zoom-out" id="Review" className="bg-primary col-lg-12">
            <CarouselItem className="items text-light col-lg-6">
                <p>
                    This Website Helped me to find Medical Support by linking me to a
                    Specific NGO and also they provided moral and social support to me.
                </p>
                <small>-A Helped Elder</small>
            </CarouselItem>
            <CarouselItem className="items text-light col-lg-6">
                <p>
                    The volunteers and members of this team comes to our Old Age House
                    to Meet us every month{" "}
                </p>
                <small>-A Resident of a Old Age House</small>
            </CarouselItem>
            <CarouselItem className="items text-light col-lg-6">
                <p>
                    This Website helped me when i needed Financial support for my
                    Surgery and they provided all Hospital charge
                </p>
                <small>-A Saved Elder</small>
            </CarouselItem>
            <CarouselItem className="items text-light col-lg-6">
                <p>
                    They provided our Hospital with some Ambulances with the help of
                    their Donation money and thanks to that our Hospital can work
                    Efficiently in times of Emergency.
                </p>
                <small>-A Hospital Staff</small>
            </CarouselItem>
        </Carousel>
    );
}
export default CarouselCard;