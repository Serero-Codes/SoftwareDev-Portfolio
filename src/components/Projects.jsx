/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
        <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }} transition={{ type: "spring", stiffness: 300, damping: 30 }} className="max-w-lg w-full bg-[#0A1931] border border-[#4A7FA7]/60 rounded-2xl p-8" onClick={(e) => e.stopPropagation()}>
          <div className="w-full h-40 rounded-xl mb-6 flex items-center justify-center border border-[#4A7FA7]/50" style={{ backgroundColor: project.previewColor }}>
            <span className="text-4xl font-black text-[#F6FAFD]">DEV</span>
          </div>
          <h3 className="text-[#F6FAFD] font-bold text-2xl mb-3">{project.name}</h3>
          <p className="text-[#B3CFE5] text-base leading-relaxed mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag.name} className={`text-xs font-medium px-3 py-1 rounded-full bg-[#1A3D63] border border-[#4A7FA7]/50 ${tag.color}`}>#{tag.name}</span>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={project.live_demo_link || project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 rounded-xl bg-[#4A7FA7] text-[#F6FAFD] text-sm font-semibold hover:bg-[#1A3D63] transition-colors"
            >
              {project.live_demo_link ? "View Application" : "View Source Code"}
            </a>
            {project.live_demo_link && (
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 rounded-xl border border-[#B3CFE5]/50 text-[#B3CFE5] text-sm hover:bg-[#1A3D63] transition-colors"
              >
                View Source Code
              </a>
            )}
            <button onClick={onClose} className="px-5 py-3 rounded-xl border border-[#B3CFE5]/50 text-[#B3CFE5] text-sm hover:bg-[#1A3D63] transition-colors">
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.12, 0.75)} className="cursor-pointer group" onClick={() => onClick(project)}>
      <div className="rounded-2xl border border-[#4A7FA7]/50 bg-[#0A1931]/90 p-7 h-full flex flex-col gap-4 hover:bg-[#1A3D63]/70 transition-colors">
        <div className="w-full h-36 rounded-xl flex items-center justify-center border border-[#4A7FA7]/40 group-hover:scale-[1.02] transition-transform duration-300" style={{ backgroundColor: project.previewColor }}>
          <span className="text-4xl font-black text-[#F6FAFD]">DEV</span>
        </div>
        <div>
          <h3 className="text-[#F6FAFD] font-bold text-xl leading-snug group-hover:text-[#B3CFE5] transition-colors">{project.name}</h3>
          <p className="text-[#B3CFE5] text-sm mt-2 leading-relaxed line-clamp-3">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.tags.map((tag) => (
            <span key={tag.name} className={`text-xs ${tag.color}`}>#{tag.name}</span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-[#4A7FA7]/40">
          <span className="text-[#B3CFE5] text-xs font-semibold group-hover:text-[#F6FAFD] transition-colors">View Details</span>
          <a href={project.source_code_link} target="_blank" rel="https://github.com/Serero-Codes/Smart-Cv-Builder" onClick={(e) => e.stopPropagation()} aria-label="GitHub" className="text-[#B3CFE5] hover:text-[#F6FAFD] transition-colors text-sm">
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[#B3CFE5] text-sm sm:text-base font-semibold uppercase tracking-widest">What I've Built</p>
        <h2 className="text-[#F6FAFD] font-black text-4xl sm:text-5xl mt-2">Projects</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-[#B3CFE5] text-lg max-w-3xl leading-relaxed">
        A selection of projects that showcase my ability to design, build, and ship real software.
      </motion.p>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} onClick={setSelectedProject} />
        ))}
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
};

export default SectionWrapper(Projects, "projects");
