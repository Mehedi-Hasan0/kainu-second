import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import collectiveImg from "../../public/assets/images/collective-img.png";

const Collective = () => {
  return (
    <section className="overflow-hidden section-padding">
      <div className="main-container">
        {/* heading */}
        <div className="flex flex-col gap-2 lg:gap-3 2xl:gap-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-berlin uppercase">
            <span className="text-csPrimary">at kainu</span>, about collective
          </h1>
          <p className="text-xs xl:text-sm font-poppins text-gray-400 sm:max-w-[320px] md:max-w-full">
            We’ve set on the path to make a gamer’s{" "}
            <br className="block sm:hidden" /> dream come true by offering an{" "}
            advanced <br className="block sm:hidden" /> Social{" "}
            <br className="hidden md:block" /> Gaming Platform catering to both
            web2 <br className="block sm:hidden" /> and web3 users.
          </p>
        </div>

        {/* content */}
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row lg:items-center xl:items-stretch justify-between gap-8 mt-8 lg:mt-14 xl:mt-16 relative">
          <div className="flex flex-col gap-6 xl:gap-10">
            {/* left side cards */}
            <div className="flex items-start gap-7 xl:gap-12 md:relative -right-[86px] z-10">
              {/* rounded element */}
              <div className="rounded-full w-10 h-10 lg:h-9 xl:w-12 xl:h-11 border-2 border-csPrimary bg-csDarkBlue-foreground -mx-1 hidden md:block" />
              {/* card */}
              <div className=" hover:bg-gradient-to-r from-csPrimary to-csDarkBlue rounded-md w-fit lg:w-full h-full flex justify-center items-center cursor-pointer">
                <div className="px-7 py-7 xl:px-9 xl:py-9 2xl:px-12 2xl:py-12 bg-csDarkBlue collective-card rounded-lg flex flex-col gap-2 xl:gap-4">
                  <h3 className="font-barlow font-extrabold text-base sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl uppercase w-fit">
                    Play rewards
                  </h3>
                  <p className="desc-text opacity-70 max-w-[360px] md:max-w-[400px] lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[507px]">
                    Platform with popular streams. Engage with charismatic
                    personalities, witness epic gameplay, and connect with
                    vibrant community.
                  </p>
                  <button className="flex items-center gap-2 w-fit">
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-csPrimary to-csSecondary font-bold desc-text uppercase font-poppins whitespace-nowrap">
                      start playing
                    </p>
                    <FaLongArrowAltRight size={18} color="#cf22f1" />
                  </button>
                </div>
              </div>
            </div>
            {/* right side cards */}
            <div className="flex items-end gap-7 xl:gap-12 md:relative -right-[86px] z-10">
              {/* rounded element */}
              <div className="rounded-full w-10 h-10 lg:h-9 xl:w-12 xl:h-11 border-2 border-csPrimary bg-csDarkBlue-foreground -mx-1 hidden md:block" />
              {/* card */}
              <div className=" hover:bg-gradient-to-r from-csPrimary to-csDarkBlue rounded-md w-fit lg:w-full h-full flex justify-center items-center cursor-pointer">
                <div className="px-7 py-7 xl:px-9 xl:py-9 2xl:px-12 2xl:py-12 bg-csDarkBlue collective-card rounded-lg flex flex-col gap-2 xl:gap-4">
                  <h3 className="font-barlow font-extrabold text-base sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl uppercase w-fit">
                    Strategic support
                  </h3>
                  <p className="desc-text opacity-70 max-w-[360px] md:max-w-[400px] lg:max-w-[350px] xl:max-w-[400px] 2xl:max-w-[507px]">
                    Platform with popular streams. Engage with charismatic
                    personalities, witness epic gameplay, and connect with
                    vibrant community.
                  </p>
                  <button className="flex items-center gap-2 w-fit">
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-csPrimary to-csSecondary font-bold desc-text uppercase font-poppins whitespace-nowrap">
                      start playing
                    </p>
                    <FaLongArrowAltRight size={18} color="#cf22f1" />
                  </button>
                </div>
              </div>
            </div>

            {/* line */}
            {/* line */}
            <div className="hidden md:block absolute">
              <Image
                src={"/assets/images/line.png"}
                alt=""
                width={105}
                height={480}
                className="h-[330px] lg:h-[360px] xl:h-[480px] 2xl:h-[580px]"
              />
            </div>
          </div>

          {/* right side image */}
          <div className="bg-[#11151b] rounded-md border border-slate-700 2xl:ml-[86px] flex items-center justify-center">
            <Image
              src={collectiveImg}
              alt=""
              width={600}
              height={600}
              sizes="(max-width: 1280px) 100vw, 50vw"
              placeholder="blur"
              className="w-[350px] xl:w-[450px] 2xl:w-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collective;
