"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { featuresBtn } from "@/data";
import CustomButton from "../ui/CustomButton";

const MobileFeaturesHeader = () => {
  const [swiperLoaded, setSwiperLoaded] = useState(false);
  const [slides, setSlides] = useState(
    typeof window !== "undefined" && window.innerWidth < 768 ? 2 : 3
  );

  useEffect(() => {
    import("swiper").then((SwiperModule) => {
      SwiperModule.default.use([Navigation]);
      setSwiperLoaded(true);
    });

    function resizeCheck() {
      setSlides(
        typeof window !== "undefined" && window.innerWidth < 768 ? 2 : 3
      );
    }

    window.addEventListener("resize", resizeCheck);

    return () => {
      window.removeEventListener("resize", resizeCheck);
    };
  }, []);

  if (!swiperLoaded) {
    return <p className="text-white">loading</p>; // loading state
  }

  return (
    <div>
      <Swiper
        slidesPerView={slides}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        initialSlide={1}
        className="mySwiper flex justify-center items-center"
      >
        {featuresBtn.map((btn) => (
          <SwiperSlide key={btn.label} className="">
            <CustomButton
              textLabel={btn.label}
              btnBgColor="bg-[#1d1a33]"
              borderColor="border-none"
              hoverColor3="primary-gradient"
              extraStyle="rounded-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileFeaturesHeader;
