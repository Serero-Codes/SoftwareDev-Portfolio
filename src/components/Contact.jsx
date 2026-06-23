import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { textVariant, slideIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ContactCanvas = lazy(() => import("./canvas/Contact3D"));

const CONTACT_LINKS = [
  {
    label: "LinkedIn",
    value: "serero-mokwena",
    href: "https://www.linkedin.com/in/serero-mokwena/",
    icon: "🔗",
  },
  {
    label: "GitHub",
    value: "Serero-Codes",
    href: "https://github.com/Serero-Codes",
    icon: "🐙",
  },
  {
    label: "Email",
    value: "sereroemmanuel4@gmail.com",
    href: "mailto:sereroemmanuel4@gmail.com",
    icon: "✉️",
  },
  {
    label: "WhatsApp",
    value: "+27 65 334 4755",
    href: "https://wa.me/27653344755",
    icon: "💬",
  },
  {
    label: "Location",
    value: "Nelson Mandela Bay, South Africa",
    href: null,
    icon: "📍",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission (integrate with EmailJS or Formspree in production)
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[#915eff] text-sm sm:text-base font-semibold uppercase tracking-widest">
          Get In Touch
        </p>
        <h2 className="text-white font-black text-4xl sm:text-5xl mt-2">
          Contact
        </h2>
      </motion.div>

      <div className="mt-14 flex flex-col xl:flex-row gap-12">
        {/* Left: Form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-1 p-[1px] rounded-2xl bg-gradient-to-br from-[#915eff]/50 via-[#00d4ff]/20 to-transparent"
        >
          <div className="bg-[#1a1f35] rounded-2xl p-8 h-full">
            <h3 className="text-white text-xl font-bold mb-2">Let's Cook 🚀</h3>
            <p className="text-[#aaa6c3] text-sm mb-8">
              Open to full-time roles, freelance work, and collaborations. Drop me a message!
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-16 text-center"
              >
                <span className="text-5xl">🎉</span>
                <p className="text-white font-bold text-xl">Message sent!</p>
                <p className="text-[#aaa6c3] text-sm">I'll get back to you soon.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-6 py-2 rounded-full border border-[#915eff]/50 text-[#915eff] text-sm hover:bg-[#915eff]/10 transition-colors"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="text-[#aaa6c3] text-sm font-medium block mb-2">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#0d1224] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#555] text-sm outline-none focus:border-[#915eff] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-[#aaa6c3] text-sm font-medium block mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#0d1224] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#555] text-sm outline-none focus:border-[#915eff] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-[#aaa6c3] text-sm font-medium block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="I'd love to work together on..."
                    className="w-full bg-[#0d1224] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-[#555] text-sm outline-none focus:border-[#915eff] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#915eff] to-[#6b3cd1] text-white font-semibold text-sm shadow-lg shadow-purple-800/30 hover:shadow-purple-700/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Right: Contact info + 3D */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-1 flex flex-col gap-6"
        >
          {/* 3D particles */}
          <div className="w-full h-64 rounded-2xl overflow-hidden relative border border-white/10">
            <Suspense fallback={<div className="w-full h-full bg-[#0000]" />}>
              <ContactCanvas />
            </Suspense>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="text-white/30 text-sm font-medium tracking-widest uppercase">Reach Out</p>
            </div>
          </div>

          {/* Contact links */}
          <div className="space-y-3">
            {CONTACT_LINKS.map(({ label, value, href, icon }) => (
              <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-[#1a1f35] border border-white/5 hover:border-[#915eff]/30 transition-colors">
                <span className="text-xl">{icon}</span>
                <div className="min-w-0">
                  <p className="text-[#915eff] text-xs font-semibold uppercase tracking-widest">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm hover:text-[#915eff] transition-colors truncate block"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-white text-sm">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
