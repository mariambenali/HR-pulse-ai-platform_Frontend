"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SalaryDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'predict' | 'jobs'>('predict');
  const [isPredicting, setIsPredicting] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [prediction, setPrediction] = useState<number | null>(null);
  const [jobs, setJobs] = useState<any[]>([]);
  const [searchSkills, setSearchSkills] = useState("");

  const BASE_URL = "http://127.0.0.1:8000";

  const handlePredict = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPredicting(true);

    const endpoint = `${BASE_URL}/salary_predict`;
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries()) as any;

    payload.Rating = parseFloat(payload.Rating) || 0;
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

      if (!response.ok) throw new Error("Erreur API");
      const data = await response.json();
      setPrediction(data.predicted_salary);
    } catch (error) {
      console.error("Erreur API:", error);
    } finally {
      setIsPredicting(false);
    }
  };

  const handleSearchJobs = async () => {
    if (!searchSkills.trim()) return;
    setIsSearching(true);

    const endpoint = `${BASE_URL}/search_jobs`;
    const skillsArray = searchSkills.split(',').map(s => s.trim()).filter(s => s !== "");
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ skills: skillsArray }),
      });

      if (!response.ok) throw new Error("Search failed");
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Search Error:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col p-6 shadow-sm z-20">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-100">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="font-extrabold text-slate-900 uppercase tracking-tighter text-xl">HR-Pulse</span>
        </div>

        <nav className="space-y-3">
          <button
            onClick={() => setActiveTab('predict')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-3 ${activeTab === 'predict' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-500 hover:bg-slate-50'
              }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
            Salary Predictor
          </button>

          <button
            onClick={() => setActiveTab('jobs')}
            className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-3 ${activeTab === 'jobs' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-500 hover:bg-slate-50'
              }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            Search Jobs
          </button>
        </nav>

        <div className="mt-auto space-y-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Neural Engine</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-slate-600">v2.4 Online</span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 rounded-xl font-bold text-sm text-red-500 hover:bg-red-50 transition-all duration-300 flex items-center gap-3 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
            Terminate Session
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto animate-fade-in">
        {activeTab === 'predict' ? (
          <>
            <header className="mb-10">
              <div className="text-indigo-600 text-xs font-black uppercase tracking-[0.2em] mb-2">Algorithm Module // SP-01</div>
              <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Salary Prediction <span className="text-slate-300">Tool</span></h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Form Card */}
              <div className="lg:col-span-2 bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
                <form onSubmit={handlePredict} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest" >Rating (1-5)</label>
                    <input name="Rating" type="number" step="0.1" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 text-slate-900 transition-all" placeholder="Enter rating..." />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Company Name</label>
                    <input name="Company_Name" type="text" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 text-slate-900" placeholder="e.g. Google" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Industry</label>
                    <input name="Industry" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 text-slate-900" placeholder="IT, Healthcare..." />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sector</label>
                    <input name="Sector" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 text-slate-900" placeholder="Software..." />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Seniority</label>
                    <select name="seniority" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 text-slate-900 appearance-none">
                      <option>junior</option>
                      <option>senior</option>
                      <option>executive</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Job Role</label>
                    <input name="job_role" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 text-slate-900" placeholder="Developer, Manager..." />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Individual Skills</label>
                    <input name="skills" type="text" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 text-slate-900" placeholder="React, Python, Cloud..." />
                  </div>

                  <div className="grid grid-cols-2 gap-4 md:col-span-2">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Log Revenue</label>
                      <input name="log_revenue" type="number" step="0.1" className="w-full p-4 bg-slate-50 rounded-2xl border-none text-slate-900" placeholder="Revenue" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Company Age</label>
                      <input name="company_age" type="number" className="w-full p-4 bg-slate-50 rounded-2xl border-none text-slate-900" placeholder="Age" />
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Company Size</label>
                    <select name="size_category" className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-indigo-500 text-slate-900">
                      <option>small</option>
                      <option>medium</option>
                      <option>large</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="md:col-span-2 mt-4 py-5 bg-indigo-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                  >
                    {isPredicting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                        Simulating Pathways...
                      </span>
                    ) : "Execute Projection"}
                  </button>
                </form>
              </div>

              {/* Result Card */}
              <div className="lg:col-span-1">
                <div className="bg-slate-900 text-white p-10 rounded-[40px] relative overflow-hidden shadow-2xl h-fit border border-slate-800">
                  <div className="text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6 relative z-10">Output Analysis Result</div>
                  {prediction ? (
                    <div className="relative z-10 animate-fade-in">
                      <div className="text-6xl font-black tracking-tighter mb-2">${prediction.toLocaleString()}</div>
                      <div className="text-slate-400 font-bold text-sm uppercase tracking-widest">Est. Annual Compensation</div>

                      <div className="mt-10 pt-10 border-t border-slate-800 space-y-4">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-500 font-bold uppercase">Confidence</span>
                          <span className="text-green-400 font-black">94.2%</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-indigo-500 h-full w-[94%] animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative z-10 py-20 text-center">
                      <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-600 animate-pulse">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4" /><path d="m16.2 7.8 2.9-2.9" /><path d="M18 12h4" /><path d="m16.2 16.2 2.9 2.9" /><path d="M12 18v4" /><path d="m4.9 19.1 2.9-2.9" /><path d="M2 12h4" /><path d="m4.9 4.9 2.9 2.9" /></svg>
                      </div>
                      <p className="text-slate-500 font-bold text-sm uppercase tracking-widest leading-relaxed">Waiting for Neural <br /> Data Input...</p>
                    </div>
                  )}

                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px]"></div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Job Search View */
          <div className="max-w-5xl mx-auto">
            <header className="mb-10">
              <div className="text-cyan-600 text-xs font-black uppercase tracking-[0.2em] mb-2">Market Scanner // JS-02</div>
              <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight">Active <span className="text-slate-300">Job Pulse</span></h1>
              <p className="text-slate-500 mt-4 font-medium">Scan the global market for talent opportunities matching your neural profile.</p>
            </header>

            {/* Search Bar Container */}
            <div className="bg-white p-2 rounded-[30px] shadow-2xl shadow-slate-200 border border-slate-100 flex flex-col md:flex-row items-center gap-2 mb-12">
              <div className="flex-1 flex items-center gap-4 px-6 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                <input
                  type="text"
                  value={searchSkills}
                  onChange={(e) => setSearchSkills(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearchJobs()}
                  placeholder="Type skills separated by commas (e.g. React, Python, AWS)..."
                  className="w-full py-5 bg-transparent border-none focus:ring-0 text-slate-900 font-bold text-lg placeholder:text-slate-300 placeholder:font-medium"
                />
              </div>
              <button
                onClick={handleSearchJobs}
                disabled={isSearching}
                className="w-full md:w-auto px-10 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-xs rounded-[24px] hover:bg-slate-800 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSearching ? "Scanning Network..." : "Initialize Scan"}
              </button>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.length > 0 ? (
                jobs.map((job, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-[35px] border border-slate-100 hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-50/50 transition-all group animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-600 font-black group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm">
                        {job.Company_Name?.charAt(0) || "J"}
                      </div>
                      <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-full">Active</span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{job.job_role || "Technical Role"}</h3>
                    <p className="text-slate-400 font-bold text-xs uppercase mb-6">{job.Company_Name} // {job.Industry}</p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {job.skills?.split(',').slice(0, 3).map((skill: string, sIdx: number) => (
                        <span key={sIdx} className="px-3 py-1.5 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-lg border border-slate-100">
                          {skill.trim()}
                        </span>
                      ))}
                      <span className="px-3 py-1.5 bg-indigo-50 text-indigo-500 text-[10px] font-bold rounded-lg border border-indigo-100">
                        + More
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-300 uppercase underline decoration-indigo-200">Base Potential</span>
                        <span className="text-slate-900 font-black tracking-tighter text-lg">${(Math.random() * 50 + 80).toFixed(1)}k+</span>
                      </div>
                      <button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all order-last">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                      </button>
                    </div>
                  </div>
                ))
              ) : !isSearching && (
                <div className="col-span-full py-24 text-center">
                  <div className="text-slate-200 mb-6 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" /><path d="M21 15a2 2 0 0 1-2 2H5l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                  </div>
                  <h2 className="text-xl font-black text-slate-300 uppercase tracking-widest">No Active Nodes Found</h2>
                  <p className="text-slate-400 font-medium max-w-sm mx-auto mt-2">Adjust your skill vector and re-initialize the market scanner.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}