import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";

export default function ContactUs() {
  return (
    <>
     <Helmet>
        <title>Community Chronicle Contact Us</title>
        <link rel="canonical" href="/contact us" ></link>
        <meta name="description" content="The Community Chronicle's 170 staffers come from 50 nationalities across 35 cities. The Community Chronicle not only unites individuals across the U.S. and globally, but we also offer opportunities in everything from journalism to podcasting to entrepreneurial experiences." />
      </Helmet>
      <div>
        <div>
          <h1 id="about-heading">Contact Us</h1>

          <div className="about-section">
            <div>
              <h3 className="sub-heading">Contact Our Staff</h3>
              <p className="ml-10 mr-5">The Community Chronicle's 170 staffers come from 50 nationalities 
                across 35 cities. The Community Chronicle not only unites individuals 
                across the U.S. and globally, but we also offer opportunities in everything 
                from journalism to podcasting to entrepreneurial experiences.
              </p >
                <br/>
              <p className="ml-10 mr-5"> Our diverse team supports members in improving their skills to become 
                future leaders and explore their personal passions in social justice and 
                creativity through various media.
              </p>
            </div>
          </div>

          <div className="about-section-left">
            <div>
              <h3 className="sub-heading text-left">Main Contact:</h3>
              <p className="ml-10 mr-5 text-left">
              <a 
                  target="_blank"
                  href="thecommunitychronicle@gmail.com"
                  title="Instagram"
                  rel="noreferrer"
              >
                  <FontAwesomeIcon fontSize={20} icon={faEnvelope} />
                  &nbsp;&nbsp;thecommunitychronicle@gmail.com
              </a>
              </p>

              <p className="ml-10 mr-5 text-left">
              <a 
                  target="_blank"
                  href="https://www.instagram.com/community_chronicle/"
                  title="Instagram"
                  rel="noreferrer"
              >
                  <FontAwesomeIcon fontSize={20} icon={faInstagramSquare} />
                  &nbsp;&nbsp;@community_chronicle
              </a>
              </p>

              <p className="ml-10 mr-5 text-left">
              <a 
                  target="_blank"
                  href="https://www.instagram.com/communitycorner_podcast/"
                  title="Instagram"
                  rel="noreferrer"
              >
                  <FontAwesomeIcon fontSize={20} icon={faInstagramSquare} />
                  &nbsp;&nbsp;@communitycornerpodcast
              </a>
              </p>

              <p className="ml-10 mr-5 text-left">
              <a 
                  target="_blank"
                  href="https://open.spotify.com/show/1JKtqyhc7KoiYLg9hfP34I"
                  title="Instagram"
                  rel="noreferrer"
              >
                  <FontAwesomeIcon fontSize={20} icon={faSpotify} />
                  &nbsp;&nbsp;Community Corner Spotify
              </a>
              </p>
            </div>
          </div>

          <div className="about-section-left">
            <div>
              <h3 className="sub-heading">CEO</h3>
              <p className="ml-10 mr-5 text-left"> Nikhil Kotta
              </p>
              <p className="ml-10 mr-5 text-left"> 
              <a 
                  target="_blank"
                  href="nikhilkotta@gmail.com"
                  title="Instagram"
                  rel="noreferrer"
              >
                  <FontAwesomeIcon fontSize={20} icon={faEnvelope} />
                nikhilkotta@gmail.com

              </a>
              </p>
              <br/>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
