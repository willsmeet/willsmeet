import type { Metadata } from 'next'
import Link from 'next/link'
import { Header, Footer, WhatsAppButton, FloatingShare } from '@/components'
import { FileText, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Willsmeet',
  description: 'Read the terms and conditions for using Willsmeet Office Solutions services.',
}

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing or using Willsmeet Office Solutions services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`,
  },
  {
    title: 'Services',
    content: `Willsmeet provides B2B office supplies and workplace procurement services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.`,
  },
  {
    title: 'Account Registration',
    content: `To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.`,
  },
  {
    title: 'Orders and Payment',
    content: `All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason. Payment terms will be established based on your account type and credit approval.`,
  },
  {
    title: 'Delivery',
    content: `We will make reasonable efforts to deliver products within the estimated timeframe. However, delivery dates are not guaranteed. Risk of loss and title for products pass to you upon delivery.`,
  },
  {
    title: 'Returns and Refunds',
    content: `Products may be returned within 7 days of delivery if they are defective or damaged. Refunds will be processed within 7-10 business days after we receive and inspect the returned items. Custom or personalized items are non-refundable.`,
  },
  {
    title: 'Intellectual Property',
    content: `All content on our website, including text, graphics, logos, and images, is the property of Willsmeet or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written permission.`,
  },
  {
    title: 'Limitation of Liability',
    content: `To the maximum extent permitted by law, Willsmeet shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.`,
  },
  {
    title: 'Governing Law',
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.`,
  },
  {
    title: 'Changes to Terms',
    content: `We reserve the right to update these Terms of Service at any time. We will notify you of any changes by posting the new terms on this page and updating the "Last updated" date.`,
  },
]

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-[var(--bg-primary)]">
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="absolute inset-0 bg-grid opacity-50" />

          {/* Floating glow orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute top-40 right-10 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-brand-500/10 border border-brand-500/20 rounded-2xl">
                <FileText className="w-8 h-8 text-brand-400" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white sm:text-5xl font-display">Terms of Service</h1>
                <p className="text-gray-500 mt-1">Last updated: January 2025</p>
              </div>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed">
              Please read these terms carefully before using Willsmeet services.
              By using our services, you agree to be bound by these terms.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />

          <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12 space-y-10">
                {sections.map((section, index) => (
                  <div key={index} className="pb-10 border-b border-white/10 last:border-0 last:pb-0">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 bg-brand-500/10 border border-brand-500/20 text-brand-400 rounded-lg text-sm font-bold">
                        {index + 1}
                      </span>
                      {section.title}
                    </h2>
                    <p className="text-gray-400 leading-relaxed">{section.content}</p>
                  </div>
                ))}

                {/* Contact Section */}
                <div className="pt-6">
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-brand-500/10 border border-brand-500/20 text-brand-400 rounded-lg text-sm font-bold">
                      11
                    </span>
                    Contact Information
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    For any questions regarding these Terms of Service, please contact us:
                  </p>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <a
                      href="mailto:sales@willsmeet.com"
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10 hover:border-brand-500/30 transition-all"
                    >
                      <div className="p-2 bg-brand-500/10 border border-brand-500/20 rounded-lg">
                        <Mail className="w-5 h-5 text-brand-400" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Email</div>
                        <div className="text-sm font-medium text-white">sales@willsmeet.com</div>
                      </div>
                    </a>

                    <a
                      href="tel:+918884162162"
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10 hover:border-brand-500/30 transition-all"
                    >
                      <div className="p-2 bg-brand-500/10 border border-brand-500/20 rounded-lg">
                        <Phone className="w-5 h-5 text-brand-400" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Phone</div>
                        <div className="text-sm font-medium text-white">+91 888-416-2162</div>
                      </div>
                    </a>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=1496+19th+main+road+Sector+1+HSR+layout+Bangalore+560102"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/10 hover:border-brand-500/30 transition-all sm:col-span-3 md:col-span-1"
                    >
                      <div className="p-2 bg-brand-500/10 border border-brand-500/20 rounded-lg">
                        <MapPin className="w-5 h-5 text-brand-400" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Address</div>
                        <div className="text-sm font-medium text-white">HSR Layout, Bangalore</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Links */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
              >
                Privacy Policy →
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
              >
                Contact Us →
              </Link>
              <Link
                href="/faqs"
                className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
              >
                FAQs →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <FloatingShare />
    </>
  )
}