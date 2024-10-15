import { Helmet } from "react-helmet-async";
import HomeNewsBox from "../components/home/HomeNewsBox";
import HomePodcastsBox from "../components/home/HomePodcastsBox";
export default function Home() {
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
