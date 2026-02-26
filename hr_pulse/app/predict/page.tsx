"use client";

import React, { useState } from 'react';

export default function SalaryDashboard() {
  const [isPredicting, setIsPredicting] = useState(false);
  const [prediction, setPrediction] = useState<number | null>(null);

  const handlePredict = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPredicting(true);
  
    const BASE_URL = "http://127.0.0.1:8000";
    const endpoint = `${BASE_URL}/salary_predict`;
  
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries()) as any;
  
    // Conversion des types numériques
    payload.Rating = parseFloat(payload.Rating) || 0;          // || 0 permet d’éviter que le backend reçoive NaN
    payload.log_revenue = parseFloat(payload.log_revenue) || 0;
    payload.company_age = parseFloat(payload.company_age) || 0;
  
    const token = localStorage.getItem("token");
  
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json", 
          "Authorization": `Bearer ${token}` 
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erreur API");
      }
  
      const data = await response.json();
      setPrediction(data.predicted_salary);
    } catch (error) {
      console.error("Erreur API:", error);
    } finally {
      setIsPredicting(false);
    }
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
                <label className="text-xs font-bold text-slate-400 uppercase" >Rating (1-5)</label>
                <input name="Rating" type="number" step="0.1" className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500  text-slate-900" placeholder="3.1" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Company Name</label>
                <input name="Company_Name" type="text" className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500  text-slate-900" placeholder="healthfirst" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Industry</label>
                <input name="Industry" className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500  text-slate-900"/>
                
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Sector</label>
                <input name="Sector" className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500  text-slate-900"/>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Seniority</label>
                <select name="seniority" className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500  text-slate-900">
                  <option>junior</option>
                  <option>senior</option>
                  <option>executive</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Job Role</label>
                <input name="job_role" className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500  text-slate-900"/>
                
              </div>

              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-bold text-slate-400 uppercase">Skills</label>
                <input name="skills" type="text" 
                        className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500  text-slate-900" 
                        placeholder="React, Python, AWS, Data Analysis..." />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase ">Log Revenue</label>
                <div className="flex gap-2">
                   <input name="log_revenue" type="number" step="0.1" className="w-1/2 p-3 bg-slate-50 rounded-xl border-none  text-slate-900" placeholder="Rev" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase ">Age</label>
                <div className="flex gap-2">
                   <input name="company_age" type="number" className="w-1/2 p-3 bg-slate-50 rounded-xl border-none  text-slate-900" placeholder="Age" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase">Company Size</label>
                <select name="size_category" className="w-full p-3 bg-slate-50 rounded-xl border-none focus:ring-2 focus:ring-indigo-500  text-slate-900">
                  <option>small</option>
                  <option>medium</option>
                  <option>large</option>
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