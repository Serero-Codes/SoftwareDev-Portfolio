/* eslint-disable react-refresh/only-export-components */
import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { textVariant, slideIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const ContactCanvas = lazy(() => import("./canvas/Contact3D"));

const CONTACT_LINKS = [
  { label: "LinkedIn", value: "serero-mokwena", href: "https://www.linkedin.com/in/serero-mokwena-3577b3347/" },
  { label: "GitHub", value: "Serero-Codes", href: "https://github.com/Serero-Codes" },
  { label: "Email", value: "sereroemmanuel4@gmail.com", href: "mailto:sereroemmanuel4@gmail.com" },
  { label: "WhatsApp", value: "+27 76 533 4475", href: "https://wa.me/0765334475" },
  { label: "Location", value: "Johannesburg, South Africa", href: null },
];

const inputClass = "w-full bg-black border border-[#4A7FA7]/60 rounded-xl px-4 py-3 text-[#F6FAFD] placeholder-[#B3CFE5]/50 text-sm outline-none focus:border-[#B3CFE5] transition-colors";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const to = "sereroemmanuel4@gmail.com";
    const subject = `Portfolio contact from ${form.name || "New visitor"}`;
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0AMessage:%0D%0A${form.message}`;
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open the user's email client. This will not guarantee delivery
    // (user must send from their client) but will prefill the message.
    const opened = window.open(mailto, "_blank");
    if (!opened) {
      alert("Please allow popups or use a browser that supports mailto links.");
      setLoading(false);
      return;
    }

    setLoading(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[#B3CFE5] text-sm sm:text-base font-semibold uppercase tracking-widest">Get In Touch</p>
        <h2 className="text-[#F6FAFD] font-black text-4xl sm:text-5xl mt-2">Contact</h2>
      </motion.div>

      <div className="mt-14 flex flex-col xl:flex-row gap-12">
        <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-1 rounded-2xl border border-[#4A7FA7]/50 bg-[#0A1931]/90">
          <div className="rounded-2xl p-8 h-full">
            <h3 className="text-[#F6FAFD] text-xl font-bold mb-2">Let's Connect</h3>
            <p className="text-[#B3CFE5] text-sm mb-8">Open to full-time roles, freelance work, and collaborations.</p>

            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <p className="text-[#F6FAFD] font-bold text-xl">Message sent!</p>
                <p className="text-[#B3CFE5] text-sm">I'll get back to you soon.</p>
                <button onClick={() => setSent(false)} className="mt-4 px-6 py-2 rounded-full border border-[#B3CFE5]/60 text-[#B3CFE5] text-sm hover:bg-[#1A3D63] transition-colors">
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="text-[#B3CFE5] text-sm font-medium block mb-2">Your Name</label>
                  <input id="name" type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="text-[#B3CFE5] text-sm font-medium block mb-2">Email Address</label>
                  <input id="email" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="message" className="text-[#B3CFE5] text-sm font-medium block mb-2">Message</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="I'd love to work together on..." className={`${inputClass} resize-none`} />
                </div>
                <button type="submit" disabled={loading} className="w-full py-3.5 rounded-xl bg-[#4A7FA7] border border-[#B3CFE5] text-[#F6FAFD] font-semibold text-sm hover:bg-[#1A3D63] active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="flex-1 flex flex-col gap-6">
          <div className="w-full h-64 rounded-2xl overflow-hidden relative border border-[#4A7FA7]/50">
            <Suspense fallback={<div className="w-full h-full bg-black" />}>
              <ContactCanvas />
            </Suspense>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="text-[#F6FAFD]/40 text-sm font-medium tracking-widest uppercase">Reach Out Sipheke Big Boss</p>
            </div>
          </div>

          <div className="space-y-3">
            {CONTACT_LINKS.map(({ label, value, href }) => (
              <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-[#0A1931]/90 border border-[#4A7FA7]/40 hover:border-[#B3CFE5]/60 transition-colors">
                <span className="text-xs font-black text-[#B3CFE5] border border-[#4A7FA7]/50 rounded-md px-2 py-1">{label.slice(0, 2).toUpperCase()}</span>
                <div className="min-w-0">
                  <p className="text-[#B3CFE5] text-xs font-semibold uppercase tracking-widest">{label}</p>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#F6FAFD] text-sm hover:text-[#B3CFE5] transition-colors truncate block">
                      {value}
                    </a>
                  ) : (
                    <span className="text-[#F6FAFD] text-sm">{value}</span>
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
