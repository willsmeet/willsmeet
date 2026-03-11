'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Header, Footer, WhatsAppButton, FloatingShare } from '@/components'
import {
    Briefcase, Heart, Users, Zap, TrendingUp, Shield,
    Coffee, Sparkles, ArrowRight, Star, Globe, Lightbulb,
} from 'lucide-react'

import CareerBanner from '../../../public/assets/banners/Careerbanner.png'

const perks = [
    {
        icon: Heart,
        title: 'Work–Life Balance',
        description: 'We believe great work comes from well-rested, happy people. Flexible hours and a culture that respects your time.',
        color: 'from-rose-500 to-pink-500',
        bgColor: 'bg-rose-500/10',
        borderColor: 'border-rose-500/20',
    },
    {
        icon: TrendingUp,
        title: 'Grow With Us',
        description: 'From day one, your growth is our priority. Regular mentorship, skill-building opportunities, and a clear path ahead.',
        color: 'from-brand-500 to-brand-600',
        bgColor: 'bg-brand-500/10',
        borderColor: 'border-brand-500/20',
    },
    {
        icon: Users,
        title: 'A Real Team',
        description: 'Collaboration over silos. We have fun, support each other, and celebrate wins big and small together.',
        color: 'from-violet-500 to-purple-500',
        bgColor: 'bg-violet-500/10',
        borderColor: 'border-violet-500/20',
    },
    {
        icon: Lightbulb,
        title: 'Ownership & Impact',
        description: 'No red tape. Your ideas will be heard, your initiatives will matter, and your work will directly move the needle.',
        color: 'from-amber-500 to-orange-500',
        bgColor: 'bg-amber-500/10',
        borderColor: 'border-amber-500/20',
    },
    {
        icon: Shield,
        title: 'Stability & Security',
        description: 'Backed by strong business fundamentals, we offer roles that are built to last with competitive compensation.',
        color: 'from-emerald-500 to-teal-500',
        bgColor: 'bg-emerald-500/10',
        borderColor: 'border-emerald-500/20',
    },
    {
        icon: Coffee,
        title: 'Great Culture',
        description: 'A workplace where people actually look forward to Monday. Inclusive, energetic, and driven by purpose.',
        color: 'from-sky-500 to-blue-500',
        bgColor: 'bg-sky-500/10',
        borderColor: 'border-sky-500/20',
    },
]

const values = [
    { icon: Globe, label: 'Pan-India Operations' },
    { icon: Zap, label: 'Fast-Paced Growth' },
    { icon: Star, label: 'Recognised Excellence' },
    { icon: Sparkles, label: 'Innovation First' },
]

export default function CareersPage() {
    return (
        <>
            <Header />
            <main className="bg-[var(--bg-primary)]">

                {/* Page Header */}
                <section className="relative h-[45vh] min-h-[300px] sm:min-h-[450px] lg:min-h-[550px] flex items-center justify-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0 bg-[#0d1412]">
                        <Image
                            src={CareerBanner}
                            alt="Careers"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-black/60" />
                    </div>
                </section>

                <div className="relative z-10 text-center px-4 -mt-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm text-brand-400 border border-white/20 shadow-lg">
                        <Briefcase className="w-4 h-4" />
                        Join Our Team
                    </div>
                    <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] font-display">
                        Find the career of <span className="gradient-text">your dreams</span>
                    </h1>
                </div>

                <section className="relative flex items-center justify-center overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute top-20 left-10 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

                    <div className="relative z-10 px-4 mx-auto max-w-5xl sm:px-6 lg:px-8 text-center pb-20 pt-10">

                        {/* Subheadline */}
                        <p className="mb-4 text-xl sm:text-xl font-semibold text-white/90">
                            We&apos;re more than just a workplace.{' '}
                            <span className="text-brand-400">We&apos;re a family.</span>
                        </p>

                        {/* Body text */}
                        <p className="mx-auto mb-10 max-w-2xl text-base sm:text-lg text-gray-400 leading-relaxed">
                            We know that finding a meaningful and rewarding job can be a long journey.
                            Our goal is to make that process as easy as possible for you, and to create
                            a work environment that&apos;s satisfying, one where you&apos;ll look forward
                            to coming to every day. Start your journey with us by browsing available jobs.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSescIlUM-_wYXGp9SXkpK1x0e5j_7LxB5BE_m1_IHCFnRD0XQ/viewform?usp=publish-editor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-2 px-8 py-4 font-semibold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-500/25"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-500" />
                                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </span>
                                <span className="relative z-10">Apply Now</span>
                                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>

                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-gray-300 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                            >
                                Learn About Us
                            </Link>
                        </div>

                        {/* Trust signals */}
                        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
                            {values.map(({ icon: Icon, label }) => (
                                <div key={label} className="flex items-center gap-2 text-sm text-gray-500">
                                    <div className="p-1.5 rounded-lg bg-brand-500/10">
                                        <Icon className="w-3.5 h-3.5 text-brand-400" />
                                    </div>
                                    {label}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto max-w-7xl" />

                {/* Why Work With Us – Perks Grid */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <div className="absolute top-10 right-20 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-20 w-80 h-80 bg-brand-400/5 rounded-full blur-3xl" />

                    <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
                                <Heart className="w-4 h-4" />
                                Life at Willsmeet
                            </div>
                            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-display mb-4">
                                Why you&apos;ll{' '}
                                <span className="gradient-text">love it here</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                                We&apos;ve built a culture where talented people can do their best work,
                                feel valued, and grow without limits.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {perks.map((perk) => {
                                const Icon = perk.icon
                                return (
                                    <div
                                        key={perk.title}
                                        className="relative p-8 rounded-[2rem] bg-[#0d1412]/40 border border-white/5 backdrop-blur-md transition-all duration-300"
                                    >

                                        {/* Card Content Wrapper */}
                                        <div className="relative z-10">
                                            <div className={`inline-flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br ${perk.color} text-white shadow-xl`}>
                                                <Icon className="w-8 h-8" />
                                            </div>

                                            <h3 className="text-2xl font-bold text-white mb-4 font-display tracking-tight">
                                                {perk.title}
                                            </h3>

                                            <p className="text-gray-400 leading-relaxed text-base">
                                                {perk.description}
                                            </p>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="relative py-12 overflow-hidden">
                    <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
                        <div className="relative rounded-3xl overflow-hidden border border-white/10">
                            {/* Background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-brand-500/10 to-transparent" />
                            <div className="absolute inset-0 bg-grid opacity-20" />

                            {/* Decorative orbs */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10 px-8 py-16 sm:px-16 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-8">
                                <div className="mb-8 sm:mb-0">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-xs font-medium rounded-full bg-brand-500/20 text-brand-400 border border-brand-500/30">
                                        <Sparkles className="w-3.5 h-3.5" />
                                        We&apos;re Hiring
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-3">
                                        Ready to start your journey?
                                    </h2>
                                    <p className="text-gray-400 max-w-lg">
                                        Explore our open roles and take the first step towards a career
                                        that truly makes a difference.
                                    </p>
                                </div>

                                <div className="flex-shrink-0">
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSescIlUM-_wYXGp9SXkpK1x0e5j_7LxB5BE_m1_IHCFnRD0XQ/viewform?usp=publish-editor"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative inline-flex items-center gap-3 px-8 py-4 font-semibold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-500/30"
                                    >
                                        <span className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-500" />
                                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        </span>
                                        <Briefcase className="relative z-10 w-5 h-5" />
                                        <span className="relative z-10">Apply Now</span>
                                        <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
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
