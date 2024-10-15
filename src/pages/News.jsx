/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useArticles } from "../api/useArticles";
import Loader from "../ui/Loader";
import { supabaseUrl } from "../api/supabase";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Community Chronicle News</title>
        <link rel="canonical" href="/news"></link>
        <meta name="description" content="News from Community Chronicle" />
      </Helmet>
      <div className="bg-gray-100 rounded-md border-[#98d0a0] border-8 text-green-900">
        <div className="flex items-center justify-center">
          <img src={img} className="max-w-10" />
        </div>
        <div className="p-8">
          <h2 className="my-3 font-extrabold text-2xl">{heading}</h2>
          <p className="my-3 font-light">By {author}</p>
          <p className="my-3">
            {content.substring(0, 250)}........{" "}
            <Link to={`${id}`} className="font-bold underline">
              Read More
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

function News() {
  const { isLoading, error, articles } = useArticles(
    "newsArticles",
    10,
    "id",
    "img"
  );
  if (error) {
    return (
      <h2 className="text-center mt-4 text-red-600">
        There was error loading articles!
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
    <div className="grid grid-cols-1 py-16 gap-x-5 gap-y-24 my-20 max-w-[80%] sm:max-w-[65%] lg:max-w-[50%] mx-auto">
      {articles.articles.map((e) => (
        <NewsBox data={e} key={e.id} />
      ))}
    </div>
  );
}

export default News;
