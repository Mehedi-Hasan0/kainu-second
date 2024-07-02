"use client";

import Image from "next/image";
import CustomButton from "./ui/CustomButton";
import aiGirl from "../../public/assets/images/ai-girl.png";
import { motion } from "framer-motion";
import { bottomAnimVariant, leftAnimVariant } from "./anim";

const SuperCharged = () => {
  return (
    <section className="bg-[#0d082e] relative overflow-x-hidden overflow-y-hidden">
      {/* elements */}
      <div className="absolute -top-28 -left-16 lg:-top-32 lg:-left-28 w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] rounded-full bg-[#231b59] blur-3xl" />
      <div className="absolute -bottom-10 -left-16 lg:-bottom-20 lg:-left-16 w-[160px] h-[160px] lg:w-[200px] lg:h-[200px] rounded-full bg-[#231b59] blur-3xl" />
      <div className="absolute bottom-52 -right-20 lg:bottom-56 lg:-right-32 w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full bg-[#231b59]  hidden md:block blur-3xl" />
      <div className="main-container section-padding flex flex-col md:flex-row items-center justify-around gap-8 md:gap-10 lg:gap-12 relative z-10">
        {/* left content */}
        <motion.div
          variants={leftAnimVariant}
          initial="initial"
          whileInView={"enter"}
          // viewport={{
          //   once: true
          // }}
          className="flex flex-col gap-1 lg:gap-2"
        >
          <p className="font-rubik text-csPrimary font-medium mini-text uppercase 2xl:tracking-[0.2em]">
            ai is the key to success
          </p>
          <h3 className="font-barlow font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-csAccent-foreground -mt-1">
            We will implement <br /> AI System To Find Matches
          </h3>
          <p className="font-rubik font-medium text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-[#d5d5d5] uppercase py-1 xl:py-2 ">
            Friends, <span className="text-csPrimary">Tournaments</span> and
            more.
          </p>
          <p className="text-[10px] lg:text-xs xl:text-sm 2xl:text-base text-[#d5d5d5]/80 sm:max-w-[400px] md:max-w-[310px] lg:max-w-full">
            We’ve set on the path to make gamer dream come true by offering{" "}
            <br className="hidden lg:block" />
            an advanced Social Media Gaming Platform catering to both web2{" "}
            <br className="hidden lg:block" />
            and web3 users. Kainu Platform is a dream.
          </p>
          {/* btn */}
          <div className="w-fit mt-3 md:mt-4 lg:mt-5 xl:mt-8">
            <CustomButton
              textLabel="Get started"
              btnBgColor="primary-gradient"
              borderColor="border-none"
              hoverColor1="bg-csDarkBlue"
              hoverColor2="bg-[#FFC947]"
              hoverColor3="secondary-gradient"
            />
          </div>
        </motion.div>
        {/* right content */}
        <motion.div
          variants={bottomAnimVariant}
          initial="initial"
          whileInView={"enter"}
          // viewport={{
          //   once: true
          // }}
          className="relative left-5 sm:left-0"
        >
          <Image
            src={aiGirl}
            alt="Ai girl avatar for web 2 and web 3"
            width={500}
            height={500}
            sizes="(max-width: 1280px) 100vw, 50vw"
            placeholder="blur"
            className="w-[270px] h-[270px] md:w-[240px] md:h-[240px] lg:w-[350px] lg:h-[350px] xl:w-[420px] xl:h-[420px] 2xl:w-[500px] 2xl:h-[500px]"
          />
          <div className="primary-gradient -skew-x-[6deg] rounded-md flex flex-col items-center w-fit px-5 py-3 lg:px-7 lg:py-4 xl:px-9 xl:py-5 absolute bottom-10 -left-10 lg:-left-16 lg:bottom-20">
            <p className="capitalize desc-text font-rubik font-semibold">
              Make your ai
            </p>
            <h3 className="font-barlow font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-csAccent-foreground -mt-1">
              550K
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuperCharged;
