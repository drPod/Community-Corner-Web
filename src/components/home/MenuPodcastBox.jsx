import { useArticles } from "../../api/useArticles";
import Loader from "../../ui/Loader";
import { Link } from "react-router-dom";
import { supabaseUrl } from "../../api/supabase";

function NewsBox({ data }) {
  const heading = data.heading;
  const type = data.type;
  const spotifyId = data.spotifyId;
  const img = getImage(type);
  const author = data.author;
  const id = data.id;
  const spotifyLink = "https://open.spotify.com/embed/episode/" + spotifyId;

  return (
    <>
      <div className="blog-box">
        <div className="post-media">
          <a href={spotifyLink} title="">
            <img src={img} alt="" className="newsHomeImage" />
            <div className="hovereffect"></div>
            <span className="menucat">Podcast</span>
          </a>
        </div>
        <div className="blog-meta">
          <h4>
            <a href={spotifyLink} title="">
              {heading}
            </a>
          </h4>
        </div>
      </div>
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

export default function MenuPodcastsBox() {
  const { isLoading, error, articles } = useArticles(
    "podcasts",
    4,
    "episodeNumber",
    "heading"
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
      {articles.articles.map((e) => (
        <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
          <NewsBox data={e} key={e.id} />
        </div>
      ))}
    </>
  );
}
