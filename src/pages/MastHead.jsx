/* eslint-disable react/prop-types */
import imgAkhil from "./../assets/cc_profile_imgs/Akhil.png";
import imgHrishik from "./../assets/cc_profile_imgs/Hrishik.png";
import imgLokesh from "./../assets/cc_profile_imgs/Lokesh.png";
import imgNikhilK from "./../assets/cc_profile_imgs/Nikhil_K.png";
import imgNikhil from "./../assets/cc_profile_imgs/Nikhil.png";
import imgNischal from "./../assets/cc_profile_imgs/Nischal.png";
import imgAnish from "./../assets/cc_profile_imgs/Anish.png";
import imgArnav from "./../assets/cc_profile_imgs/Arnav.png";
import imgJordan from "./../assets/cc_profile_imgs/Jordan.png";
import imgOlivia from "./../assets/cc_profile_imgs/Olivia.png";
import imgPuneeth from "./../assets/cc_profile_imgs/Puneeth.png";
import imgRashmi from "./../assets/cc_profile_imgs/Rashmi.png";
import imgSaanvi from "./../assets/cc_profile_imgs/Saanvi.png";
import imgTanush from "./../assets/cc_profile_imgs/Tanush.png";
import imgPlaceholder from "./../assets/cc_profile_imgs/placeholder.png";

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
      <h1 className="font-playfair font-[700] text-7xl my-10 text-center">
        Meet our team!
      </h1>
      <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
        C-Suite
        <br/>
        <hr/>
      </h1>
      {/* <div className=" p-16 mb-8 gap-y-8 sm:grid-cols-2 sm:gap-x-8 xl:px-40 sm:px-32 2xl:px-80 justify-items-center xl:grid-cols-3"> */}
      <h1 className="font-playfair font-[400] text-2xl text-center mt-5">
      CEO: Nikhil Kotta <br/>
      CTO: Kunal Shah <br/>
      CFO: Nikhil Chepuri <br/>
      COO: Manil Shangle <br/>
      CCO: Jordan Davis <br/>
      CIO: Hrishik Gogineni <br/>
        <br/>
      </h1>
      {/* </div> */}
      <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
        Web and Social Media
        <br/>
        <hr/>
      </h1>
      <h1 className="font-playfair font-[400] text-2xl text-center mt-5">
      Aditiya Poduval - Instagram Editor <br/>
      Aleeza - Instagram Editor <br/>
      Kashish Agarwal - Instagram Editor <br/>
      Nikhil Chepuri - Tiktok Lead <br/>
      Nischal - Tiktok Editor <br/>
      Rohan - Instagram Editor <br/>
      Saanvi Konduru - Instagram Lead <br/>
      Shivani - Tiktok Editor <br/>
      Shivanshi Rohatgi - Instagram Editor <br/>
      Tanush Chauhan - Website Lead <br/>
      Visvesh Arun - Tiktok Editor <br/>
        <br/>
      </h1>

      <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
        Podcast Staff
        <br/>
        <hr/>
      </h1>
      <h1 className="font-playfair font-[400] text-2xl text-center mt-5">
      Aarush - Podcast Co-host <br/>
      Akhil Tadala - Podcast Video Editor <br/>
      Arnav Senapathi - Podcast Co-Host <br/>
      Darsh Poddar - Podcast Co-host <br/>
      Hrishik - Podcast Co-host <br/>
      Insiya - Podcast Co-host <br/>
      Jagruth Kallepalli - Podcast Video Editor <br/>
      Jordan Davis - Podcast Video Editor <br/>
      Lokesh Penugonda - Podcast Transcriptor<br/>
      Nikhil Kotta -  Podcast Co-host <br/>
      Olivia - Podcast Co-host <br/>
      Prithvi - Podcast Co-host <br/>
      Rashmi - Podcast Co-host <br/>
      Sanyam - Podcast Co-Host<br/>
      Smarran Manchala - Podcast Co-host<br/>
      Venkatesh - Podcast Co-host <br/>
        <br/>
      </h1>

      <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
        Newspaper Staff
        <br/>
        <hr/>
      </h1>
      <h1 className="font-playfair font-[400] text-2xl text-center mt-5">
      Aarav - Medicine Paper Editor<br/>
      Aarush Nigam - Behavioral Economics Paper Editor<br/>
      Aditya Singh - Engineering Paper Editor<br/>
      Advaith Sridhar - Psychology Paper Editor<br/>
      Anish  - Computer Science Paper Editor<br/>
      Hrishik Gogineni-Finance/Investing Paper Editor<br/>
      Jordan Davis - Psychology Paper Editor<br/>
      Kiruthick - Technology Paper Editor<br/>
      Lokesh - Economics Paper Editor<br/>
      Manil Shagle - Computer Science Paper Editor<br/>
      Owen Hart - Current Events Paper Editor<br/>
      Puneeth Kolla - Computer Science Paper Editor<br/>
      Sai Raghav Ganesh - Economics Paper Editor<br/>
      Sanjay Vontala - Medicine Paper Editor<br/>
      Srikar Desu - Engineering Paper Editor<br/>
      Sushanth Siddareddygari - Medicine Paper Editor<br/>
      Tarun Muddasani - Engineering Paper Editor<br/>
      Tejus Golakoti - Military & International Relations Paper Editor<br/>
        <br/>
      </h1>
     
      
    </>
  );
}

export default MastHead;
