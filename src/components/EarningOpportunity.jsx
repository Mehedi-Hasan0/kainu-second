"use client";

import { opportunityData } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { cardVariant } from "./anim";

const EarningOpportunity = () => {
  return (
    <section className="pb-8 sm:pb-10 md:pb-14 lg:pb-16 xl:pb-24 2xl:pb-32">
      <div className="main-container flex flex-col gap-7 md:gap-8 lg:gap-10 xl:gap-12 bg-[#161035] py-8 sm:py-10 md:py-12 lg:px-16 lg:py-16 2xl:rounded-3xl">
        <h2 className="text-center sub-heading uppercase xl:leading-tight">
          Utility of the <span className="text-csPrimary">token...</span>
        </h2>
        {/* data card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-5 lg:gap-4 2xl:gap-8 justify-evenly 2xl:mx-24 mx-auto">
          {opportunityData.map((data, idx) => (
            <motion.div
              key={idx}
              variants={cardVariant}
              custom={idx}
              initial="initial"
              whileInView={"enter"}
              className="flex flex-col items-center gap-3 md:gap-2 xl:gap-3 bg-[#0c062c] px-10 py-8 sm:px-12 sm:py-10 lg:px-2 lg:py-6 xl:px-6 xl:py-8 md:max-w-[370px] relative earning-card overflow-hidden"
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
              <p className="text-[10px] lg:text-xs 2xl:text-sm opacity-70 text-center">
                {data.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarningOpportunity;
