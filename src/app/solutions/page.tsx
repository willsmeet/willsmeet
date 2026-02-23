'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Header, Footer, WhatsAppButton, FloatingShare } from '@/components'
import {
  PenTool,
  SprayCan,
  ShieldCheck,
  Package,
  Gift,
  Building2,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Phone
} from 'lucide-react'

import SolutionsBanner from '../../../public/assets/banners/solutionbanner.jpeg'

const solutions = [
  {
    id: 'stationery',
    icon: PenTool,
    title: 'Stationery',
    tagline: 'Fuel Your Workspace with the Right Tools',
    description: 'Pens that flow, binders that hold, and supplies that never let you down.',
    cta: 'Order Your Office Stationery with Willsmeet Today!',
    images: ['https://images.pexels.com/photos/6969297/pexels-photo-6969297.jpeg', 'https://images.pexels.com/photos/6193094/pexels-photo-6193094.jpeg'],
    color: 'from-brand-500 to-brand-600',
    bgColor: 'bg-brand-500/10',
    serviceOverview: "Stationery isn't just about paper and pens - it's the backbone of every productive workplace. At Willsmeet, we offer a complete range of office stationery that keeps your team moving seamlessly. From sticky notes and markers to folders, files, and storage solutions, our catalogue covers it all. Designed for bulk procurement, our supplies ensure cost efficiency, high availability, and consistent quality.",
    whyChoose: [
      'One Partner, Endless Choices: You have access to over 3,000 stationery goods.',
      'Improved Prices, Promised: You can save money by having direct relationships with manufacturers.',
      'Quicker Than You Think: In India, 61% of orders are delivered in a day.',
      'Leaders in the Industry Trust Us: More than 500 companies depend on our reliability.',
    ],
    features: [
      'Premium Writing Instruments',
      'Professional Filing Solutions',
      'High-Quality Paper Products',
      'Designer Desk Accessories',
      'Notebooks & Planners',
      'Art & Craft Supplies',
    ],
  },
  {
    id: 'housekeeping',
    icon: SprayCan,
    title: 'Housekeeping Essentials',
    tagline: 'A Cleaner Workplace. A Happier Workforce.',
    description: 'Because spotless spaces spark better performance.',
    cta: 'Get Hassle-Free Housekeeping Supplies with Willsmeet Today',
    images: ['https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=1740&auto=format&fit=crop', 'https://images.pexels.com/photos/4440523/pexels-photo-4440523.jpeg'],
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    serviceOverview: 'Our housekeeping line includes professional-grade detergents, microfiber tools, dispensers, sanitisation systems, and consumables designed for institutional use. We ensure your spaces remain pristine and welcoming.',
    whyChoose: [
      'All-in-One Convenience: One vendor for all cleaning & hygiene needs.',
      'Quality You Can Trust: Supplies tested and approved by top organisations.',
      'Rapid Replenishment: Pan-India warehouses to ensure zero stockouts.',
      'Cost-Effective Bulk Supply: Get more value without compromising quality.',
    ],
    features: [
      'Industrial Cleaning Supplies',
      'Hygiene & Sanitization Products',
      'Waste Management Solutions',
      'Air Fresheners & Deodorizers',
      'Floor Care Equipment',
      'Restroom Essentials',
    ],
  },
  {
    id: 'safety',
    icon: ShieldCheck,
    title: 'Workplace Essentials',
    tagline: 'Protect What Matters Most - Your People.',
    description: 'Every employee deserves a safe workspace.',
    cta: 'Keep Your Workforce Safe with Willsmeet Essentials',
    images: ['https://images.pexels.com/photos/317371/pexels-photo-317371.jpeg', 'https://images.pexels.com/photos/6368831/pexels-photo-6368831.jpeg'],
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-500/10',
    serviceOverview: 'From PPE kits and N95 masks to thermals, gloves, and disinfectants, we stock industrial-grade essentials based on demand forecasting so you never compromise on safety.',
    whyChoose: [
      'Direct manufacturer access: Cost-effective, certified essentials at scale.',
      'Proactive stock buffers: We hold one-month stock for critical items in key warehouses.',
      'Fast emergency shipments: 24/7 fulfilment with an in-house transport fleet.',
      'Compliance-first sourcing: Products meet regulatory and industry safety standards.',
    ],
    features: [
      'Complete PPE Kits',
      'Safety Masks & Respirators',
      'Industrial Gloves',
      'Sanitisers & Disinfectants',
      'First Aid Supplies',
      'Safety Signage',
    ],
  },
  {
    id: 'packaging',
    icon: Package,
    title: 'Packaging Material',
    tagline: 'Secure Every Shipment. Save on Every Delivery.',
    description: "Because packaging isn't just a box - it's your first impression.",
    cta: 'Protect Your Products with Willsmeet Packaging Solutions',
    images: ['https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop', 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1740&auto=format&fit=crop'],
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-500/10',
    serviceOverview: "Willsmeet's packaging range covers corrugated boxes, bubble cushioning, mailers, tapes, and customised carry solutions. We advise on right-sizing and material selection to lower freight costs.",
    whyChoose: [
      'Right-size expertise: We recommend packaging that reduces dimensional weight charges.',
      'Bulk, custom & branded options: From plain boxes to printed corporate carriers.',
      'Cost-efficient sourcing: Direct manufacturer relationships reduce unit costs.',
      'Fast replenishment: Buffer stock in strategic warehouses for uninterrupted operations.',
    ],
    features: [
      'Corrugated Boxes (All Sizes)',
      'Branded Carry Bags',
      'Premium Packing Tape',
      'Bubble Wrap & Foam',
      'Stretch Films',
      'Custom Packaging',
    ],
  },
  {
    id: 'gifting',
    icon: Gift,
    title: 'Corporate Gifting',
    tagline: 'Gifts That Mean More. Relationships That Last Longer.',
    description: 'Make every occasion memorable with thoughtful gifting.',
    cta: 'Discover Corporate Gifting with Willsmeet',
    images: ['https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1740&auto=format&fit=crop', 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=1740&auto=format&fit=crop'],
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-500/10',
    serviceOverview: 'We curate gifting options - from employee appreciation kits to premium branded merchandise. Choose products that complement your celebration, branding standards, and budget.',
    whyChoose: [
      'Curated original ideas: Concepts with a focus on ROI and impact.',
      'Complete implementation: Packaging, branding, sourcing, and distribution.',
      'Scalable personalisation: From individual VIP presents to campaigns with 10,000 pieces.',
      'Reasonably priced options: Clear pricing for both premium and budget-friendly tiers.',
    ],
    features: [
      'Custom Gift Hampers',
      'Branded Merchandise',
      'Festival Collections',
      'Recognition Awards',
      'Welcome Kits',
      'Event Giveaways',
    ],
  },
  {
    id: 'setup',
    icon: Building2,
    title: 'Office Setup Needs',
    tagline: 'Get Work-Ready from Day One.',
    description: 'Everything you need to turn empty spaces into thriving workplaces.',
    cta: 'Set Up Your New Office with Willsmeet',
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1740&auto=format&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1740&auto=format&fit=crop'],
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-500/10',
    serviceOverview: 'At Willsmeet, we take the hassle out of your setup with a complete range of office essentials. From carpets to furniture accessories, we ensure your workstation is practical and motivating.',
    whyChoose: [
      'Turnkey bundles: Pre-configured kits for teams of varying sizes.',
      'Coordinated delivery windows: Aligned with your fit-out and move schedules.',
      'Manufacturer-direct sourcing: Competitive pricing on large equipment.',
      'Single PO simplicity: One order, multiple SKUs, consolidated invoicing.',
    ],
    features: [
      'Pantry & Cafeteria Supplies',
      'Furniture Accessories',
      'Carpets & Floor Mats',
      'Storage & Organization',
      'Lighting Solutions',
      'Décor Elements',
    ],
  },
]

export default function SolutionsPage() {
  return (
    <>
      <Header />

      <main className="bg-[var(--bg-primary)]">
        {/* Hero */}
        <section className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden min-h-[48vh] sm:min-h-[60vh] flex items-center">
          {/* Background Banner Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={SolutionsBanner}
              alt="Solutions Background"
              fill
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-[var(--bg-primary)]/30" />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Background effects */}
          <div className="absolute inset-0 bg-hero-glow mix-blend-overlay" />
          <div className="absolute inset-0 bg-grid opacity-30" />

          {/* Floating glow orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute top-40 right-10 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 px-4  max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-3xl pt-20">
              <div className="inline-flex items-center gap-2 px-4 py-2  mb-6 text-sm font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
                <Sparkles className="w-4 h-4" />
                Complete Workplace Solutions
              </div>

              <h1 className="-mb-14 sm:-mb-20 text-3xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
                One Portal. One Partner.{' '}
                <span className="gradient-text">Infinite Convenience.</span>
              </h1>


            </div>
          </div>
        </section>
        <div className="text-center mt-4 px-4 sm:px-6">
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed mb-4 max-w-3xl lg:max-w-none mx-auto">
            Willsmeet combines AI-driven technology, cloud infrastructure, and a nationwide distribution network to deliver seamless, transparent, and efficient procurement solutions for businesses across India.
            From daily essentials to specialised equipment, we bring 3000+ products
            under one roof with data-driven logistics and 24/7 support.
          </p>

          {/* Quick Navigation */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center px-2 sm:px-0">
            {solutions.map((solution) => (
              <a
                key={solution.id}
                href={`#${solution.id}`}
                className="px-4 py-2 text-sm font-medium text-gray-400 bg-white/5 rounded-full border border-white/10 hover:border-brand-500/30 hover:text-brand-400 hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                {solution.title}
              </a>
            ))}
          </div>
        </div>

        {/* Solutions */}
        {solutions.map((solution, index) => {
          const Icon = solution.icon
          const isEven = index % 2 === 0

          return (
            <section
              key={solution.id}
              id={solution.id}
              className="py-20 relative overflow-hidden scroll-mt-28"
            >
              {/* Section background glow */}
              <div className="absolute inset-0 bg-grid opacity-30" />

              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
                <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-start">

                  {/* Text Content */}
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    {/* Icon & Title */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br ${solution.color} text-white shadow-lg shadow-brand-500/20`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl font-display">
                      {solution.title}
                    </h2>

                    <p className="mb-4 text-lg font-semibold text-brand-400">
                      {solution.tagline}
                    </p>

                    <p className="mb-6 text-lg text-gray-400 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Service Overview */}
                    <div className="mb-8 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <h3 className="text-lg font-bold text-white mb-3">Service Overview</h3>
                      <p className="text-gray-400 leading-relaxed">
                        {solution.serviceOverview}
                      </p>
                    </div>

                    {/* Why Choose */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-white mb-4">Why Choose Willsmeet?</h3>
                      <ul className="space-y-3">
                        {solution.whyChoose.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="p-1 bg-green-500/10 border border-green-500/20 rounded-full mt-0.5">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            </div>
                            <span className="text-gray-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features Grid */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-white mb-4">What We Offer</h3>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {solution.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand-500/30 transition-colors">
                            <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="/contact"
                      className="btn-primary text-base px-6 py-3.5 group inline-flex items-center gap-2"
                    >
                      <span>{solution.cta}</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Image Grid */}
                  <div className={`${!isEven ? 'lg:order-1' : ''} sticky top-24`}>
                    <div className="flex flex-col gap-6">
                      {solution.images.map((img, i) => (
                        <div
                          key={i}
                          className={`relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl hover:border-brand-500/30 transition-all duration-300 overflow-hidden group ${i === 0 ? 'h-[260px] sm:h-[360px] lg:h-[450px]' : 'h-[220px] sm:h-[300px] lg:h-[400px]'
                            }`}
                        >
                          <Image
                            src={img}
                            alt={`${solution.title} ${i + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                          {/* Overlay Stats - Only on first image */}
                          {i === 0 && (
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${solution.bgColor} backdrop-blur-md border border-white/20`}>
                                <Icon className="w-5 h-5 text-white" />
                                <span className="font-semibold text-white">{solution.features.length}+ Product Categories</span>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 bg-grid opacity-50" />

          {/* Floating glow orbs */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse-glow" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Contact Us Today
            </div>

            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight font-display">
              Willsmeet - The Future of <br className="hidden sm:block" />
              <span className="gradient-text">Workplace Procurement</span>
            </h2>

            <p className="mb-10 text-xl text-gray-400 leading-relaxed">
              Save time. Save cost. Scale better.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-base px-8 py-4 group"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:+918884162162"
                className="btn-secondary text-base px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
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