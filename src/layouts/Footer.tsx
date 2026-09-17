import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/60 backdrop-blur-md py-8 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-sm text-white tracking-tight">LEARNTHECODES</span>
            <span className="text-xs text-slate-500 font-mono">— Learn Through Iteration</span>
          </div>
          <div className="text-slate-400 text-xs flex gap-6 font-medium">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
