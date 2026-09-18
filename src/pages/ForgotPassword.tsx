import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight, AlertCircle, Loader2, Mail, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { authService } from '../services/authService';
import { useAuth } from '../app/providers/AuthProvider';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();
  
  const [formData, setFormData] = useState({ email: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address.');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading' || status === 'success') return;
    if (!validate()) return;

    setStatus('loading');
    setErrorMessage('');

    const result = await authService.resetPassword(formData.email);

    if (result.error) {
      setStatus('error');
      setErrorMessage(result.error.message);
      return;
    }

    setStatus('success');
    setSuccessMessage('If an account exists with that email, you will receive a password reset link shortly.');

    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };

  const handleResend = async () => {
    if (status === 'loading') return;
    setStatus('loading');
    setErrorMessage('');
    setSuccessMessage('');

    const result = await authService.resetPassword(formData.email);

    if (result.error) {
      setStatus('error');
      setErrorMessage(result.error.message);
      return;
    }

    setStatus('success');
    setSuccessMessage('A new reset link has been sent. Please check your inbox.');
  };

  return (
    <div className="flex flex-col w-full min-h-screen text-slate-100 z-10 relative">

      <div className="w-full max-w-xl mx-auto flex flex-col justify-center items-center px-4 py-12 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-md"
        >
          <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Check your email</h2>
                  <p className="text-sm text-slate-400 mb-6 max-w-sm mx-auto">{successMessage}</p>
                  
                  <button
                    type="button"
                    onClick={handleResend}
                    className="group w-full max-w-sm flex items-center justify-center gap-2 text-slate-400 hover:text-indigo-400 font-medium py-3 px-8 rounded-2xl transition-colors mb-4"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Resend email</span>
                  </button>

                  <Link to="/login" className="group inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
                    <span>Back to sign in</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">Forgot password?</h2>
                    <p className="text-sm text-slate-400">Enter your email and we'll send you a reset link.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    
                    <AnimatePresence>
                      {status === 'error' && errorMessage && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                          className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-3 flex items-start gap-3 overflow-hidden"
                          aria-live="polite"
                        >
                          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                          <p className="text-sm text-rose-300 font-medium">{errorMessage}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <AnimatePresence>
                      {status === 'success' && successMessage && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                          className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex items-start gap-3 overflow-hidden"
                          aria-live="polite"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <p className="text-sm text-emerald-300 font-medium">{successMessage}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-300">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({...formData, email: e.target.value});
                            if(status === 'error') setStatus('idle');
                          }}
                          disabled={status === 'loading'}
                          placeholder="you@example.com"
                          className={`w-full bg-white/5 border pl-12 pr-5 py-3.5 text-white placeholder:font-normal placeholder-slate-500 font-medium text-sm focus:outline-none focus:ring-4 rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                            status === 'error' 
                              ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/10' 
                              : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/10'
                          }`}
                          autoComplete="email"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="group relative w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.5)] hover:-translate-y-[1px] active:translate-y-[1px]"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send reset link</span>
                            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>

                  <div className="mt-8 text-center">
                    <span className="text-sm text-slate-400 font-medium">Remember your password? </span>
                    <Link to="/login" className="text-sm text-indigo-400 font-semibold hover:text-indigo-300 transition-colors ml-1">
                      Sign in
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default ForgotPassword;