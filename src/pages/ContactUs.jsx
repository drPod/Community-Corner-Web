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
        <meta
          name="description"
          content="Community Chronicle: Contact Us: Nikhil Kotta, Contact our staff, staffers. The Community Chronicle's 170 staffers come from 50 nationalities across 35 cities. The Community Chronicle not only unites individuals across the U.S. and globally, but we also offer opportunities in everything from journalism to podcasting to entrepreneurial experiences."
        />
      </Helmet>
      <div>
        <div>
          <h1 id="about-heading">Contact Us</h1>
          <section class="section">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="page-wrapper">
                    <div class="pp">
                      <h1 className="font-playfair text-3xl ">
                        Contact Our Staff
                        <hr className="hrFullWidth" />
                      </h1>
                      <br />
                      <p>
                        The Community Chronicle's 170 staffers come from 50
                        nationalities across 35 cities. The Community Chronicle
                        not only unites individuals across the U.S. and
                        globally, but we also offer opportunities in everything
                        from journalism to podcasting to entrepreneurial
                        experiences.
                        <br />
                        <br />
                        Our diverse team supports members in improving their
                        skills to become future leaders and explore their
                        personal passions in social justice and creativity
                        through various media.
                      </p>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div class="pp">
                      <h1 className="font-playfair text-3xl ">
                        Main Contact:
                        <hr className="hrFullWidth" />
                      </h1>
                      <br />
                      <p>
                        <a
                          target="_blank"
                          href="mailto:thecommunitychronicle@gmail.com"
                          title="Instagram"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon fontSize={20} icon={faEnvelope} />{" "}
                          thecommunitychronicle@gmail.com
                        </a>
                        <p></p>
                        <a
                          target="_blank"
                          href="https://www.instagram.com/community_chronicle/"
                          title="Instagram"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            fontSize={20}
                            icon={faInstagramSquare}
                          />{" "}
                          @community_chronicle
                        </a>

                        <p></p>
                        <a
                          target="_blank"
                          href="https://www.instagram.com/communitycorner_podcast/"
                          title="Instagram"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon
                            fontSize={20}
                            icon={faInstagramSquare}
                          />{" "}
                          @communitycornerpodcast
                        </a>

                        <p></p>
                        <a
                          target="_blank"
                          href="https://open.spotify.com/show/1JKtqyhc7KoiYLg9hfP34I"
                          title="Instagram"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon fontSize={20} icon={faSpotify} />{" "}
                          Community Corner Spotify
                        </a>
                      </p>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>{" "}
                    <div class="pp">
                      <h1 className="font-playfair text-3xl ">
                        CEO
                        <hr className="hrFullWidth" />
                      </h1>
                      <br />
                      <p>
                        <a
                          target="_blank"
                          href="mailto:nikhilkotta@gmail.com"
                          title="Instagram"
                          rel="noreferrer"
                        >
                          <FontAwesomeIcon fontSize={20} icon={faEnvelope} />{" "}
                          nikhilkotta@gmail.com
                        </a>
                      </p>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
