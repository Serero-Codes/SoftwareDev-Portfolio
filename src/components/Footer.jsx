const Footer = () => (
  <footer className="relative z-10 border-t border-white/10 py-8">
    <div className="max-w-7xl mx-auto px-6 sm:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#915eff] to-[#00d4ff] flex items-center justify-center text-white font-bold text-xs">
          SM
        </div>
        <span className="text-[#aaa6c3] text-sm">
          Serero Mokwena — Software & AI Engineer
        </span>
      </div>
      <p className="text-[#aaa6c3] text-xs">
        © {new Date().getFullYear()} · Built with React, Three.js & ❤️
      </p>
      <div className="flex gap-5">
        {[
          { label: "GitHub", href: "https://github.com/Serero-Codes" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/serero-mokwena/" },
          { label: "Email", href: "mailto:sereroemmanuel4@gmail.com" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#aaa6c3] hover:text-[#915eff] text-xs transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
