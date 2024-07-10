"use client";

import { opportunitySecondData } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { cardVariant } from "./anim";

const SecondOpportunity = () => {
  return (
    <section className="pb-8 sm:pb-10 md:pb-14 lg:pb-16 xl:pb-24 2xl:pb-32">
      <div className="main-container flex flex-col gap-7 md:gap-8 lg:gap-10 xl:gap-12 bg-csDarkBlue py-8 sm:py-10 md:py-12 lg:px-16 lg:py-16 2xl:rounded-3xl">
        <div className="flex flex-col md:flex-row items-end gap-7 md:gap-8 lg:gap-10 xl:gap-12 justify-evenly">
          <div className="bg-[#ce22f10e] py-8">
            <div className="flex flex-col items-center">
              <h2 className="text-center font-rubik sub-heading uppercase xl:leading-tight font-bold">
                The super <span className="text-csPrimary">gaming...</span>
              </h2>
              <h4 className="uppercase font-bold">
                Platform earning by{" "}
                <span className="text-csPrimary">kainu</span>
              </h4>

              <div className="bg-csPrimary w-full h-[2px] my-4" />
            </div>
            <p className="text-xs xl:text-sm font-poppins text-gray-400 text-start sm:max-w-[320px] md:max-w-[500px] lg:max-w-[700px] mx-auto mt-4 px-8">
              We’ve set on the path to make gamer dream come true by offering an
              advanced Social Media Gaming Platform catering to both web2 and
              web3 users. Kainu Platform is a dream.
            </p>
          </div>
          <div className="">
            <motion.div
              variants={cardVariant}
              custom={1}
              initial="initial"
              whileInView={"enter"}
              className="flex flex-col items-center gap-3 md:gap-2 xl:gap-3 bg-csDarkBlue-foreground px-10 py-8 sm:px-12 sm:py-10 lg:px-2 lg:py-6 xl:px-6 xl:py-8 rounded-2xl lg:rounded-3xl md:max-w-[370px]"
            >
              <Image
                src={opportunitySecondData[3].icon}
                alt={opportunitySecondData[3].label}
                width={100}
                height={100}
                className="h-10 lg:h-7 xl:h-8 2xl:h-10 object-contain"
              />
              <h3 className="font-rubik font-medium text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl uppercase">
                {opportunitySecondData[3].label}
              </h3>
              <p className="text-[10px] lg:text-xs xl:text-sm 2xl:text-base opacity-70 text-center">
                {opportunitySecondData[3].desc}
              </p>
            </motion.div>
          </div>
        </div>
        {/* data card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-5 lg:gap-4 2xl:gap-8 items-center justify-evenly 2xl:mx-12 mx-auto">
          {opportunitySecondData.map((data, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              custom={idx}
              initial="initial"
              whileInView={"enter"}
              className="flex flex-col items-center gap-3 md:gap-2 xl:gap-3 bg-csDarkBlue-foreground px-10 py-8 sm:px-12 sm:py-10 lg:px-2 lg:py-6 xl:px-6 xl:py-8 rounded-2xl lg:rounded-3xl md:max-w-[370px]"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SecondOpportunity;
