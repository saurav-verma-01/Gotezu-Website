import React, { useState } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from '../firebaseConfig.js';
import logo from '../assets/Logo.png';

const Signup = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isSignIn) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: fullName });
      }
      // Clear all form fields after successful submission
      setEmail('');
      setPassword('');
      setFullName('');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen" style={{
      background: "rgb(23,0,36)",
      backgroundImage: "linear-gradient(90deg, rgba(23,0,36,1) 0%, rgba(121,9,115,1) 37%, rgba(255,0,125,1) 100%)"
    }}>
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12 bg-purple-800 bg-opacity-80">
        <div className="max-w-md text-center">
          <div className="mb-8 bg-white w-max mx-auto rounded-md p-4">
            <img src={logo} alt="AI training illustration" className="mx-auto" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">AI-Driven Training Excellence</h2>
          <p className="text-purple-200 mb-8">Join thousands of teams improving their skills with our expert AI trainers and personalized learning paths.</p>
          <div className="flex justify-center space-x-4">
            <div className="w-3 h-3 rounded-full bg-purple-200"></div>
            <div className="w-3 h-3 rounded-full bg-white"></div>
            <div className="w-3 h-3 rounded-full bg-purple-200"></div>
            <div className="w-3 h-3 rounded-full bg-purple-200"></div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-[#0C151D] bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white border-opacity-20">
            <div className="flex mb-8 bg-purple-800 bg-opacity-30 rounded-lg p-1">
              <button
                className={`w-1/2 py-2 rounded-lg font-medium text-sm ${isSignIn ? 'bg-accent text-purple-900' : 'text-purple-200'}`}
                onClick={() => setIsSignIn(true)}
              >
                Sign In
              </button>
              <button
                className={`w-1/2 py-2 rounded-lg font-medium text-sm ${!isSignIn ? 'bg-accent text-purple-900' : 'text-purple-200'}`}
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </button>
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">
              {isSignIn ? 'Welcome back!' : 'Create your account'}
            </h2>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <form onSubmit={handleSubmit}>
              {!isSignIn && (
                <div className="mb-4">
                  <label className="block text-purple-200 text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full p-3 bg-purple-900 bg-opacity-40 border border-purple-400 border-opacity-30 rounded-lg text-white placeholder-purple-300"
                    placeholder="Enter your name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="mb-4">
                <label className="block text-purple-200 text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full p-3 bg-purple-900 bg-opacity-40 border border-purple-400 border-opacity-30 rounded-lg text-white placeholder-purple-300"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-purple-200 text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-3 bg-purple-900 bg-opacity-40 border border-purple-400 border-opacity-30 rounded-lg text-white placeholder-purple-300"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {isSignIn && (
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <input type="checkbox" id="remember" className="mr-2" />
                    <label htmlFor="remember" className="text-sm text-purple-200">Remember me</label>
                  </div>
                  <a href="#" className="text-sm text-accent hover:underline">Forgot password?</a>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-4 bg-accent hover:bg-accent rounded-lg font-bold text-purple-900 transition duration-200"
              >
                {isSignIn ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div className="mt-8">
              <div className="flex items-center mb-6">
                <div className="flex-1 h-px bg-purple-400 bg-opacity-30"></div>
                <span className="px-4 text-sm text-purple-200">Or continue with</span>
                <div className="flex-1 h-px bg-purple-400 bg-opacity-30"></div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <button 
                  onClick={handleGoogleSignIn}
                  className="p-3 bg-purple-900 rounded-lg text-white"
                >
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;