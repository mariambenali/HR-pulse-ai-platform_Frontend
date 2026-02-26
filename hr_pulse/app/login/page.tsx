"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false); // Bascule entre Login et Register
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // États pour les champs du formulaire
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const BASE_URL = "http://127.0.0.1:8000"; // URl fastapi

    const endpoint = isRegister ? `${BASE_URL}/register` : `${BASE_URL}/login`; 


    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Si succès, on redirige vers la page predict
        router.push('/predict');
      } else {
        alert("Erreur lors de l'authentification");
      }
    } catch (error) {
      console.error("Erreur server:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden p-4">
      
      {/* Forme violette en arrière-plan (Style HR-Pulse) */}
      <div className="absolute top-0 right-0-z-0 w-1/2 h-full bg-indigo-100 rounded-bl-[300px] opacity-60 hidden md:block"></div>

      <div className="z-10 bg-white shadow-2xl rounded-3xl flex max-w-4xl w-full overflow-hidden">
        
        {/* Côté Gauche : Formulaire */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-6 h-6 bg-indigo-500 rounded-full"></div>
            <span className="font-bold text-indigo-900 uppercase tracking-tighter">HR-Pulse</span>
          </div>

          <h2 className="text-3xl font-extrabold text-slate-800 mb-2 uppercase tracking-tight">
            {isRegister ? "Créer un compte" : "Bon retour"}
          </h2>
          <p className="text-slate-500 mb-8 text-sm">
            {isRegister ? "Inscrivez-vous pour accéder à nos outils IA." : "Connectez-vous pour faire vos prediction."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Email</label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-indigo-500 transition text-slate-900"
                placeholder="rh@exemple.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Mot de passe</label>
              <input 
                type="password" 
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-indigo-500 transition text-slate-900"
                placeholder="••••••••"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition transform hover:-translate-y-0.5"
            >
              {loading ? "Chargement..." : isRegister ? "S'inscrire" : "Se connecter"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            {isRegister ? "Déjà un compte ?" : "Pas encore de compte ?"} 
            <button 
              onClick={() => setIsRegister(!isRegister)} 
              className="ml-2 text-indigo-600 font-bold hover:underline"
            >
              {isRegister ? "Se connecter" : "S'inscrire"}
            </button>
          </p>
        </div>

        {/* Côté Droit : Visuel */}
        <div className="hidden md:flex md:w-1/2 bg-indigo-50 items-center justify-center p-12 relative text-center">
          
          <div className="z-10">
            <img 
                src="/illustration-placeholder1.png" 
                alt="Recruitment Illustration" 
                className="w-full h-auto object-contain"
              />
             <p className="text-indigo-400 text-sm mt-2 max-w-[200px] mx-auto italic">
               Transformer les données brutes en décisions intelligentes.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}