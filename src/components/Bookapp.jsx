import { bookCards } from "@/data";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import BookappCards from "./BookappCards";

export default function Bookapp() {
  return (
    <section className="overflow-hidden">
      <div className="main-container section-padding flex flex-col gap-7 sm:gap-10 md:gap-12 lg:gap-14 2xl:gap-16">
        <div className="flex items-center gap-8 justify-between">
          <h2 className="sub-heading font-berlin uppercase">
            Explore <span className=" text-csPrimary">App</span> &{" "}
            <span className=" text-csPrimary">Services</span>
          </h2>
          {/* btn */}
          <button className="flex items-center gap-2">
            <p className="bg-clip-text text-transparent bg-gradient-to-r from-csPrimary to-csSecondary font-bold text-xs lg:text-lg xl:text-xl uppercase font-poppins whitespace-nowrap">
              app & services
            </p>
            <FaLongArrowAltRight size={18} color="#cf22f1" />
          </button>
        </div>

        {/* cards */}
        <BookappCards />
      </div>
    </section>
  );
}
