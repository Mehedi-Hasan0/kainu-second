import Image from "next/image";
import { FaApple, FaGooglePlay } from "react-icons/fa6";

export default function Download() {
  return (
    <section>
      <div className="main-container bg-[#08051f] border border-slate-800 rounded-lg flex flex-col-reverse md:flex-row items-center gap-5 md:gap-6 md:justify-between">
        <div className="flex-1">
          <div className="sm:px-6 sm:pt-7 md:px-9 md:pt-12 xl:px-14 xl:pt-16">
            <h2 className="font-berlin sub-heading uppercase">
              Download our <span className="text-csPrimary">app</span>
            </h2>
            <p className="text-[10px] md:text-xs xl:text-sm 2xl:text-base font-poppins text-gray-400  lg:mt-4 2xl:mt-6">
              Platform with popular streams. Engage with charismatic
              personalities, witness epic gameplay, and connect with a vibrant
              community.
            </p>
          </div>

          {/* download btn */}
          <div className="flex flex-row gap-6 sm:px-6 pb-7 md:px-9 md:pb-12 xl:px-14 xl:pb-16">
            <div className="flex flex-row items-center gap-5 mt-5 lg:mt-7 2xl:mt-9 mx-1">
              <div className="font-poppins flex gap-3 items-center text-white bg-gradient-to-r from-csPrimary to-csSecondary rounded-xl px-4 sm:px-4 py-1 lg:px-3 md:py-3 xl:px-5 xl:py-4 cursor-pointer">
                <FaApple
                  size={48}
                  color="#ffffff"
                  className="w-4 sm:w-7 lg:w-9 xl:w-12"
                />
                <div className="flex flex-col">
                  <p className="text-[10px] sm:text-xs lg:text-sm font-medium leading-tight whitespace-nowrap">
                    Download on the
                  </p>
                  <p className="text-xs sm:text-sm lg:text-lg font-medium whitespace-nowrap">
                    App Store
                  </p>
                </div>
              </div>
              <div className="font-poppins flex gap-3 items-center text-white bg-[#342842] rounded-xl px-4 sm:px-4 py-1 lg:px-3 md:py-3 xl:px-5 xl:py-4 cursor-pointer">
                <FaGooglePlay
                  size={48}
                  color="#ffffff"
                  className="w-4 sm:w-7 lg:w-8 xl:w-10"
                />
                <div className="flex flex-col">
                  <p className="text-[10px] sm:text-xs lg:text-sm font-medium leading-tight whitespace-nowrap">
                    Get it on
                  </p>
                  <p className="text-xs sm:text-sm lg:text-lg font-medium whitespace-nowrap">
                    Google Play
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flex-1 pt-8 md:pt-0">
          <Image
            src={"/assets/images/kainu-logo.png"}
            alt=""
            width={700}
            height={500}
            className="flex items-end h-[70px] sm:h-[80px] md:h-[90px] lg:h-[100px] 2xl:h-[120px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
