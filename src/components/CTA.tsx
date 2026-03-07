'use client'

import Link from 'next/link'
import { ArrowRight, Phone, Mail, Sparkles } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 via-brand-950 to-[var(--bg-primary)]" />

      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/5 rounded-full blur-3xl" />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium rounded-full bg-white/5 text-white border border-white/10 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-brand-400" />
          Contact Us Today
        </div>

        {/* Heading */}
        <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
          Willsmeet - The Future of <br className="hidden sm:block" />
          Workplace Procurement
        </h2>

        {/* Subheading */}
        <p className="mb-10 text-xl text-brand-100">
          Save time. Save cost. Scale better.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-600 font-semibold rounded-full hover:bg-brand-50 hover:shadow-xl hover:shadow-brand-900/20 hover:scale-105 transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="tel:+919876543210"
            className="btn-secondary px-8 py-4 rounded-full"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>

        {/* Quick contact */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-brand-100/80">
          <a href="mailto:sales@willsmeet.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
            sales@willsmeet.com
          </a>
          <span className="hidden sm:block w-1 h-1 bg-brand-300/50 rounded-full" />
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            +91 98765 43210
          </a>
        </div>
      </div>
    </section>
  )
}
