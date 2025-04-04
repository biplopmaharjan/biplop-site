import { useEffect, useState } from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../HOC";
import { styles } from "../styles";
import { textVariant } from "../utlis/motion";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";

const Tech = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => setIsSmallScreen(window.innerWidth < 570);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tech I Know</p>
        <h2 className={styles.sectionHeadText}>Techonlogies</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            {isSmallScreen ? (
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-25 h-25 object-contain"
              />
            ) : (
              <BallCanvas icon={technology.icon} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
