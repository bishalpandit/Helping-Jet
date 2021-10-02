import React from "react";
import {Image} from "react-bootstrap";
import "../Pages/HomeScreen.css";
function Mission(props){
    return(
        <div className="Mission">
        <h1>{props.heading}</h1>
        <div className="Mission-content">
          <Image
            className="Mission-image"
            src={props.image}
            width="250px"
            height="250px"
          />
          <p>
            {props.content}
          </p>
        </div>
      </div>
    );
}
export default Mission;