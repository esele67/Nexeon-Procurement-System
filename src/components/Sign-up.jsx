import React, { useState } from 'react';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Mock registration - replace with actual API call
    setTimeout(() => {
      // Note: localStorage not supported in artifacts
      console.log('Registration successful');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      
      {/* Ball Image positioned to enter the login container */}
      <div 
        className="absolute -top-48 right-20 w-[500px] h-[500px] z-0"
        style={{
          backgroundImage: 'url(/ball.jpg)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Small bubble ball at bottom-left corner */}
      <div 
        className="absolute bottom-16 left-12 w-24 h-24 z-0"
        style={{
          backgroundImage: 'url(/ball3.jpg)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Sign Up Container - wider width, increased height for more fields */}
      <div className="relative z-10 bg-black/20 backdrop-blur-xl rounded-2xl px-6 py-4 w-72 shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-xl font-medium text-white mb-1 tracking-tight">Sign Up</h1>
          <p className="text-gray-300 text-xs">Ready to get the best possible solution?</p>
        </div>

        {/* Form */}
        <div className="space-y-3">
          
          {/* Name Fields Row */}
          <div className="grid grid-cols-2 gap-2">
            {/* First Name Input */}
            <div>
              <label className="block text-xs text-gray-300 mb-1 font-medium">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white text-sm placeholder-gray-400 outline-none transition-all duration-300 focus:border-blue-400 focus:bg-gray-900/70 backdrop-blur-sm"
                required
              />
            </div>

            {/* Last Name Input */}
            <div>
              <label className="block text-xs text-gray-300 mb-1 font-medium">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white text-sm placeholder-gray-400 outline-none transition-all duration-300 focus:border-blue-400 focus:bg-gray-900/70 backdrop-blur-sm"
                required
              />
            </div>
          </div>
          
          {/* Email Input */}
          <div>
            <label className="block text-xs text-gray-300 mb-1 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white text-sm placeholder-gray-400 outline-none transition-all duration-300 focus:border-blue-400 focus:bg-gray-900/70 backdrop-blur-sm"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-xs text-gray-300 mb-1 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white text-sm placeholder-gray-400 outline-none transition-all duration-300 focus:border-blue-400 focus:bg-gray-900/70 backdrop-blur-sm pr-12"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 text-xs hover:text-blue-300 transition-colors duration-200"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block text-xs text-gray-300 mb-1 font-medium">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600/50 rounded-lg text-white text-sm placeholder-gray-400 outline-none transition-all duration-300 focus:border-blue-400 focus:bg-gray-900/70 backdrop-blur-sm pr-12"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 text-xs hover:text-blue-300 transition-colors duration-200"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white text-sm font-semibold transition-all duration-300 mt-3 hover:from-blue-500 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              'Sign Up'
            )}
          </button>

          {/* Divider */}
          <div className="flex items-center my-3">
            <div className="flex-1 h-px bg-gray-600/30"></div>
            <span className="px-2 text-gray-400 text-xs">or</span>
            <div className="flex-1 h-px bg-gray-600/30"></div>
          </div>

          {/* Google Sign Up */}
          <button
            type="button"
            className="w-full py-2 bg-gray-800/40 border border-gray-600/40 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:bg-gray-700/40 backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <div className="w-4 h-4 bg-white rounded flex items-center justify-center">
              <span className="text-xs font-bold text-gray-800">G</span>
            </div>
            Sign up with Google
          </button>
        </div>

        {/* Sign In Link */}
        <div className="text-center mt-4">
          <span className="text-gray-400 text-xs">Already have an account? </span>
          <button 
            onClick={() => window.navigate && window.navigate('/login')} 
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-xs font-medium bg-transparent border-none cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;