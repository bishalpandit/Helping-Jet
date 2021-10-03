import React from "react";
import {
    Card,
    CardImg,
    CardColumns,
} from "react-bootstrap";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../Pages/HomeScreen.css";
import "../Pages/Volunteer.css";
function Volunteer(props){
    return(
    <Card className="col-lg-6 text-light VolunteerCard" >
            <h1 className="Request-Heading"><AiOutlineArrowRight size="1em" /> {props.heading}</h1>
            <CardColumns className="Request-Content">
              <p>
              {props.content}
              </p>
            </CardColumns>
          </Card>
    );
}
export default Volunteer;