'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Menu, X, ArrowRight, ChevronDown, ExternalLink,
  PenTool, SprayCan, ShieldCheck, Package, Gift, Building2,
  Sparkles, Target, Zap, TrendingUp, Users
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Logo from '../../public/assets/Willsmeet_white.png'

type NavLink = {
  href: string
  label: string
  external?: boolean
  dropdown?: { label: string; href: string; icon: React.ElementType }[]
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  {
    href: '/solutions',
    label: 'Solutions',
    dropdown: [
      { label: 'Stationery', href: '/solutions#stationery', icon: PenTool },
      { label: 'Housekeeping', href: '/solutions#housekeeping', icon: SprayCan },
      { label: 'Workplace Essentials', href: '/solutions#safety', icon: ShieldCheck },
      { label: 'Packaging', href: '/solutions#packaging', icon: Package },
      { label: 'Corporate Gifting', href: '/solutions#gifting', icon: Gift },
      { label: 'Office Setup', href: '/solutions#setup', icon: Building2 },
    ]
  },
  {
    href: '/about',
    label: 'About Us',
    dropdown: [
      { label: 'Who We Are', href: '/about#who-we-are', icon: Sparkles },
      { label: 'Vision & Mission', href: '/about#vision', icon: Target },
      { label: 'Our Advantage', href: '/about#advantage', icon: Zap },
      { label: 'Our Journey', href: '/about#journey', icon: TrendingUp },
      { label: 'Leadership', href: '/about#leadership', icon: Users },
    ]
  },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // FIX: Change boolean state to string state to track WHICH dropdown is open
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
    setActiveMobileDropdown(null) // Reset dropdowns on page change
  }, [pathname])

  // Helper to toggle specific dropdowns
  const toggleDropdown = (label: string) => {
    if (activeMobileDropdown === label) {
      setActiveMobileDropdown(null) // Close if clicking the same one
    } else {
      setActiveMobileDropdown(label) // Open the new one
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        mobileMenuOpen
          ? 'bg-[var(--bg-primary)] border-b border-white/5'
          : isScrolled
            ? 'bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-white/5 shadow-sm'
            : 'bg-transparent'
      )}
    >
      <nav className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo Wrapper */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src={Logo}
                alt="Willsmeet Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label} className="relative group h-full flex items-center">
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center gap-1 text-sm font-medium transition-colors duration-200 group-hover:text-brand-400',
                        pathname.startsWith(link.href) ? 'text-brand-500' : 'text-gray-400'
                      )}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </Link>

                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 w-72">
                      <div className="bg-[#0f1115]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-2 overflow-hidden">
                        {link.dropdown.map((item) => {
                          const Icon = item.icon
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                            >
                              <div className="p-2 rounded-lg bg-brand-500/10 text-brand-400 group-hover/item:bg-brand-500 group-hover/item:text-white transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <span className="text-sm font-medium text-gray-300 group-hover/item:text-white">
                                {item.label}
                              </span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="relative group flex items-center gap-1"
                >
                  <span
                    className={cn(
                      'text-sm font-medium transition-colors duration-200',
                      pathname === link.href
                        ? 'text-brand-500'
                        : 'text-gray-400 group-hover:text-brand-400'
                    )}
                  >
                    {link.label}
                  </span>

                  {link.external && (
                    <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-brand-400 transition-colors" />
                  )}

                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-brand-500 to-brand-400 transition-all duration-300',
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-6 py-2.5 font-medium text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-500/25"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-500" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </span>
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-gray-400 hover:text-brand-500 transition-colors duration-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden absolute top-full left-0 right-0 bg-[var(--bg-primary)] border-b border-white/5 shadow-lg transition-all duration-300 overflow-hidden',
            mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="px-4 py-6 space-y-2 overflow-y-auto max-h-[80vh]">
            {navLinks.map((link) => {
              if (link.dropdown) {
                // Determine if THIS specific dropdown is open
                const isDropdownOpen = activeMobileDropdown === link.label

                return (
                  <div key={link.label} className="space-y-1">
                    <button
                      // Use toggle function passing the unique Label
                      onClick={() => toggleDropdown(link.label)}
                      className={cn(
                        'w-full flex items-center justify-between py-3 px-4 text-base font-medium rounded-xl transition-all duration-200',
                        pathname.startsWith(link.href)
                          ? 'text-brand-500 bg-brand-500/10'
                          : 'text-gray-400 hover:text-brand-500 hover:bg-brand-500/5'
                      )}
                    >
                      {link.label}
                      <ChevronDown className={cn("w-5 h-5 transition-transform", isDropdownOpen && "rotate-180")} />
                    </button>

                    <div className={cn(
                      "overflow-hidden transition-all duration-300 pl-4 space-y-1",
                      // Check specific state here
                      isDropdownOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                    )}>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 py-2 px-4 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5"
                        >
                          <item.icon className="w-4 h-4" />
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              // Mobile Standard Link
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    'flex items-center gap-2 py-3 px-4 text-base font-medium rounded-xl transition-all duration-200',
                    pathname === link.href
                      ? 'text-brand-500 bg-brand-500/10'
                      : 'text-gray-400 hover:text-brand-500 hover:bg-brand-500/5'
                  )}
                >
                  {link.label}
                  {link.external && <ExternalLink className="w-4 h-4 opacity-50" />}
                </Link>
              )
            })}

            <div className="pt-4">
              <Link
                href="/contact"
                className="block w-full text-center py-3 px-6 bg-gradient-to-r from-brand-600 to-brand-500 text-white font-medium rounded-full hover:shadow-lg hover:shadow-brand-500/25 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}