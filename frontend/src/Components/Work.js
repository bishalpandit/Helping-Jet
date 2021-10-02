import React from "react";
import {
    Card,
    CardImg,
    CardColumns,
} from "react-bootstrap";
import "../Pages/HomeScreen.css";
function Work(props){
    return(
    <Card className="col-lg-4 bg-light text-dark cards">
            <CardImg src={props.image} width="125px" height="125px" />
            <h1 className="Request-Heading">{props.heading}</h1>
            <CardColumns className="Request-Content">
              <p>
              {props.content}
              </p>
            </CardColumns>
          </Card>
    );
}
export default Work;