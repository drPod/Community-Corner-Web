import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from './assets/Logo.png';

function Footer() {
    return (
        <div class="footer-section">
            <div class="logo-container">
                <img class="logo-footer" src={logo} />
                <h1>ommunity Corner</h1>
            </div>
            <div>
                <div class="links">
                    <a href="#">ABOUT</a>
                    <a href="#">NEWS</a>
                    <a href="#">CULTURE</a>
                    <a href="#">OPINION</a>
                    <a href="#">PODCAST</a>
                    <a href="#">CONFERENCE</a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;