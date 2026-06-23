import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

function ServiceCard({ title, icon, index }) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full sm:w-[250px]"
    >
      <div className="w-full p-[1px] rounded-[20px] bg-gradient-to-br from-[#915eff] via-[#00d4ff]/30 to-transparent shadow-xl shadow-purple-900/20 hover:shadow-purple-700/40 transition-shadow duration-300">
        <div className="bg-[#1a1f35] rounded-[20px] p-7 flex flex-col items-center gap-4 h-full group hover:bg-[#1e2440] transition-colors duration-200">
          <div className="text-4xl group-hover:scale-110 transition-transform duration-200">
            {icon}
          </div>
          <h3 className="text-white text-base font-bold text-center leading-snug">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="text-[#915eff] text-sm sm:text-base font-semibold uppercase tracking-widest">
        Introduction
      </p>
      <h2 className="text-white font-black text-4xl sm:text-5xl mt-2">
        About Me
      </h2>
    </motion.div>

    <div className="mt-10 flex flex-col lg:flex-row gap-10 items-start">
      <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="flex-1">
        <p className="text-[#aaa6c3] text-base sm:text-lg leading-8 mb-5">
          I'm <span className="text-white font-semibold">Serero Mokwena</span>, a Final Year IT Software Development student
          at Nelson Mandela University, based in{" "}
          <span className="text-[#915eff]">Nelson Mandela Bay, South Africa</span>.
        </p>
        <p className="text-[#aaa6c3] text-base sm:text-lg leading-8 mb-5">
          I specialize in full-stack development with <span className="text-white font-semibold">C#, .NET Core, ASP.NET MVC</span>,
          and <span className="text-white font-semibold">Python</span>. I build dynamic web applications, desktop software,
          and mobile solutions — and I'm currently deepening my expertise in{" "}
          <span className="text-[#00d4ff] font-semibold">AI engineering and machine learning</span>.
        </p>
        <p className="text-[#aaa6c3] text-base sm:text-lg leading-8">
          Software development is more than a course for me — it's a powerful tool to bring innovative solutions to
          real-world business problems. I'm excited to apply my skills to make a meaningful impact at the intersection
          of software and intelligence.
        </p>
      </motion.div>

      {/* Quick facts */}
      <motion.div
        variants={fadeIn("left", "tween", 0.4, 1)}
        className="lg:w-72 space-y-4"
      >
        {[
          { label: "Location", value: "Nelson Mandela Bay, SA" },
          { label: "Degree", value: "IT Software Development" },
          { label: "University", value: "Nelson Mandela University" },
          { label: "Focus", value: "Software & AI Engineering" },
          { label: "Email", value: "sereroemmanuel4@gmail.com" },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-1 p-4 rounded-xl bg-[#1a1f35] border border-white/5">
            <span className="text-[#915eff] text-xs uppercase tracking-widest font-semibold">{label}</span>
            <span className="text-white text-sm">{value}</span>
          </div>
        ))}
      </motion.div>
    </div>

    <div className="mt-16 flex flex-wrap gap-6 justify-center">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");
