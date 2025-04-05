import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../HOC";
import { fadeIn, textVariant } from "../utlis/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className="sm:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        whileHover={{ scale: 1.15 }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
       I'm a Multimedia Generalist with a passion for building creative and impactful digital experiences.
       I dive into a wide range of media, combining creativity and technical skills to bring ideas to life.
       My journey spans across video editing, web design, graphic design, 3D modeling, and sketching 
       giving me a versatile edge in multimedia production.{" "}
      </motion.p>

      <div className="mt-20 flex flex-row flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
