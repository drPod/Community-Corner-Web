import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import personalFinance from "./../assets/podcastImages/personalFinance.png";
import techInSociety from "./../assets/podcastImages/techInSociety.png";
import economicCartography from "./../assets/podcastImages/economicCartography.png";
import snpOGEdition from "./../assets/podcastImages/snpOGEdition.png";
import snpBehavioralFinance from "./../assets/podcastImages/snpBehavioralFinance.png";
import { Helmet } from "react-helmet-async";

function loadPodcast(name, link, type) {
  let useImage;
  if (type == "pf") {
     useImage = personalFinance;
  } else if (type == "tis") {
    useImage = techInSociety;
  } else if (type == "eceh") {
    useImage = economicCartography;
  } else if (type == "snpOG") {
    useImage = snpOGEdition;
  } else if (type == "snpBF") {
    useImage = snpBehavioralFinance;
  } else {
     useImage = economicCartography;
  }

  return (
    <>
      <Helmet>
        <title>Community Chronicle Podcasts</title>
        <link rel="canonical" href="/podcast" ></link>
        <meta name="description" content="Community Chronicle Podcasts" />
      </Helmet>
      <div class="news-section" id="podcastNames"> 
        <a href={link}>
          <img class = "podcast" src={useImage} href={"https://open.spotify.com/show/" + link} alt="Podcast" />
        </a>
        <div>
            <h3>{name}</h3>
            <a
              class ="button"
              target="_blank"
              href={"https://open.spotify.com/show/" + link}
              title="Instagram"
              rel="noreferrer"
            > Check out here</a>
        </div>
        <a></a>
        <div>
            <iframe class="border-radius:12px" src={"https://open.spotify.com/embed/show/" + link} width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            
        </div>
      </div>
    </>
  );

}

export default function Podcast() {
  return (
    <div>
      <div>
        <h1 class="news-heading" href="https://youtube.com" >Podcast </h1>
        <h1 class="news-heading">
            <a
              target="_blank"
              href="https://youtube.com"
              title="Youtube"
              rel="noreferrer"
            >
              <FontAwesomeIcon fontSize={50} icon={faYoutube} />
            </a>
        </h1>

        <div class="news-column">
          <div>
            {loadPodcast("Podcast Number five", "1JKtqyhc7KoiYLg9hfP34I", "pf")}
            {loadPodcast("Podcast Number Zero", "1JKtqyhc7KoiYLg9hfP34I", "pf")}
            {loadPodcast("Podcast Number One", "1JKtqyhc7KoiYLg9hfP34I", "pf")}
            {loadPodcast("Podcast Number Two", "1JKtqyhc7KoiYLg9hfP34I", "snpBF")}
            {loadPodcast("Podcast Number Two", "1JKtqyhc7KoiYLg9hfP34I", "none")}
          
          <div>
            {/* <div class="news-section" id="podcastNames">
            <div class="news-image">Enter image</div>
              <div>
                <h3>Podcast #1</h3>
                <p>Podcast description</p>
                <button class="news-button">Read More</button>
              </div>
            </div>

            <div class="news-section">
              <div class="news-image">Enter image</div>
              <div>
                <h3>Podcast #2</h3>
                <p>Podcast description</p>
                <button class="news-button">Read More</button>
              </div>
            </div>

            <div class="news-section">
              <div class="news-image">Enter image</div>
              <div>
                <h3>Podcast #3</h3>
                <p>Podcast description</p>
                <button class="news-button">Read More</button>
              </div>
            </div>

            <div class="news-section">
              <div class="news-image">Enter image</div>
              <div>
                <h3>Podcast #4</h3>
                <p>Podcast description</p>
                <button class="news-button">Read More</button>
              </div>
            </div> */}
          </div>

          </div>
          <div class="list-column">
            <h1 class="list-heading">Exciting Podcasts</h1>
            <ul>
              <li>Number 1</li>
              <li>Number 2</li>
              <li>Number 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
