import AboutUs from "@public/aboutUs.png";
import { motion } from "framer-motion";

import Image from "next/image";
export function AboutusSection() {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 }
};
const variants2 = {
  hidden: { opacity: 0, x: 200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 }
};
  return (
    <>
      <div className="grid md:grid-cols-2 p-10 md:p-20 max-w-[1980px] lg:px-36">
        <motion.figure
           variants={variants}
           initial="hidden"
           whileInView="enter"
          //  exit="exit"
           transition={{ type: 'linear',duration: .5 }}
        >
          <Image  src={AboutUs} alt="about us section image"/>
        </motion.figure>
        <motion.div
             variants={variants2}
             initial="hidden"
             whileInView="enter"
            //  exit="exit"
             transition={{ type: 'linear',duration: .5 }}
        >
          <div className="mb-2 text-xl font-semibold ">About Us</div>
          <h3 className="mb-6 text-4xl sm:text-5xl leading-loose font-extrabold">
            {" "}
            Altheory technologies & Super{" "}
            <span className="text-primary">Powerful</span>
          </h3>
          <p className="mb-12  text-muted">
            At Altheory, we are dedicated to empowering businesses with
            cutting-edge software solutions tailored to their unique needs. With
            a passion for innovation and a commitment to excellence, we have
            been a trusted partner for organizations of all sizes, helping them
            streamline their operations, boost efficiency, and achieve their
            business goals.
          </p>
          <button className="bg-primary text-white">Read More</button>
        </motion.div>
      </div>
    </>
  );
}
