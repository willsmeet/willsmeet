'use client'

import Image from 'next/image'
import { Users, Linkedin } from 'lucide-react'

export default function Leadership() {
  return (
    <section id="leadership" className="relative overflow-hidden bg-[var(--bg-primary)]">
      <div className="px-4 sm:px-6 lg:px-8 py-12 mx-auto max-w-7xl">

        {/* ── MOBILE LAYOUT (hidden on sm+) ── */}
        <div className="sm:hidden rounded-3xl overflow-hidden border border-white/10 bg-zinc-950">
          <div className="flex min-h-[400px]">

            {/* Left: Text content */}
            <div className="flex-1 px-5 py-7 flex flex-col justify-center min-w-0">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-4 text-xs font-medium rounded-full bg-white/10 text-brand-400 border border-white/20 w-fit">
                <Users className="w-3.5 h-3.5" />
                Leadership
              </div>

              <h2 className="text-2xl font-bold text-white font-display mb-2 leading-tight">
                Meet Our <span className="gradient-text">Founder</span>
              </h2>

              <h3 className="text-lg font-bold text-white mb-0.5">
                Raju Lakhana
              </h3>
              <p className="text-brand-400 font-semibold text-sm mb-4">
                Founder & CEO
              </p>

              <p className="text-gray-400 text-xs leading-relaxed mb-5">
                He didn't inherit leadership — he earned it, step by step. Two decades of hands-on learning shaped a leader known for discipline, scale, and results.
              </p>

              {/* Stats */}
              <div className="flex gap-5 mb-5">
                <div>
                  <div className="text-xl font-bold text-brand-400">20+</div>
                  <div className="text-[11px] text-gray-400 leading-tight">Years Exp.</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-brand-400">500+</div>
                  <div className="text-[11px] text-gray-400 leading-tight">Clients</div>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/raju-lakhana-3311a5206"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0077b5] text-white rounded-xl text-xs font-medium hover:bg-[#006299] transition-all duration-300 w-fit"
              >
                <Linkedin className="w-3.5 h-3.5" />
                Connect on LinkedIn
              </a>
            </div>

            {/* Right: Founder image */}
            <div className="w-[44%] relative overflow-hidden flex-shrink-0">
              <Image
                src="/assets/banners/Founder Page.png"
                alt="Raju Lakhana - Founder & CEO"
                fill
                className="object-cover"
                style={{ objectPosition: '80% top' }}
                sizes="44vw"
                priority
              />
              {/* Left-side fade to blend into text */}
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/50 via-transparent to-transparent" />
            </div>

          </div>
        </div>

        {/* ── TABLET / DESKTOP LAYOUT (hidden on mobile) ── */}
        <div className="hidden sm:block relative rounded-3xl overflow-hidden">
          {/* Founder Banner Image */}
          <Image
            src="/assets/banners/Founder Page.png"
            alt="Raju Lakhana - Founder & CEO"
            width={1400}
            height={500}
            className="w-full h-[500px] sm:h-[550px] lg:h-[600px] object-cover"
          />

          {/* Overlay for left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

          {/* Content - Left Aligned */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 sm:px-12 lg:px-16 max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm text-brand-400 border border-white/20">
                <Users className="w-4 h-4" />
                Leadership
              </div>

              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-display mb-4">
                Meet Our <span className="gradient-text">Founder</span>
              </h2>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Raju Lakhana
              </h3>
              <p className="text-brand-400 font-semibold text-lg mb-6">
                Founder & CEO
              </p>

              <p className="text-gray-300 leading-relaxed mb-8">
                He didn't inherit leadership - he earned it, step by step. Two decades of hands-on learning shaped a leader known for discipline, scale, and results.
              </p>

              {/* Stats */}
              <div className="flex gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-brand-400">20+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-400">500+</div>
                  <div className="text-sm text-gray-400">Clients Served</div>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/raju-lakhana-3311a5206"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-xl font-medium hover:bg-[#006299] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#0077b5]/30"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}