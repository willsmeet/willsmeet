'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  PenTool, SprayCan, ShieldCheck, Package, Gift, Building2, ArrowRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

const solutions = [
  {
    id: 'stationery',
    icon: PenTool,
    title: 'Stationery',
    description:
      'From everyday pens and notebooks to bulk orders of premium files, Willsmeet\'s smart supply chain ensures stock availability when you need it. With manufacturer-direct pricing and fast logistics, we are India\'s most dependable bulk stationery supplier for enterprises.',
    image: '/assets/Images/WorkpaceEssential2.jpg',
    href: '/solutions#stationery', // UPDATED
  },
  {
    id: 'housekeeping',
    icon: SprayCan,
    title: 'Housekeeping Essentials',
    description:
      'Eco-friendly cleaners, hygiene consumables, brooms, mops, and more - backed by predictive inventory management that keeps workplaces spotless without stockouts. Facility teams across India trust our consistency and scale.',
    image: '/assets/Images/HousekeepingImage2.jpg',
    href: '/solutions#housekeeping', // UPDATED
  },
  {
    id: 'workplace',
    icon: ShieldCheck,
    title: 'Workplace Essentials',
    description:
      'From PPE kits and sanitisers to pantry and breakroom needs, our AI-enabled fulfilment system ensures an uninterrupted supply of the basics that keep offices safe and productive.',
    image: '/assets/Images/WorkpaceEssential1.jpg',
    href: '/solutions#safety', // UPDATED (Matches ID 'safety' in Solutions page)
  },
  {
    id: 'packaging',
    icon: Package,
    title: 'Packaging Solutions',
    description:
      'Corrugated cartons, courier bags, tapes, and bubble wraps - sourced directly from manufacturers and delivered through an optimised distribution model. Stronger packaging, better pricing, zero delays.',
    image: '/assets/Images/PackagingSolutions1.jpg',
    href: '/solutions#packaging', // UPDATED
  },
  {
    id: 'gifting',
    icon: Gift,
    title: 'Corporate Gifting & Branding',
    description:
      'Pan-India logistics and trend analysis enable thoughtful, on-brand corporate gifts. We assist businesses in making an impression at scale with timely, consistent delivery of branded items and high-quality hampers.',
    image: '/assets/Images/CorporateGift1.jpg',
    href: '/solutions#gifting', // UPDATED
  },
  {
    id: 'setup',
    icon: Building2,
    title: 'Office Setup Needs',
    description:
      'Expanding or opening a new workspace? We supply setup kits, furniture basics, signage, and pantry equipment with project-based coordination. Our logistics ensure offices across India are work-ready and faster.',
    image: '/assets/Images/OfficeSetupNeeds1.jpg',
    href: '/solutions#setup', // UPDATED
  },
]

export default function Solutions() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section id="solutions" className="relative py-24 bg-[var(--bg-primary)] overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-hero-glow" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Floating glow orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-display">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            One Portal. One Partner. Infinite Convenience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const Icon = solution.icon
            const isHovered = hoveredCard === solution.id

            return (
              <div
                key={solution.id}
                className={cn(
                  'group relative rounded-2xl border overflow-hidden transition-all duration-300',
                  'bg-white/5 backdrop-blur-sm border-white/10',
                  'hover:bg-white/10 hover:border-brand-500/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-500/10'
                )}
                onMouseEnter={() => setHoveredCard(solution.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className={cn(
                      'object-cover transition-transform duration-500',
                      isHovered && 'scale-110'
                    )}
                  />
                  <div className={cn(
                    'absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300',
                    isHovered && 'opacity-90'
                  )} />

                  {/* Icon badge */}
                  <div className="absolute top-4 right-4">
                    <div className={cn(
                      'p-3 rounded-xl transition-all duration-300',
                      'bg-white/10 backdrop-blur-md border border-white/20',
                      isHovered && 'bg-brand-500/20 border-brand-500/30 scale-110'
                    )}>
                      <Icon className={cn(
                        'w-6 h-6 transition-colors duration-300',
                        isHovered ? 'text-brand-400' : 'text-white'
                      )} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-white transition-colors duration-300 group-hover:text-brand-400">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-5 text-sm line-clamp-3">
                    {solution.description}
                  </p>

                  {/* Hover indicator */}
                  <a href={solution.href} className={cn(
                    'flex items-center gap-2 text-sm font-medium transition-all duration-300',
                    isHovered ? 'text-brand-400 opacity-100' : 'text-gray-500 opacity-0'
                  )}>
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Glow effect on hover */}
                <div className={cn(
                  'absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none',
                  'bg-gradient-to-br from-brand-500/0 via-brand-500/5 to-brand-500/0',
                  isHovered ? 'opacity-100' : 'opacity-0'
                )} />
              </div>
            )
          })}
        </div>

        {/* Main CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/solutions"
            className="btn-primary text-base px-8 py-4 group inline-flex items-center gap-2"
          >
            <span>View All Solutions</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}