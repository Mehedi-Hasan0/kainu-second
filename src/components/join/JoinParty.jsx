import JoinPartyBanner from "./JoinPartyBanner";
import JoinPartyVideo from "./JoinPartyVideo";

const JoinParty = () => {
  return (
    <section className="bg-[#0d082e] relative overflow-x-hidden overflow-y-hidden">
      {/* elements */}
      <div className="absolute -top-28 -left-16 lg:-top-32 lg:-left-28 w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] rounded-full bg-[#231b59] blur-3xl" />
      <div className="absolute -bottom-10 -left-16 lg:-bottom-20 lg:-left-16 w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] rounded-full bg-[#231b59] blur-3xl" />
      <div className="absolute bottom-52 -right-20 lg:bottom-56 lg:-right-32 xl:-right-40 2xl:-right-56 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full bg-[#231b59]  hidden lg:block blur-3xl" />
      <div className="main-container section-padding flex flex-col gap-8 md:gap-10 lg:gap-12 z-10 relative my-8 lg:my-12">
        {/* top banner */}
        <JoinPartyBanner />
        {/* bottom video */}
        <JoinPartyVideo />
      </div>
    </section>
  );
};

export default JoinParty;
