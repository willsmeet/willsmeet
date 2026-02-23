'use client'

import Image from 'next/image'
import { Building2 } from 'lucide-react'

// Added optional 'isDark' property to the type
const clients = [
  { name: '3M India', logo: '/assets/Logos/3M India.png' },
  { name: "BYJU'S", logo: '/assets/Logos/Byjus.png' },
  { name: 'Continental', logo: '/assets/Logos/Continental.png' },
  { name: 'Cult.fit', logo: '/assets/Logos/Cultfit.png' },
  { name: 'Flipkart', logo: '/assets/Logos/Flipkart.png' },
  { name: 'Fortis', logo: '/assets/Logos/Fortis.png' },
  { name: 'HP', logo: '/assets/Logos/HP.png' },
  { name: 'IndiQube', logo: '/assets/Logos/Indiqube.png' },
  { name: 'ITC Hotels', logo: '/assets/Logos/ITC Hotels.png' },
  { name: 'JLL', logo: '/assets/Logos/JLL.png' },
  { name: 'Myntra', logo: '/assets/Logos/Myntra.png' },
  { name: 'Ninjacart', logo: '/assets/Logos/Ninjacart.png' },
  { name: 'ShareChat', logo: '/assets/Logos/Sharechat.png' },
  { name: 'Titan', logo: '/assets/Logos/Titan.png' },
  { name: 'Udaan', logo: '/assets/Logos/Udaan.png' },
  { name: 'Unacademy', logo: '/assets/Logos/Unacademy.png' },
  { name: 'Wipro', logo: '/assets/Logos/Wipro.png' },
  // Added isDark flag for Zolo
  { name: 'Zolo', logo: '/assets/Logos/Zolostays.png', isDark: true },
]

const firstRow = clients.slice(0, 9)
const secondRow = clients.slice(9)

function LogoCard({ client }: { client: { name: string; logo: string; isDark?: boolean } }) {
  return (
    <div
      className={`flex-shrink-0 flex items-center justify-center mx-2 px-8 py-5 rounded-2xl border shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 min-w-[180px] h-20 group cursor-pointer backdrop-blur-sm hover:border-brand-500/50
      ${
        client.isDark 
          ? 'bg-[#111] border-white/10 hover:bg-black' // Dark style for Zolo
          : 'bg-white/95 border-white/20 hover:bg-white' // Default white style
      }`}
    >
      <Image
        src={client.logo}
        alt={client.name}
        width={140}
        height={60}
        className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  )
}

export default function ClientLogos() {
  return (
    <section className="relative py-20 bg-[var(--bg-primary)] overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Header */}
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mb-14">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
            <Building2 className="w-4 h-4" />
            Our Clients
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 font-display">
            Trusted by Leading Brands
          </h3>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From global enterprises to India's fastest growing companies, teams trust Willsmeet
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative group/marquee">
        
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-r from-[var(--bg-primary)] via-[var(--bg-primary)]/90 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-l from-[var(--bg-primary)] via-[var(--bg-primary)]/90 to-transparent pointer-events-none" />

        {/* First row */}
        <div className="flex mb-6 overflow-hidden">
          <div className="marquee-row flex group-hover/marquee:[animation-play-state:paused]">
            {[...firstRow, ...firstRow, ...firstRow].map((client, index) => (
              <LogoCard key={`row1-${index}`} client={client} />
            ))}
          </div>
        </div>

        {/* Second row */}
        <div className="flex overflow-hidden">
          <div className="marquee-row-reverse flex group-hover/marquee:[animation-play-state:paused]">
            {[...secondRow, ...secondRow, ...secondRow].map((client, index) => (
              <LogoCard key={`row2-${index}`} client={client} />
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 mt-16 px-4 mx-auto max-w-4xl">
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-16">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-brand-400">500+</div>
            <div className="text-sm text-gray-500 mt-1">Clients</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-brand-400">Pan-India</div>
            <div className="text-sm text-gray-500 mt-1">Presence</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-brand-400">99.99%</div>
            <div className="text-sm text-gray-500 mt-1">Client Retention</div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>
        {`
          .marquee-row {
            animation: scroll 35s linear infinite;
          }
          .marquee-row-reverse {
            animation: scroll-reverse 35s linear infinite;
          }
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          @keyframes scroll-reverse {
            0% { transform: translateX(-33.33%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </section>
  )
}