import { Link, useParams } from "react-router-dom";

const data = {
  id: "rkgbserigb",
  heading: "The latest on Israel's war in Gaza",
  content: `US fighter aircraft on Sunday shot down an anti-ship cruise missile fired at a US Navy destroyer from a Houthi-controlled area of Yemen, the US military said.
      
        The missile was fired toward USS Laboon, which was operating in the southern Red Sea, US Central Command posted on X. No injuries or damage were reported.
        
        Strikes by the US and UK against Houthi targets in Yemen last week marked a significant response after the Biden administration and its allies warned the Iran-backed militant group it would bear the consequences of its attacks on commercial shipping in the Red Sea.
        
        The situation in Yemen is a key focal point in fears that the Israel-Hamas war will expand further through the Middle East, involving Iranian proxy groups like the Houthis and Hezbollah in Lebanon.`,
  img: `https://picsum.photos/1920/1080`,
  author: "TC",
};

function NewsView() {
  const { id } = useParams();
  const heading = data.heading;
  const content = data.content;
  const img = data.img;
  const author = data.author;
  return (
    <div className="my-20">
      <img
        src={img}
        className="max-w-[95%] pt-8 pb-8 mx-auto xl:max-w-[80%] 2xl:max-w-[65%]"
      ></img>
      <div className="max-w-[95%] xl:max-w-[80%] mx-auto 2xl:max-w-[65%] text-green-900">
        <h2 className="text-center font-extrabold text-2xl lg:text-4xl">
          {heading}
        </h2>
        <p className="text-center py-4 font-light">By {author}</p>
        <p className="text-lg lg:text-xl">{content}</p>
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
