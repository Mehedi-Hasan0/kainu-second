import { featuresCard } from "@/data";
import Image from "next/image";
import CustomButton from "../ui/CustomButton";
import { Button } from "../ui/button";

export default function FeaturesCard() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 justify-around w-full mt-12 xl:mt-20">
      {featuresCard.map((card, idx) => (
        <div
          key={card.heading}
          className="flex flex-col gap-2 lg:gap-3 max-w-[600px] p-4 bg-csDarkBlue rounded-md group cursor-pointer"
        >
          <div className="w-full bg-csDarkBlue-foreground border border-csDarkBlue rounded-xl px-7 py-3 flex items-center justify-between gap-5">
            <h2
              className={`text-2xl md:text-3xl xl:text-4xl font-extrabold font-urbanist flex w-fit gap-3 ${
                idx === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {card.heading}{" "}
              <span className="text-csPrimary">{card.coloredHeading}</span>
            </h2>
            {/* star */}
            <div className="rounded-full bg-csDarkBlue p-3">
              <Image
                src={"/assets/images/star.svg"}
                alt=""
                width={32}
                height={32}
                className="group-hover:hidden block all-transition w-7 h-7"
              />
              <Image
                src={"/assets/images/star-fill.svg"}
                alt=""
                width={32}
                height={32}
                className="group-hover:block hidden all-transition w-7 h-7"
              />
            </div>
          </div>
          <Image
            src={card.imgUrl}
            alt={card.heading}
            width={650}
            height={900}
          />

          <div className="flex flex-col gap-3 mt-3 lg:mt-5 md:pl-3 lg:pl-5">
            <p className="text-xs md:text-sm xl:text-base text-gray-400">
              {card.desc}
            </p>
          </div>

          {/* btn */}
          {idx === 0 ? (
            <div className="w-fit mt-2 lg:mt-3 md:ml-3 lg:ml-5">
              <CustomButton
                textLabel="Get started"
                btnBgColor="primary-gradient"
                borderColor="border-none"
                hoverColor1="bg-csDarkBlue"
                hoverColor2="bg-[#FFC947]"
                hoverColor3="secondary-gradient"
              />
            </div>
          ) : idx == 1 ? (
            <div className="primary-gradient rounded-md flex justify-center items-center w-fit h-10 md:h-12 xl:h-14 mt-2 lg:mt-3 md:ml-3 lg:ml-5">
              <Button
                variant="customAnimated"
                className="px-6 sm:py-3 font-medium secondary-btn bg-[#161035]"
              >
                Watch Together
              </Button>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
