/* eslint-disable react/prop-types */
import imgAkhil from "./../assets/cc_profile_imgs/Akhil.png";
import imgHrishik from "./../assets/cc_profile_imgs/Hrishik.png";
import imgLokesh from "./../assets/cc_profile_imgs/Lokesh.png";
import imgNikhilK from "./../assets/cc_profile_imgs/Nikhil_K.png";
import imgNikhil from "./../assets/cc_profile_imgs/Nikhil.png";
import imgNischal from "./../assets/cc_profile_imgs/Nischal.png";

function ProfileCard({ name, position, imgPath }) {
  return (
    <div className="shadow-xl border-8 border-[#98d0a0] rounded-xl">
      <img src={imgPath} className="" />
      <div className=" flex flex-col justify-center items-center py-7 gap-4">
        <h2 className="text-3xl text-center font-playfair font-bold text-[#112313]">
          {name}
        </h2>
        <div className="flex flex-col items-center justify-center">
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
      <h1 className="font-playfair font-[700] text-4xl mt-10 text-center">
        Meet our team!
      </h1>
      <div className="grid grid-cols-1 p-16 mb-8 gap-y-8 sm:grid-cols-2 sm:gap-x-8 xl:grid-cols-3 xl:px-40 2xl:grid-cols-4 sm:px-32 2xl:px-80">
        <ProfileCard
          name={"Nikhil Kotta"}
          position={"CEO\nCo-host"}
          imgPath={imgNikhilK}
        />
        <ProfileCard
          name={"Hrishik"}
          position={"Co-host"}
          imgPath={imgHrishik}
        />
        <ProfileCard
          name={"Akhil Tadala"}
          position={"Podcast Editor"}
          imgPath={imgAkhil}
        />
        <ProfileCard
          name={"Lokesh"}
          position={"Podcast Transcripts"}
          imgPath={imgLokesh}
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
      </div>
    </>
  );
}

export default MastHead;
