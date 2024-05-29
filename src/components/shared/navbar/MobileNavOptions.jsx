import { navLinks } from "@/constant";
import { motion } from "framer-motion";
import Link from "next/link";
import { perspectice1, perspectice2 } from "./anim";
import CustomButton from "@/components/ui/CustomButton";
import { button } from "@/data";

const MobileNavOptions = () => {
  return (
    <div className="text-white font-medium text-xl px-6 pt-14 pb-8 bg-black rounded-2xl">
      {navLinks.map((link, i) => {
        return (
          <div key={i} className="mobile-link-container">
            <motion.div
              className="py-1.5"
              custom={i}
              variants={perspectice1}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              <Link href={link.link}>{link.label}</Link>
            </motion.div>
          </div>
        );
      })}

      <div className="flex flex-wrap gap-2 pt-5 sm:hidden">
        {button.map((btn, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={perspectice2}
            animate="enter"
            exit="exit"
            initial="initial"
          >
            {/* button variant 1 */}
            <CustomButton
              key={i}
              textLabel={btn.textLabel}
              btnBgColor={btn.btnBgColor}
              borderColor={btn.borderColor}
              hoverColor1={btn.hoverColor1}
              hoverColor2={btn.hoverColor2}
              hoverColor3={btn.hoverColor3}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MobileNavOptions;
