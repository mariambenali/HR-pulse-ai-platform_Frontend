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
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                </radialGradient>

                <radialGradient id="n2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#2563eb" />
                </radialGradient>

                <radialGradient id="h2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
                </radialGradient>

                <linearGradient id="cg2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#020617" />
                </linearGradient>

                <clipPath id="clip-xlarge">
                    <circle cx="0" cy="0" r="85" />
                </clipPath>
                <clipPath id="clip-large">
                    <circle cx="0" cy="0" r="72" />
                </clipPath>
                <clipPath id="clip-medium">
                    <circle cx="0" cy="0" r="62" />
                </clipPath>
                <clipPath id="clip-small">
                    <circle cx="0" cy="0" r="52" />
                </clipPath>
                <clipPath id="clip-micro">
                    <circle cx="0" cy="0" r="40" />
                </clipPath>

                <filter id="g2s">
                    <feGaussianBlur stdDeviation="2" result="b" />
                    <feMerge>
                        <feMergeNode in="b" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <filter id="ds2a">
                    <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#3b82f6" floodOpacity="0.5" />
                </filter>

                <filter id="ds2b">
                    <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.4" />
                </filter>

                <style>
                    {`
            .a1 { animation: ai 0.8s ease-out 0.1s both; }
            .a2 { animation: ai 0.8s ease-out 0.3s both; }
            .a3 { animation: ai 0.8s ease-out 0.5s both; }
            .a4 { animation: ai 0.8s ease-out 0.7s both; }
            .a5 { animation: ai 0.8s ease-out 0.9s both; }
            
            @keyframes ai {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .b1 { animation: bt 4s ease-in-out infinite; }
            .b2 { animation: bt 4.5s ease-in-out infinite 0.7s; }
            .b3 { animation: bt 5s ease-in-out infinite 1.4s; }
            
            @keyframes bt {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            
            .ld2 {
                stroke-dasharray: 5 5;
                animation: ld2 3s linear infinite;
            }
            
            @keyframes ld2 {
                to { stroke-dashoffset: -40; }
            }
            
            .cp2 {
                animation: cp2 4s ease-in-out infinite;
                transform-origin: 280px 330px;
            }
            
            @keyframes cp2 {
                0%, 100% { opacity: 0.15; transform: scale(1); }
                50% { opacity: 0.35; transform: scale(1.15); }
            }
            
            .brain-pulse {
                animation: pulse 3s ease-in-out infinite;
                transform-origin: 280px 330px;
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); filter: brightness(1); }
                50% { transform: scale(1.03); filter: brightness(1.1); }
            }
        `}
                </style>
            </defs>


            <g stroke="#3b82f6" strokeWidth="1" opacity="0.2">
                <line x1="100" y1="160" x2="252" y2="308" className="ld2 a1" />
                <line x1="460" y1="165" x2="308" y2="308" className="ld2 a2" />
                <line x1="65" y1="330" x2="240" y2="330" className="ld2 a5" />
                <line x1="495" y1="330" x2="320" y2="330" className="ld2 a5" />
                <line x1="118" y1="540" x2="256" y2="358" className="ld2 a4" />
                <line x1="440" y1="545" x2="308" y2="358" className="ld2 a4" />
                <line x1="280" y1="95" x2="280" y2="245" className="ld2 a3" />
                <line x1="280" y1="620" x2="280" y2="380" className="ld2 a5" />
            </g>

            {/* CENTRAL ANIMATED BRAIN */}
            <g className="b2 a3 brain-pulse">
                <circle cx="280" cy="330" r="90" fill="url(#h2)" className="cp2" />
                <circle cx="280" cy="330" r="85" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />

                <path
                    d="M280,285 C255,285 235,305 235,330 C235,355 255,375 280,375 C305,375 325,355 325,330 C325,305 305,285 280,285 Z"
                    fill="#0f172a"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                    filter="url(#g2s)"
                />

                <circle cx="280" cy="330" r="35" fill="url(#c2)" filter="url(#g2s)" />

                <text x="280" y="326" fontFamily="monospace" fontSize="7" fill="rgba(255,255,255,0.8)" textAnchor="middle" letterSpacing="1">NEURAL</text>
                <text x="280" y="340" fontFamily="Georgia, serif" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">AI</text>
            </g>

            {/* Floating Data Points */}
            <g className="b1 a2" opacity="0.7">
                <circle cx="190" cy="246" r="16" fill="#0f172a" stroke="#3b82f6" strokeWidth="1" filter="url(#g2s)" />
                <text x="190" y="250" fontFamily="monospace" fontSize="6" fill="#60a5fa" textAnchor="middle">DATA</text>
            </g>

            <g className="b3 a2" opacity="0.7">
                <circle cx="368" cy="248" r="16" fill="#0f172a" stroke="#3b82f6" strokeWidth="1" filter="url(#g2s)" />
                <text x="368" y="252" fontFamily="monospace" fontSize="6" fill="#60a5fa" textAnchor="middle">SYNC</text>
            </g>

            {/* EXTRA LARGE AVATAR – Marcus Chen */}
            <g className="b1 a3" filter="url(#ds2a)">
                <g transform="translate(280, 85)">
                    <circle r="90" fill="#0f172a" stroke="#3b82f6" strokeWidth="2.5" />
                    <image
                        href="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                        x="-85" y="-85" width="170" height="170"
                        clipPath="url(#clip-xlarge)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                </g>
            </g>

            <g className="a3">
                <text x="280" y="195" fontFamily="Georgia, serif" fontSize="14" fontWeight="bold" fill="#f8fafc" textAnchor="middle">Marcus Chen</text>
                <text x="280" y="210" fontFamily="system-ui, sans-serif" fontSize="11" fill="#60a5fa" textAnchor="middle" letterSpacing="0.5">Systems Architect</text>
            </g>

            {/* LARGE AVATARS */}
            <g className="b2 a1" filter="url(#ds2a)">
                <g transform="translate(95, 140)">
                    <image
                        href="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face"
                        x="-72" y="-72" width="144" height="144"
                        clipPath="url(#clip-large)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                    <circle r="75" fill="none" stroke="#3b82f6" strokeWidth="2" />
                </g>
            </g>
            <text x="95" y="235" fontFamily="Georgia, serif" fontSize="11" fontWeight="bold" fill="#e2e8f0" textAnchor="middle" className="a1">Priya Nair</text>

            <g className="b3 a2" filter="url(#ds2a)">
                <g transform="translate(465, 145)">
                    <image
                        href="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
                        x="-72" y="-72" width="144" height="144"
                        clipPath="url(#clip-large)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                    <circle r="75" fill="none" stroke="#3b82f6" strokeWidth="2" />
                </g>
            </g>
            <text x="465" y="240" fontFamily="Georgia, serif" fontSize="11" fontWeight="bold" fill="#e2e8f0" textAnchor="middle" className="a2">Tom Erikson</text>

            {/* MEDIUM AVATARS */}
            <g className="b2 a4" filter="url(#ds2a)">
                <g transform="translate(120, 560)">
                    <image
                        href="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face"
                        x="-62" y="-62" width="124" height="124"
                        clipPath="url(#clip-medium)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                    <circle r="65" fill="none" stroke="#3b82f6" strokeWidth="2" />
                </g>
            </g>
            <text x="120" y="640" fontFamily="Georgia, serif" fontSize="11" fontWeight="bold" fill="#e2e8f0" textAnchor="middle" className="a4">Aisha Diallo</text>

            <g className="b1 a4" filter="url(#ds2a)">
                <g transform="translate(440, 565)">
                    <image
                        href="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&fit=crop&crop=face"
                        x="-62" y="-62" width="124" height="124"
                        clipPath="url(#clip-medium)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                    <circle r="65" fill="none" stroke="#3b82f6" strokeWidth="2" />
                </g>
            </g>
            <text x="440" y="645" fontFamily="Georgia, serif" fontSize="11" fontWeight="bold" fill="#e2e8f0" textAnchor="middle" className="a4">Elena R.</text>

            {/* SMALL AVATARS */}
            <g className="b1 a5" filter="url(#ds2b)">
                <g transform="translate(60, 340)">
                    <image
                        href="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face"
                        x="-52" y="-52" width="104" height="104"
                        clipPath="url(#clip-small)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                    <circle r="55" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
                </g>
            </g>
            <text x="60" y="410" fontFamily="Georgia, serif" fontSize="10" fontWeight="bold" fill="#cbd5e1" textAnchor="middle" className="a5">Sarah J.</text>

            <g className="b2 a5" filter="url(#ds2b)">
                <g transform="translate(500, 340)">
                    <image
                        href="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face"
                        x="-52" y="-52" width="104" height="104"
                        clipPath="url(#clip-small)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                    <circle r="55" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
                </g>
            </g>
            <text x="500" y="410" fontFamily="Georgia, serif" fontSize="10" fontWeight="bold" fill="#cbd5e1" textAnchor="middle" className="a5">Leon Brandt</text>

            {/* MICRO AVATARS */}
            <g className="b3 a3" filter="url(#ds2b)">
                <g transform="translate(280, 650)">
                    <image
                        href="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                        x="-40" y="-40" width="80" height="80"
                        clipPath="url(#clip-micro)"
                        preserveAspectRatio="xMidYMid slice"
                    />
                    <circle r="43" fill="none" stroke="#3b82f6" strokeWidth="1" />
                </g>
            </g>
            <text x="280" y="705" fontFamily="Georgia, serif" fontSize="10" fontWeight="bold" fill="#cbd5e1" textAnchor="middle" className="a3">Maya Gupta</text>

            <g className="b1 a1" transform="translate(180, 45)" opacity="0.6" filter="url(#ds2b)">
                <circle r="35" fill="none" stroke="#3b82f6" strokeWidth="1" />
                <image
                    href="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
                    x="-32" y="-32" width="64" height="64"
                    clipPath="url(#clip-micro)"
                    preserveAspectRatio="xMidYMid slice"
                />
            </g>

            <g className="b2 a2" transform="translate(380, 45)" opacity="0.6" filter="url(#ds2b)">
                <circle r="35" fill="none" stroke="#3b82f6" strokeWidth="1" />
                <image
                    href="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
                    x="-32" y="-32" width="64" height="64"
                    clipPath="url(#clip-micro)"
                    preserveAspectRatio="xMidYMid slice"
                />
            </g>

        </svg>
    );
}
