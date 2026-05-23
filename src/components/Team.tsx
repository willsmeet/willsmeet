'use client'

import Image from 'next/image'
import { Users, Linkedin } from 'lucide-react'

export default function Leadership() {
  return (
    <section id="leadership" className="relative overflow-hidden bg-[var(--bg-primary)]">
      <div className="px-4 sm:px-6 lg:px-8 py-12 mx-auto max-w-7xl">

        {/* ── MOBILE LAYOUT (hidden on sm+) ── */}
         <div className="rounded-3xl overflow-hidden md:block border border-white/10 bg-zinc-950 flex flex-col">
            <div className="flex flex-col sm:flex-row">
                {/* TEXT SECTION */}
                <div className="flex-1 px-6 lg:px-10 py-10 lg:py-14 flex flex-col justify-center">
                  {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-6 text-xs font-medium rounded-full bg-white/10 text-brand-400 border border-white/20 w-fit">
                    <Users className="w-3.5 h-3.5" />
                    Leadership
                    </div>
                    {/* Heading */}
                    <h2 className="text-4xl lg:text-5xl font-bold text-white font-display mb-4 leading-tight">
                      Meet Our <span className="gradient-text">Founder</span>
                      </h2>
                      {/* Name */}
                      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-1">
                        Raju Lakhana
                        </h3>
        
              {/* Role */}
              <p className="text-brand-400 font-semibold text-lg mb-6">
                Founder & CEO
              </p>
        
              {/* Description */}
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
                He didn't inherit leadership — he earned it, step by step. Two decades of hands-on learning shaped a leader known for discipline, scale, and results.
              </p>
        
              {/* Stats */}
              <div className="flex gap-12 mb-8">
                <div>
                  <div className="text-4xl font-bold text-brand-400">20+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
        
                <div>
                  <div className="text-4xl font-bold text-brand-400">500+</div>
                  <div className="text-sm text-gray-400">Clients Served</div>
                </div>
              </div>
        
              {/* Button */}
              <a
                href="https://www.linkedin.com/in/raju-lakhana-3311a5206"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-xl text-sm font-medium hover:bg-[#006299] transition-all duration-300 w-fit shadow-lg hover:shadow-xl hover:shadow-[#0077b5]/30"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
        
            </div>
        
            {/* IMAGE SECTION */}
            <div className="relative w-full sm:w-[44%] h-72 sm:h-auto overflow-hidden">
        
              <Image
                src="/assets/owner.jpg"
                alt="Raju Lakhana - Founder & CEO"
                fill
                className="object-cover"
                style={{ objectPosition: "80% top" }}
                sizes="(max-width: 640px) 100vw, 44vw"
              />
        
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-zinc-950/60 via-transparent to-transparent" />
        
            </div>
        
          </div>
        </div>
              
                   
                  </div>
        
        

      
    </section>
  )
}