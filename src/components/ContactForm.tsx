'use client'

import { useState } from 'react'
import { Send, CheckCircle, Loader2, Phone, Mail, MapPin, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const services = [
  'Office Stationery',
  'Housekeeping Essentials',
  'Workplace Safety',
  'Packaging Solutions',
  'Corporate Gifting',
  'Office Setup',
  'Other',
]

const contactInfo = [

  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon - Sat: 9:00 AM - 6:00 PM',
    href: null,
  },
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
          from_name: 'Willsmeet Website',
          subject: `New Enquiry from ${formData.name} - ${formData.service || 'General'}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const inputClass = 'w-full px-4 py-3.5 text-white placeholder-gray-500 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-200 backdrop-blur-sm'

  return (
    <section id="contact" className="relative py-24 bg-[var(--bg-primary)] overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-hero-glow" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Floating glow orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
            <Mail className="w-4 h-4" />
            Get in Touch
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl mb-4 font-display">
            Contact Us Today
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have questions? Send us an enquiry and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="flex items-start gap-4 p-5 mb-2 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-500/30 hover:bg-white/10 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 group">
                  <div className="p-3 bg-brand-500/10 border border-brand-500/20 rounded-xl group-hover:bg-brand-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-brand-400 transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                    <div className="text-white font-medium text-sm">{item.value}</div>
                  </div>
                </div>
              )

              return item.href ? (
                <a key={item.label} href={item.href} target={item.label === 'Address' ? '_blank' : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}

            {/* Added Images for Desktop */}
            {/* Added Images for Desktop - Vertical Stack to fill space */}
            <div className="hidden lg:flex flex-col gap-6 mt-8">
              <div className="relative h-64 rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
                <Image
                  src="/assets/Images/OfficeSetupNeeds2.jpg"
                  alt="Office Setup"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-medium text-sm backdrop-blur-md bg-white/10 px-3 py-1 rounded-full border border-white/20">Modern Workspaces</p>
                </div>
              </div>
              <div className="relative h-64 rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
                <Image
                  src="/assets/Images/WorkpaceEssential4.jpg"
                  alt="Workplace Essentials"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-medium text-sm backdrop-blur-md bg-white/10 px-3 py-1 rounded-full border border-white/20">Premium Essentials</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <div className="p-5 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl hover:border-white/20 transition-all duration-300">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-500/10 border border-green-500/20">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-gray-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-300">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-300">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-300">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-300">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="" className="bg-slate-900 text-white">Select a Service</option>
                      {services.map((s) => <option key={s} value={s} className="bg-slate-900 text-white">{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-300">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className={cn(inputClass, 'resize-none')}
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      Something went wrong. Please try again or contact us directly.
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={status === 'loading'}
                    className="btn-primary w-full text-base py-4 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}