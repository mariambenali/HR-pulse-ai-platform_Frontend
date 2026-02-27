import Head from 'next/head';
import Image from 'next/image';
import Navbar from "@/components/navbar";
import HeroIllustration from "@/components/HeroIllustration";
import HowItPulseIllustration from "@/components/HowItPulseIllustration";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Head>
        <title>HR-Pulse | AI Recruitment Solutions</title>
        <meta name="description" content="Modernize your recruitment process with HR-Pulse's AI-driven talent insights and salary prediction tools." />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold uppercase tracking-wider mb-6 animate-fade-in">
                Next-Gen HR Technology
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                Redefining <span className="text-gradient">Talent</span> Acquisition
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                HR-Pulse transforms raw data into intelligent insights. From automated salary predictions to deep skill analysis, we empower HR teams to make data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button className="px-10 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all transform hover:-translate-y-1">
                  Start Projecting
                </button>
                <button className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-2xl border-2 border-indigo-100 hover:border-indigo-600 hover:bg-slate-50 transition-all transform hover:-translate-y-1">
                  View Demo
                </button>
              </div>
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
                <span className="font-bold text-slate-400">TRUSTED BY</span>
                <div className="flex gap-6">
                  {/* Mock logos */}
                  <div className="w-8 h-8 bg-slate-400 rounded-lg"></div>
                  <div className="w-8 h-8 bg-slate-400 rounded-full"></div>
                  <div className="w-8 h-8 bg-slate-400 rounded-md rotate-45"></div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 animate-float max-w-[560px] mx-auto">
                <HeroIllustration />
              </div>
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-100 rounded-full blur-[100px] opacity-40 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Waves Animation */}
        <div className="wave-container scale-y-150">
          <svg className="wave wave-1" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#f8fafc" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,96C960,96,1056,160,1152,154.7C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="wave wave-2" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="rgba(238,242,255,0.7)" d="M0,192L48,197.3C96,203,192,213,288,192C384,171,480,117,576,122.7C624,128,720,192,816,202.7C912,213,1008,171,1104,138.7C1200,107,1296,85,1344,74.7L1392,64L1392,320L1344,320C1296,320,1200,320,1104,320C1008,320,912,320,816,320C720,320,624,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg className="wave wave-3" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="rgba(238,242,255,0.5)" d="M0,64L48,85.3C96,107,192,149,288,154.7C384,160,480,128,576,112C672,96,768,96,864,122.7C960,149,1056,203,1152,229.3C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Powerful AI Features</h2>
            <p className="text-slate-600 max-w-2xl mx-auto italic">Everything you need to modernize your HR workflow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Salary Prediction</h3>
              <p className="text-slate-600 leading-relaxed">
                Utilize advanced machine learning models to predict market-accurate salaries based on skills, experience, and industry trends.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Skill Analysis</h3>
              <p className="text-slate-600 leading-relaxed">
                Automatically extract and analyze candidate skills from resumes to find the perfect match for your specific requirements.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Talent Insights</h3>
              <p className="text-slate-600 leading-relaxed">
                Gain deep insights into your talent pool with structured data visualization and intelligent classification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white" id="how-it-works">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 animate-float max-w-[500px] mx-auto">
                <HowItPulseIllustration />
              </div>
              {/* Decorative Circle Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8">How it <span className="text-gradient">Pulse</span></h2>
              <ul className="space-y-8">
                <li className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white font-bold rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Ingest Data</h4>
                    <p className="text-slate-600">Upload resumes or job descriptions in various formats (PDF, DOCX, etc.) directly into our neural analyzer.</p>
                  </div>
                </li>
                <li className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white font-bold rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">AI Processing</h4>
                    <p className="text-slate-600">Our NLP models parse and structure unstructured text into clean, searchable, and intelligent data entities.</p>
                  </div>
                </li>
                <li className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white font-bold rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Make Decisions</h4>
                    <p className="text-slate-600">Get predictive analysis on salaries, skills, and culture-fit to close the perfect talent match faster than ever.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-indigo-900 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Built for Modern <br /><span className="text-indigo-400">HR Teams</span></h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-500 mt-1 flex-shrink-0"></div>
                  <p className="text-indigo-100 italic"> "HR-Pulse allowed us to reduce our screening time by 60% while improving candidate quality."</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-500 mt-1 flex-shrink-0"></div>
                  <p className="text-indigo-100 italic">"The salary prediction model is scary accurate. It's our go-to tool for budget planning."</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="p-6 bg-indigo-800/50 rounded-3xl border border-indigo-700">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-indigo-300 text-sm uppercase font-bold tracking-widest">Accuracy</div>
              </div>
              <div className="p-6 bg-indigo-800/50 rounded-3xl border border-indigo-700 mt-8">
                <div className="text-3xl font-bold mb-2">2k+</div>
                <div className="text-indigo-300 text-sm uppercase font-bold tracking-widest">Analyses</div>
              </div>
              <div className="p-6 bg-indigo-800/50 rounded-3xl border border-indigo-700 -mt-8">
                <div className="text-3xl font-bold mb-2">15m</div>
                <div className="text-indigo-200 text-sm uppercase font-bold tracking-widest">Onboarding</div>
              </div>
              <div className="p-6 bg-indigo-800/50 rounded-3xl border border-indigo-700">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-indigo-300 text-sm uppercase font-bold tracking-widest">AI Support</div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-800 skew-x-12 translate-x-1/2"></div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="glass p-12 md:p-20 rounded-[40px] text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Ready to Pulse?</h2>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                Join hundreds of forward-thinking companies already using HR-Pulse to build their dream teams.
              </p>
              <button className="px-12 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition transform hover:scale-105 shadow-2xl">
                Get Started for Free
              </button>
            </div>
            {/* Background Decorations */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
              <span className="font-bold text-indigo-900 uppercase tracking-tighter">HR-Pulse</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-indigo-600 transition">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600 transition">Terms of Service</a>
              <a href="#" className="hover:text-indigo-600 transition">Contact</a>
            </div>
            <p className="text-slate-400 text-sm">© 2026 HR-Pulse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}