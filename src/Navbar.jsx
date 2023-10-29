import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from './assets/Logo.png';

const Navbar = () => {
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <div className="unique-navbar-container">
            <div className="unique-navbar-top">
                <span>{currentDate}</span>
                <a href="#" className="unique-navbar-logo-link">
                    <img src={logo} alt="Community Corner Logo" />
                </a>
                <div className="unique-navbar-icons">
                    <a href="#" title="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="#" title="Facebook">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="#" title="Spotify">
                        <FontAwesomeIcon icon={faSpotify} />
                    </a>
                </div>
                <a href="#" className="unique-navbar-signin">SIGN IN / JOIN</a>
            </div>
            <div className="unique-navbar-bottom">
                <a href="#" className="unique-navbar-button">ABOUT</a>
                <a href="#" className="unique-navbar-button">NEWS</a>
                <a href="#" className="unique-navbar-button">CULTURE</a>
                <a href="#" className="unique-navbar-button">OPINION</a>
                <a href="#" className="unique-navbar-button">PODCAST</a>
                <a href="#" className="unique-navbar-button">CONFERENCE</a>
                <a href="#" className="unique-navbar-button">
                    <FontAwesomeIcon icon={faSearch} />
                </a>
            </div>
        </div>
    );
}

export default Navbar;

