import { useArticles } from "../../api/useArticles";
import Loader from "../../ui/Loader";
import { Link } from "react-router-dom";
import { supabaseUrl } from "../../api/supabase";

function NewsBox({ data }) {
  const heading = data.heading;
  const content = data.content;
  const img =
    data.img == null
      ? ""
      : supabaseUrl + "/storage/v1/object/public/article-images/" + data.img;
  const author = data.author;
  const id = data.id;

  return (
    <>
      <div className="blog-box">
        <div className="post-media">
          <a href={"/news/" + id} title="">
            <img src={img} alt="" className="newsHomeImage" />
            <div className="hovereffect"></div>
            <span className="menucat">Spa</span>
          </a>
        </div>
        <div className="blog-meta">
          <h4>
            <a href={"/news/" + id} title="">
              {heading}
            </a>
          </h4>
        </div>
      </div>
    </>
  );
}

export default function MenuNewsBox() {
  const { isLoading, error, articles } = useArticles(
    "newsArticles",
    4,
    "id",
    "img"
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
