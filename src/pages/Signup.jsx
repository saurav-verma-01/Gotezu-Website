import React, { useState } from 'react';
import logo from '../assets/Logo.png';

const Signup = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <div className="flex min-h-screen" style={{
            background: "rgb(23,0,36)",
            backgroundImage: "linear-gradient(90deg, rgba(23,0,36,1) 0%, rgba(121,9,115,1) 37%, rgba(255,0,125,1) 100%)"
        }}>
            {/* Left panel with illustration */}
            <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12 bg-purple-800 bg-opacity-80">
                <div className="max-w-md text-center ">
                    <div className="mb-8 bg-white w-max mx-auto rounded-md p-4">
                        <img
                            src={logo}
                            alt="AI training illustration"
                            className="mx-auto"
                        />
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

            {/* Right panel with form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    {/*<div className="flex items-center mb-8">*/}
                    {/*    <div className="w-10 h-10 rounded-lg bg-yellow-400 flex items-center justify-center font-bold text-purple-900 mr-2">Go</div>*/}
                    {/*    <span className="text-2xl font-bold text-white">tezu</span>*/}
                    {/*</div>*/}

                    {/* Form container */}
                    <div className="bg-[#0C151D] bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white border-opacity-20">
                        {/* Tabs */}
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

                        {/* Form fields */}
                        <form>
                            {!isSignIn && (
                                <div className="mb-4">
                                    <label className="block text-purple-200 text-sm font-medium mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-3 bg-purple-900 bg-opacity-40 border border-purple-400 border-opacity-30 rounded-lg text-white placeholder-purple-300"
                                        placeholder="Enter your name"
                                    />
                                </div>
                            )}

                            <div className="mb-4">
                                <label className="block text-purple-200 text-sm font-medium mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full p-3 bg-purple-900 bg-opacity-40 border border-purple-400 border-opacity-30 rounded-lg text-white placeholder-purple-300"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-purple-200 text-sm font-medium mb-2">Password</label>
                                <input
                                    type="password"
                                    className="w-full p-3 bg-purple-900 bg-opacity-40 border border-purple-400 border-opacity-30 rounded-lg text-white placeholder-purple-300"
                                    placeholder="Enter your password"
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

                        {/* Social login */}
                        <div className="mt-8">
                            <div className="flex items-center mb-6">
                                <div className="flex-1 h-px bg-purple-400 bg-opacity-30"></div>
                                <span className="px-4 text-sm text-purple-200">Or continue with</span>
                                <div className="flex-1 h-px bg-purple-400 bg-opacity-30"></div>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                <button className="flex justify-center items-center p-3 bg-purple-900 bg-opacity-40 rounded-lg border border-purple-400 border-opacity-30 hover:bg-opacity-60 transition duration-200">
                                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                                    </svg>
                                </button>
                                <button className="flex justify-center items-center p-3 bg-purple-900 bg-opacity-40 rounded-lg border border-purple-400 border-opacity-30 hover:bg-opacity-60 transition duration-200">
                                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14 0-.21-.005-.418-.014-.628.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                                    </svg>
                                </button>
                                <button className="flex justify-center items-center p-3 bg-purple-900 bg-opacity-40 rounded-lg border border-purple-400 border-opacity-30 hover:bg-opacity-60 transition duration-200">
                                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Footer text */}
                    <p className="text-center text-purple-200 text-sm mt-8">
                        {isSignIn ? "Don't have an account? " : "Already have an account? "}
                        <button
                            className="text-accent hover:underline font-medium"
                            onClick={() => setIsSignIn(!isSignIn)}
                        >
                            {isSignIn ? 'Sign up' : 'Sign in'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;