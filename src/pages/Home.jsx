import { Helmet } from "react-helmet-async";
import HomeNewsBox from "../components/home/HomeNewsBox";
import HomePodcastsBox from "../components/home/HomePodcastsBox";
import Container from "../components/Container";
import "../components/animations/FadeIn.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (step === 3) {
        setStep(0);
      } else {
        setStep((step) => step + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  });

  const images = ["url(/city-wide3.jpg)"];
  return (
    <>
      <Helmet>
        <title>Community Chronicle Home</title>
        <meta
          name="description"
          content="Student Run News Organization. Filled with thousands of meaningful and unique articles for your everyday knowledge, enjoyment, and ease!"
        ></meta>
      </Helmet>
      <div>
        <Container>
          <div className="w-full h-full flex flex-col">
            <div
              className="w-full h-full flex flex-col items-center justify-center"
              style={{ backgroundImage: images }}
            >
              <div className="w-5/6 h-full flex flex-col items-start justify-center gap-y-5">
                <h1 className=" font-playfair text-[#53B161] text-5xl fadeIn">
                  Community Chronicle
                </h1>
                <h2 className=" font-playfair w-1/2 text-xl fadeInDelay text-white">
                  Student Run News Organization. Filled with thousands of
                  meaningful and unique articles for your everyday knowledge,
                  enjoyment, and ease!
                </h2>
              </div>
            </div>
          </div>
        </Container>
        <section class="section">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="section-title">
                  <h3 class="color-aqua">
                    <a href="/news" title="">
                      News
                    </a>
                  </h3>
                </div>

                <HomeNewsBox />
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="section-title">
                  <h3 class="color-pink">
                    <a href="/podcast" title="">
                      Podcasts
                    </a>
                  </h3>
                </div>
                <div class="row">
                  <HomePodcastsBox />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
