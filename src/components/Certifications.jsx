/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { certifications } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const Certifications = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="text-[#B3CFE5] text-sm sm:text-base font-semibold uppercase tracking-widest">
        Credentials
      </p>
      <h2 className="text-[#F6FAFD] font-black text-4xl sm:text-5xl mt-2">
        Certifications
      </h2>
    </motion.div>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
      {certifications.map((certification, index) => {
        const isStudying = certification.startsWith("Currently studying:");

        return (
          <motion.div
            key={certification}
            variants={fadeIn("up", "spring", index * 0.05, 0.6)}
            className="rounded-lg border border-[#4A7FA7]/50 bg-[#0A1931]/90 p-5"
          >
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#B3CFE5]/60 bg-[#1A3D63] text-xs font-black text-[#F6FAFD]">
                {isStudying ? "AZ" : index + 1}
              </span>
              <p className="text-sm sm:text-base leading-7 text-[#F6FAFD]">
                {isStudying ? (
                  <>
                    <span className="font-bold text-[#B3CFE5]">Currently studying:</span>{" "}
                    Azure Administrator (AZ-104)
                  </>
                ) : (
                  certification
                )}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </>
);

export default SectionWrapper(Certifications, "certifications");
