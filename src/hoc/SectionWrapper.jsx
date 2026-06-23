import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => {
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-0 mx-auto max-w-7xl px-6 sm:px-16 py-10 sm:py-16"
      >
        <span className="hash-span" id={idName}>&nbsp;</span>
        <Component />
      </motion.section>
    );
  }

  return HOC;
};

export default SectionWrapper;
