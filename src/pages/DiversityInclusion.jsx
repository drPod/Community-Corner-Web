import { Helmet } from "react-helmet-async";

export default function DiversityInclusion() {
  return (
    <>
      <Helmet>
        <title>Community Chronicle Diversity & Inclusion</title>
        <link rel="canonical" href="/diversity and inclusion"></link>
        <meta
          name="description"
          content="The Community Chronicle's 170+ staffers come from 40 nationalities across 35 different locations. Our belief in the importance of diverse perspectives is central to our mission, as we strive to produce content that is cohesive, inclusive, and representative of the varied experiences and insights of our team members."
        />
      </Helmet>
      <div>
        <div>
          <h1 id="about-heading">Diversity and Inclusion</h1>

          <div className="about-section">
            <div>
              <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
                Staff Diversity <br />
                <hr />
              </h1>
              <h1 className="leftText font-playfair font-[400] text-xl  mt-4">
                The Community Chronicle's 170+ staffers come from 40
                nationalities across 35 different locations. Our belief in the
                importance of diverse perspectives is central to our mission, as
                we strive to produce content that is cohesive, inclusive, and
                representative of the varied experiences and insights of our
                team members.
                <br />
                <br />
                The Community Chronicle Team’s diversity contributes to the
                richness of our articles, podcasts, and discussions, allowing us
                to create more impactful and meaningful content.
              </h1>
            </div>
          </div>

          <div className="about-section-left">
            <div>
              <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
                Nationalities We Represent:
                <br />
                <hr />
              </h1>
              <br />
              <table
                id="diversityTable"
                className="leftText font-playfair font-[400] text-xl  text-center"
              >
                <tr>
                  <td> Algerian</td>
                  <td> Angolan</td>
                  <td> Austrian</td>
                  <td> Basatho</td>
                  <td> Batswana</td>
                  <td> Belgian</td>
                </tr>
                <tr>
                  <td> British</td>
                  <td> Chinese</td>
                  <td> Congolese</td>
                  <td> Czech</td>
                  <td> Danish</td>
                  <td> Dominican</td>
                </tr>
                <tr>
                  <td> Dutch</td>
                  <td> Egyptian</td>
                  <td> Ethiopian</td>
                  <td> Finnish</td>
                  <td> French</td>
                  <td> Gambian</td>
                </tr>
                <tr>
                  <td> German</td>
                  <td> Ghanaian</td>
                  <td> Guinean</td>
                  <td> Hungarian</td>
                  <td> Icelandic</td>
                  <td> Indian</td>
                </tr>
                <tr>
                  <td> Iranian</td>
                  <td> Irish</td>
                  <td> Italian</td>
                  <td> Jamaican</td>
                  <td> Japenese</td>
                  <td> Kenyan</td>
                </tr>
                <tr>
                  <td> Korean</td>
                  <td> Liberian</td>
                  <td> Libyan</td>
                  <td> Namibian</td>
                  <td> Nigerian</td>
                  <td> Norwegian</td>
                </tr>
                <tr>
                  <td> Pakistani</td>
                  <td> Polish</td>
                  <td> Portuguese</td>
                  <td> Romanian</td>
                  <td> Saudi Arabian</td>
                  <td> Senegalese</td>
                </tr>
                <tr>
                  <td> Sierra Leonean</td>
                  <td> South African</td>
                  <td> Spanish</td>
                  <td> Sri Lankan</td>
                  <td> Swazi</td>
                  <td> Swedish</td>
                </tr>
                <tr>
                  <td> Swiss</td>
                  <td> Tanzanian</td>
                  <td> Zambian</td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="about-section">
            <div>
              <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
                Our Core Values <br />
                <hr />
              </h1>
              <h1 className="leftText font-playfair font-[400] text-xl  mt-4">
                <b>Diversity</b>: Our team is composed of individuals from
                various nationalities, cities, and backgrounds. We ensure that
                our work reflects a broad range of viewpoints, contributing to
                well-rounded and inclusive content.
                <br />
                <br />
                <b>Trustworthiness</b>: The trust of our audience is our
                priority. Every article, podcast, and publication is carefully
                reviewed, edited, and fact-checked to guarantee that we provide
                the most reliable and accurate information possible.
                <br />
                <br />
                <b>Freedom of Expression</b>: Our journalists are encouraged to
                share their perspectives openly and without bias. The Community
                Chronicle maintains its independence from any external
                influence, ensuring that our content remains impartial.
                <br />
                <br />
                <b>Empathy</b>: We recognize the power of words and are careful
                in our messaging to ensure that our content uplifts and educates
                without causing harm.
                <br />
                <br />
                <b>Responsibility</b>: Our writers and staff take ownership of
                their work. We are committed to addressing any issues that arise
                and are open to feedback from our audience, making corrections
                as needed to maintain our high standards.
              </h1>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
