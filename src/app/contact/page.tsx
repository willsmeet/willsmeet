'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Header, Footer, WhatsAppButton, FloatingShare } from '@/components'
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle, Loader2, ExternalLink, Headphones, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Our Office',
    details: ['#1496, 19th main road, Sector - 1 HSR layout', 'Opp. Park Square Apartment', 'Bangalore 560102'],
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-500/10',
    href: 'https://www.google.com/maps/place/Willsmeet/@12.9173026,77.6436917,17z/data=!4m6!3m5!1s0x3bae15f0d26b3691:0x577144e881b449ad!8m2!3d12.9186621!4d77.6451508!16s%2Fg%2F11rk021vld!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D',
    external: true,
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['080-4131656 / 888-416-2162'],
    color: 'from-brand-500 to-brand-600',
    bgColor: 'bg-brand-500/10',
    href: 'tel:+918884162162',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['sales@willsmeet.com'],
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    href: 'mailto:sales@willsmeet.com',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Monday - Saturday', '9:00 AM - 7:00 PM IST', 'Support: 24/7'],
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-500/10',
  },
]

const services = [
  'Office Stationery',
  'Housekeeping Essentials',
  'Workplace Safety',
  'Packaging Solutions',
  'Corporate Gifting',
  'Office Setup',
  'Bulk Order Inquiry',
  'Corporate Account',
  'Other',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
          from_name: 'Willsmeet Contact Form',
          subject: `New Contact from ${formData.name} - ${formData.service || 'General Inquiry'}`,
          ...formData,
        }),
      })

      const result = await response.json()
      if (result.success) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const inputClass = 'w-full px-4 py-3.5 text-white placeholder-gray-500 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-200 backdrop-blur-sm'

  const whatsappNumber = '918884162162'
  const whatsappMessage = encodeURIComponent('Hi Willsmeet! I would like to inquire about your services.')
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const googleMapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.850904216672!2d77.64369167408357!3d12.917302638288882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f0d26b3691%3A0x577144e881b449ad!2sWillsmeet!5e0!3m2!1sen!2sin!4v1772883050751!5m2!1sen!2sin'
 return (
    <>
      <Header />
      <main className="bg-[var(--bg-primary)]">

        {/* ── Hero Banner ── */}
        <section className="relative min-h-[42vh] sm:min-h-[65vh] flex items-end justify-center overflow-hidden">
          {/* Background Banner Image */}
          <div className="absolute inset-0">
            <Image
              src="/assets/banners/Contact us page.png"
              alt=""
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-black/10" />
          </div>

          {/* Floating glow orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute top-40 right-10 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

         
        </section>

         {/* Centered heading on banner */}
          <div className="relative z-10 px-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-black/40 text-brand-400 border border-brand-500/30 backdrop-blur-md">
              <MessageSquare className="w-4 h-4" />
              We're Here to Help
            </div>

            <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] font-display">
              Get in <span className="gradient-text">Touch</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl pb-10 text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Have questions about our services? Need a custom quote?
              Our team is ready to help you find the perfect workplace solutions.
            </p>
          </div>

        {/* ── Below Banner — Support Badges + Contact Cards ── */}
        <section className="relative z-10 pt-12 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />

          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">

            {/* Support badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <div className="p-1.5 bg-green-500/10 border border-green-500/20 rounded-full">
                  <Headphones className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-sm font-medium text-gray-300">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <div className="p-1.5 bg-brand-500/10 border border-brand-500/20 rounded-full">
                  <Clock className="w-4 h-4 text-brand-400" />
                </div>
                <span className="text-sm font-medium text-gray-300">Response within 2 hours</span>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((info) => {
                const Icon = info.icon
                const content = (
                  <div className={`relative p-6 rounded-2xl border border-white/10 ${info.bgColor} backdrop-blur-sm hover:shadow-2xl hover:shadow-brand-500/10 hover:border-brand-500/30 transition-all duration-300 h-full group`}>
                    <div className={`inline-flex items-center justify-center w-14 h-14 mb-5 rounded-2xl bg-gradient-to-br ${info.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="mb-3 text-lg font-bold text-white flex items-center gap-2">
                      {info.title}
                      {info.external && <ExternalLink className="w-4 h-4 text-gray-400" />}
                    </h3>

                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-sm text-gray-400">{detail}</p>
                      ))}
                    </div>
                  </div>
                )

                return info.href ? (
                  <a key={info.title} href={info.href} target={info.external ? '_blank' : undefined} rel={info.external ? 'noopener noreferrer' : undefined} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={info.title}>{content}</div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />

          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4 font-display">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="p-5 sm:p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-green-500/10 border border-green-500/20">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-white">Message Sent Successfully!</h3>
                    <p className="text-gray-400 mb-6">We'll get back to you within 24 hours.</p>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-xl hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl hover:shadow-green-500/30">
                      <MessageSquare className="w-5 h-5" />
                      Chat on WhatsApp for faster response
                    </a>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">Phone Number *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="john@company.com" />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-300">Company Name</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Your Company" />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-300">What can we help you with?</label>
                      <select name="service" value={formData.service} onChange={handleChange} className={inputClass}>
                        <option value="" className="bg-slate-900 text-white">Select a Service</option>
                        {services.map((s) => <option key={s} value={s} className="bg-slate-900 text-white">{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-300">Message *</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} className={cn(inputClass, 'resize-none')} placeholder="Tell us about your requirements..." />
                    </div>

                    {status === 'error' && (
                      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                        Something went wrong. Please try again or contact us directly.
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button onClick={handleSubmit} disabled={status === 'loading'} className="flex-1 btn-primary text-base py-4 group disabled:opacity-50 disabled:cursor-not-allowed">
                        {status === 'loading' ? <><Loader2 className="w-5 h-5 animate-spin" />Sending...</> : <><Send className="w-5 h-5" />Send Message</>}
                      </button>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/30">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />

          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
                <MapPin className="w-4 h-4" />
                Our Location
              </div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4 font-display">
                Visit Our Office
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                We're located in HSR Layout, Bangalore. Feel free to drop by during working hours.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] bg-slate-900">
                <iframe
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-sm">
                <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/20">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-brand-500 to-brand-600 rounded-xl text-white shadow-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">Willsmeet Headquarters</h3>
                      <p className="text-sm text-slate-600 mb-3">
                        #1496, 19th main road, Sector - 1 HSR layout, Bangalore 560102
                      </p>
                      <a
                        href="https://www.google.com/maps/place/Willsmeet/@12.9173026,77.6436917,17z/data=!4m6!3m5!1s0x3bae15f0d26b3691:0x577144e881b449ad!8m2!3d12.9186621!4d77.6451508!16s%2Fg%2F11rk021vld!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
                      >
                        Get Directions
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* <WhatsAppButton />
      <FloatingShare /> */}
    </>
  )
}