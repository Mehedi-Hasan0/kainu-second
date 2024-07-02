"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cardVariant, leftAnimVariant, rightAnimVariant } from "./anim";

const Multichain = () => {
  return (
    <section className="overflow-hidden pb-8 sm:pb-10 md:pb-14 lg:pb-16 xl:pb-24 2xl:pb-32">
      <div className="main-container">
        <div className="flex flex-col gap-2 lg:gap-3 2xl:gap-4 items-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-berlin uppercase">
            Building with <span className="text-csPrimary">multichain</span>{" "}
          </h1>
          <p className="text-xs xl:text-sm font-poppins text-gray-400 text-center sm:max-w-[320px] md:max-w-full">
            We’ve set on the path to make a gamer’s{" "}
            <br className="block sm:hidden" /> dream come true by offering an{" "}
            advanced <br className="block sm:hidden" /> Social{" "}
            <br className="hidden md:block" /> Gaming Platform catering to both
            web2 <br className="block sm:hidden" /> and web3 users.
          </p>
        </div>

        {/* content */}
        <div className="flex flex-col gap-8 md:gap-20 lg:gap-36 items-center justify-center mt-8 lg:mt-14 xl:mt-16 relative">
          {/* 1st element */}
          <motion.div
            variants={rightAnimVariant}
            initial="initial"
            whileInView={"enter"}
            className="flex flex-col md:flex-row items-center gap-2 md:gap-5 md:relative -right-[125px] lg:-right-[176px] xl:-right-[218px] 2xl:-right-[238px] z-10"
          >
            <Image
              src={"/assets/icons/multichain-card-icon-2.png"}
              alt=""
              width={60}
              height={60}
              className="w-12 lg:w-[60px]"
            />

            <span className="text-[10px] md:text-xs 2xl:text-sm text-csPrimary font-rubik">
              STAPE 1
            </span>

            <div className="rounded-full w-10 h-10 lg:w-12 lg:h-12 border-2 border-csPrimary bg-csDarkBlue-foreground -mx-1 hidden md:block" />

            <div className="relative flex justify-center items-center">
              <Image
                src={"/assets/images/text-bg.png"}
                alt=""
                width={600}
                height={600}
                className="w-[390px] h-32 lg:w-[500px] lg:h-[130px] xl:w-[420px] xl:h-[120px] 2xl:w-[480px] 2xl:h-[150px] absolute left-0"
              />

              <div className="relative z-10 px-12 py-8 lg:px-10 xl:px-20">
                <p className="text-sm md:text-sm xl:text-base 2xl:text-lg font-rubik my-2 uppercase font-bold">
                  Rewards system
                </p>
                <p className="text-[10px] md:text-xs 2xl:text-sm text-gray-400">
                  Active gamers on different{" "}
                  <br className="hidden md:block lg:hidden" /> Chains can{" "}
                  <br className="block sm:hidden" />
                  participate{" "}
                  <br className="hidden sm:block md:hidden lg:block" /> into{" "}
                  <br className="hidden md:block lg:hidden" /> web3 events and
                  earn rewards
                </p>
              </div>
            </div>
          </motion.div>
          {/* 2nd element */}
          <motion.div
            variants={leftAnimVariant}
            initial="initial"
            whileInView={"enter"}
            className="flex flex-col md:flex-row-reverse items-center gap-2 md:gap-5 md:relative right-[104px] lg:right-[178px] xl:right-[218px] 2xl:right-[240px] 2xl:-mt-2 z-10"
          >
            <Image
              src={"/assets/icons/multichain-card-icon-1.svg"}
              alt=""
              width={60}
              height={60}
              className="w-12 lg:w-[60px]"
            />

            <span className="text-[10px] md:text-xs 2xl:text-sm text-csPrimary font-rubik mb-8 md:mb-0">
              STAPE 2
            </span>

            <div className="rounded-full w-10 h-10 lg:w-12 lg:h-12 border-2 border-csPrimary bg-csDarkBlue-foreground md:-mx-1 hidden md:block" />

            <div className="relative flex justify-center items-center">
              <Image
                src={"/assets/images/text-bg-2.png"}
                alt=""
                width={600}
                height={600}
                className="w-[390px] h-32 lg:w-[500px] lg:h-[130px] xl:w-[420px] xl:h-[120px] 2xl:w-[480px] 2xl:h-[150px] absolute left-0"
              />

              <div className="relative z-10 px-10 xl:px-20">
                <p className="text-sm md:text-sm xl:text-base 2xl:text-lg font-rubik uppercase my-2 font-bold">
                  Blockchains like
                </p>
                <p className="text-[10px] md:text-xs 2xl:text-sm text-gray-400">
                  Polygon or Avalanche can{" "}
                  <br className="hidden md:block lg:hidden" /> particapte and{" "}
                  <br className="block sm:hidden" />
                  sponsor <br className="hidden sm:block md:hidden lg:block" />{" "}
                  <br className="hidden md:block lg:hidden" /> events or gamers.
                </p>
              </div>
            </div>
          </motion.div>

          {/* line */}
          <div className="hidden md:block absolute">
            <Image
              src={"/assets/images/line-2.svg"}
              alt=""
              width={105}
              height={480}
              className="h-[200px] lg:h-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Multichain;
