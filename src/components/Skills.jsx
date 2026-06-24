/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const BallCanvas = lazy(() => import("./canvas/Ball"));

function TechCard({ tech, index }) {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.08, 0.6)} className="flex flex-col items-center gap-3 group">
      <div className="w-24 h-24 relative">
        <Suspense fallback={<div className="w-full h-full rounded-full bg-[#0A1931] animate-pulse flex items-center justify-center"><div className="canvas-loader" /></div>}>
          <BallCanvas color={tech.color} />
        </Suspense>
      </div>
      <div className="text-center">
        <p className="text-[#F6FAFD] text-sm font-semibold">{tech.name}</p>
        <p className="text-[#B3CFE5] text-xs mt-0.5">{tech.category}</p>
      </div>
    </motion.div>
  );
}

const Skills = () => {
  const categories = [...new Set(technologies.map((t) => t.category))];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[#B3CFE5] text-sm sm:text-base font-semibold uppercase tracking-widest">What I Work With</p>
        <h2 className="text-[#F6FAFD] font-black text-4xl sm:text-5xl mt-2">Skills & Technologies</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-[#B3CFE5] text-lg max-w-3xl leading-relaxed">
        From full-stack .NET applications to Python, Flask, cloud, and database tooling, here are the core technologies in my toolkit.
      </motion.p>

      {categories.map((cat) => (
        <div key={cat} className="mt-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[#B3CFE5] text-sm font-semibold uppercase tracking-widest">{cat}</span>
            <div className="flex-1 h-[1px] bg-[#1A3D63]" />
          </div>
          <div className="flex flex-wrap gap-8 justify-start">
            {technologies.filter((t) => t.category === cat).map((tech, i) => (
              <TechCard key={tech.name} tech={tech} index={i} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SectionWrapper(Skills, "skills");
