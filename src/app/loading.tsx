"use client";
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--bg-primary)]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Floating glow orbs */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="relative flex flex-col items-center">
        {/* Outer glow ring */}
        <div className="absolute w-32 h-32 rounded-full bg-brand-500/20 blur-2xl animate-pulse" />
        
        {/* Logo Container */}
        <div className="relative mb-8">
          {/* Rotating rings */}
          <div className="absolute inset-0 w-24 h-24 -m-4">
            <div className="absolute inset-0 rounded-full border-2 border-brand-500/30 animate-spin" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-2 rounded-full border-2 border-brand-400/20 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
          </div>
          
          {/* Logo - Willsmeet "W" Design */}
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Stylized W with connection/meeting concept */}
              <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" className="text-brand-400" style={{ stopColor: 'currentColor' }} />
                  <stop offset="100%" className="text-brand-600" style={{ stopColor: 'currentColor' }} />
                </linearGradient>
              </defs>
              
              {/* Modern W shape */}
              <path
                d="M15,25 L30,75 L40,45 L50,75 L60,45 L70,75 L85,25"
                fill="none"
                stroke="url(#logo-gradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse"
              />
              
              {/* Connection dots - representing "meet" */}
              <circle cx="50" cy="50" r="4" fill="url(#logo-gradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="30" cy="60" r="3" fill="url(#logo-gradient)" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
              <circle cx="70" cy="60" r="3" fill="url(#logo-gradient)" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
            </svg>
          </div>
        </div>
        
        {/* Brand name */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white font-display tracking-wider">
            <span className="gradient-text">Willsmeet</span>
          </h1>
          <p className="text-xs text-center text-gray-500 mt-1 tracking-widest uppercase">
            Office Solutions
          </p>
        </div>
        
        {/* Progress bar */}
        <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-brand-400 to-brand-600 rounded-full animate-loading-bar" />
        </div>
        
        {/* Loading text */}
        <p className="mt-4 text-sm font-medium text-gray-400 animate-pulse">
          Loading your experience...
        </p>
      </div>
      
      <style jsx>{`
        @keyframes loading-bar {
          0% {
            width: 0%;
            transform: translateX(0);
          }
          50% {
            width: 70%;
          }
          100% {
            width: 100%;
          }
        }
        
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}