'use client'

import Image from 'next/image'
import { TrendingUp, Shield, Clock, Users, Layers, MapPin, ArrowUpRight } from 'lucide-react'

const features = [
  {
    icon: Layers,
    title: 'Single-Partner Procurement',
    description: 'End-to-end procurement without vendor sprawl or operational blind spots.',
    // ✅ Business handshake = single trusted partner deal
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&fit=crop&auto=format',
  },
  {
    icon: TrendingUp,
    title: 'Better ROI',
    description: 'Direct manufacturer tie-ups for better pricing and margins.',
    // ✅ Coins stacking with plant = money growth / ROI / savings
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80&fit=crop&auto=format',
  },
  {
    icon: MapPin,
    title: 'Nationwide Coverage',
    description: 'Pan-India reach from 7 major hubs.',
    // ✅ Fleet of delivery trucks = nationwide logistics network
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80&fit=crop&auto=format',
    cities: ['Bangalore', 'Hyderabad', 'Pune', 'Delhi', 'Mumbai', 'Gurgaon', 'Kolkata'],
  },
  {
    icon: Clock,
    title: 'Always Available',
    description: '24×7 operations with SLA-driven delivery.',
    // ✅ Warehouse worker operating forklift = round-the-clock operations
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80&fit=crop&auto=format',
  },
  {
    icon: Users,
    title: 'Unmatched Loyalty',
    description: '500+ corporations trust us.',
    // ✅ Corporate team in meeting room = enterprise trust & loyalty
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&fit=crop&auto=format',
    stats: { value: '99.99%', label: 'Retention' },
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-[var(--bg-primary)] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
            <Shield className="w-4 h-4" />
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-display">
            Why Companies Trust Willsmeet
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technology First. Trust Always.
          </p>
        </div>

        {/* Bento Grid - Different layout from Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Featured Large Card */}
          <div className="lg:col-span-2 lg:row-span-2 h-[260px] sm:h-[340px] lg:h-auto rounded-3xl relative overflow-hidden group border border-white/10 hover:border-brand-500/30 transition-colors duration-500">
            {/* Image - Full Coverage */}
            <Image
              src={features[0].image}
              alt={features[0].title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 flex flex-col justify-between z-10">
              {/* Top - Icon badge */}
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <Layers className="w-6 h-6 text-brand-400" />
                </div>
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Bottom - Text */}
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
                  {features[0].title}
                </h3>
                <p className="text-base sm:text-lg text-gray-300 max-w-md">
                  {features[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Smaller Cards */}
          {features.slice(1).map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="h-[220px] sm:h-[280px] rounded-3xl relative overflow-hidden group border border-white/10 hover:border-brand-500/30 transition-colors duration-500"
              >
                {/* Image - Full Coverage */}
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

                {/* Content */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
                  {/* Top */}
                  <div className="flex justify-between items-start">
                    <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                      <Icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <div className="p-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Bottom */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1.5">
                      {feature.title}
                    </h3>

                    {feature.cities ? (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {feature.cities.map((city) => (
                          <span
                            key={city}
                            className="px-2.5 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm text-brand-300 rounded-full border border-white/10"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    ) : feature.stats ? (
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-3xl font-bold text-brand-400">{feature.stats.value}</span>
                        <span className="text-sm text-gray-400">{feature.stats.label}</span>
                      </div>
                    ) : (
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}