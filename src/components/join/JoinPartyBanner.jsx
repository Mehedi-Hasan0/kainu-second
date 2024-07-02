import Image from "next/image";
import CustomButton from "../ui/CustomButton";

const JoinPartyBanner = () => {
  return (
    <div className="">
      <div className=" border border-csPrimary rounded-md flex items-stretch justify-end w-full h-[320px] sm:h-[140px] md:h-[180px] max-w-screen-md xl:max-w-screen-lg mx-auto relative ">
        <Image
          width={657}
          height={376}
          src={"/assets/images/joinParty/game-world.png"}
          alt=""
          className="absolute -bottom-5 left-0 w-[360px] md:w-[400px] xl:w-[430px] 2xl:w-[420px] "
        />
        <div className="flex flex-col items-center gap-2 lg:gap-3 -mt-4 lg:-mt-5 mr-12 md:mr-16 lg:mr-20 xl:mr-32 bg-[#0d082e] h-fit">
          <h2 className="sub-heading font-barlow font-extrabold uppercase">
            Join the gaming <span className="text-csPrimary">world</span>
          </h2>
          <p className="uppercase text-[10px] lg:text-xs xl:text-sm text-gray-400 font-medium text-center mt-2 lg:mt-3">
            Platform catering to web2 and web3 users.
          </p>
          <div>
            <CustomButton
              textLabel="Get started"
              btnBgColor="primary-gradient"
              borderColor="border-none"
              hoverColor1="bg-csDarkBlue"
              hoverColor2="bg-[#FFC947]"
              hoverColor3="secondary-gradient"
              extraStyle="w-fit rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPartyBanner;
