"use client";

import React, { useState } from 'react';

export default function SalaryDashboard() {
  const [isPredicting, setIsPredicting] = useState(false);
  const [prediction, setPrediction] = useState<number | null>(null);

  const handlePredict = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPredicting(true);

    const BASE_URL = "http://127.0.0.1:8000"; // URl fastapi

    const endpoint = isPredicting ? `${BASE_URL}/salary_predict`
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    // Simulate API call to ML model
    setTimeout(() => {
      setPrediction(125000); 
      setIsPredicting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar - Keeping the Brand Style */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col p-6">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-6 h-6 bg-indigo-500 rounded-full"></div>
          <span className="font-bold text-indigo-900 uppercase tracking-tighter">HR-Pulse</span>
        </div>
        <nav className="space-y-2">
          <div className="px-4 py-3 bg-indigo-50 text-indigo-600 rounded-xl font-bold text-sm">Salary Predictor</div>
          <div className="px-4 py-3 text-slate-400 hover:bg-slate-50 rounded-xl font-medium text-sm cursor-pointer transition">Metrics</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-800 uppercase tracking-tight">Salary Prediction Tool</h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Card */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <form onSubmit={handlePredict} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Fields */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Rating (1-5)</label>
                <input type="number" step="0.1" className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500" placeholder="4.5" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Company Name</label>
                <input type="text" className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500" placeholder="TechCorp" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Industry / Sector</label>
                <select className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500">
                  <option>Information Technology</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Seniority</label>
                <select className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500">
                  <option>Junior</option>
                  <option>Mid-Level</option>
                  <option>Senior</option>
                  <option>Executive</option>
                </select>
              </div>

              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Job Role & Key Skills</label>
                <input type="text" className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500" placeholder="React, Python, AWS, Data Analysis..." />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Log Revenue / Age</label>
                <div className="flex gap-2">
                   <input type="number" className="w-1/2 p-3 bg-slate-50 rounded-xl border-none" placeholder="Rev" />
                   <input type="number" className="w-1/2 p-3 bg-slate-50 rounded-xl border-none" placeholder="Age" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Company Size</label>
                <select className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500">
                  <option>Small (1-50)</option>
                  <option>Medium (51-500)</option>
                  <option>Large (500+)</option>
                </select>
              </div>

              <button 
                type="submit"
                className="md:col-span-2 mt-4 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition flex items-center justify-center gap-2"
              >
                {isPredicting ? "Calculating..." : "Generate Prediction"}
              </button>
            </form>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-indigo-900 text-white p-8 rounded-3xl relative overflow-hidden shadow-xl">
              <h3 className="text-indigo-300 text-xs font-bold uppercase mb-4 relative z-10">Estimated Salary</h3>
              {prediction ? (
                <div className="relative z-10">
                  <span className="text-4xl font-extrabold">${prediction.toLocaleString()}</span>
                  <span className="text-indigo-300 block mt-2 text-sm">/ per year</span>
                </div>
              ) : (
                <p className="text-indigo-200 italic text-sm relative z-10">Enter data to see result...</p>
              )}
              
              {/* Decorative Circle (Matching the original brand style) */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500 rounded-full opacity-20"></div>
            </div>

            
          </div>
        </div>
      </main>
    </div>
  );
}