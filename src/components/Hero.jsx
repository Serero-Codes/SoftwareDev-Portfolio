import { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import heroPortrait from "../assets/sereroPic.PNG";

const StarsCanvas = lazy(() => import("./canvas/Stars"));

const TYPING_WORDS = [
  "Software Developer",
  "AI Engineer",
  "Cloud Engineer",
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
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
      }, 45);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex]);

  return (
    <span className="text-[#B3CFE5] spray-tag">
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
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">
      <Suspense fallback={null}>
        <StarsCanvas />
      </Suspense>

      <div className="max-w-7xl mx-auto px-6 sm:px-16 w-full grid lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)] items-center gap-8 lg:gap-12 pt-28 pb-24">
        <div className="relative z-10 w-full text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-6"
          >
            <div className="flex flex-col items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-[#B3CFE5]" />
              <div className="hidden sm:block w-1 h-24 lg:h-32 bg-[#1A3D63]" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#F6FAFD] font-semibold bg-[#0A1931] px-3 py-1 rounded-full border border-[#4A7FA7]">
              Based in Johannesburg, SA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="graffiti-title text-5xl sm:text-6xl lg:text-7xl leading-[1.1] text-[#F6FAFD] mb-4"
          >
            Hi, I'm{" "}
            <span className="text-[#B3CFE5]">
              Serero
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-2xl sm:text-3xl font-semibold text-[#F6FAFD] mb-6 min-h-10"
          >
            <TypewriterText />
          </motion.div>

          {/* Mobile-only portrait image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.5 }}
            className="lg:hidden w-full max-w-xs mx-auto mb-8 flex items-end justify-center"
          >
            <img
              src={heroPortrait}
              alt="Serero Mokwena"
              className="w-full max-h-[250px] sm:max-h-[320px] object-contain object-bottom select-none pointer-events-none mix-blend-lighten"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-[#B3CFE5] text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10"
          >
            Junior Software/AI & Cloud Engineer with a passion for 
            developing innovative solutions and crafting immersive digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5 rounded-full bg-[#4A7FA7] text-[#F6FAFD] font-semibold text-sm border border-[#B3CFE5] hover:bg-[#1A3D63] hover:scale-105 transition-all duration-200"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5 rounded-full border border-[#B3CFE5]/50 text-[#F6FAFD] font-semibold text-sm hover:bg-[#1A3D63] hover:scale-105 transition-all duration-200"
            >
              Let's Connect
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-wrap justify-center lg:justify-start gap-5 mt-8"
          >
            {[
              { label: "GitHub", href: "https://github.com/Serero-Codes" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/serero-mokwena-3577b3347/" },
              { label: "Email", href: "mailto:sereroemmanuel4@gmail.com" },
              { label: "WhatsApp", href: "https://wa.me/0765334475" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#B3CFE5] hover:text-[#F6FAFD] transition-colors duration-200 font-medium tracking-wide"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="
            hidden
            lg:flex
            relative z-10
            w-full
            max-w-[420px]
            sm:max-w-[500px]
            lg:max-w-none
            min-h-[300px]
            sm:min-h-[420px]
            lg:min-h-[620px]
            mx-auto
            items-end justify-center
          "
        >
  {/* Soft blue glow */}
  {/* <div
    className="
      absolute
      bottom-[12%]
      right-[10%]
      w-[420px]
      h-[420px]
      rounded-full
      bg-[#4A7FA7]/20
      blur-[130px]
    "
  /> */}

  {/* Transparent PNG portrait */}
  <motion.img
    src={heroPortrait}
    alt="Serero Mokwena"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.1 }}
    className="
      relative
      z-20
      w-full
      max-h-[72vh]
      lg:max-h-[680px]
      object-contain
      object-bottom
      select-none
      pointer-events-none
      mix-blend-lighten
      drop-shadow-[0_40px_80px_rgba(10,25,49,0.85)]
    "
  />

  {/* Bottom fade into page */}
  <div
    className="
      absolute
      bottom-0
      left-0
      right-0
      h-20
      sm:h-28
      bg-gradient-to-t
      from-[#050816]
      to-transparent
      z-30
    "
  />
</motion.div>
      </div>

      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#B3CFE5] hover:text-[#F6FAFD] transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-[#B3CFE5] flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#F6FAFD]" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
