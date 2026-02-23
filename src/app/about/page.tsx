'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header, Footer, WhatsAppButton, FloatingShare } from '@/components'
import { Target, Eye, Zap, MapPin, Cpu, HeartHandshake, PiggyBank, Users, Award, TrendingUp, Clock, Sparkles, Linkedin, Phone } from 'lucide-react'

import AboutBanner from '../../../public/assets/banners/aboutbanner.jpeg'

const values = [
  {
    icon: Zap,
    title: 'Built for Speed, Backed by Systems',
    description: 'Our logistics are engineered for reliability, not exceptions.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/10',
    image: '/assets/Images/PackagingSolutions2.jpg',
  },
  {
    icon: MapPin,
    title: 'National by Design',
    description: 'A supply network created to support businesses wherever they operate.',
    color: 'from-brand-500 to-brand-600',
    bgColor: 'bg-brand-500/10',
    image: '/assets/Images/HousekeepingImage2.jpg',
  },
  {
    icon: Cpu,
    title: 'Tech with a Purpose',
    description: 'Every feature exists to reduce effort, increase control, and prevent disruption.',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-500/10',
    image: '/assets/Images/WorkpaceEssential4.jpg',
  },
  {
    icon: PiggyBank,
    title: 'Cost Advantage by Design',
    description: 'Savings created through structure, not negotiation.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    image: '/assets/Images/HousekeepingImage3.jpg',
  },
  {
    icon: HeartHandshake,
    title: 'Trust, Proven Over Time',
    description: 'A partner clients choose once - and rarely replace.',
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-500/10',
    image: '/assets/Images/WorkpaceEssential5.jpg',
  },
]

