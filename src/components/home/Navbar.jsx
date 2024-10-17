import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import MenuNewsBox from "./MenuNewsBox";
import MenuPodcastsBox from "./MenuPodcastBox";
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
    "write for us",
  ];
  function handleClick() {
    setShowMenu((e) => !e);
  }

  function onFormSubmit() {
    window.location.href = "/src/pages/Searcher.jsx";
  }

  return (
    <div id="wrapper">
      <div className="collapse top-search" id="collapseExample">
        <div className="card card-block">
          <div className="newsletter-widget text-center">
            <form className="form-inline">
              <input
                type="text"
                className="form-control"
                placeholder="What you are looking for?"
              />
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="topbar-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
              <div className="topsocial">
                <a
                  href="https://www.instagram.com/community_chronicle/"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Instagram"
                >
                  <i className="fa fa-instagram"></i>
                </a>
                <a
                  href="https://open.spotify.com/show/1JKtqyhc7KoiYLg9hfP34I"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Spotify"
                >
                  <i className="fa fa-spotify"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 hidden-md-down">
              <div className="topmenu text-center">
                <div className="logo">
                  <a href="/">
                    <img src="/Logo.png" width="60" height="60" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="containerText">
          <nav className="navbar navbar-inverse navbar-toggleable-md">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#cloapediamenu"
              aria-controls="cloapediamenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="navbar-collapse justify-content-md-center"
              id="cloapediamenu"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link color-pink-hover" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link color-pink-hover" href="/about">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown has-submenu menu-large hidden-md-down hidden-sm-down hidden-xs-down">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/news"
                    id="dropdown01"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    News
                  </a>
                  <ul
                    className="dropdown-menu megamenu"
                    aria-labelledby="dropdown01"
                  >
                    <li>
                      <div className="mega-menu-content clearfix">
                        <div className="tab-details clearfix">
                          <div id="cat01" className="tabcontent active">
                            <div className="row">
                              <MenuNewsBox />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown has-submenu menu-large hidden-md-down hidden-sm-down hidden-xs-down">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/podcast"
                    id="dropdown01"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Podcast
                  </a>
                  <ul
                    className="dropdown-menu megamenu"
                    aria-labelledby="dropdown01"
                  >
                    <li>
                      <div className="mega-menu-content clearfix">
                        <div className="tab-details clearfix">
                          <div id="cat01" className="tabcontent active">
                            <div className="row">
                              <MenuPodcastsBox />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link color-pink-hover" href="/masthead">
                    Masthead
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link color-pink-hover"
                    href="/diversity and inclusion"
                  >
                    Diversity & Inclusion
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link color-pink-hover" href="/contact us">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link color-pink-hover" href="/write for us">
                    Write for us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <div className="dmtop">Scroll to Top</div>
    </div>
  );
}

export default Navbar;
