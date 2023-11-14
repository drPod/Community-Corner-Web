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
                <div class="footer-headings">
                    <h3>Section</h3>
                    <h3>About</h3>
                    <h3>Get Involved</h3>
                    <div class="social-media">
                        <a href="#" title="Instagram" class="social-media-icon">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" title="Facebook" class="social-media-icon">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" title="Spotify" class="social-media-icon">
                            <FontAwesomeIcon icon={faSpotify} />
                        </a>
                    </div>
                </div>
                <div class="links-div">
                    <a href="#" class="link">NEWS</a>
                    <a href="#" class="link">ABOUT US</a>
                    <a href="#" class="link">JOIN OUR TEAM</a>
                    <div class="social-media">
                        <a href="#" title="Instagram" class="social-media-icon" id="extra">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" title="Facebook" class="social-media-icon" id="extra-2">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" title="Spotify" class="social-media-icon" id="extra-3">
                            <FontAwesomeIcon icon={faSpotify} />
                        </a>
                    </div>
                </div>
                <div class="links-div">
                    <a href="#" class="link">CULTURE</a>
                    <a href="#" class="link">CONTACT US</a>
                    <a href="#" class="link">ADVERTISE</a>
                    <div class="social-media">
                        <a href="#" title="Instagram" class="social-media-icon" id="extra">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" title="Facebook" class="social-media-icon" id="extra-2">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" title="Spotify" class="social-media-icon" id="extra-3">
                            <FontAwesomeIcon icon={faSpotify} />
                        </a>
                    </div>
                </div>
                <div class="links-div">
                    <a href="#" class="link">OPINION</a>
                    <a href="#" class="link">CONFERENCE</a>
                    <a href="#" class="link">PODCAST</a>
                    <div class="social-media">
                        <a href="#" title="Instagram" class="social-media-icon" id="extra">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" title="Facebook" class="social-media-icon" id="extra-2">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" title="Spotify" class="social-media-icon" id="extra-3">
                            <FontAwesomeIcon icon={faSpotify} />
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer;