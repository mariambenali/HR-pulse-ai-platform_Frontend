"use client";

import React from 'react';

export default function HeroIllustration() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 560 760"
            className="w-full h-auto drop-shadow-2xl rounded-[40px] overflow-hidden"
        >
            <defs>
                <radialGradient id="c2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#2a45cf" />
                    <stop offset="50%" stopColor="#2a45cf" />
                    <stop offset="100%" stopColor="#0e4f6a" />
                </radialGradient>
                <radialGradient id="n2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#2a45cf" />
                    <stop offset="100%" stopColor="#0369a1" />
                </radialGradient>
                <radialGradient id="h2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#2a45cf" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#2a45cf" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="cg2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#041a2e" />
                    <stop offset="100%" stopColor="#021020" />
                </linearGradient>
                <linearGradient id="bar2a" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2a45cf" />
                    <stop offset="100%" stopColor="#67e8f9" />
                </linearGradient>
                <linearGradient id="bar2b" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0e7490" />
                    <stop offset="100%" stopColor="#2a45cf" />
                </linearGradient>
                <filter id="g2s">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <filter id="ds2a">
                    <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor="#2a45cf" floodOpacity="0.55" />
                </filter>
                <filter id="ds2b">
                    <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#041a2e" floodOpacity="0.15" />
                </filter>

                <clipPath id="circleClip">
                    <circle cx="0" cy="0" r="50" />
                </clipPath>

                <style>
                    {`
            .a1{animation:ai 0.7s ease-out 0.1s both}
            .a2{animation:ai 0.7s ease-out 0.3s both}
            .a3{animation:ai 0.7s ease-out 0.5s both}
            .a4{animation:ai 0.7s ease-out 0.7s both}
            .a5{animation:ai 0.7s ease-out 0.9s both}
            @keyframes ai{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
            .b1{animation:bt 4s ease-in-out infinite}
            .b2{animation:bt 4.5s ease-in-out infinite 0.7s}
            .b3{animation:bt 5s ease-in-out infinite 1.4s}
            @keyframes bt{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
            .ld2{stroke-dasharray:7 5;animation:ld2 2.8s linear infinite}
            @keyframes ld2{to{stroke-dashoffset:-36}}
            .np2a{animation:np2 2s ease-in-out infinite}
            @keyframes np2{0%,100%{opacity:1}50%{opacity:0.3}}
            .cp2{animation:cp2 3.5s ease-in-out infinite;transform-origin:280px 330px}
            @keyframes cp2{0%,100%{opacity:0.18;transform:scale(1)}50%{opacity:0.45;transform:scale(1.1)}}
            .bd2{animation:bd2 1.5s ease-in-out infinite}
            @keyframes bd2{0%,100%{opacity:1}50%{opacity:0.2}}
            .sp2{animation:sp2 22s linear infinite;transform-origin:280px 330px}
            @keyframes sp2{from{transform:rotate(0)}to{transform:rotate(360deg)}}
            .barA{animation:bA 1.8s ease-out 1.2s both}
            @keyframes bA{from{width:0}to{width:105px}}
            .barB{animation:bB 1.8s ease-out 1.4s both}
            @keyframes bB{from{width:0}to{width:130px}}
            .barC{animation:bC 1.8s ease-out 1.6s both}
            @keyframes bC{from{width:0}to{width:88px}}
            .barD{animation:bD 1.8s ease-out 1.8s both}
            @keyframes bD{from{width:0}to{width:115px}}
            .brain-pulse{animation:pulse 2s ease-in-out infinite}
            @keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
          `}
                </style>
            </defs>

            {/* Crisp White Background */}
            <rect width="560" height="760" fill="white" />
            <circle cx="280" cy="330" r="240" fill="#f0fbff" opacity="0.4" />
            <circle cx="280" cy="330" r="220" fill="none" stroke="#2a45cf" strokeWidth="1" strokeDasharray="3 9" opacity="0.1" className="sp2" />

            {/* Connecting Lines */}
            <line x1="130" y1="165" x2="252" y2="308" stroke="#2a45cf" strokeWidth="1.5" opacity="0.3" className="ld2 a2" />
            <line x1="432" y1="168" x2="310" y2="308" stroke="#2a45cf" strokeWidth="1.5" opacity="0.3" className="ld2 a2" />
            <line x1="75" y1="370" x2="240" y2="335" stroke="#2a45cf" strokeWidth="1.5" opacity="0.3" className="ld2 a2" />
            <line x1="492" y1="380" x2="318" y2="335" stroke="#2a45cf" strokeWidth="1.5" opacity="0.3" className="ld2 a2" />
            <line x1="148" y1="545" x2="256" y2="358" stroke="#2a45cf" strokeWidth="1.5" opacity="0.3" className="ld2 a2" />
            <line x1="418" y1="550" x2="308" y2="358" stroke="#2a45cf" strokeWidth="1.5" opacity="0.3" className="ld2 a2" />

            {/* CENTRAL ANIMATED BRAIN */}
            <g className="b2 a3 brain-pulse" transform-origin="280 330">
                <circle cx="280" cy="330" r="85" fill="url(#h2)" className="cp2" />

                {/* Brain Silhouette/Path */}
                <path
                    d="M280,280 C250,280 230,300 230,330 C230,360 250,380 280,380 L280,380 C310,380 330,360 330,330 C330,300 310,280 280,280 Z"
                    fill="#041a2e"
                    stroke="#2a45cf"
                    strokeWidth="2"
                    filter="url(#g2s)"
                />

                {/* Neural Connections inside brain */}
                <g opacity="0.8">
                    <circle cx="255" cy="320" r="3" fill="#2a45cf" className="bd2" />
                    <circle cx="305" cy="320" r="3" fill="#2a45cf" className="bd2" />
                    <circle cx="280" cy="350" r="4" fill="#2a45cf" className="bd2" />
                    <path d="M255,320 L280,350 L305,320 M280,350 L280,380" fill="none" stroke="#2a45cf" strokeWidth="1" strokeDasharray="2 2" />
                </g>

                <circle cx="280" cy="330" r="32" fill="url(#c2)" filter="url(#g2s)" />
                <text x="280" y="326" fontFamily="'Courier New', monospace" fontSize="8" fill="rgba(255,255,255,0.7)" textAnchor="middle">NEURAL</text>
                <text x="280" y="340" fontFamily="Georgia, serif" fontSize="14" fontWeight="700" fill="white" textAnchor="middle">AI</text>
            </g>

            {/* Small nodes */}
            <g className="b1 a2"><circle cx="190" cy="246" r="16" fill="#041a2e" stroke="#2a45cf" strokeWidth="1.5" filter="url(#g2s)" /><circle cx="190" cy="246" r="10" fill="url(#n2)" /><text x="190" y="250" fontFamily="'Courier New',monospace" fontSize="7" fill="white" textAnchor="middle">$AI</text></g>
            <g className="b3 a2"><circle cx="368" cy="248" r="16" fill="#041a2e" stroke="#2a45cf" strokeWidth="1.5" filter="url(#g2s)" /><circle cx="368" cy="248" r="10" fill="url(#n2)" /><text x="368" y="252" fontFamily="'Courier New',monospace" fontSize="7" fill="white" textAnchor="middle">$AI</text></g>

            {/* AVATAR 1 – Priya Nair (ML Engineer) */}
            <g className="b1 a1" filter="url(#ds2a)">
                <g transform="translate(118, 132)">
                    <circle r="52" fill="#041a2e" stroke="#2a45cf" strokeWidth="2.5" />
                    <image
                        href="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&auto=format&fit=crop"
                        x="-50" y="-50" width="100" height="100"
                        clipPath="url(#circleClip)"
                    />
                    <circle r="50" fill="none" stroke="#2a45cf" strokeWidth="2.5" />
                </g>
            </g>
            <g className="a1">
                <text x="118" y="196" fontFamily="Georgia,serif" fontSize="12" fontWeight="700" fill="#1e293b" textAnchor="middle">Priya Nair</text>
                <text x="118" y="211" fontFamily="'Helvetica Neue',sans-serif" fontSize="10" fill="#2a45cf" textAnchor="middle">Machine Learning Engineer</text>
            </g>

            {/* AVATAR 2 – Tom Erikson (Data Scientist) */}
            <g className="b3 a2" filter="url(#ds2a)">
                <g transform="translate(440, 136)">
                    <circle r="52" fill="#041a2e" stroke="#2a45cf" strokeWidth="2.5" />
                    <image
                        href="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop"
                        x="-50" y="-50" width="100" height="100"
                        clipPath="url(#circleClip)"
                    />
                    <circle r="50" fill="none" stroke="#2a45cf" strokeWidth="2.5" />
                </g>
            </g>
            <g className="a2">
                <text x="440" y="200" fontFamily="Georgia,serif" fontSize="12" fontWeight="700" fill="#1e293b" textAnchor="middle">Tom Erikson</text>
                <text x="440" y="215" fontFamily="'Helvetica Neue',sans-serif" fontSize="10" fill="#2a45cf" textAnchor="middle">Data Scientist</text>
            </g>

            {/* AVATAR 3 – Aisha Diallo (Fullstack) */}
            <g className="b2 a4" filter="url(#ds2a)">
                <g transform="translate(118, 513)">
                    <circle r="52" fill="#041a2e" stroke="#2a45cf" strokeWidth="2.5" />
                    <image
                        href="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&auto=format&fit=crop"
                        x="-50" y="-50" width="100" height="100"
                        clipPath="url(#circleClip)"
                    />
                    <circle r="50" fill="none" stroke="#2a45cf" strokeWidth="2.5" />
                </g>
            </g>
            <g className="a4">
                <text x="118" y="578" fontFamily="Georgia,serif" fontSize="12" fontWeight="700" fill="#1e293b" textAnchor="middle">Aisha Diallo</text>
                <text x="118" y="593" fontFamily="'Helvetica Neue',sans-serif" fontSize="10" fill="#2a45cf" textAnchor="middle">Fullstack Developer</text>
            </g>

            {/* AVATAR 4 – Leon Brandt (DevOps) */}
            <g className="b1 a4" filter="url(#ds2a)">
                <g transform="translate(440, 520)">
                    <circle r="52" fill="#041a2e" stroke="#2a45cf" strokeWidth="2.5" />
                    <image
                        href="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&auto=format&fit=crop"
                        x="-50" y="-50" width="100" height="100"
                        clipPath="url(#circleClip)"
                    />
                    <circle r="50" fill="none" stroke="#2a45cf" strokeWidth="2.5" />
                </g>
            </g>
            <g className="a4">
                <text x="440" y="585" fontFamily="Georgia,serif" fontSize="12" fontWeight="700" fill="#1e293b" textAnchor="middle">Leon Brandt</text>
                <text x="440" y="600" fontFamily="'Helvetica Neue',sans-serif" fontSize="10" fill="#2a45cf" textAnchor="middle">DevOps Engineer</text>
            </g>

            {/* SALARY PREDICTION CARD */}
            <g className="a5 b3" filter="url(#ds2b)">
                <rect x="174" y="428" width="210" height="210" rx="18" fill="url(#cg2)" stroke="#2a45cf" strokeWidth="1.5" />
                <rect x="174" y="428" width="210" height="42" rx="18" fill="#062038" />
                <rect x="174" y="448" width="210" height="22" fill="#062038" />
                <text x="198" y="453" fontFamily="'Courier New',monospace" fontSize="10" fontWeight="700" fill="#2a45cf" letterSpacing="0.5">SALARY FORECAST</text>
                <circle cx="352" cy="449" r="2" fill="#2a45cf" /><circle cx="360" cy="449" r="2" fill="#2a45cf" /><circle cx="368" cy="449" r="2" fill="#2a45cf" />

                {/* Bars with countUp simulation */}
                <text x="192" y="486" fontFamily="'Courier New',monospace" fontSize="8" fill="#2a45cf">JUNIOR</text>
                <rect x="192" y="492" width="148" height="8" rx="4" fill="#062038" />
                <rect x="192" y="492" width="105" height="8" rx="4" fill="url(#bar2a)" className="barA" />
                <text x="352" y="502" fontFamily="'Courier New',monospace" fontSize="9" fill="#2a45cf" textAnchor="end">$72k</text>

                <text x="192" y="516" fontFamily="'Courier New',monospace" fontSize="8" fill="#2a45cf">MID-LEVEL</text>
                <rect x="192" y="522" width="148" height="8" rx="4" fill="#062038" />
                <rect x="192" y="522" width="130" height="8" rx="4" fill="url(#bar2b)" className="barB" />
                <text x="352" y="532" fontFamily="'Courier New',monospace" fontSize="9" fill="#2a45cf" textAnchor="end">$110k</text>

                <text x="192" y="546" fontFamily="'Courier New',monospace" fontSize="8" fill="#2a45cf">SENIOR</text>
                <rect x="192" y="552" width="148" height="8" rx="4" fill="#062038" />
                <rect x="192" y="552" width="88" height="8" rx="4" fill="url(#bar2a)" className="barC" />
                <text x="352" y="562" fontFamily="'Courier New',monospace" fontSize="9" fill="#2a45cf" textAnchor="end">$148k</text>

                <line x1="192" y1="608" x2="358" y2="608" stroke="#062038" strokeWidth="1" />
                <text x="192" y="624" fontFamily="'Courier New',monospace" fontSize="8" fill="#2a45cf">MODEL ACCURACY</text>
                <text x="358" y="624" fontFamily="Georgia,serif" fontSize="13" fontWeight="700" fill="#2a45cf" textAnchor="end">97.2%</text>
            </g>

            {/* Badge */}
            <g className="a1">
                <rect x="186" y="66" width="188" height="36" rx="18" fill="#041a2e" stroke="#2a45cf" strokeWidth="1.5" />
                <circle cx="212" cy="84" r="8" fill="url(#n2)" className="bd2" />
                <text x="228" y="88" fontFamily="'Courier New',monospace" fontSize="10" fontWeight="700" fill="#2a45cf">$ SALARY PREDICTOR</text>
            </g>
        </svg>
    );
}
