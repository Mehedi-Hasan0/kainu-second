import CustomButton from "../ui/CustomButton";
import { Button } from "../ui/button";

const BannerTitle = () => {
  return (
    <div className="flex flex-col items-center gap-1 xl:gap-3">
      <div className="relative flex justify-center items-center px-5 py-2 border border-dashed border-csPrimary border-opacity-60 w-fit mb-2 xl:mb-4">
        {/* elements */}
        <div className="w-[6px] h-[6px] bg-csPrimary absolute -top-[6px] -left-[6px]" />
        <div className="w-[6px] h-[6px] bg-csPrimary absolute -top-[6px] -right-[6px]" />
        <div className="w-[6px] h-[6px] bg-csPrimary absolute -bottom-[6px] -left-[6px]" />
        <div className="w-[6px] h-[6px] bg-csPrimary absolute -bottom-[6px] -right-[6px]" />
        {/* bg element */}
        <div className=" primary-gradient opacity-30 absolute w-full h-full" />
        <p className="font-archivo uppercase tracking-wider title-heading relative z-10">
          Kainu a great social
        </p>
      </div>
      {/* heading */}
      <h1 className="heading uppercase text-center 2xl:leading-[0.8]">
        <span>media gaming platform for</span> <br />{" "}
        <span className="heading-variant-2">web2 and with rewards & more</span>
      </h1>
      {/* sub title */}
      <p className="font-barlow font-semibold title-heading text-[#d5d5d5]">
        A world for Gamers, streamers, eSports and for Games under one
        plattform.
      </p>

      {/* cta btn */}
      <div className="flex items-stretch gap-4 mt-6 md:mt-8 xl:mt-9">
        <div>
          <CustomButton
            textLabel="Get started"
            btnBgColor="primary-gradient"
            borderColor="border-none"
            hoverColor1="bg-csDarkBlue"
            hoverColor2="bg-[#FFC947]"
            hoverColor3="secondary-gradient"
          />
        </div>
        <div className="primary-gradient rounded-md flex justify-center items-center">
          <Button
            variant="customAnimated"
            className="px-6 sm:py-3 font-medium secondary-btn"
          >
            Watch Together
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BannerTitle;
