import { useArticles } from "../../api/useArticles";
import Loader from "../../ui/Loader";

function PodcastsBox({ data }) {
  const heading = data.heading;
  const type = data.type;
  const spotifyId = data.spotifyId;
  const img = getImage(type);
  const author = data.author;
  const id = data.id;

  return (
    <>
      <div class="blog-box">
        <div class="blog-meta big-meta">
          <h4>
            <a
              href={"https://open.spotify.com/embed/episode/" + spotifyId}
              title=""
            >
              {heading}
            </a>
          </h4>
          <div>
            <iframe
              src={"https://open.spotify.com/embed/episode/" + spotifyId}
              width="100%"
              height="200"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <small>
            <a href="/podcast" title="">
              Podcasts
            </a>
          </small>
          <small>by {author}</small>
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

export default function HomePodcastsBox() {
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
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        {articles.articles.map((e) => (
          <PodcastsBox data={e} key={e.id} />
        ))}
      </div>
    </div>
  );
}
