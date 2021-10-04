import React from "react";
import {
    Image
} from "react-bootstrap";
import "../Pages/HomeScreen.css";
function  Community(props){
    return(
        <div data-aos={props.animate} className="Community">
        <h1>{props.heading}</h1>
        <div className="Community-content">
          <p>
            { props.content}
            We are a Growing Community of large amount of people and other
            Communities who consents to our Mission and Ideology for the Welfare
            of the Elderly People.
          </p>
          <Image
            className="Community-image"
            src={props.image}
            width="250px"
            height="250px"
          />
        </div>
      </div>
    );
}
export default Community;