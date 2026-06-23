import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="max-w-lg w-full bg-[#1a1f35] border border-white/10 rounded-2xl p-8 shadow-2xl shadow-purple-900/40"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gradient header */}
          <div className={`w-full h-40 rounded-xl bg-gradient-to-br ${project.gradient} mb-6 flex items-center justify-center`}>
            <span className="text-6xl">🚀</span>
          </div>

          <h3 className="text-white font-bold text-2xl mb-3">{project.name}</h3>
          <p className="text-[#aaa6c3] text-base leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag.name} className={`text-xs font-medium px-3 py-1 rounded-full bg-white/10 ${tag.color}`}>
                #{tag.name}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 rounded-xl bg-[#915eff] text-white text-sm font-semibold hover:bg-[#7a4de6] transition-colors"
            >
              View Source Code
            </a>
            {project.live_demo_link && (
              <a
                href={project.live_demo_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-3 rounded-xl border border-[#00d4ff]/50 text-[#00d4ff] text-sm font-semibold hover:bg-[#00d4ff]/10 transition-colors"
              >
                Live Demo
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl border border-white/20 text-white/70 text-sm hover:bg-white/5 transition-colors"
            >
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
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="cursor-pointer group"
      onClick={() => onClick(project)}
    >
      <div className="p-[1px] rounded-2xl bg-gradient-to-br from-[#915eff]/40 via-[#00d4ff]/20 to-transparent hover:from-[#915eff] hover:via-[#00d4ff]/40 transition-all duration-300">
        <div className="bg-[#1a1f35] rounded-2xl p-7 h-full flex flex-col gap-4 hover:bg-[#1e2440] transition-colors">
          {/* Gradient preview */}
          <div className={`w-full h-36 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300`}>
            <span className="text-5xl">🚀</span>
          </div>

          <div>
            <h3 className="text-white font-bold text-xl leading-snug group-hover:text-[#915eff] transition-colors">
              {project.name}
            </h3>
            <p className="text-[#aaa6c3] text-sm mt-2 leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {project.tags.map((tag) => (
              <span key={tag.name} className={`text-xs ${tag.color} opacity-80`}>
                #{tag.name}
              </span>
            ))}
          </div>

          {/* Action row */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <span className="text-[#915eff] text-xs font-semibold group-hover:text-white transition-colors">
              View Details →
            </span>
            <div className="flex gap-3">
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="GitHub"
                className="text-[#aaa6c3] hover:text-white transition-colors text-sm"
              >
                GitHub
              </a>
              {project.live_demo_link && (
                <a
                  href={project.live_demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Live demo"
                  className="text-[#00d4ff] hover:text-white transition-colors text-sm"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
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
        <p className="text-[#915eff] text-sm sm:text-base font-semibold uppercase tracking-widest">
          What I've Built
        </p>
        <h2 className="text-white font-black text-4xl sm:text-5xl mt-2">
          Projects
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#aaa6c3] text-lg max-w-3xl leading-relaxed"
      >
        A selection of projects that showcase my ability to design, build, and ship real software —
        from full-stack .NET apps to Python ML pipelines. Click any card for details.
      </motion.p>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={index}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

export default SectionWrapper(Projects, "projects");
