import React from 'react';
import Head from 'next/head';




export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      <Head>
        <title>HR SOLUTION| Office Work</title>
      </Head>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-12 py-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
          <span className="font-bold tracking-tight text-indigo-900 uppercase">HR-Pulse</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-indigo-600 transition">HOME</a>
          <a href="#" className="px-4 py-1 bg-indigo-500 text-white rounded-full">PAGE</a>
          <a href="#" className="hover:text-indigo-600 transition">ABOUT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative flex flex-col md:flex-row items-center px-12 pt-20 pb-32 overflow-hidden">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 z-10">
          <h3 className="text-xl font-medium text-slate-600">HR-Pulse | AI SOLUTION</h3>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight uppercase">
            Talent Recruitment
          </h1>
          <p className="max-w-md text-slate-500 leading-relaxed">
          HR-Pulse est une solution de Data Engineering et IA conçue pour moderniser le processus de recrutement a pour ojectif de transformer une masse de données textuelles brutes en une base de connaissances structurée et exploitable.
          </p>
          <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-full shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all transform hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Right Illustration Placeholder */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center relative">
          <div className="relative w-full max-w-lg aspect-square bg-transparent flex items-center justify-center">
             <img 
               src="/illustration-placeholder.png" 
               alt="Recruitment Illustration" 
               className="w-full h-auto object-contain"
             />
                      
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full leading-[0] z-0">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path 
              fill="#EEF2FF" 
              fillOpacity="1" 
              d="M0,64L24,96C48,128,96,192,144,218.7C192,245,240,235,288,208C336,181,384,139,432,122.7C480,107,528,117,576,112C624,107,672,85,720,80C768,75,816,85,864,117.3C912,149,960,203,1008,229.3C1056,256,1104,256,1152,261.3C1200,267,1248,277,1296,256C1344,235,1392,181,1416,154.7L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
            ></path>
          </svg>
        </div>

      </main>
    </div>
  );
}