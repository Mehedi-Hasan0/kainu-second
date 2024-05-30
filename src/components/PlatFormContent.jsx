"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Example = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["98%", "-3%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <Image
      src={card.url}
      alt=""
      width={450}
      height={250}
      sizes="(max-width: 1280px) 100vw, 50vw"
    />
  );
};

export default Example;

const cards = [
  {
    url: "/assets/images/platform/pl-1.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/assets/images/platform/pl-2.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/assets/images/platform/pl-3.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/assets/images/platform/pl-4.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/assets/images/platform/pl-5.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/assets/images/platform/pl-6.png",
    title: "Title 6",
    id: 6,
  },
];
