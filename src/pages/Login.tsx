import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, CheckCircle2, ChevronRight, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { authService } from '../services/authService';
import { getLessonRoute } from '../services/routeService';

const Login = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading_email' | 'loading_google' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address.');
      return false;
    } 
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return false;
    }
    if (!formData.password) {
      setErrorMessage('Please enter your password.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading_email' || status === 'loading_google' || status === 'success') return;
    if (!validate()) return;

    setStatus('loading_email');
    setErrorMessage('');

    const result = await authService.signIn(formData.email, formData.password);

    if (result.error) {
      setStatus('error');
      setErrorMessage(result.error.message);
      return;
    }

    setStatus('success');
    
    // Redirect to first lesson after success animation
    setTimeout(() => {
      navigate(getLessonRoute('stage-01', 'lesson-01'));
    }, 1500);
  };

  const handleGoogleAuth = async () => {
    if (status === 'loading_email' || status === 'loading_google' || status === 'success') return;
    setStatus('loading_google');
    setErrorMessage('');

    const result = await authService.signInWithGoogle();

    if (result.error) {
      setStatus('error');
      setErrorMessage(result.error.message);
      return;
    }

    setStatus('success');
    setTimeout(() => {
      navigate(getLessonRoute('stage-01', 'lesson-01'));
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full min-h-screen text-slate-100 z-10 relative">





      {/* Center Panel - Form */}
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
                  <h2 className="text-2xl font-bold text-white mb-2">Welcome back.</h2>
                  <p className="text-slate-400">Loading your workspace...</p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Welcome back.</h2>
                    <p className="text-sm text-slate-400">Continue your coding journey.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    
                    {/* Error State Banner */}
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

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-300">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({...formData, email: e.target.value});
                          if(status === 'error') setStatus('idle');
                        }}
                        disabled={status === 'loading_email' || status === 'loading_google'}
                        placeholder="you@example.com"
                        className={`w-full bg-white/5 border ${status === 'error' ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/10 focus:border-indigo-500'} rounded-2xl px-5 py-3.5 text-white placeholder:font-normal placeholder-slate-500 font-medium text-sm focus:outline-none focus:ring-4 ${status === 'error' ? 'focus:ring-rose-500/10' : 'focus:ring-indigo-500/10'} transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                        autoComplete="email"
                      />
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <label htmlFor="password" className="block text-sm font-semibold text-slate-300">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={(e) => {
                            setFormData({...formData, password: e.target.value});
                            if(status === 'error') setStatus('idle');
                          }}
                          disabled={status === 'loading_email' || status === 'loading_google'}
                          placeholder="Enter your password"
                          className={`w-full bg-white/5 border ${status === 'error' ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/10 focus:border-indigo-500'} rounded-2xl pl-5 pr-12 py-3.5 text-white placeholder:font-normal placeholder-slate-500 font-medium text-sm focus:outline-none focus:ring-4 ${status === 'error' ? 'focus:ring-rose-500/10' : 'focus:ring-indigo-500/10'} transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                          autoComplete="current-password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          disabled={status === 'loading_email' || status === 'loading_google'}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white focus:outline-none focus:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    
                    {/* Forgot Password */}
                    <div className="flex justify-end pt-1">
                       <Link to="#" className="text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors">
                         Forgot password?
                       </Link>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={status === 'loading_email' || status === 'loading_google'}
                        className="group relative w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.5)] hover:-translate-y-[1px] active:translate-y-[1px]"
                      >
                        {status === 'loading_email' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Signing in...</span>
                          </>
                        ) : (
                          <>
                            <span>Sign in</span>
                            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>

                  {/* Divider */}
                  <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-white/10"></div>
                    <span className="px-3 text-xs text-slate-500 font-medium">OR</span>
                    <div className="flex-grow border-t border-white/10"></div>
                  </div>

                  {/* Google Auth Button */}
                  <button
                    type="button"
                    onClick={handleGoogleAuth}
                    disabled={status === 'loading_email' || status === 'loading_google'}
                    className="w-full flex items-center justify-center gap-3 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-900 font-semibold py-3.5 px-8 rounded-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98]"
                  >
                    {status === 'loading_google' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-slate-600" />
                        <span>Connecting to Google...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <span>Continue with Google</span>
                      </>
                    )}
                  </button>

                  {/* Bottom Sign Up Link */}
                  <div className="mt-8 text-center">
                    <span className="text-sm text-slate-400 font-medium">Don't have an account? </span>
                    <Link to="/register" className="text-sm text-indigo-400 font-semibold hover:text-indigo-300 transition-colors ml-1">
                      Sign up
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

export default Login;
