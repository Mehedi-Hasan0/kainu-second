const JoinPartyVideo = () => {
  return (
    <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-14 max-w-screen-md xl:max-w-screen-lg mx-auto flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-14 xl:gap-16 justify-between items-center w-full">
      {/* left content */}
      <div className="flex flex-col gap-5 flex-1">
        <h2 className="uppercase text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[2.625rem] font-barlow font-extrabold italic">
          <span>Join the</span>
          <br />
          <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-csPrimary">
            Party
          </span>
        </h2>
        <div className="flex flex-col gap-2 max-w-[500px] text-justify">
          <p className="font-poppins font-medium text-gray-400">
            Connecting with a own Profil System for finding friends,
            eSportTeams, Tournaments, Matchmaking, Games, Streams and more. This
            plattform is the dream of all gamers for all Plattforms.
          </p>

          <p className="font-poppins font-medium text-gray-400">
            Included reward system to earn money for beeing active.
          </p>
        </div>
      </div>
      {/* right video */}
      <div className="flex-1 flex justify-end">
        <div className="">
          <video
            src="https://themebeyond.com/videos/VID_20240627_140233_636.mp4"
            loop
            poster="/assets/images/joinParty/media-1.png"
            width={"100%"}
            height={"100%"}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinPartyVideo;
