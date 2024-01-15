import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const fake_data = {
  id: "rkgbserigb",
  heading: "The latest on Israel's war in Gaza",
  content: `US fighter aircraft on Sunday shot down an anti-ship cruise missile fired at a US Navy destroyer from a Houthi-controlled area of Yemen, the US military said.

  The missile was fired toward USS Laboon, which was operating in the southern Red Sea, US Central Command posted on X. No injuries or damage were reported.
  
  Strikes by the US and UK against Houthi targets in Yemen last week marked a significant response after the Biden administration and its allies warned the Iran-backed militant group it would bear the consequences of its attacks on commercial shipping in the Red Sea.
  
  The situation in Yemen is a key focal point in fears that the Israel-Hamas war will expand further through the Middle East, involving Iranian proxy groups like the Houthis and Hezbollah in Lebanon.`,
  img: `https://picsum.photos/1920/1080`,
  author: "TC",
};

function NewsBox({ data }) {
  const heading = data.heading;
  const content = data.content;
  const img = data.img;
  const author = data.author;
  const id = data.id;

  return (
    <div className="bg-gray-100 rounded-md border-[#98d0a0] border-8 text-green-900">
      <img src={img} className="max-w-10" />
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
  );
}

function News() {
  return (
    <div className="grid grid-cols-1 py-16 gap-x-5 gap-y-24 my-20 max-w-[80%] sm:max-w-[65%] lg:max-w-[50%] mx-auto">
      <NewsBox data={fake_data} />
      <NewsBox data={fake_data} />
    </div>
  );
}

export default News;
