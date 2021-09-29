import react from "react";
import { Container } from "react-bootstrap";
import "../Pages/HomeScreen.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <Container className="Footer">
      <h2>Join Our Community</h2>
      <div className="all-icons">
        <a href="#">
          <FaFacebook size="2em" className="fb-icon initial" />
        </a>
        <a href="#">
          <FaInstagram size="2em" className="insta-icon initial" />
        </a>
        <a href="#">
          <FaTwitter size="2em" className="tw-icon initial" />
        </a>
        <a href="#">
          <FaYoutube size="2em" className="yt-icon initial" />
        </a>
      </div>
      <small>&copy; 2021 Helping Jet</small>
    </Container>
  );
}
export default Footer;
