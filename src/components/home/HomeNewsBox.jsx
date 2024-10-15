import { useArticles } from "../../api/useArticles";
import Loader from "../../ui/Loader";
import { Link } from "react-router-dom";
import { supabaseUrl } from "../../api/supabase";

function NewsBox({ data, index }) {
  const heading = data.heading;
  const content = data.content;
  const img =
    data.img == null
      ? "/images/newsImages/city-default" + (index + 1) + ".jpg"
      : supabaseUrl + "/storage/v1/object/public/article-images/" + data.img;
  const author = data.author;
  const id = data.id;

  return (
    <>
      <div class="blog-box">
        <div class="">
          <a href={"/news/" + id} title="">
            <img src={img} alt="" className="newsHomeImage" />
          </a>
        </div>
        <div class="blog-meta big-meta">
          <h4>
            <a href={"/news/" + id} title="">
              {heading}
            </a>
          </h4>
          <small>
            <a href="/news" title="">
              News
            </a>
          </small>
          <small>by {author}</small>
        </div>
      </div>

      <hr class="invis" />
    </>
  );
}

export default function HomeNewsBox() {
  const { isLoading, error, articles } = useArticles(
    "newsArticles",
    4,
    "articleNumber"
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
        {articles.articles.map((e, index) => (
          <NewsBox data={e} key={e.id} index={index} />
        ))}
      </div>
    </div>
  );
}
