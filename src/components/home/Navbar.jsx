import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const navigate = useNavigate();
  const links = [
    "about",
    "news",
    "podcast",
    "masthead",
    "diversity and inclusion",
    "contact us",
    "write for us"
  ];
  function handleClick() {
    setShowMenu((e) => !e);
  }

  function onFormSubmit() {
    window.location.href="/src/pages/Searcher.jsx";
  }

  return (
    <header className="w-full flex flex-col items-center justify-center bg-[#fff] py-4 border-y-8 border-[#53B161] transition-all duration-300">
      <span className="font-playfair text-xl mx-auto">{currentDate}</span>
      <nav className="flex justify-between items-center py-4 px-8">
        <div className="w-[33%] flex justify-center text-slate-900">
          {!showMenu ? (
            <button onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 fill-stone-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          ) : null}

          {showMenu ? (
            <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-screen gap-6 font-medium text-3xl bg-[rgba(255,255,255,0.75)] backdrop-blur-md z-10 text-stone-900">
              <Link to="/" onClick={handleClick} className="hover:underline">
                HOME
              </Link>
              {links.map((link) => (
                <Link
                  to={`/${link}`}
                  key={link}
                  className="hover:underline"
                  onClick={handleClick}
                >
                  {" "}
                  {link.toUpperCase()}
                </Link>
              ))}
              <Link
                to="/login"
                onClick={handleClick}
                className="hover:underline"
              >
                SIGN IN / JOIN
              </Link>
            </div>
          ) : null}
          {showMenu ? (
            <button className=" z-20" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 fill-stone-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : null}
        </div>
        <img
          src={logo}
          alt="logo"
          className="w-[15%] cursor-pointer"
          onClick={() => navigate("/")}
        />
        
        <div className="w-[33%] flex gap-x-3 text-slate-900 justify-center items-center">
          <a
            target="_blank"
            href="https://www.instagram.com/community_chronicle/"
            title="Instagram"
            rel="noreferrer"
          >
            <FontAwesomeIcon fontSize={20} icon={faInstagram} />
          </a>

          <a href="#" title="Facebook">
            <FontAwesomeIcon fontSize={20} icon={faFacebook} />
          </a>
          <a 
            target="_blank"
            href="https://open.spotify.com/show/1JKtqyhc7KoiYLg9hfP34I  "
            title="Instagram"
            rel="noreferrer"
          >
            <FontAwesomeIcon fontSize={20} icon={faSpotify} />

          </a>
          <div className="container" >

            <form onSubmit={onFormSubmit}>
              <input type="text" placeholder="search anything" name="q" />
            </form>

        </div>

        <a href="/Searcher" title="Searcher">
            <FontAwesomeIcon fontSize={20} icon={faSearch} />
          </a>
        </div>
       
      </nav>
    </header>
  );
}

export default Navbar;
