import * as React from "react";
import { Helmet } from "react-helmet-async";

export default function Culture() {
  return (
    <>
    <Helmet>
       <title>Community Chronicle Culture</title>
       <link rel="canonical" href="/culture" ></link>
       <meta name="description" content="The Community Chronicle's 170 staffers come from 50 nationalities across 35 cities. The Community Chronicle not only unites individuals across the U.S. and globally, but we also offer opportunities in everything from journalism to podcasting to entrepreneurial experiences." />
     </Helmet>
    <div>
      <div>
        <h1 class="news-heading">Culture</h1>
        <div class="news-column">
          <div>
            <div class="news-section">
              <div class="news-image">Enter image</div>
              <div>
                <h3>Article #1</h3>
                <p>Article description</p>
                <button class="news-button">Read More</button>
              </div>
            </div>

            <div class="news-section">
              <div class="news-image">Enter image</div>
              <div>
                <h3>Article #2</h3>
                <p>Article description</p>
                <button class="news-button">Read More</button>
              </div>
            </div>

            <div class="news-section">
              <div class="news-image">Enter image</div>
              <div>
                <h3>Article #3</h3>
                <p>Article description</p>
                <button class="news-button">Read More</button>
              </div>
            </div>

            <div class="news-section">
              <div class="news-image">Enter image</div>
              <div>
                <h3>Article #4</h3>
                <p>Article description</p>
                <button class="news-button">Read More</button>
              </div>
            </div>
          </div>
          <div class="list-column">
            <h1 class="list-heading">Embrace Different Cultures</h1>
            <ul>
              <li>Number 1</li>
              <li>Number 2</li>
              <li>Number 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
