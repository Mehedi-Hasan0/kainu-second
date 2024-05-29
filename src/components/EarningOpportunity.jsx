import { opportunityData } from "@/data";
import Image from "next/image";

const EarningOpportunity = () => {
  return (
    <section className="pb-8 sm:pb-10 md:pb-14 lg:pb-16 xl:pb-24 2xl:pb-32">
      <div className="main-container flex flex-col gap-7 md:gap-8 lg:gap-10 xl:gap-12 bg-csDarkBlue py-8 sm:py-10 md:py-12 lg:px-16 lg:py-16 2xl:rounded-3xl">
        <h2 className="text-center sub-heading uppercase xl:leading-tight">
          Earning Opportunities <br /> with{" "}
          <span className="text-csPrimary">kainu</span>
        </h2>
        {/* data card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-5 lg:gap-4 2xl:gap-8 items-center justify-evenly 2xl:mx-12 mx-auto">
          {opportunityData.map((data, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 md:gap-2 xl:gap-3 bg-csDarkBlue-foreground px-10 py-8 sm:px-12 sm:py-10 lg:px-2 lg:py-6 xl:px-6 xl:py-8 rounded-2xl md:max-w-[370px]"
            >
              <Image
                src={data.icon}
                alt={data.label}
                width={100}
                height={100}
                className="h-10 lg:h-7 xl:h-8 2xl:h-10 object-contain"
              />
              <h3 className="font-rubik font-medium text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl uppercase">
                {data.label}
              </h3>
              <p className="text-[10px] lg:text-xs xl:text-sm 2xl:text-base opacity-70 text-center">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarningOpportunity;
