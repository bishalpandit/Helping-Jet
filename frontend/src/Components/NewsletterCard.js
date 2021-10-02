import React from "react";
import {
    Card,CardColumns
} from "react-bootstrap";
import "../Pages/HomeScreen.css";
function NewsletterCard() {
    return (
        <Card className= "col-lg-12 Newsletter-card text-light " >
        <h1 className="Newsletter-heading">Subscribe to Our Newsletter</h1>
        <p className="col-lg-6">We have Started a small Initiative recently to bring you all the Good News of the day to you in these Negative days</p>
        <CardColumns>
        <form action="" method="" className="Newsletter-form col-lg-12">
        <input type="text" placeholder="Enter Your Name" className="col-lg-12 input"></input>
        <input type="email" placeholder="Enter Your Email" className="col-lg-12 input"></input>
        <input type="submit" value="Submit" className="btn btn-lg btn-success"></input>
        </form>
        </CardColumns>
      </Card>
    );
}
export default NewsletterCard;