import Head from 'next/head';
import Image from 'next/image';
import Navbar from "@/components/navbar";
import HeroIllustration from "@/components/HeroIllustration";
import HowItPulseIllustration from "@/components/HowItPulseIllustration";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-mesh font-sans text-slate-800 overflow-x-hidden">
      <Head>
        <title>HR-Pulse.AI | Precision Talent Intelligence</title>
        <meta name="description" content="Enterprise AI recruitment and HR analytics platform for data-driven teams." />
      </Head>

      <Navbar />

      {/* Floating Decorative Blobs */}
      <div className="blob top-[-10%] left-[-10%] scale-150 opacity-40"></div>
      <div className="blob bottom-[10%] right-[-10%] scale-125 opacity-30 animation-delay-2000" style={{ background: 'linear-gradient(180deg, rgba(34, 211, 238, 0.15) 0%, rgba(79, 70, 229, 0.1) 100%)' }}></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-50/80 backdrop-blur-sm text-indigo-700 text-xs font-bold uppercase tracking-[0.2em] mb-8 border border-indigo-100/50 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                </span>
                Intelligence Stratégique RH
              </div>
              <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight font-display">
                Precision <span className="text-gradient">Talent</span> Analytics
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Optimize your human capital with enterprise-grade AI. Predict salaries, map skills, and unlock real-time workforce insights in seconds.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                <button className="px-12 py-5 bg-indigo-600 text-white font-bold rounded-2xl shadow-2xl shadow-indigo-300/40 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all duration-300">
                  Deploy AI Console
                </button>
                <button className="px-12 py-5 bg-white/50 backdrop-blur-md text-slate-900 font-bold rounded-2xl border border-white/80 hover:bg-white hover:border-indigo-200 transition-all shadow-xl shadow-slate-200/20">
                  Interactive Demo
                </button>
              </div>

              {/* Stats Bar */}
              <div className="mt-16 flex items-center justify-center lg:justify-start gap-12 border-t border-slate-200/50 pt-10">
                <div>
                  <div className="text-3xl font-extrabold text-slate-900 font-display">98%</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Accuracy</div>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900 font-display">0.8s</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Latency</div>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900 font-display">12M+</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Data Points</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative space-y-8">
              {/* Floating Dashboard Card Mockup Top */}


              <div className="relative z-10 max-w-[600px] mx-auto transition-transform duration-700 hover:scale-[1.02]">
                <HeroIllustration />
              </div>

              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[300%] bg-indigo-400/20 rounded-full blur-[120px] -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 glass border-y border-white/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-80 transition-all duration-500">
            <span className="text-xl font-black text-slate-400 tracking-tighter">TECHLEAD</span>
            <span className="text-xl font-black text-slate-400 tracking-tighter">DATACORE</span>
            <span className="text-xl font-black text-slate-400 tracking-tighter">QUASAR</span>
            <span className="text-xl font-black text-slate-400 tracking-tighter">NEURALIS</span>
            <span className="text-xl font-black text-slate-400 tracking-tighter">SYNERGY</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden" id="features">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 font-display tracking-tight">Full-Stack AI <span className="text-gradient">Capabilities</span></h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-light">
              One ecosystem to manage your entire talent lifecycle with mathematical precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="p-10 glass rounded-[40px] card-dashboard border border-white/80 group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-indigo-200 group-hover:rotate-6 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">Salary Projection</h3>
              <p className="text-slate-500 leading-relaxed font-light mb-6">
                Market-accurate salary forecasting using 12M+ data points across geo-locations and niche skillsets.
              </p>
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Core Module</span>
                <span className="text-xs font-bold text-slate-300">v4.2</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-10 glass rounded-[40px] card-dashboard border border-white/80 group mt-8 md:mt-0">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-700 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-cyan-200 group-hover:rotate-6 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">Neural Skill Mapping</h3>
              <p className="text-slate-500 leading-relaxed font-light mb-6">
                Map candidate potentials with deep learning. Identify hidden skills and cultural alignment automatically.
              </p>
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Active NLP</span>
                <span className="text-xs font-bold text-slate-300">Live</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-10 glass rounded-[40px] card-dashboard border border-white/80 group">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-slate-300 group-hover:rotate-6 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-display">Predictive Insights</h3>
              <p className="text-slate-500 leading-relaxed font-light mb-6">
                Actionable HR intelligence. Predict turnover rates and future hiring needs before they arise.
              </p>
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Enterprise Only</span>
                <span className="text-xs font-bold text-slate-300">Custom</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 relative" id="how-it-works">
        <div className="container mx-auto px-6">
          <div className="glass p-16 md:p-24 rounded-[60px] flex flex-col lg:flex-row items-center gap-24 overflow-hidden border border-white/80">
            <div className="lg:w-1/2 relative order-2 lg:order-1">
              <div className="relative z-10 animate-float max-w-[500px] mx-auto drop-shadow-[0_35px_35px_rgba(79,70,229,0.15)]">
                <HowItPulseIllustration />
              </div>
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-100/40 rounded-full blur-[100px] -z-10"></div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="text-xs font-black text-indigo-600 uppercase tracking-[0.3em] mb-4">Neural Workflow</div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-10 font-display tracking-tight">How it <span className="text-gradient">Pulse</span></h2>
              <div className="space-y-12">
                {[
                  { id: "01", title: "Ingestion Data", desc: "Automate raw data harvesting across global recruitment channels using secure neural endpoints." },
                  { id: "02", title: "AI Synapse Processing", desc: "Proprietary NLP engines restructure unstructured talent data into multidimensional skill vectors." },
                  { id: "03", title: "Strategic Synthesis", desc: "Generate board-ready insights and predictive models to de-risk high-stakes hiring decisions." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-16 h-16 rounded-[24px] bg-white shadow-xl shadow-slate-100 flex items-center justify-center text-2xl font-black text-slate-900 font-display border border-slate-50 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      {step.id}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 font-display">{step.title}</h4>
                      <p className="text-slate-500 font-light leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="relative p-12 md:p-24 rounded-[60px] text-center overflow-hidden bg-slate-900">
            {/* Abstract background for CTA */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 select-none pointer-events-none">
              <div className="blob top-[-50%] left-[-50%] scale-150 rotate-45" style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)', filter: 'blur(120px)' }}></div>
              <div className="blob bottom-[-50%] right-[-50%] scale-150 -rotate-45" style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)', filter: 'blur(120px)' }}></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-extrabold text-white mb-8 font-display tracking-tight">Ready to <span className="text-indigo-400 italic">Pulse?</span></h2>
              <p className="text-xl text-slate-400 mb-14 max-w-2xl mx-auto font-light leading-relaxed">
                Join the global elite of data-driven HR teams. Start your high-performance transformation today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="px-14 py-6 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition transform hover:scale-105 active:scale-95 shadow-2xl shadow-indigo-500/30">
                  Begin Free Evaluation
                </button>
                <button className="px-14 py-6 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-2xl hover:bg-white/20 transition transform hover:scale-105 active:scale-95">
                  Request Architect Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-8 scale-110 origin-left">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100">
                  <div className="w-5 h-5 bg-white rounded-full opacity-80"></div>
                </div>
                <span className="font-extrabold text-2xl tracking-tight text-slate-900 font-display uppercase">HR-Pulse<span className="text-indigo-600">.AI</span></span>
              </div>
              <p className="text-slate-400 max-w-xs leading-loose font-light">
                Enterprise-grade talent intelligence platform powered by advanced NLP and neural networking.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Platform</h5>
              <ul className="space-y-4 text-slate-500 font-light">
                <li><a href="#" className="hover:text-indigo-600 transition">Neural Insights</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Salary Predictor</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Talent Mapping</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Company</h5>
              <ul className="space-y-4 text-slate-500 font-light">
                <li><a href="#" className="hover:text-indigo-600 transition">Architecture</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Compliance</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition">Privacy Protocol</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-slate-400">
            <p>© 2026 HR-Pulse Neural Platforms. All rights reserved.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-indigo-600 transition">Legal</a>
              <a href="#" className="hover:text-indigo-600 transition">Security</a>
              <a href="#" className="hover:text-indigo-600 transition">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}