import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faSpotify,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Podcast() {
  return (
    <div>
      <div>
        <h1 class="news-heading" href="https://youtube.com" >Podcast</h1>
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
            <div class="news-section">
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
