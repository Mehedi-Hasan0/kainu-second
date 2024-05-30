"use client";

import { bookCards } from "@/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { cardVariant } from "./anim";

const BookappCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      {bookCards.map((card, i) => (
        <motion.div
          variants={cardVariant}
          initial="initial"
          whileInView={"enter"}
          custom={i}
          viewport={{
            once: true,
          }}
          key={card.heading}
          className="p-2 md:p-3 xl:p-4 rounded-lg bg-csDarkBlue flex flex-col gap-1 md:gap-2 justify-center items-center"
        >
          <div className="bg-csDarkBlue-foreground p-2 lg:p-3 2xl:p-4 rounded-lg w-full h-fit">
            <h3 className="text-base md:text-xl xl:text-2xl 2xl:text-3xl font-extrabold text-center uppercase font-barlow">
              {card.heading}{" "}
              <span className="text-csPrimary">{card.label}</span>
            </h3>
          </div>

          <Image
            src={card.img}
            alt={card.heading}
            width={500}
            height={500}
            className="mt-1 md:mt-2"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BookappCards;
