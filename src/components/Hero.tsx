'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[var(--bg-primary)]">

      {/* ── Banner with Background Image ── */}
      <div className="relative min-h-[65vh] sm:min-h-[85vh] flex items-center">
        {/* Background image — cover on mobile for full bleed, contain on larger screens */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-contain"
          style={{ backgroundImage: "url('/assets/banners/Home page banner.png')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-black/20" />
        {/* Extra gradient on the right side for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent" />

        {/* Floating dots */}
        <div className="absolute top-32 left-20 w-3 h-3 bg-brand-400 rounded-full animate-pulse-glow" />
        <div className="absolute top-48 right-32 w-2 h-2 bg-brand-500 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-brand-300 rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />

        {/* Right-aligned heading content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="ml-auto max-w-2xl text-right">
            {/* Badge */}
            <div
              className={cn(
                'inline-flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5 mb-6 sm:mb-8 text-xs sm:text-sm font-medium rounded-full border transition-all duration-700',
                'bg-black/40 text-brand-400 border-brand-500/30 backdrop-blur-md',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Procurement</span>
            </div>

            {/* Heading */}
            <h1
              className={cn(
                'text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-[1.1] font-display transition-all duration-700 delay-100',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              AI-Powered,
              Lightning-Fast
              <br />
              <span className="gradient-text">Procurement</span>
              {' '}- All in
              <br className="hidden sm:block" />
              {' '}One Place
            </h1>

            {/* CTA on banner */}
            <div
              className={cn(
                'flex flex-wrap items-center justify-end gap-4 mt-8 transition-all duration-700 delay-200',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <Link
                href="/contact"
                className="btn-primary text-sm sm:text-base px-5 py-2.5 sm:px-8 sm:py-4 group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/solutions"
                className="btn-secondary text-sm sm:text-base px-5 py-2.5 sm:px-8 sm:py-4 font-medium"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Overlapping Info Section (rides up onto the banner) ── */}
      <div className="relative z-10 px-4 pb-16 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">

        {/* Subheading */}
        <p
          className={cn(
            'text-base sm:text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto transition-all duration-700 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          At Willsmeet, we believe office procurement should be simple, reliable, and future-ready.
          Our tech-enabled platform combines AI-driven demand forecasting, smart inventory planning,
          and direct manufacturer partnerships to deliver what businesses need - faster and smarter.
        </p>

        {/* Stats */}
        <div
          className={cn(
            'flex flex-wrap items-center justify-center gap-4 sm:gap-6 transition-all duration-700 delay-[400ms]',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <div className="px-4 py-3 sm:px-6 sm:py-4 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-xl">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-400">61%</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Delivered in 24hrs</div>
          </div>
          <div className="px-4 py-3 sm:px-6 sm:py-4 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-xl">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-400">97%</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Delivered in 48hrs</div>
          </div>
          <div className="px-4 py-3 sm:px-6 sm:py-4 rounded-2xl bg-black/50 border border-white/10 backdrop-blur-xl">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-400">3,000+</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Products Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}