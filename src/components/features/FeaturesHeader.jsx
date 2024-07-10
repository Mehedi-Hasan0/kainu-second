import { featuresBtn } from "@/data";
import CustomButton from "../ui/CustomButton";
import MobileFeaturesHeader from "./MobileFeaturesHeader";

export default function FeaturesHeader() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="sub-heading font-barlow font-extrabold uppercase">
        Features of the <span className="text-csPrimary">gaming</span> Platfrom
      </h1>
      <p className="text-xs xl:text-sm 2xl:text-base font-poppins text-gray-400 w-[300px] sm:w-[400px] md:w-[510px] 2xl:w-[750px] text-center">
        We’ve set on the path to make a gamer’s dream come true by offering an
        advanced Social Gaming Platform catering to both web2 and web3 users.
      </p>

      {/* btn */}
      <div className="flex flex-col gap-2 mt-6 md:mt-8 lg:mt-10">
        {/* devider */}
        <div className="bg-gradient-to-r from-transparent via-lightBlue to-transparent min-w-[900px] h-[2px]" />
        {/* content btn */}
        <div className="lg:flex items-center gap-3 py-2 ml-40 lg:w-fit lg:mx-auto overflow-x-auto hide-scroll-container hidden">
          {featuresBtn.map((btn) => (
            <div key={btn.label}>
              <CustomButton
                textLabel={btn.label}
                btnBgColor="bg-[#1d1a33]"
                borderColor="border-none"
                hoverColor3="primary-gradient"
                extraStyle="rounded-full"
              />
            </div>
          ))}
        </div>

        {/* for mobile */}
        <div className="block lg:hidden max-w-[300px] sm:max-w-[500px] md:max-w-screen-sm mx-auto">
          <MobileFeaturesHeader />
        </div>
        {/* devider */}
        <div className="bg-gradient-to-r from-transparent via-lightBlue to-transparent min-w-[900px] h-[2px]" />
      </div>
    </div>
  );
}
