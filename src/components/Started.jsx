import { startedData } from "@/data";
import Image from "next/image";

const Started = () => {
  return (
    <section className="bg-[#090329]">
      <div className="main-container section-padding flex flex-col gap-7 md:gap-8 lg:gap-10 xl:gap-12">
        <h2 className="text-center sub-heading uppercase">
          How to get <span className="text-csPrimary">Started?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 sm:gap-8 md:gap-4 lg:gap-6 xl:gap-8">
          {startedData.map((data, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 md:gap-5 lg:gap-6 xl:gap-7"
            >
              <div className="bg-csDarkBlue p-2 lg:p-3 rounded-2xl w-full h-fit sm:w-fit sm:h-fit">
                <div
                  className={`p-2 lg:p-3 rounded-2xl ${
                    idx == 0 || idx === 1 ? "bg-[#090a0c]" : "bg-[#080620] "
                  }`}
                >
                  <Image
                    src={data.img}
                    alt={data.title}
                    width={500}
                    height={300}
                    className="w-full h-[19rem] sm:w-[300px] sm:h-[14rem] md:w-[250px] md:h-[10rem] lg:w-[300px] lg:h-[16rem] xl:w-[400px] xl:h-[300px] 2xl:w-[450px] 2xl:h-[370px]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 lg:gap-2">
                <p className="font-rubik text-csPrimary font-medium mini-text">
                  Step {idx + 1}
                </p>
                <h3 className="font-barlow font-extrabold uppercase text-lg sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl text-csAccent-foreground">
                  {data.title}
                </h3>
                <p className="link-text text-[#d5d5d5]">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Started;
