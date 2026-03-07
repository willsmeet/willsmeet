'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Linkedin, Share2, Check, ExternalLink, ArrowRight, ArrowUpRight } from 'lucide-react'
import Logo from '../../public/assets/Willsmeet_white.png'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'About Us', href: '/about' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const pathname = usePathname()
  const hideBanner = pathname.startsWith('/solutions')

  const handleShare = async () => {
    const url = window.location.origin

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Willsmeet - Workplace Procurement',
          text: 'Check out Willsmeet for all your workplace procurement needs!',
          url: url,
        })
      } catch (err) {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const googleMapsUrl = 'https://www.google.com/maps/place/Willsmeet/@12.9173026,77.6436917,17z/data=!4m6!3m5!1s0x3bae15f0d26b3691:0x577144e881b449ad!8m2!3d12.9186621!4d77.6451508!16s%2Fg%2F11rk021vld!5m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D'

  return (
    <footer className="relative bg-[var(--bg-primary)]">
      {/* CTA Banner Section */}
     {!hideBanner && <div className="px-4 sm:px-6 lg:px-8 py-12 mx-auto max-w-7xl">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Banner Image */}
          <Image
            src="/assets/banners/Above Footer Banner.png"
            alt="Get Started with Willsmeet"
            width={1400}
            height={400}
            className="w-full h-[260px] sm:h-[320px] lg:h-[400px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

          {/* CTA Content - Left Aligned hide below for solutions page */} 

          
           <div className="absolute inset-0 flex items-center">
            <div className="px-5 sm:px-10 lg:px-16 max-w-2xl">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 font-display">
                Ready to Transform Your Procurement?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 sm:mb-6">
                Join 500+ companies who trust Willsmeet for their workplace essentials.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-all duration-300 shadow-lg shadow-brand-500/30"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>}

      {/* Main Footer */}
      <div className="border-t border-white/5">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-5">
                <div className="relative w-32 h-14">
                  <Image
                    src={Logo}
                    alt="Willsmeet Logo"
                    fill
                    className="object-contain object-left "
                    priority
                  />
                </div>
              </Link>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                India's leading B2B procurement partner. AI-powered platform delivering 3000+ workplace essentials.
              </p>

              {/* Social & Share */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/willsmeet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:bg-[#0077b5] hover:text-white hover:border-transparent transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <button
                  onClick={handleShare}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:bg-brand-500 hover:text-white hover:border-transparent transition-all duration-300"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-gray-400 hover:text-brand-400 transition-colors text-sm"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://willsmeet.zohorecruit.com/jobs/Careers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-brand-400 transition-colors text-sm"
                  >
                    Careers
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
                Contact Us
              </h4>
              <div className="space-y-4">
                <a
                  href="tel:+918884162162"
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-400 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400 group-hover:bg-brand-500/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">888-416-2162</span>
                </a>

                <a
                  href="mailto:sales@willsmeet.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-brand-400 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400 group-hover:bg-brand-500/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">sales@willsmeet.com</span>
                </a>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-brand-400 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400 group-hover:bg-brand-500/20 transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">#1496, 19th Main Road,<br />HSR Layout, Bangalore</span>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
                Our Impact
              </h4>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-brand-400">500+</div>
                  <div className="text-sm text-gray-500">Enterprise Clients</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-brand-400">3000+</div>
                  <div className="text-sm text-gray-500">Products Available</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-brand-400">61%</div>
                  <div className="text-sm text-gray-500">Delivered in 24hrs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="px-4 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Willsmeet. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-brand-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <p className="text-sm text-gray-500">
              Made in Bangalore
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
