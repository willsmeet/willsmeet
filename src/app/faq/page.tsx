'use client'

import { useState } from 'react'
import { Header, Footer } from '@/components'
import {
  ChevronDown,
  ChevronUp,
  Search,
  MailQuestion as MessageCircleQuestion,
  Sparkles
} from 'lucide-react'

// Centralized Data moved here
const faqCategories = [
  {
    title: 'Stationery',
    items: [
      { q: 'How does Willsmeet help reduce procurement headaches?', a: 'We centralise all your stationery needs under one account and one portal, making bulk ordering seamless.' },
      { q: 'Do you ensure consistent quality across large orders?', a: 'Yes - our direct manufacturer partnerships ensure the same quality standard in every delivery.' },
      { q: 'Can stationery orders be customised for teams or locations?', a: 'Absolutely. We set up tailored supply packages for multi-branch enterprises.' },
      { q: 'What if we need urgent last-minute supplies?', a: "Our dark store network ensures faster dispatch, so urgent orders don't disrupt your operations." },
    ]
  },
  {
    title: 'Housekeeping Essentials',
    items: [
      { q: 'Can you handle recurring housekeeping needs for large campuses?', a: 'Yes, we specialise in long-term supply partnerships for enterprises, hospitals, and educational institutions.' },
      { q: 'Are your products safe for use in sensitive environments, such as healthcare?', a: 'Absolutely - our disinfectants and tools meet hospital-grade safety standards.' },
      { q: 'Can we customise orders based on cleaning frequency?', a: 'Yes, we help tailor supply schedules so you never overstock or understock.' },
      { q: 'How quickly can you deliver in urgent cases?', a: 'Most orders are fulfilled within 24-48 hours via our warehouse network.' },
    ]
  },
  {
    title: 'Workplace Essentials (Safety)',
    items: [
      { q: 'Do you provide essentials for large-scale offices or institutions?', a: 'Yes, we cater to enterprises with thousands of employees across multiple sites.' },
      { q: 'Are the products certified for workplace safety compliance?', a: 'Absolutely - all our PPE and essentials meet or exceed compliance standards.' },
      { q: 'Do you offer emergency supplies for crisis situations?', a: 'Yes, our delivery model ensures you get safety essentials when you need them most.' },
      { q: 'Can you create customised safety kits for teams?', a: 'Yes, we curate safety kits designed for different departments and work conditions.' },
    ]
  },
  {
    title: 'Packaging Material',
    items: [
      { q: 'Do you provide eco-friendly packaging options?', a: 'Yes, we offer sustainable solutions for businesses committed to green practices.' },
      { q: 'Can you handle high-volume packaging needs for e-commerce?', a: 'Absolutely - our bulk supply capacity is designed for large-scale enterprises.' },
      { q: 'Are the packaging materials customizable with branding?', a: 'Yes, we provide branded packaging solutions to strengthen your customer experience.' },
      { q: 'Do you guarantee the durability of packaging for long-distance logistics?', a: 'Yes, our packaging is tested for durability and reliability across supply chains.' },
    ]
  },
  {
    title: 'Corporate Gifting',
    items: [
      { q: 'Do you take care of orders for festive gifts that are quite large?', a: 'Indeed, we oversee the entire corporate giving process for milestones, festivals, and events.' },
      { q: "Is it possible to brand gifts with our company's logo?", a: 'Yes, we specialise in branded gifts that maintain brand awareness.' },
      { q: 'Do you provide high-end and opulent gift options?', a: 'Yes, we have a wide range of products in our catalogue, from high-end luxury to affordable options.' },
      { q: 'During the busiest holiday seasons, how do you guarantee on-time delivery?', a: 'Our pan-India network and prearranged logistics guarantee that your presents will always reach on schedule.' },
    ]
  },
  {
    title: 'Office Setup Needs',
    items: [
      { q: 'Do you handle complete office setups or only supply items?', a: 'We provide supplies to get your office fully operational from day one.' },
      { q: 'Can you support multi-location setups?', a: 'Yes, our distribution network enables us to handle rollouts across multiple cities.' },
      { q: 'Do you provide customised packages for startups?', a: 'Absolutely - we help startups set up efficiently while keeping budgets in check.' },
      { q: 'Can you assist with recurring replenishments post-setup?', a: 'Yes, we continue as your long-term supply partner beyond the initial setup.' },
    ]
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-start justify-between text-left group"
      >
        <span className={`font-medium pr-4 transition-colors ${isOpen ? 'text-brand-400' : 'text-white group-hover:text-brand-400'}`}>
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 group-hover:text-brand-400 transition-colors mt-0.5" />
        )}
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')

  // Filter logic
  const filteredCategories = faqCategories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0)

  return (
    <>
      <Header />
      <main className="bg-[var(--bg-primary)] min-h-screen">

        {/* Header Section */}
        <section className="relative pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-pulse-glow" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
              <MessageCircleQuestion className="w-4 h-4" />
              Help Center
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-display">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>

            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Have questions about procurement, delivery, or custom orders?
              Find everything you need to know below.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full pl-11 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all backdrop-blur-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* FAQ List Section */}
        <section className="relative pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <div key={index} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="w-5 h-5 text-brand-400" />
                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8">
                    {category.items.map((item, i) => (
                      <FAQItem key={i} question={item.q} answer={item.a} />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No results found for "{searchQuery}"</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-brand-400 hover:text-brand-300 font-medium"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}