const Footer = () => (
  <footer className="relative z-10 border-t border-[#4A7FA7]/40 py-8">
    <div className="max-w-7xl mx-auto px-6 sm:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#1A3D63] border border-[#B3CFE5] flex items-center justify-center text-[#F6FAFD] font-bold text-xs">
          SM
        </div>
        <span className="text-[#B3CFE5] text-sm">Serero Mokwena - Software/AI & cloud Engineer</span>
      </div>
      <p className="text-[#B3CFE5] text-xs">Copyright {new Date().getFullYear()} - Built with React and Three.js</p>
      <div className="flex gap-5">
        {[
          { label: "GitHub", href: "https://github.com/Serero-Codes" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/serero-mokwena-3577b3347/" },
          { label: "Email", href: "mailto:sereroemmanuel4@gmail.com" },
        ].map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-[#B3CFE5] hover:text-[#F6FAFD] text-xs transition-colors">
            {label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
