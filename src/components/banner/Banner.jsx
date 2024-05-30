import Image from "next/image";
import BannerLogo from "./BannerLogo";
import BannerTitle from "./BannerTitle";
import jelly from "../../../public/assets/images/banner/jelly.webp";

const Banner = () => {
  return (
    <section className="bg-[url('/assets/images/banner/banner-bg-op.png')] bg-no-repeat bg-cover bg-center flex items-end justify-center banner-section pb-6 lg:pb-8 xl:pb-12 2xl:pb-16 overflow-x-hidden">
      <div className="main-container flex flex-col gap-16 md:gap-20 lg:gap-32 xl:gap-36 2xl:gap-48 justify-between pt-[110px] sm:pt-32 md:pt-36 lg:pt-48 xl:pt-44 2xl:pt-52 relative">
        {/* elements */}
        <div className="absolute top-28 -right-12 sm:top-24 sm:-right-20 md:top-20 md:-right-[110px] lg:top-24 lg:-right-[170px] xl:top-16 xl:-right-[225px] 2xl:top-16 2xl:-right-[300px]">
          <Image
            src={jelly}
            alt=""
            width={600}
            height={600}
            sizes="(max-width: 1280px) 100vw, 50vw"
            placeholder="blur"
            className="w-36 sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] 2xl:w-[600px]"
          />
        </div>
        <div className="absolute top-28 -left-16 sm:top-24 sm:-left-32 md:top-28 md:-left-28 lg:top-24 lg:-left-[190px] xl:top-20 xl:-left-[225px] 2xl:top-10 2xl:-left-[450px]">
          <Image
            src={"/assets/images/banner/rocket.webp"}
            alt=""
            width={600}
            height={600}
            className="w-36 sm:w-[170px] md:w-[200px] lg:w-[270px] xl:w-[330px] 2xl:w-[470px]"
          />
        </div>
        {/* title content */}
        <BannerTitle />
        {/* banner logo */}
        <BannerLogo />
      </div>
    </section>
  );
};

export default Banner;
