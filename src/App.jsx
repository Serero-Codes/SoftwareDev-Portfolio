import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

const SectionLoader = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <div className="canvas-loader" />
  </div>
);

function App() {
  return (
    <div className="relative bg-[#050816] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="relative z-0">
          <Suspense fallback={<SectionLoader />}><About /></Suspense>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#915eff]/40 to-transparent my-4" />
          <Suspense fallback={<SectionLoader />}><Experience /></Suspense>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent my-4" />
          <Suspense fallback={<SectionLoader />}><Skills /></Suspense>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#915eff]/40 to-transparent my-4" />
          <Suspense fallback={<SectionLoader />}><Projects /></Suspense>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent my-4" />
          <Suspense fallback={<SectionLoader />}><Contact /></Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
