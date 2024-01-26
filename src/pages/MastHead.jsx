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
// import imgShreya from "./../assets/cc_profile_imgs/Shreya.png";
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
      </h1>
      <div className="grid grid-cols-1 p-16 mb-8 gap-y-8 sm:grid-cols-2 sm:gap-x-8 xl:px-40 sm:px-32 2xl:px-80 justify-items-center xl:grid-cols-3">
        <ProfileCard
          name={"Nikhil Kotta"}
          position={"CEO\nCo-host\nCo-Founder"}
          imgPath={imgNikhilK}
        />
        <ProfileCard
          name={"Tanush Chauhan"}
          position={"CTO\nWebsite Team"}
          imgPath={imgTanush}
        />
        <ProfileCard
          name={"Jordan Davis"}
          position={"CCO\nPodcast Editor\nNews Topic - Psychology"}
          imgPath={imgJordan}
        />
        <ProfileCard
          name={"Darsh Poddar"}
          position={"COO\nCo-host\nNews Topic - Cybersecurity\nCo-Founder"}
          imgPath={imgPlaceholder}
        />
      </div>
      <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
        Podcast Team
      </h1>
      <div className="grid grid-cols-1 p-16 mb-8 gap-y-8 sm:grid-cols-2 sm:gap-x-8 xl:grid-cols-3 xl:px-40 2xl:grid-cols-4 sm:px-32 2xl:px-80">
        <ProfileCard name={"Olivia"} position={"Co-host"} imgPath={imgOlivia} />
        <ProfileCard name={"Rashmi"} position={"Co-host"} imgPath={imgRashmi} />
        <ProfileCard
          name={"Hrishik"}
          position={"Co-host"}
          imgPath={imgHrishik}
        />
        <ProfileCard
          name={"Vinkatesh "}
          position={"Co-host"}
          imgPath={imgPlaceholder}
        />
        <ProfileCard
          name={"Arnav Senapathi"}
          position={"Co-host\nCo-Founder"}
          imgPath={imgArnav}
        />
        <ProfileCard
          name={"Smarran Manchala"}
          position={"Co-host"}
          imgPath={imgPlaceholder}
        />
        <ProfileCard
          name={"Akhil Tadala"}
          position={"Podcast Editor"}
          imgPath={imgAkhil}
        />
        <ProfileCard
          name={"Jagruth Kallepalli"}
          position={"Podcast Editor"}
          imgPath={imgPlaceholder}
        />
        <ProfileCard
          name={"Lokesh Penugonda"}
          position={"Podcast Transcripts\nNews Topic - Computer Science"}
          imgPath={imgLokesh}
        />
      </div>
      <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
        Social Media Team
      </h1>
      <div className="grid grid-cols-1 p-16 mb-8 gap-y-8 sm:grid-cols-2 sm:gap-x-8 xl:grid-cols-3 xl:px-40 2xl:grid-cols-4 sm:px-32 2xl:px-80">
        <ProfileCard
          name={"Saanvi Konduru"}
          position={"Head of Instagram Team"}
          imgPath={imgSaanvi}
        />
        <ProfileCard
          name={"Aleeza"}
          position={"Instagram Editor"}
          imgPath={imgPlaceholder}
        />
        <ProfileCard
          name={"Aditiya Poduval"}
          position={"Instagram Editor"}
          imgPath={imgPlaceholder}
        />
        <ProfileCard
          name={"Rohan"}
          position={"Instagram Editor"}
          imgPath={imgPlaceholder}
        />
        <ProfileCard
          name={"Shivanshi Rohatgi"}
          position={"Instagram Editor"}
          imgPath={imgPlaceholder}
        />
        <ProfileCard
          name={"Kashish Agarwal"}
          position={"Instagram Editor"}
          imgPath={imgPlaceholder}
        />
        <ProfileCard
          name={"Nikhil Chepuri"}
          position={"Head of Tiktok Team"}
          imgPath={imgNischal}
        />
        <ProfileCard
          name={"Nischal"}
          position={"Tiktok Editor"}
          imgPath={imgNikhil}
        />
        <ProfileCard
          name={"Shivani"}
          position={"Tiktok Editor"}
          imgPath={imgPlaceholder}
        />
        <ProfileCard
          name={"Visvesh Arun"}
          position={"Tiktok Editor"}
          imgPath={imgNikhil}
        />
      </div>
      <h1 className="font-playfair font-[700] text-4xl mt-20 text-center">
        Newspaper Team
      </h1>
      <div className="grid grid-cols-1 p-16 mb-8 gap-y-8 sm:grid-cols-2 sm:gap-x-8 xl:grid-cols-3 xl:px-40 2xl:grid-cols-4 sm:px-32 2xl:px-80">
        <ProfileCard
          name={"Anish"}
          position={"News Topic - Computer Science / Engineering"}
          imgPath={imgAnish}
        />
        <ProfileCard
          name={"Puneeth Kolla"}
          position={"News Topic - Computer Science / Medicine"}
          imgPath={imgPuneeth}
        />
        <ProfileCard
          name={"Manil Shangle"}
          position={"News Topic - Computer Science"}
          imgPath={imgPlaceholder}
        />
        <ProfileCard
          name={"Aarush Nigam"}
          position={"News Topic - Finance"}
          imgPath={imgPlaceholder}
        />
        <ProfileCard
          name={"Aarav Poddar"}
          position={"News Topic - Medicine"}
          imgPath={imgPlaceholder}
        />
        <ProfileCard
          name={"Owen Hart"}
          position={"News Topic - Current Events"}
          imgPath={imgPlaceholder}
        />
      </div>
    </>
  );
}

export default MastHead;
