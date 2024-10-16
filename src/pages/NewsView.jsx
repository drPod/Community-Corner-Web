import { Link, useParams } from "react-router-dom";
import { useNewsArticle } from "../api/useArticles";
import Loader from "../ui/Loader";
import { supabaseUrl } from "../api/supabase";
function NewsView() {
  const { id } = useParams();
  const { isLoading, error, articles } = useNewsArticle(id);

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

  const data = articles.articles.filter((e) => e.id == id)[0];
  const heading = data.heading;
  const content = data.content;
  const img =
    data.img == null
      ? ""
      : supabaseUrl + "/storage/v1/object/public/article-images/" + data.img;
  const author = data.author;
  return (
    <div className="my-20">
      <img
        src={img}
        className="max-w-[95%] pt-8 pb-8 mx-auto xl:max-w-[80%] 2xl:max-w-[65%]"
      ></img>
      <div className="max-w-[95%] xl:max-w-[80%] mx-auto 2xl:max-w-[65%] text-green-900">
        <h2 className="text-center font-extrabold text-3xl lg:text-4xl">
          {heading}
        </h2>
        <p className="text-center py-4 font-light">By {author}</p>
        <p className="pre-line text-lg lg:text-xl">{content}</p>
        <div className="flex items-center justify-center my-8">
          <Link to={"/news"} className="underline text-large font-bold">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsView;
