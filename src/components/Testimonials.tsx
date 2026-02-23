'use client'

import Image from 'next/image'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sandeep K',
    role: 'Procurement Head',
    company: 'Flipkart',
    content: "They don't just deliver products; they deliver certainty. That's rare.",
    logo: '/assets/Logos/Flipkart.png',
    rating: 5,
  },
  {
    id: 2,
    name: 'Pooja B',
    role: 'Ops Head',
    company: 'Wipro',
    content: "Willsmeet is always one step ahead of our needs. Truly a partner we can't do without.",
    logo: '/assets/Logos/Wipro.png',
    rating: 5,
  },
  {
    id: 3,
    name: 'Nikhil M',
    role: 'Marketing Lead',
    company: 'Myntra',
    content: "In a world of delays and excuses, Willsmeet delivers speed and trust.",
    logo: '/assets/Logos/Myntra.png',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-[var(--bg-primary)] overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-hero-glow" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Floating glow orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
            <Quote className="w-4 h-4" />
            Testimonials
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-4 font-display">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Procurement certainty, delivered every time.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-5 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-brand-500/10 hover:border-brand-500/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="p-3 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl shadow-lg shadow-brand-500/50 group-hover:shadow-brand-500/70 transition-shadow duration-300">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mt-4 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-5 sm:mb-8">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-xl bg-white p-2 shadow-md group-hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.company}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm font-medium text-brand-400">{testimonial.company}</div>
                </div>
              </div>

              {/* Card glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-500/0 via-brand-500/5 to-brand-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}