import type { Metadata } from 'next'
import Link from 'next/link'
import { Header, Footer, WhatsAppButton, FloatingShare } from '@/components'
import { Shield, Mail, Phone, MapPin, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Willsmeet',
  description: 'Learn how Willsmeet collects, uses, and protects your personal information.',
}

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us, such as when you create an account, place an order, contact us, or otherwise communicate with us. This may include: name, email address, phone number, company name, shipping address, billing address, and payment information.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:`,
    list: [
      'Process and fulfill your orders',
      'Communicate with you about products, services, and promotions',
      'Provide customer support',
      'Improve our services and develop new features',
      'Comply with legal obligations',
    ],
  },
  {
    title: '3. Information Sharing',
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business, such as payment processors and delivery partners.`,
  },
  {
    title: '4. Data Security',
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.`,
  },
  {
    title: '5. Cookies',
    content: `We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.`,
  },
  {
    title: '6. Third-Party Links',
    content: `Our website may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.`,
  },
  {
    title: '7. Changes to This Policy',
    content: `We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.`,
  },
]

export default function PrivacyPage() {
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
                <Shield className="w-8 h-8 text-brand-400" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white sm:text-5xl font-display">Privacy Policy</h1>
                <p className="text-gray-500 mt-1">Last updated: January 2025</p>
              </div>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed">
              At Willsmeet, we take your privacy seriously. This policy describes how we collect,
              use, and protect your personal information when you use our services.
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
                      {section.title.replace(/^\d+\.\s/, '')}
                    </h2>
                    <p className="text-gray-400 leading-relaxed">{section.content}</p>
                    {section.list && (
                      <ul className="mt-4 space-y-2">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-400">
                            <span className="mt-2 w-1.5 h-1.5 bg-brand-400 rounded-full flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Contact Section */}
                <div className="pt-6">
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-brand-500/10 border border-brand-500/20 text-brand-400 rounded-lg text-sm font-bold">
                      8
                    </span>
                    Contact Us
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    If you have any questions about this Privacy Policy, please contact us:
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
                href="/terms"
                className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
              >
                Terms of Service →
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

    </>
  )
}