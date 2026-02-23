'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import {
  TrendingUp,
  Clock,
  Users,
  Package,
  RefreshCw,
  MapPin,
  Globe,
} from 'lucide-react'

const IMAGES = {
  products:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop&auto=format',
  delivery24:
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80&fit=crop&auto=format',
  delivery48:
    'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80&fit=crop&auto=format',
  enterprise:
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80&fit=crop&auto=format',
  retention:
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80&fit=crop&auto=format',
  orders:
    'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80&fit=crop&auto=format',
  hubs:
    'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80&fit=crop&auto=format',
}

function AnimatedCounter({
  value,
  suffix = '',
  decimals = 0,
  inView,
}: {
  value: number
  suffix?: string
  decimals?: number
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) {
      setCount(0)
      return
    }
    const duration = 2000
    const steps = 60
    const stepValue = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0a0a0a] py-20 sm:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-transparent" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Numbers That Speak
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Because in procurement, every hour counts.
          </p>
        </div>

        {/* Bento Grid — original masonry layout */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {/* Large Card — 3000+ Products (col-span-2, row-span-2) */}
          <div className="group relative col-span-1 row-span-2 overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-2">
            <Image
              src={IMAGES.products}
              alt="Modern office workspace with workplace essentials"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
            <div className="relative flex h-full min-h-[220px] sm:min-h-[280px] flex-col justify-end p-4 sm:p-5">
              <div className="mb-1 flex items-center gap-1.5">
                <Package className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-xs font-medium text-emerald-400">
                  Workplace Essentials
                </span>
              </div>
              <div className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                <AnimatedCounter value={3000} suffix="+" inView={inView} />
              </div>
              <p className="mt-1 text-sm text-zinc-300">
                Products on one platform
              </p>
            </div>
          </div>

          {/* 61% in 24 Hours */}
          <div className="group relative overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.delivery24}
              alt="Fast delivery warehouse with packages"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
            <div className="relative flex h-full min-h-[115px] sm:min-h-[135px] flex-col justify-end p-3 sm:p-4">
              <Clock className="mb-1 h-3.5 w-3.5 text-blue-400" />
              <div className="text-xl sm:text-2xl font-bold text-white">
                <AnimatedCounter value={61} suffix="%" inView={inView} />
              </div>
              <p className="mt-0.5 text-xs text-zinc-300">in 24 Hours</p>
            </div>
          </div>

          {/* 97% in 48 Hours */}
          <div className="group relative overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.delivery48}
              alt="Delivery van with packages for express shipping"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
            <div className="relative flex h-full min-h-[115px] sm:min-h-[135px] flex-col justify-end p-3 sm:p-4">
              <TrendingUp className="mb-1 h-3.5 w-3.5 text-purple-400" />
              <div className="text-xl sm:text-2xl font-bold text-white">
                <AnimatedCounter value={97} suffix="%" inView={inView} />
              </div>
              <p className="mt-0.5 text-xs text-zinc-300">in 48 Hours</p>
            </div>
          </div>

          {/* 500+ Enterprise Clients */}
          <div className="group relative overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.enterprise}
              alt="Enterprise business team collaborating"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
            <div className="relative flex h-full min-h-[115px] sm:min-h-[135px] flex-col justify-end p-3 sm:p-4">
              <Users className="mb-1 h-3.5 w-3.5 text-amber-400" />
              <div className="text-xl sm:text-2xl font-bold text-white">
                <AnimatedCounter value={500} suffix="+" inView={inView} />
              </div>
              <p className="mt-0.5 text-xs text-zinc-300">Enterprise Clients</p>
            </div>
          </div>

          {/* 99.99% Retention Rate */}
          <div className="group relative overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.retention}
              alt="Business handshake representing trust"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
            <div className="relative flex h-full min-h-[115px] sm:min-h-[135px] flex-col justify-end p-3 sm:p-4">
              <RefreshCw className="mb-1 h-3.5 w-3.5 text-rose-400" />
              <div className="text-xl sm:text-2xl font-bold text-white">
                <AnimatedCounter
                  value={99.99}
                  suffix="%"
                  decimals={2}
                  inView={inView}
                />
              </div>
              <p className="mt-0.5 text-xs text-zinc-300">Retention Rate</p>
            </div>
          </div>

          {/* 1200+ Orders/Month */}
          <div className="group relative overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.orders}
              alt="Warehouse shelves with organized inventory"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
            <div className="relative flex h-full min-h-[115px] sm:min-h-[135px] flex-col justify-end p-3 sm:p-4">
              <Globe className="mb-1 h-3.5 w-3.5 text-cyan-400" />
              <div className="text-xl sm:text-2xl font-bold text-white">
                <AnimatedCounter value={1200} suffix="+" inView={inView} />
              </div>
              <p className="mt-0.5 text-xs text-zinc-300">Orders / Month</p>
            </div>
          </div>

          {/* 3 Major Hubs — wide card (col-span-2) */}
          <div className="group relative col-span-1 overflow-hidden rounded-2xl sm:col-span-2">
            <Image
              src={IMAGES.hubs}
              alt="Indian city infrastructure aerial view"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

            <div className="relative min-h-[200px] sm:min-h-[180px] p-4 sm:p-5">
              {/* Header */}
              <div className="mb-1 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span className="text-3xl font-bold text-white">
                  <AnimatedCounter value={7} inView={inView} />
                </span>
              </div>
              <p className="text-sm font-medium text-white">Major Hubs</p>
              <p className="text-xs text-zinc-400">
                Powering Pan-India Delivery
              </p>

              {/* Cities */}
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { name: 'Bangalore', code: 'BLR', status: 'HQ' },
                  { name: 'Hyderabad', code: 'HYD', status: 'Hub' },
                  { name: 'Pune', code: 'PUN', status: 'Hub' },
                  { name: 'Delhi', code: 'DEL', status: 'Hub' },
                  { name: 'Mumbai', code: 'MUM', status: 'Hub' },
                  { name: 'Gurgaon', code: 'GGN', status: 'Hub' },
                  { name: 'Kolkata', code: 'KOL', status: 'Hub' },
                ].map((city) => (
                  <div
                    key={city.code}
                    className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2 py-1 sm:px-3 sm:py-1.5 backdrop-blur-sm"
                  >
                    <div className="relative flex h-2.5 w-2.5 items-center justify-center">
                      {city.status === 'HQ' && (
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      )}
                      <span
                        className={cn(
                          'relative inline-flex h-1.5 w-1.5 rounded-full',
                          city.status === 'HQ'
                            ? 'bg-emerald-400'
                            : 'bg-zinc-400'
                        )}
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        {city.code}
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        {city.name}
                      </div>
                    </div>
                    <span
                      className={cn(
                        'ml-1 rounded-full px-1.5 py-0.5 text-[9px] font-medium leading-none',
                        city.status === 'HQ'
                          ? 'bg-emerald-400/10 text-emerald-400'
                          : 'bg-zinc-700/50 text-zinc-400'
                      )}
                    >
                      {city.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}