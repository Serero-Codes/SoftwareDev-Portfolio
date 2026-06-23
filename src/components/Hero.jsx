import { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";

const HeroCanvas = lazy(() => import("./canvas/Hero3D"));
const StarsCanvas = lazy(() => import("./canvas/Stars"));

const TYPING_WORDS = [
  "Software Engineer",
  "AI Engineer",
  "Cloud Engineer",
  "Problem Solver",
];

function TypewriterText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = TYPING_WORDS[wordIndex];
    let timeout;

    if (!isDeleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length - 1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  return (
    <span className="text-[#D8CFBC]">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

const Hero = () => {
  const handleScrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">
      {/* Stars background */}
      <Suspense fallback={null}>
        <StarsCanvas />
      </Suspense>

      {/* Ambient glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/15 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-16 w-full flex flex-col lg:flex-row items-center gap-12 pt-20">
        {/* Left column: text */}
        <div className="flex-1 z-10">
          {/* Accent line + badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#FFFBF4]" />
              <div className="w-1 h-32 bg-gradient-to-b from-[#565449] to-transparent" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#565449] font-semibold bg-[#565449]/10 px-3 py-1 rounded-full border border-[#FFFBF4]/30">
              Based in Johannesburg, SA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-4"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#565449] to-[#575449] bg-clip-text text-transparent">
              Serero
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-2xl sm:text-3xl font-semibold text-white/80 mb-6 h-10"
          >
            <TypewriterText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-[#565449] text-lg max-w-lg leading-relaxed mb-10"
          >
            Building intelligent software solutions with C#, .NET, and Python.
            Passionate about AI engineering and crafting immersive digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#915eff] to-[#6b3cd1] text-white font-semibold text-sm shadow-lg shadow-purple-800/30 hover:shadow-purple-700/50 hover:scale-105 transition-all duration-200"
            >
              View My Work
            </button>
            <a
              href="/cv.pdf"
              download
              className="px-7 py-3.5 rounded-full border border-[#915eff]/50 text-[#915eff] font-semibold text-sm hover:bg-[#915eff]/10 hover:border-[#915eff] hover:scale-105 transition-all duration-200"
            >
              Download CV
            </a>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5 rounded-full border border-white/20 text-white/80 font-semibold text-sm hover:bg-white/5 hover:scale-105 transition-all duration-200"
            >
              Let's Connect
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex gap-5 mt-8"
          >
            {[
              { label: "GitHub", href: "https://github.com/Serero-Codes" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/serero-mokwena/" },
              { label: "Email", href: "mailto:sereroemmanuel4@gmail.com" },
              { label: "WhatsApp", href: "https://wa.me/27653344755" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#aaa6c3] hover:text-[#915eff] transition-colors duration-200 font-medium tracking-wide"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right column: 3D scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 w-full h-[400px] lg:h-[600px] max-w-lg lg:max-w-none"
        >
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="canvas-loader" />
            </div>
          }>
            <HeroCanvas />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#aaa6c3] hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-[#aaa6c3] flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#915eff]" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
