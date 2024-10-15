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
  const reads = [
    {
      name: "The 10 Best Movies of 2021 (So Far)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl",
    },
    {
      name: "The 10 Best Movies of 2022 (So Far)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl",
    },
    {
      name: "The 10 Best Movies of 2023 (So Far)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl quis aliquam ultricies, nisl",
    },
  ];

  const images = [
    "url(/placeholder1.jpg)",
    "url(/placeholder2.jpg)",
    "url(/placeholder3.jpg)",
    "url(/placeholder.png)",
  ];

  return (
    <>
      <Helmet>
        <title>Community Chronicle Home</title>
        <link rel="canonical" href="/"></link>
        <meta
          name="description"
          content="Student Run News Organization. Filled with thousands of meaningful and unique articles for your everyday knowledge, enjoyment, and ease!"
        ></meta>
      </Helmet>

      <Container>
        <div className="w-full h-full flex flex-col">
          <div
            className="w-full h-full flex flex-col items-center justify-center"
            style={{ backgroundImage: images[step] }}
          >
            <div className="w-5/6 h-full flex flex-col items-start justify-center gap-y-5">
              <h1 className="text-[#53B161] text-5xl fadeIn">
                Community Chronicle
              </h1>
              <h2 className="w-1/2 text-xl fadeInDelay">
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
    </>
  );
}
