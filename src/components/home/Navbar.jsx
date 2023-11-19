import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/Logo.png'

const Navbar = () => {
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    })

    const links = [
        "about", "news", "culture", "opinion", "podcast", "conference"
    ]

    return (
        <div className="w-full flex flex-col items-center justify-center gap-y-10 bg-[#53B161] py-5 sticky top-0">
            <div className="w-5/6 flex flex-row justify-between items-center">
                <span className="font-mono text-xl">{currentDate}</span>
                <div className="flex flex-row gap-x-3 text-white">
                    <a target="_blank" href="https://www.instagram.com/community_chronicle/" title="Instagram">
                        <FontAwesomeIcon fontSize={20} icon={faInstagram} />
                    </a>
                    <a href="#" title="Facebook">
                        <FontAwesomeIcon fontSize={20} icon={faFacebook} />
                    </a>
                    <a href="#" title="Spotify">
                        <FontAwesomeIcon fontSize={20} icon={faSpotify} />
                    </a>
                    <a href="#" title="Search">
                        <FontAwesomeIcon fontSize={20} icon={faSearch} />
                    </a>
                </div>
            </div>
            <div className="w-5/6 flex flex-row justify-between text-white">
                {
                    links.map(link => (
                        <a href="#" className="hover:text-black">{link.toUpperCase()}</a>
                    ))
                }
                <button>SIGN IN / JOIN</button>
            </div>
        </div>
    )
}

export default Navbar
