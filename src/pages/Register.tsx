// @ts-nocheck
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', name: '', email: '', password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = 'Username is required.';
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must contain at least 8 characters.';
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate() || isLoading || isSuccess) return;

    setIsLoading(true);
    
    // Connect to actual API in future. Simulating network request for UX.
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      // Redirect after success animation
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    }, 1200);
  };

  const handleGoogleAuth = () => {
    // Placeholder for Firebase Google Login
    console.log("Initiating Firebase Google Auth...");
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
            
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">You're ready.</h2>
                <p className="text-slate-400">Your LearnTheCodes journey starts now.</p>
              </motion.div>
            ) : (
              <>
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-white mb-2">Create your account</h2>
                  <p className="text-sm text-slate-400">Start your journey with LearnTheCodes.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  
                  {/* Username */}
                  <div className="space-y-2">
                    <label htmlFor="username" className="block text-sm font-semibold text-slate-300">
                      Username
                    </label>
                    <input
                      id="username"
                      type="text"
                      value={formData.username}
                      onChange={(e) => setFormData({...formData, username: e.target.value})}
                      placeholder="choose_a_username"
                      className={`w-full bg-white/5 border ${errors.username ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/10 focus:border-indigo-500'} rounded-2xl px-5 py-3.5 text-white placeholder:font-normal placeholder-slate-500 font-medium text-sm focus:outline-none focus:ring-4 ${errors.username ? 'focus:ring-rose-500/10' : 'focus:ring-indigo-500/10'} transition-all`}
                      autoComplete="username"
                    />
                    {errors.username && <p className="text-xs text-rose-400 mt-1">{errors.username}</p>}
                  </div>

                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-300">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your name"
                      className={`w-full bg-white/5 border ${errors.name ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/10 focus:border-indigo-500'} rounded-2xl px-5 py-3.5 text-white placeholder:font-normal placeholder-slate-500 font-medium text-sm focus:outline-none focus:ring-4 ${errors.name ? 'focus:ring-rose-500/10' : 'focus:ring-indigo-500/10'} transition-all`}
                      autoComplete="name"
                    />
                    {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="you@example.com"
                      className={`w-full bg-white/5 border ${errors.email ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/10 focus:border-indigo-500'} rounded-2xl px-5 py-3.5 text-white placeholder:font-normal placeholder-slate-500 font-medium text-sm focus:outline-none focus:ring-4 ${errors.email ? 'focus:ring-rose-500/10' : 'focus:ring-indigo-500/10'} transition-all`}
                      autoComplete="email"
                    />
                    {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
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
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        placeholder="Create a password"
                        className={`w-full bg-white/5 border ${errors.password ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/10 focus:border-indigo-500'} rounded-2xl pl-5 pr-12 py-3.5 text-white placeholder:font-normal placeholder-slate-500 font-medium text-sm focus:outline-none focus:ring-4 ${errors.password ? 'focus:ring-rose-500/10' : 'focus:ring-indigo-500/10'} transition-all`}
                        autoComplete="new-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white focus:outline-none focus:text-white transition-colors"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.password && <p className="text-xs text-rose-400 mt-1">{errors.password}</p>}
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-300">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        placeholder="Confirm your password"
                        className={`w-full bg-white/5 border ${errors.confirmPassword ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/10 focus:border-indigo-500'} rounded-2xl pl-5 pr-12 py-3.5 text-white placeholder:font-normal placeholder-slate-500 font-medium text-sm focus:outline-none focus:ring-4 ${errors.confirmPassword ? 'focus:ring-rose-500/10' : 'focus:ring-indigo-500/10'} transition-all`}
                        autoComplete="new-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white focus:outline-none focus:text-white transition-colors"
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {errors.confirmPassword && <p className="text-xs text-rose-400 mt-1">{errors.confirmPassword}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="group relative w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(99,102,241,0.3)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.5)] hover:-translate-y-[1px] active:translate-y-[1px]"
                    >
                      {isLoading ? (
                        <span>Creating account...</span>
                      ) : (
                        <>
                          <span>Create account</span>
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
                  className="w-full flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-900 font-semibold py-3.5 px-8 rounded-2xl transition-all duration-300 active:scale-[0.98]"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Sign up with Google
                </button>

                {/* Bottom Sign In Link */}
                <div className="mt-8 text-center">
                  <span className="text-sm text-slate-400 font-medium">Already have an account? </span>
                  <Link to="/login" className="text-sm text-indigo-400 font-semibold hover:text-indigo-300 transition-colors ml-1">
                    Sign in
                  </Link>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Register;
