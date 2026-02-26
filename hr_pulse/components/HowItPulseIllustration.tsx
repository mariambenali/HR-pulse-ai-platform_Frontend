"use client";

import React from 'react';

export default function HowItPulseIllustration() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 600"
            className="w-full h-auto drop-shadow-2xl"
        >
            <defs>
                {/* Colors: #0891b2 (Teal-600), #22d3ee (Cyan-400), #0ea5e9 (Sky-500) */}
                <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="50%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="softGlow">
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <style>
                    {`
                        .node { animation: nodePulse 3s ease-in-out infinite; }
                        @keyframes nodePulse {
                            0%, 100% { transform: scale(1); opacity: 0.8; }
                            50% { transform: scale(1.3); opacity: 1; }
                        }
                        .line { stroke-dasharray: 4 4; animation: dashMove 20s linear infinite; }
                        @keyframes dashMove {
                            to { stroke-dashoffset: -100; }
                        }
                        .particle { animation: flow 4s linear infinite; }
                        @keyframes flow {
                            0% { offset-distance: 0%; opacity: 0; }
                            20% { opacity: 1; }
                            80% { opacity: 1; }
                            100% { offset-distance: 100%; opacity: 0; }
                        }
                        .brain-float { animation: floatBrain 6s ease-in-out infinite; }
                        @keyframes floatBrain {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-15px); }
                        }
                    `}
                </style>
            </defs>

            {/* Background Base */}
            <rect width="600" height="600" fill="white" />

            {/* Subtle background circles for glassmorphism feel */}
            <circle cx="300" cy="300" r="250" fill="#f0f9ff" opacity="0.5" />
            <circle cx="200" cy="200" r="100" fill="#ecfeff" opacity="0.4" />
            <circle cx="450" cy="400" r="120" fill="#f0f9ff" opacity="0.3" />

            <g className="brain-float" transform-origin="300 300">
                {/* The "Brain" Structure - Abstract technological representation */}
                {/* Left Hemisphere */}
                <path
                    d="M300,100 C220,100 150,160 150,250 C150,340 220,420 300,420"
                    fill="none"
                    stroke="url(#brainGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.8"
                    filter="url(#softGlow)"
                />
                {/* Right Hemisphere */}
                <path
                    d="M300,100 C380,100 450,160 450,250 C450,340 380,420 300,420"
                    fill="none"
                    stroke="url(#brainGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.8"
                    filter="url(#softGlow)"
                />

                {/* Internal Neural Network Grid */}
                {/* These will be animated lines and nodes */}
                <g className="neural-network">
                    {/* Horizontal Connections */}
                    <line x1="200" y1="200" x2="400" y2="200" stroke="#0ea5e9" strokeWidth="1" opacity="0.3" className="line" />
                    <line x1="170" y1="280" x2="430" y2="280" stroke="#22d3ee" strokeWidth="1" opacity="0.3" className="line" />
                    <line x1="220" y1="360" x2="380" y2="360" stroke="#0891b2" strokeWidth="1" opacity="0.3" className="line" />

                    {/* Vertical Connections */}
                    <line x1="300" y1="120" x2="300" y2="400" stroke="#0ea5e9" strokeWidth="2" opacity="0.2" className="line" />

                    {/* Diagonal Cross-connections */}
                    <path d="M220,180 Q300,250 380,320" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.4" />
                    <path d="M380,180 Q300,250 220,320" fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.4" />

                    {/* Nodes - Glowing points of data */}
                    {/* Hub 1 */}
                    <g transform="translate(300, 250)">
                        <circle r="12" fill="url(#brainGradient)" opacity="0.9" filter="url(#glow)" className="node" />
                        <circle r="6" fill="white" opacity="0.8" />
                    </g>

                    {/* Peripheral Nodes */}
                    <g transform="translate(200, 200)">
                        <circle r="8" fill="#0ea5e9" opacity="0.7" className="node" />
                    </g>
                    <g transform="translate(400, 200)">
                        <circle r="8" fill="#22d3ee" opacity="0.7" className="node" />
                    </g>
                    <g transform="translate(180, 300)">
                        <circle r="6" fill="#0891b2" opacity="0.7" className="node" />
                    </g>
                    <g transform="translate(420, 300)">
                        <circle r="6" fill="#0ea5e9" opacity="0.7" className="node" />
                    </g>
                    <g transform="translate(250, 380)">
                        <circle r="5" fill="#22d3ee" opacity="0.7" className="node" />
                    </g>
                    <g transform="translate(350, 380)">
                        <circle r="5" fill="#0891b2" opacity="0.7" className="node" />
                    </g>

                    {/* Digital "Pulse" particles along paths */}
                    <circle r="3" fill="#ffffff" filter="url(#glow)" className="particle">
                        <animateMotion
                            path="M300,100 C220,100 150,160 150,250"
                            dur="3s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle r="3" fill="#ffffff" filter="url(#glow)" className="particle">
                        <animateMotion
                            path="M300,100 C380,100 450,160 450,250"
                            dur="3.5s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle r="2" fill="#22d3ee" className="particle">
                        <animateMotion
                            path="M200,200 L400,200"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>

                {/* Central "AI Core" Floating Ring */}
                <circle cx="300" cy="250" r="100" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="10 20" opacity="0.2" className="sp2">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 300 250"
                        to="360 300 250"
                        dur="10s"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="300" cy="250" r="120" fill="none" stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="5 15" opacity="0.1" />
            </g>

            {/* Bottom Glass Card - HR-Pulse Data Label */}
            <g transform="translate(150, 480)">
                <rect width="300" height="60" rx="30" fill="white" fillOpacity="0.8" stroke="#e2e8f0" strokeWidth="1" />
                <circle cx="40" cy="30" r="10" fill="#22d3ee" />
                <text x="70" y="36" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="bold" fill="#1e293b">System Synchronized</text>
                <text x="240" y="36" fontFamily="Inter, sans-serif" fontSize="14" fill="#64748b" textAnchor="end">AI LIVE</text>
            </g>
        </svg>
    );
}
