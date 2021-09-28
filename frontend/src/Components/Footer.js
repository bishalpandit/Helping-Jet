import react from "react";
import {Container} from "react-bootstrap";
import "../Pages/HomeScreen.css";
import{FaFacebook,FaInstagram,FaTwitter,FaYoutube} from "react-icons/fa"
function Footer(){
    return(
        <Container className= "Footer">
            <h2>Join Our Community</h2>
            <div className="all-icons">
            <a href="#" ><FaFacebook size="3em"  color="black" className="Facebook" / ></a>
            <a href="#" className="Instagram"><FaInstagram size="3em" color="black" /></a>
            <a href="#" className="Twitter"><FaTwitter size="3em"   color="black"/ ></a>
            <a href="#" className="Youtube"><FaYoutube size="3em"   color="black"/ ></a>
            </div>
        </Container>
    );
}
export default Footer;