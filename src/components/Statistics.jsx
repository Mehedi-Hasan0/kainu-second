import { statisticsData } from "@/data";

const Statistics = () => {
  return (
    <section className="pb-8 sm:pb-10 md:pb-14 lg:pb-16 xl:pb-24 2xl:pb-32">
      <div className="main-container flex flex-col gap-2 lg:gap-3 2xl:gap-4 items-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-berlin uppercase">
          Our <span className="text-csPrimary">Statistics</span>
        </h1>
        <p className="text-xs xl:text-sm font-poppins text-gray-400 text-center sm:max-w-[320px] lg:max-w-[700px]">
          Join our community of friendly, motivated people and start earning
          hundreds of dollars every month by simply completing simple tasks and
          surveys on katanainu
        </p>

        {/* content */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6 lg:mt-8 2xl:mt-12 mx-auto">
          {statisticsData.map((data, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center gap-1 w-full min-w-[280px] sm:min-w-[200px] lg:min-w-[280px] xl:min-w-[350px] rounded-lg py-5 md:py-6 lg:py-8 xl:py-10 bg-csDarkBlue"
            >
              <p className="text-csPrimary text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium">
                {data.num}
              </p>
              <p className="opacity-60">{data.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Statistics;
