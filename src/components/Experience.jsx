import { motion } from "framer-motion";
import { experiences } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

function ExperienceCard({ experience, index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      variants={fadeIn(isLeft ? "right" : "left", "tween", index * 0.2, 0.8)}
      className={`flex w-full ${isLeft ? "justify-start" : "justify-end"} mb-10`}
    >
      <div className="w-full md:w-[45%] p-[1px] rounded-2xl bg-gradient-to-br from-[#915eff]/50 via-[#00d4ff]/20 to-transparent">
        <div className="bg-[#1a1f35] rounded-2xl p-6 hover:bg-[#1e2440] transition-colors duration-200">
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: experience.iconBg }}
            >
              {experience.icon}
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-snug">{experience.title}</h3>
              <p className="text-[#915eff] text-sm font-medium">{experience.company_name}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#00d4ff]" />
            <span className="text-[#aaa6c3] text-sm">{experience.date}</span>
          </div>

          <ul className="space-y-2">
            {experience.points.map((point, i) => (
              <li key={i} className="text-[#aaa6c3] text-sm leading-relaxed flex gap-2">
                <span className="text-[#915eff] mt-1.5 flex-shrink-0">▸</span>
                {point}
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
      <p className="text-[#915eff] text-sm sm:text-base font-semibold uppercase tracking-widest">
        What I've Been Building
      </p>
      <h2 className="text-white font-black text-4xl sm:text-5xl mt-2">
        Experience
      </h2>
    </motion.div>

    {/* Timeline */}
    <div className="mt-14 relative">
      {/* Center line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#915eff] via-[#00d4ff]/40 to-transparent -translate-x-1/2" />

      {experiences.map((exp, i) => (
        <div key={exp.title} className="relative">
          {/* Timeline dot */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#915eff] border-4 border-[#050816] z-10 items-center justify-center top-6" />
          <ExperienceCard experience={exp} index={i} />
        </div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Experience, "work");
