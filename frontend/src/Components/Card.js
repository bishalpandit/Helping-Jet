import React from "react";
import {
    Card,
    CardImg,
    CardDeck,
    CardColumns,
} from "react-bootstrap";
import "../Pages/HomeScreen.css";
function  CustomCard(props){
    return(
    <Card data-aos={props.animate}  className="col-lg-4 bg-light text-dark cards">
          <CardImg src={props.Image} width="125px" height="125px" />
          <h1 className="Request-Heading">{props.heading}</h1>
          <CardColumns className="Request-Content">
            <p>
                {props.content}
            </p>
          </CardColumns>
          <CardDeck>
            <a href={props.link}>
              <button type="button" className={props.button}>
                {props.button_name}
              </button>
            </a>
          </CardDeck>
        </Card>
    );
}
export default CustomCard;