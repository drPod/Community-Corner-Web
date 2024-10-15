import logo from "../../assets/Logo_white.png";
import { Link } from "react-router-dom";

function Footer() {
  const links = [
    "About",
    "News",
    "Podcast",
    "Masthead",
    "Diversity and Inclusion",
    "Contact Us",
    "Write for Us",
  ];
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div class="widget">
                <div class="footer-text text-center">
                  <div className="w-full flex justify-center pt-8">
                    <img src="Logo.png" width="100" height="100" alt="" />
                  </div>

                  <hr class="invis" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center gap-2 font-medium text-xl text-[#53B161] sm:grid sm:grid-cols-2 sm:justify-items-center sm:gap-x-7 sm:gap-y-5 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:flex-row xl:flex xl:flex-row">
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
            <br />
            <div className="flex justify-center pb-2 text-slate-50">
              <p className="">&copy; 2024 Community Chronicle </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
