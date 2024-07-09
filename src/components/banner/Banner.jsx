import BannerLogo from "./BannerLogo";
import BannerTitle from "./BannerTitle";

const Banner = () => {
  return (
    <section className="banner-section flex items-end justify-center banner-section pb-6 lg:pb-8 xl:pb-12 2xl:pb-16 overflow-x-hidden relative">
      <div className="main-container flex flex-col gap-16 md:gap-20 lg:gap-32 xl:gap-36 2xl:gap-48 justify-between pt-[110px] sm:pt-32 md:pt-36 lg:pt-48 xl:pt-44 2xl:pt-52 relative">
        {/* title content */}
        <BannerTitle />
        {/* banner logo */}
        <BannerLogo />
      </div>
    </section>
  );
};

export default Banner;
