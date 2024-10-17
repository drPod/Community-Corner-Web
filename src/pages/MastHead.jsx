/* eslint-disable react/prop-types */

function ProfileCard({ name, position, imgPath, className }) {
  return (
    <div
      className={`shadow-xl border-8 border-[#98d0a0] rounded-xl max-w-xl ${className}`}
    >
      <img src={imgPath} />
      <div className=" flex flex-col justify-center items-center py-7 gap-4">
        <h2 className="text-3xl text-center font-playfair font-bold text-[#112313]">
          {name}
        </h2>
        <div className="flex flex-col items-center justify-center text-center">
          {position.split("\n").map((e) => (
            <h3 className="text-xl font-playfair font-[500]" key={e}>
              {e}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
}

function MastHead() {
  return (
    <>
      <div>
        <div>
          <h1 id="about-heading">Meet our team!</h1>
          <section class="section">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="page-wrapper"></div>
                  <div class="page-wrapper">
                    <div class="pp">
                      <h1 className="font-playfair text-3xl ">
                        C-Suite
                        <hr className="hrFullWidth" />
                      </h1>
                      <br />
                      <p>
                        CEO: Nikhil Kotta <br /> <br />
                        CTO: Kunal Shah <br /> <br />
                        CFO: Nikhil Chepuri <br /> <br />
                        COO: Manil Shangle <br /> <br />
                        CCO: Jordan Davis <br /> <br />
                        CIO: Hrishik Gogineni <br /> <br />
                      </p>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div class="pp">
                      <h1 className="font-playfair text-3xl ">
                        Web and Social Media
                        <hr className="hrFullWidth" />
                      </h1>
                      <br />
                      <p>
                        Aditiya Poduval - Instagram Editor <br />
                        <br />
                        Aleeza - Instagram Editor <br />
                        <br />
                        Kashish Agarwal - Instagram Editor <br />
                        <br />
                        Nikhil Chepuri - Tiktok Lead <br />
                        <br />
                        Nischal - Tiktok Editor <br />
                        <br />
                        Rohan - Instagram Editor <br />
                        <br />
                        Saanvi Konduru - Instagram Lead <br />
                        <br />
                        Shivani - Tiktok Editor <br />
                        <br />
                        Shivanshi Rohatgi - Instagram Editor <br />
                        <br />
                        Tanush Chauhan - Website Lead <br />
                        <br />
                        Visvesh Arun - Tiktok Editor <br />
                        <br />
                      </p>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div class="pp">
                      <h1 className="font-playfair text-3xl ">
                        Podcast Staff
                        <hr className="hrFullWidth" />
                      </h1>
                      <br />
                      <p>
                        Aarush - Podcast Co-host <br />
                        <br />
                        Akhil Tadala - Podcast Video Editor <br />
                        <br />
                        Arnav Senapathi - Podcast Co-Host <br />
                        <br />
                        Darsh Poddar - Podcast Co-host <br />
                        <br />
                        Hrishik - Podcast Co-host <br />
                        <br />
                        Insiya - Podcast Co-host <br />
                        <br />
                        Jagruth Kallepalli - Podcast Video Editor <br />
                        <br />
                        Jordan Davis - Podcast Video Editor <br />
                        <br />
                        Lokesh Penugonda - Podcast Transcriptor
                        <br />
                        <br />
                        Nikhil Kotta - Podcast Co-host <br />
                        <br />
                        Olivia - Podcast Co-host <br />
                        <br />
                        Prithvi - Podcast Co-host <br />
                        <br />
                        Rashmi - Podcast Co-host <br />
                        <br />
                        Sanyam - Podcast Co-Host
                        <br />
                        <br />
                        Smarran Manchala - Podcast Co-host
                        <br />
                        <br />
                        Venkatesh - Podcast Co-host <br />
                        <br />
                      </p>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <div class="pp">
                      <h1 className="font-playfair text-3xl ">
                        Newspaper Staff
                        <hr className="hrFullWidth" />
                      </h1>
                      <br />
                      <p>
                        Aarav - Medicine Paper Editor
                        <br />
                        <br />
                        Aarush Nigam - Behavioral Economics Paper Editor
                        <br />
                        <br />
                        Aditya Singh - Engineering Paper Editor
                        <br />
                        <br />
                        Advaith Sridhar - Psychology Paper Editor
                        <br />
                        <br />
                        Anish - Computer Science Paper Editor
                        <br />
                        <br />
                        Hrishik Gogineni-Finance/Investing Paper Editor
                        <br />
                        <br />
                        Jordan Davis - Psychology Paper Editor
                        <br />
                        <br />
                        Kiruthick - Technology Paper Editor
                        <br />
                        <br />
                        Lokesh - Economics Paper Editor
                        <br />
                        <br />
                        Manil Shagle - Computer Science Paper Editor
                        <br />
                        <br />
                        Owen Hart - Current Events Paper Editor
                        <br />
                        <br />
                        Puneeth Kolla - Computer Science Paper Editor
                        <br />
                        <br />
                        Sai Raghav Ganesh - Economics Paper Editor
                        <br />
                        <br />
                        Sanjay Vontala - Medicine Paper Editor
                        <br />
                        <br />
                        Srikar Desu - Engineering Paper Editor
                        <br />
                        <br />
                        Sushanth Siddareddygari - Medicine Paper Editor
                        <br />
                        <br />
                        Tarun Muddasani - Engineering Paper Editor
                        <br />
                        <br />
                        Tejus Golakoti - Military & International Relations
                        Paper Editor
                        <br />
                        <br />
                        <br />
                      </p>
                    </div>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default MastHead;
