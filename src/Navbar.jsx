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
                <span className="date">{currentDate}</span>
                <div className="logo-container">
                    <img src={logo} alt="Community Corner Logo" className="unique-navbar-logo" />
                </div>
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
                    <a href="#" title="Search">
                        <FontAwesomeIcon icon={faSearch} />
                    </a>
                </div>
            </div>
            <div className="unique-navbar-bottom">
                <a href="#">ABOUT</a>
                <a href="#">NEWS</a>
                <a href="#">CULTURE</a>
                <a href="#">OPINION</a>
                <a href="#">PODCAST</a>
                <a href="#">CONFERENCE</a>
                <button>SIGN IN / JOIN</button>
            </div>
        </div>
    );
};

export default Navbar;
