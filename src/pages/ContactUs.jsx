import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet-async";

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Community Chronicle Contact Us</title>
        <link rel="canonical" href="/contact us"></link>
        <meta
          name="description"
          content="The Community Chronicle's 170 staffers come from 50 nationalities across 35 cities. The Community Chronicle not only unites individuals across the U.S. and globally, but we also offer opportunities in everything from journalism to podcasting to entrepreneurial experiences."
        />
      </Helmet>
      <div>
        <div>
          <h1 id="about-heading">Contact Us</h1>

          <div className="about-section">
            <div>
              <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
                Contact Our Staff
                <br />
                <hr />
              </h1>
              <h1 className="leftText font-playfair font-[400] text-xl  mt-4">
                The Community Chronicle's 170 staffers come from 50
                nationalities across 35 cities. The Community Chronicle not only
                unites individuals across the U.S. and globally, but we also
                offer opportunities in everything from journalism to podcasting
                to entrepreneurial experiences.
                <br />
                <br />
                Our diverse team supports members in improving their skills to
                become future leaders and explore their personal passions in
                social justice and creativity through various media.
              </h1>
            </div>
          </div>

          <div className="about-section-left">
            <div>
              <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
                Main Contact:
                <br />
                <hr />
              </h1>
              <h1 className="leftText font-playfair font-[400] text-xl  mt-4">
                <a
                  target="_blank"
                  href="mailto:thecommunitychronicle@gmail.com"
                  title="Instagram"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon fontSize={20} icon={faEnvelope} />
                  thecommunitychronicle@gmail.com
                </a>
                <p></p>
                <a
                  target="_blank"
                  href="https://www.instagram.com/community_chronicle/"
                  title="Instagram"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon fontSize={20} icon={faInstagramSquare} />
                  @community_chronicle
                </a>

                <p></p>
                <a
                  target="_blank"
                  href="https://www.instagram.com/communitycorner_podcast/"
                  title="Instagram"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon fontSize={20} icon={faInstagramSquare} />
                  @communitycornerpodcast
                </a>

                <p></p>
                <a
                  target="_blank"
                  href="https://open.spotify.com/show/1JKtqyhc7KoiYLg9hfP34I"
                  title="Instagram"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon fontSize={20} icon={faSpotify} />
                  Community Corner Spotify
                </a>
              </h1>
            </div>
          </div>

          <div className="about-section-left">
            <div>
              <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
                CEO
                <br />
                <hr />
              </h1>
              <h1 className="leftText font-playfair font-[400] text-xl  mt-4">
                {" "}
                Nikhil Kotta
                <p></p>
                <a
                  target="_blank"
                  href="mailto:nikhilkotta@gmail.com"
                  title="Instagram"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon fontSize={20} icon={faEnvelope} />
                  nikhilkotta@gmail.com
                </a>
              </h1>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
