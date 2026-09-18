import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Eye, EyeOff, CheckCircle2, ChevronRight, AlertCircle, Loader2, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { authService } from '../services/authService';
import { useAuth } from '../app/providers/AuthProvider';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { updatePassword } = useAuth();
  
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isValidToken, setIsValidToken] = useState(true);

  useEffect(() => {
    const token = searchParams.get('token');
    const type = searchParams.get('type');
    if (!token || type !== 'recovery') {
      setIsValidToken(false);
    }
  }, [searchParams]);

  const validate = () => {
    const newErrors = [];
    if (!formData.password) {
      newErrors.push('Please enter a new password.');
    } else if (formData.password.length < 8) {
      newErrors.push('Password must contain at least 8 characters.');
    }
    if (formData.confirmPassword !== formData.password) {
      newErrors.push('Passwords do not match.');
    }
    if (newErrors.length > 0) {
      setErrorMessage(newErrors[0]);
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

    const result = await updatePassword(formData.password);

    if (result.error) {
      setStatus('error');
      setErrorMessage(result.error.message);
      return;
    }

    setStatus('success');
    
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  if (!isValidToken) {
    return (
      <div className="flex flex-col w-full min-h-screen text-slate-100 z-10 relative">
        <div className="w-full max-w-xl mx-auto flex flex-col justify-center items-center px-4 py-12 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-md"
          >
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 lg:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden text-center">
              <div className="w-16 h-16 rounded-full bg-rose-500/20 flex items-center justify-center mx-auto mb-6 border border-rose-500/30">
                <AlertCircle className="w-8 h-8 text-rose-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Invalid or expired link</h2>
              <p className="text-sm text-slate-400 mb-6 max-w-sm mx-auto">
                This password reset link is invalid or has expired. Please request a new one.
              </p>
              <Link to="/forgot-password" className="group inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors">
                <span>Request new link</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

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
                  <h2 className="text-2xl font-bold text-white mb-2">Password updated</h2>
                  <p className="text-sm text-slate-400">Your password has been reset successfully. Redirecting...</p>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="mb-8 text-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4 border border-indigo-500/30">
                      <Lock className="w-6 h-6 text-indigo-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Set new password</h2>
                    <p className="text-sm text-slate-400">Your new password must be different from previous ones.</p>
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

                    <div className="space-y-2">
                      <label htmlFor="password" className="block text-sm font-semibold text-slate-300">
                        New Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
                        <input
                          id="password"
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={(e) => {
                            setFormData({...formData, password: e.target.value});
                            if(status === 'error') setStatus('idle');
                          }}
                          disabled={status === 'loading'}
                          placeholder="Create a new password"
                          className={`w-full bg-white/5 border pl-12 pr-12 py-3.5 text-white placeholder:font-normal placeholder-slate-500 font-medium text-sm focus:outline-none focus:ring-4 rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                            status === 'error' 
                              ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/10' 
                              : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/10'
                          }`}
                          autoComplete="new-password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          disabled={status === 'loading'}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white focus:outline-none focus:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-300">
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" aria-hidden="true" />
                        <input
                          id="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={formData.confirmPassword}
                          onChange={(e) => {
                            setFormData({...formData, confirmPassword: e.target.value});
                            if(status === 'error') setStatus('idle');
                          }}
                          disabled={status === 'loading'}
                          placeholder="Confirm your new password"
                          className={`w-full bg-white/5 border pl-12 pr-12 py-3.5 text-white placeholder:font-normal placeholder-slate-500 font-medium text-sm focus:outline-none focus:ring-4 rounded-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                            status === 'error' 
                              ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/10' 
                              : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/10'
                          }`}
                          autoComplete="new-password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          disabled={status === 'loading'}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white focus:outline-none focus:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
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
                            <span>Updating...</span>
                          </>
                        ) : (
                          <>
                            <span>Update password</span>
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

export default ResetPassword;