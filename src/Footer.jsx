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
                
            </div>
            
        </div>
    )
}

export default Footer;