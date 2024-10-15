import * as React from "react";
import { useArticles } from "../api/useArticles";
import Loader from "../ui/Loader";

import { Helmet } from "react-helmet-async";
function PodcastsBox({ data }) {
  const heading = data.heading;
  const type = data.type;
  const spotifyId = data.spotifyId;
  const img = getImage(type);
  const author = data.author;
  const id = data.id;
  const link = "https://open.spotify.com/embed/episode/" + spotifyId;
  return (
    <>
      <div class="news-section el-content-wrapper" id="podcastNames">
        <a href="">
          <img class="podcast" src={img} href={link} alt="Podcast" />
        </a>
        <div>
          <h2>
            <b>
              <a href={link} title="">
                {heading}
              </a>
            </b>
          </h2>
          <small>
            By <i>{author}</i>
          </small>
          <br></br>
          <br />
          <iframe
            class="border-radius:12px"
            src={link}
            width="110%"
            height="230"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <hr class="invis" />
    </>
  );

  function getImage(type) {
    switch (type) {
      case "Personal Finance":
        return "/images/podcastImages/personalFinance.png";
      case "S&P 500":
        return "/images/podcastImages/snpOGEdition.png";
      case "ECEH":
        return "/images/podcastImages/economicCartography.png";
      case "Tech in society":
        return "/images/podcastImages/techInSociety.png";
      default:
        return "/images/podcastImages/personalFinance.png";
    }
  }
}
export default function Podcast() {
  const { isLoading, error, articles } = useArticles(
    "podcasts",
    4,
    "episodeNumber"
  );
  if (error) {
    return (
      <h2 className="text-center mt-4 text-red-600">
        There was error loading articles! {error.message}
      </h2>
    );
  }

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Community Chronicle Podcasts</title>
        <link rel="canonical" href="/podcast"></link>
        <meta name="description" content="Community Chronicle Podcasts" />
      </Helmet>
      <div>
        <div>
          <h1 id="about-heading">Podcasts</h1>
          <div className="podcastsDiv  mx-auto">
            {articles.articles.map((e) => (
              <PodcastsBox data={e} key={e.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
