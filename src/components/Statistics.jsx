import { statisticsData } from "@/data";
import Image from "next/image";

const Statistics = () => {
  return (
    <section className="pb-8 sm:pb-10 md:pb-14 lg:pb-16 xl:pb-24 2xl:pb-32">
      <div className="main-container flex flex-col gap-2 lg:gap-3 2xl:gap-4 items-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-rubik uppercase">
          More <span className="text-csPrimary">Information</span>
        </h1>
        <p className="text-xs xl:text-sm font-poppins text-gray-400 text-center sm:max-w-[320px] lg:max-w-[700px]">
          Join our community of friendly, motivated people and start earning
          hundreds of dollars every month by simply completing simple tasks and
          surveys on katanainu
        </p>

        {/* content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-6 lg:mt-8 2xl:mt-12 mx-auto">
          {statisticsData.map((data, idx) => (
            <div
              key={idx}
              className="flex flex-row justify-between items-center gap-6 w-full rounded-full px-7 py-2 bg-csDarkBlue"
            >
              <p className="opacity-60">{data.label}</p>
              <div className="bg-csDarkBlue-foreground p-2 rounded-full">
                <Image
                  src={data.icon}
                  alt={data.label}
                  width={34}
                  height={34}
                  className="w-4"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Statistics;
