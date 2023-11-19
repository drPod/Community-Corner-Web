import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faSpotify } from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/Logo.png'

function Footer() {
    return (
        <div className="bg-[#53B161]">
            <div className="fkex flex-row justify-center w-full">
                <div className="w-1/5">
                    <img src={logo} alt="logo" />
                </div>
                <div className="w-5/6">
                    {
                        // TODO: Put links here
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer