import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>Community Chronicle About</title>
        <link rel="canonical" href="/about"></link>
        <meta
          name="description"
          content="About us: What is community corner?, Who are we?, What do we publish?, History of Community Corner"
        />
      </Helmet>
      <div>
        <div>
          <h1 id="about-heading">About Us</h1>

          <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
            Who We Are
            <br />
            <hr />
          </h1>
          <h1 className="leftText font-playfair font-[400] text-xl  mt-4">
            Welcome to the Community Chronicle! The Community Chronicle is the
            United States' 1st interscholastic economic cartography newspaper,
            with a mission to bridge the economic gap for female veterans
            post-service and low-income women. Our platform has grown into an
            interactive newspaper and podcast with a staff of 17 people from 50
            nationalities across 35 cities. <br /> <br />
            We’ve produced over 2,000 articles and podcasts so far, gained
            10,000 Instagram followers, and garnered 25,000 monthly reads. Our
            work centers on leveraging knowledge of economic cartography and
            gender equity to advocate for financial equity for women, especially
            those who have served in the military. <br />
          </h1>

          <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
            What We Publish
            <br />
            <hr />
          </h1>
          <h1 className="leftText font-playfair font-[400] text-xl  mt-4">
            The Community Chronicle publishes articles and podcasts focusing on
            gender equity issues, income inequality, and economic challenges
            faced by female veterans post-service. We also highlight success
            stories of veterans who have overcome financial obstacles and
            excelled in their post-service lives. We offer educational
            information on how to procure microloans and financial advice.
            Additionally, we explore economic cartography and how it intersects
            with broader humanities topics, analyzing the historical and social
            impacts of financial systems. <br /> <br />
            The Community Chronicle also hosts an interactive podcast series,
            webinars, and live discussion panels featuring financial experts and
            business leaders. Our staff is mentored to be molded into formidable
            social-activist journalists. <br />
          </h1>

          <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
            History of the Community Chronicle
            <br />
            <hr />
          </h1>
          <h1 className="leftText font-playfair font-[400] text-xl  mt-4">
            The Community Chronicle began in 2021 by our founder, Nikhil Kotta,
            as a collection of favorite economic cartography maps illustrating
            socioeconomic nequalities and has since evolved into a comprehensive
            platform focused on helping female veterans and low-income women
            navigate post-service economic challenges.
            <br /> <br />
            Through our efforts, we have grown a strong, active readership and
            community committed to financial literacy and equity.
            <br />
          </h1>

          <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
            General Information
            <br />
            <hr />
          </h1>

          <h3 className="sub-sub-heading font-playfair font-[400] text-2xl  mt-4">
            {" "}
            Submissions, Tips, Op-eds{" "}
          </h3>

          <h1 className="leftText font-playfair font-[400] text-xl  mt-4">
            If you have tips, story ideas, or thoughts on improving financial
            literacy and equity, we’d love to hear from you! Email us at
            communitycornerpodcast@gmail.com or message us on Instagram at
            @community_chronicle.
            <br /> <br />
            We welcome op-eds and article submissions. Articles can range from
            450–1,500 words and will be reviewed prior to publication. Please
            send all submissions to communitycornerpodcast@gmail.com.
            <br />
          </h1>

          <h3 className="sub-sub-heading font-playfair font-[400] text-2xl  mt-4">
            {" "}
            Comment Policy{" "}
          </h3>

          <h1 className="leftText font-playfair font-[400] text-xl  mt-4">
            We believe in promoting free, open discussions. However, any
            comments that contain offensive language, false claims, or disparage
            people based on race, gender, religion, or sexual orientation will
            be removed.
            <br />
          </h1>

          <h3 className="sub-sub-heading font-playfair font-[400] text-2xl  mt-4">
            {" "}
            Advertise With Us{" "}
          </h3>

          <h1 className="leftText font-playfair font-[400] text-xl  mt-4">
            The Community Chronicle offers advertising opportunities to
            organizations and businesses committed to advancing financial
            literacy and equity for female veterans and low-income women. For
            more information about advertising, email us at
            communitycornerpodcast@gmail.com.
            <br />
          </h1>
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
