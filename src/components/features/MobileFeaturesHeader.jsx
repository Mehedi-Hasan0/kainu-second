"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { featuresBtn } from "@/data";
import CustomButton from "../ui/CustomButton";
import { IoIosArrowForward } from "react-icons/io";

const MobileFeaturesHeader = ({ handleActiveMenuIdx }) => {
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const [slides, setSlides] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
      ? 2
      : typeof window !== "undefined" && window.innerWidth < 1280
      ? 3
      : 4
  );
  const swiperRef = useRef(null);

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      SwiperModule.default.use([Navigation]);
      setSwiperLoaded(true);
    });

    function resizeCheck() {
      setSlides(
        typeof window !== "undefined" && window.innerWidth < 768
          ? 2
          : typeof window !== "undefined" && window.innerWidth < 1280
          ? 3
          : 4
      );
    }

    window.addEventListener("resize", resizeCheck);

    return () => {
      window.removeEventListener("resize", resizeCheck);
    };
  }, []);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  if (!swiperLoaded) {
    return <p className="text-white">loading</p>; // loading state
  }

  return (
    <div className="relative flex justify-center">
      {/* Swiper carousel custom button */}
      <div className="absolute w-full h-full flex justify-between items-center gap-5 text-white">
        {/* previous button */}
        <div
          onClick={handlePrev}
          className="w-8 h-8 flex justify-center items-center -ml-8 cursor-pointer"
        >
          <IoIosArrowForward className="text-blue-500 w-7 h-7 rotate-180" />
        </div>
        {/* next button */}
        <div
          onClick={handleNext}
          className="w-8 h-8 flex justify-center items-center -mr-8 cursor-pointer"
        >
          <IoIosArrowForward className="text-blue-500 w-7 h-7" />
        </div>
      </div>
      <Swiper
        ref={swiperRef}
        slidesPerView={slides}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Navigation]}
        initialSlide={1}
        className="mySwiper flex justify-center items-center"
      >
        {featuresBtn.map((btn, idx) => (
          <SwiperSlide key={btn.label} className="">
            <CustomButton
              onClick={() => handleActiveMenuIdx(idx)}
              textLabel={btn.label}
              btnBgColor="bg-none"
              borderColor="border-none"
              hoverColor1=""
              hoverColor2=""
              hoverColor3=""
              extraStyle=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileFeaturesHeader;
