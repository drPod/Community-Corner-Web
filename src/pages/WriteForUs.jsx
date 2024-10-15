import { Helmet } from "react-helmet-async";

export default function WriteForUs() {
  return (
    <>
      <Helmet>
        <title>Community Chronicle Write for us</title>
        <link rel="canonical" href="/write for us" ></link>
        <meta name="description" content="Community Chronicle Write for us" />
      </Helmet>
      <div>
        <div>
          <h1 id="about-heading">Write for Us</h1>

          <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
               Submit an Article
              <br/>
              <hr/>
          </h1>
          <h1 className="leftText font-playfair font-[400] text-2xl  mt-4">
                Thank you for your interest in writing for The Community Chronicle. 
                We are accepting submissions from individuals passionate about economic 
                artography, gender equity, and humanities. If you are interested in writing
                for or working with The Community Chronicle, please contact us at |whatever|<br/> 
          </h1>

          <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
              Rights & Permissions
              <br/>
              <hr/>
          </h1>
          <h1 className="leftText font-playfair font-[400] text-2xl  mt-4">
                  Please note that all submissions will be reviewed by our editors. 
                  By submitting, you acknowledge that your piece has not been previously 
                  published in any other event or platform, and you agree to allow necessary 
                  edits as The Community Chronicle deems fit.<br/> 
          </h1>

          <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
              Writing not for you? Submit multimedia content
              <br/>
              <hr/>
          </h1>
          <h1 className="leftText font-playfair font-[400] text-2xl  mt-4">
          If writing is not your strength, we encourage you to submit multimedia 
                  content such as graphics, illustrations, photography, instagram posts,
                  or short-form video content related to economic cartography and financial 
                  equity topics. Interested? Contact us at |whatever|<br/> 
          </h1>
          <br/>
          <br/>

        </div>
      </div>
    </>
  );
}
