import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden">
      
      {/* Background Wave/Blob Shape (Matching your style) */}
      <div className="absolute top-0 right-0 -z-0 w-1/2 h-full bg-indigo-100 rounded-bl-[300px] opacity-60 hidden md:block"></div>

      <div className="z-10 bg-white shadow-2xl rounded-3xl flex max-w-4xl w-full overflow-hidden mx-4">
        
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 bg-indigo-500 rounded-full"></div>
            <span className="font-bold text-indigo-900 uppercase tracking-tighter">HR-Pulse</span>
          </div>

          <h2 className="text-3xl font-extrabold text-slate-800 mb-2 uppercase tracking-tight">Welcome Back</h2>
          <p className="text-slate-500 mb-8 text-sm">Please enter your details to sign in.</p>

          <form className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl bg-slate-100 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-0 transition" 
                placeholder="name@company.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-xl bg-slate-100 border-transparent focus:bg-white focus:border-indigo-500 focus:ring-0 transition" 
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-xs font-medium">
              <label className="flex items-center gap-2 text-slate-500 cursor-pointer">
                <input type="checkbox" className="rounded text-indigo-500 focus:ring-indigo-500" />
                Remember me
              </label>
              <a href="#" className="text-indigo-600 hover:underline">Forgot Password?</a>
            </div>

            <button className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition transform hover:-translate-y-0.5">
              Sign In
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Don't have an account? 
            <a href="#" className="text-indigo-600 font-bold">Register</a>
          </p>
        </div>

        {/* Right Side: Visual (Hidden on mobile) */}
        <div className="hidden md:flex md:w-1/2 bg-indigo-50 items-center justify-center p-12 relative">
          <div className="text-center z-10">
            <div className="mb-6 inline-block p-4 bg-white rounded-2xl shadow-sm">
              {/* This represents the "CV/Profile" icon from your image */}
              <div className="w-16 h-20 border-2 border-indigo-100 rounded-md relative flex flex-col p-2 gap-1">
                <div className="w-6 h-6 rounded-full bg-indigo-200 mx-auto mb-1"></div>
                <div className="h-1 w-full bg-slate-100"></div>
                <div className="h-1 w-full bg-slate-100"></div>
                <div className="h-1 w-2/3 bg-slate-100"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-indigo-900 uppercase">HR-Pulse | AI SOLUTION</h3>
          </div>
          
          {/* Subtle Decorative Wave at the bottom right of this panel */}
          <div className="absolute bottom-0 right-0 w-full opacity-30">
             {/* Your SVG path can go here */}
          </div>
        </div>
      </div>
    </div>
  );
}