const stats = [
  { icon: Users, value: 500, suffix: '+', label: 'Corporate Clients' },
  { icon: Award, value: 99.99, suffix: '%', label: 'Retention Rate', decimals: 2 },
  { icon: TrendingUp, value: 3000, suffix: '+', label: 'Products Available' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Operations & Support' },
]

const milestones = [
  { year: '2020', title: 'Founded', description: 'Incorporated during the pandemic and built resilience from day one' },
  { year: '2021-22', title: '₹1.69 Cr', description: 'Revenue grew from ₹0.23 Cr to ₹1.69 Cr' },
  { year: '2022-23', title: '₹19 Cr', description: 'Crossed ₹19 Cr milestone with rapid scale' },
  { year: '2023-24', title: '₹29 Cr', description: 'Surged to ₹29 Cr revenue with 500+ clients onboard' },
  { year: '2030', title: '₹360 Cr', description: 'Expanding nationwide hubs, building next-gen procurement tech, aiming for ₹360 Cr by 2030' },
]

// Animated Counter Component
function AnimatedCounter({ value, suffix = '', decimals = 0, className = '' }: { value: number; suffix?: string; decimals?: number; className?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className={className || "text-xl md:text-3xl font-bold text-brand-400"}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
    </span>
  )
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[var(--bg-primary)]">

        {/* Page Header */}
        <section className="relative h-[35vh] min-h-[200px] sm:min-h-[340px] lg:min-h-[460px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={AboutBanner}
              alt="About Us"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-black/60" />
          </div>

          {/* Content */}

        </section>

        <div className="relative z-10 text-center px-4 -mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm text-brand-400 border border-white/20 shadow-lg">
            <Sparkles className="w-4 h-4" />
            About Us
          </div>
          <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] font-display">
            Who <span className="gradient-text">We Are ?</span>
          </h1>

        </div>

        {/* Hero Section - Who is Willsmeet? */}
        <section id="who-we-are" className="relative py-20 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-hero-glow mix-blend-overlay" />
          <div className="absolute inset-0 bg-grid opacity-30" />

          {/* Floating glow orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute top-40 right-10 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left - Image with Stats */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-500/20 border border-white/10 group">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/assets/Images/WorkpaceEssential4.jpg"
                      alt="Willsmeet Workplace Solutions"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Stats on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="grid grid-cols-2 gap-4">
                      {stats.slice(0, 2).map((stat) => {
                        const Icon = stat.icon
                        return (
                          <div key={stat.label} className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-xl bg-brand-500/20">
                                <Icon className="w-5 h-5 text-brand-400" />
                              </div>
                              <div>
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                                <div className="text-xs text-gray-300">{stat.label}</div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-500/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl" />
              </div>

              {/* Right - Content */}
              <div>

                <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-5xl font-display">
                  Who is <span className="gradient-text">Willsmeet?</span>
                </h1>

                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  A tech-enabled B2B procurement partner, Willsmeet assists businesses in streamlining and expanding their supply chains in the workplace. We provide <strong className="text-white">more than 3000 office supplies</strong>, a smart ordering platform, and an AI-supported distribution network to businesses throughout India.
                </p>

                {/* Additional Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(2).map((stat) => {
                    const Icon = stat.icon
                    return (
                      <div
                        key={stat.label}
                        className="p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-500/30 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-xl bg-brand-500/10 border border-brand-500/20">
                            <Icon className="w-5 h-5 text-brand-400" />
                          </div>
                          <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                        </div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision */}
        <section id="vision" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl" />

          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-500/20 border border-white/10 group">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src="/assets/banners/Vision.png"
                      alt="Our Vision"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-600/80 via-transparent to-transparent" />
                  </div>
                  {/* Label on Image */}
                  <div className="absolute bottom-6 left-6">
                    <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                      <span className="text-white font-semibold">Digital-First Approach</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-500/20 rounded-full blur-2xl" />
              </div>

              {/* Right - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
                  <Eye className="w-4 h-4" />
                  Our Vision
                </div>

                <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-display mb-6">
                  Revolutionising <span className="gradient-text">Procurement</span>
                </h2>

                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  Office procurement in India will be revolutionised by creating a digital-first, AI-enabled environment where all businesses, regardless of size or location, have access to reliable, reasonably priced, and future-ready workplace solutions.
                </p>

                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium">AI-Enabled</div>
                  <div className="px-4 py-2 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium">Future-Ready</div>
                  <div className="px-4 py-2 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium">Pan-India</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section id="mission" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl" />

          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-500/20 border border-white/10 group bg-white/5">
                  <Image
                    src="/assets/banners/Mission.png"
                    alt="Our Mission"
                    width={600}
                    height={450}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Label on Image */}
                  <div className="absolute bottom-6 left-6">
                    <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                      <span className="text-white font-semibold">Growth Facilitator</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-500/20 rounded-full blur-2xl" />
              </div>

              {/* Right - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
                  <Target className="w-4 h-4" />
                  Our Mission
                </div>

                <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-display mb-6">
                  Single-Source <span className="gradient-text">Platform</span>
                </h2>

                <p className="text-lg text-gray-400 leading-relaxed mb-8">
                  To provide businesses with a single-source procurement platform that integrates manufacturer-direct pricing, intelligent logistics, and AI-driven forecasting. We are dedicated to lowering expenses, decreasing downtime, and guaranteeing supply chain resilience.
                </p>

                <div className="flex flex-wrap gap-3">
                  <div className="px-4 py-2 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium">Cost Efficiency</div>
                  <div className="px-4 py-2 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium">Zero Downtime</div>
                  <div className="px-4 py-2 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium">Supply Resilience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Willsmeet Advantage */}
        <section id="advantage" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl" />

          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
                <Award className="w-4 h-4" />
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-display">
                The Willsmeet <span className="gradient-text">Advantage</span>
              </h2>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* First Large Card */}
              <div className="lg:col-span-2 relative rounded-3xl overflow-hidden border border-white/10 hover:border-brand-500/30 transition-all duration-300 group h-[300px]">
                <Image
                  src={values[0].image}
                  alt={values[0].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className={`inline-flex items-center justify-center w-12 h-12 mb-4 rounded-2xl bg-gradient-to-br ${values[0].color} text-white shadow-lg`}>
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{values[0].title}</h3>
                  <p className="text-gray-300 max-w-md">{values[0].description}</p>
                </div>
              </div>

              {/* Second Card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 hover:border-brand-500/30 transition-all duration-300 group h-[300px]">
                <Image
                  src={values[1].image}
                  alt={values[1].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className={`inline-flex items-center justify-center w-10 h-10 mb-3 rounded-xl bg-gradient-to-br ${values[1].color} text-white shadow-lg`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{values[1].title}</h3>
                  <p className="text-gray-300 text-sm">{values[1].description}</p>
                </div>
              </div>

              {/* Third Card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 hover:border-brand-500/30 transition-all duration-300 group h-[280px]">
                <Image
                  src={values[2].image}
                  alt={values[2].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className={`inline-flex items-center justify-center w-10 h-10 mb-3 rounded-xl bg-gradient-to-br ${values[2].color} text-white shadow-lg`}>
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{values[2].title}</h3>
                  <p className="text-gray-300 text-sm">{values[2].description}</p>
                </div>
              </div>

              {/* Fourth Card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 hover:border-brand-500/30 transition-all duration-300 group h-[280px]">
                <Image
                  src={values[3].image}
                  alt={values[3].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className={`inline-flex items-center justify-center w-10 h-10 mb-3 rounded-xl bg-gradient-to-br ${values[3].color} text-white shadow-lg`}>
                    <PiggyBank className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{values[3].title}</h3>
                  <p className="text-gray-300 text-sm">{values[3].description}</p>
                </div>
              </div>

              {/* Fifth Card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 hover:border-brand-500/30 transition-all duration-300 group h-[280px]">
                <Image
                  src={values[4].image}
                  alt={values[4].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className={`inline-flex items-center justify-center w-10 h-10 mb-3 rounded-xl bg-gradient-to-br ${values[4].color} text-white shadow-lg`}>
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{values[4].title}</h3>
                  <p className="text-gray-300 text-sm">{values[4].description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey So Far */}
        <section id="journey" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />

          <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white sm:text-4xl font-display">
                Our Journey So Far
              </h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-500/30 -translate-x-1/2 hidden md:block" />

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-500/30 transition-all inline-block">
                        <div className="text-sm text-brand-400 font-semibold mb-1">{milestone.year}</div>
                        <div className="text-xl font-bold text-white mb-2">{milestone.title}</div>
                        <p className="text-gray-400 text-sm">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="hidden md:flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-600 rounded-full text-white font-bold text-sm shadow-lg shadow-brand-500/30 z-10">
                      {index + 1}
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Leaders */}
        <section id="leadership" className="relative overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 py-12 mx-auto max-w-7xl">

            {/* ── MOBILE LAYOUT (hidden on sm+) ── */}
            <div className="sm:hidden rounded-3xl overflow-hidden border border-white/10 bg-zinc-950">
              <div className="flex min-h-[400px]">
                <div className="flex-1 px-5 py-7 flex flex-col justify-center min-w-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-4 text-xs font-medium rounded-full bg-white/10 text-brand-400 border border-white/20 w-fit">
                    <Users className="w-3.5 h-3.5" />
                    Leadership
                  </div>
                  <h2 className="text-2xl font-bold text-white font-display mb-2 leading-tight">
                    Meet Our <span className="gradient-text">Founder</span>
                  </h2>
                  <h3 className="text-lg font-bold text-white mb-0.5">Raju Lakhana</h3>
                  <p className="text-brand-400 font-semibold text-sm mb-4">Founder & CEO</p>
                  <p className="text-gray-400 text-xs leading-relaxed mb-5">
                    He didn't inherit leadership — he earned it, step by step. Two decades of hands-on learning shaped a leader known for discipline, scale, and results.
                  </p>
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
                <div className="w-[44%] relative overflow-hidden flex-shrink-0">
                  <Image
                    src="/assets/banners/Founder Page.png"
                    alt="Raju Lakhana - Founder & CEO"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '80% top' }}
                    sizes="44vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/50 via-transparent to-transparent" />
                </div>
              </div>
            </div>

            {/* ── TABLET / DESKTOP LAYOUT (hidden on mobile) ── */}
            <div className="hidden sm:block relative rounded-3xl overflow-hidden">
              <Image
                src="/assets/banners/Founder Page.png"
                alt="Raju Lakhana - Founder & CEO"
                width={1400}
                height={500}
                className="w-full h-[500px] sm:h-[550px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="px-8 sm:px-12 lg:px-16 max-w-xl">
                  <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm text-brand-400 border border-white/20">
                    <Users className="w-4 h-4" />
                    Leadership
                  </div>
                  <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-display mb-4">
                    Meet Our <span className="gradient-text">Founder</span>
                  </h2>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">Raju Lakhana</h3>
                  <p className="text-brand-400 font-semibold text-lg mb-6">Founder & CEO</p>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    He didn't inherit leadership - he earned it, step by step. Two decades of hands-on learning shaped a leader known for discipline, scale, and results.
                  </p>
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

        {/* Contact Us Today */}
        <section className="relative py-12 overflow-hidden">
          <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background Banner */}
              <Image
                src="/assets/banners/Contact us page.png"
                alt="Contact Us"
                width={1400}
                height={400}
                className="w-full h-[300px] sm:h-[400px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="px-5 sm:px-12 lg:px-16 max-w-2xl">
                  <h2 className="mb-4 text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight font-display">
                    Contact Us Today
                  </h2>

                  <p className="mb-3 text-base sm:text-xl sm:text-2xl font-semibold text-white">
                    Smarter. Faster. Tech-Enabled Procurement.
                  </p>

                  <p className="mb-4 sm:mb-8 text-sm sm:text-lg text-gray-300">
                    Because when procurement works better, businesses thrive.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="tel:+918884162162"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-all duration-300 shadow-lg shadow-brand-500/30"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}