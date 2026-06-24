/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

function ServiceCard({ title, icon, index }) {
  return (
    <motion.div variants={fadeIn("right", "spring", 0.2 * index, 0.75)} className="w-full sm:w-[250px]">
      <div className="w-full rounded-lg border border-[#4A7FA7]/60 bg-[#0A1931]/90 p-7 flex flex-col items-center gap-4 h-full group hover:bg-[#1A3D63]/70 transition-colors duration-200">
        <div className="text-sm font-black text-[#F6FAFD] border border-[#B3CFE5]/60 rounded-full h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
          {icon}
        </div>
        <h3 className="text-[#F6FAFD] text-base font-bold text-center leading-snug">{title}</h3>
      </div>
    </motion.div>
  );
}

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="text-[#B3CFE5] text-sm sm:text-base font-semibold uppercase tracking-widest">Introduction</p>
      <h2 className="text-[#F6FAFD] font-black text-4xl sm:text-5xl mt-2">About Me</h2>
    </motion.div>

    <div className="mt-10 flex flex-col lg:flex-row gap-10 items-start">
      <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="flex-1">
        <p className="text-[#B3CFE5] text-base sm:text-lg leading-8 mb-5">
          I'm <span className="text-[#F6FAFD] font-semibold">Serero Mokwena</span>, a junior Software & Cloud Engineer
           based in <span className="text-[#F6FAFD]">Johannesburg, South Africa</span>.
        </p>
        <p className="text-[#B3CFE5] text-base sm:text-lg leading-8 mb-5">
          I specialize in full-stack software and cloud infrastructure development with <span className="text-[#F6FAFD] font-semibold">C#, ASP.NET MVC, python, Js, Azure</span>,
          and <span className="text-[#F6FAFD] font-semibold">Aws</span>. I build dynamic web applications, desktop software,
          and cloud solutions.
        </p>
        <p className="text-[#B3CFE5] text-base sm:text-lg leading-8">
          My skills are a practical way for me to solve real business problems and build intelligent systems that people can use.
        </p>
      </motion.div>

      <motion.div variants={fadeIn("left", "tween", 0.4, 1)} className="lg:w-72 space-y-4">
        {[
          { label: "Location", value: "Johannesburg, SA" },
          { label: "Degree", value: "IT Software Development" },
          { label: "University", value: "Nelson Mandela University" },
          { label: "Focus", value: "Software,AI Cloud Engineering" },
          { label: "Email", value: "sereroemmanuel4@gmail.com" },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-1 p-4 rounded-lg bg-[#0A1931]/90 border border-[#4A7FA7]/50">
            <span className="text-[#B3CFE5] text-xs uppercase tracking-widest font-semibold">{label}</span>
            <span className="text-[#F6FAFD] text-sm">{value}</span>
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
