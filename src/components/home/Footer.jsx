import logo from "../../assets/Logo_white.png";
import { Link } from "react-router-dom";

function Footer() {
  const links = [
    "About",
    "News",
    "Podcast",
    "Masthead",
  ];
  return (
    <footer className="w-full border-b-8 border-[#53B161]">
      <div className="w-full flex justify-center bg-[#53B161] pt-8">
        <img src={logo} alt="logo" className="w-[10%]" />
      </div>
      <div className="flex p-8 items-center justify-around bg-[#53B161]">
        <div className="flex flex-col justify-center items-center gap-2 font-medium text-xl text-[#fff] sm:grid sm:grid-cols-2 sm:justify-items-center sm:gap-x-7 sm:gap-y-5 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:flex-row xl:flex xl:flex-row">
          <Link to="/" className="hover:underline">
            HOME
          </Link>
          {links.map((link) => (
            <Link to={`/${link}`} key={link} className="hover:underline">
              {" "}
              {link.toUpperCase()}
            </Link>
          ))}
          <Link
            to="/login"
            className="hover:underline sm:col-span-2 md:row-[3/4] md:col-[3/4] lg:col-span-4"
          >
            SIGN IN / JOIN
          </Link>
        </div>
      </div>
      <div className="flex justify-center pb-2 text-slate-50 bg-[#53B161]">
        <p className="">&copy; 2024 Community Chronicle </p>
      </div>
    </footer>
  );
}

export default Footer;
