// @ts-nocheck
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserCircle, LogOut, Settings, User } from 'lucide-react';
import SpatialButton from '../components/spatial/SpatialButton';
import { motion, AnimatePresence } from 'framer-motion';
import ScrambleText from '../components/ui/ScrambleText';

const LiveTerminalIcon = () => {
  return (
    <div className="w-5 h-[18px] border-[1.5px] border-indigo-400 group-hover:border-indigo-300 rounded flex items-center pl-[3px] transition-colors overflow-hidden">
      <span className="text-[9px] font-bold font-mono text-indigo-400 group-hover:text-indigo-300 leading-none mr-[1px] mt-[1px]">&gt;</span>
      <motion.div
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
        className="w-[4px] h-[2px] bg-indigo-400 group-hover:bg-indigo-300 mt-[6px]"
      />
    </div>
  );
};

const Navbar = () => {
  const location = useLocation();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const isDashboard = location.pathname.includes('/dashboard') || location.pathname.includes('/topics') || location.pathname.includes('/lesson') || location.pathname.includes('/stage');

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="absolute top-6 left-0 right-0 w-full z-50 pointer-events-none flex justify-center">
      <div className="w-full max-w-[1400px] px-6 lg:px-12 flex justify-between items-center">
        <motion.nav 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="pointer-events-auto flex items-center gap-6"
        >
          <Link to="/" className="flex items-center group p-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">
            <span className="font-black text-[22px] tracking-tighter text-white group-hover:text-indigo-400 transition-colors">
              LEARNTHECODES
            </span>
          </Link>

        </motion.nav>

        {!isAuthPage && (
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
            className="pointer-events-auto flex items-center gap-4"
          >
            {isDashboard ? (
              <div className="relative" ref={menuRef}>
                <div 
                  tabIndex={0} 
                  role="button" 
                  aria-label="User Menu" 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:scale-105 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <UserCircle className="w-6 h-6 text-slate-300" />
                </div>
                
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-14 right-0 mt-2 w-56 bg-slate-900 border border-slate-700/50 rounded-2xl shadow-xl overflow-hidden py-2 z-50 origin-top-right"
                    >
                      <div className="px-4 py-3 border-b border-slate-800">
                        <p className="text-sm font-semibold text-white">Learner</p>
                        <p className="text-xs text-slate-400 font-medium">learner@example.com</p>
                      </div>
                      <div className="py-1">
                        <Link to="#" className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                          <User className="w-4 h-4" /> Profile
                        </Link>
                        <Link to="#" className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                          <Settings className="w-4 h-4" /> Settings
                        </Link>
                      </div>
                      <div className="py-1 border-t border-slate-800">
                        <Link to="/login" className="w-full flex items-center gap-3 px-4 py-2 text-sm font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors text-left">
                          <LogOut className="w-4 h-4" /> Sign out
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link to="/login" className="text-sm font-semibold text-slate-400 hover:text-indigo-400 transition-colors uppercase tracking-widest text-[10px] px-2 focus:outline-none focus:text-indigo-400">
                  Login
                </Link>
                <Link to="/register" className="focus:outline-none rounded-full focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black">
                  <SpatialButton className="py-2 px-5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white backdrop-blur-lg border border-white/20 hover:border-white/30 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300 rounded-full">
                    Sign Up
                  </SpatialButton>
                </Link>
              </>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
