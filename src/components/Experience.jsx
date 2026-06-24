/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { experiences } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

function ExperienceCard({ experience, index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      variants={fadeIn(isLeft ? "right" : "left", "tween", index * 0.12, 0.7)}
      className={`flex w-full ${isLeft ? "justify-start" : "justify-end"} mb-10`}
    >
      <div className="w-full md:w-[48%] rounded-2xl border border-[#4A7FA7]/50 bg-[#0A1931]/90">
        <div className="rounded-2xl p-6 hover:bg-[#1A3D63]/60 transition-colors duration-200">
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-black text-[#F6FAFD] flex-shrink-0 border border-[#B3CFE5]/40"
              style={{ background: experience.iconBg }}
            >
              {experience.icon}
            </div>
            <div>
              <h3 className="text-[#F6FAFD] font-bold text-lg leading-snug">{experience.title}</h3>
              <p className="text-[#B3CFE5] text-sm font-medium">{experience.company_name}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#B3CFE5]" />
            <span className="text-[#B3CFE5] text-sm">{experience.date}</span>
          </div>

          <ul className="space-y-2">
            {experience.points.map((point) => (
              <li key={point} className="text-[#F6FAFD]/85 text-sm leading-relaxed flex gap-2">
                <span className="text-[#B3CFE5] mt-1.5 flex-shrink-0">-</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="text-[#B3CFE5] text-sm sm:text-base font-semibold uppercase tracking-widest">
        What I've Been Building
      </p>
      <h2 className="text-[#F6FAFD] font-black text-4xl sm:text-5xl mt-2">
        Experience
      </h2>
    </motion.div>

    <div className="mt-14 relative">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#1A3D63] -translate-x-1/2" />

      {experiences.map((exp, i) => (
        <div key={`${exp.title}-${exp.company_name}`} className="relative">
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#B3CFE5] border-4 border-black z-10 items-center justify-center top-6" />
          <ExperienceCard experience={exp} index={i} />
        </div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Experience, "work");
