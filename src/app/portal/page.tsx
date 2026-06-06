import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Briefcase, CheckCircle2, ClipboardList, FileText, Layers, MapPin, Package, ShieldCheck, ShoppingBag, Truck, Users, Zap } from 'lucide-react'
import { Footer, Header } from '@/components'

const portalHighlights = [
    { title: 'Faster Procurement', description: 'Create requests, track approvals and release orders from one dashboard.', icon: ShoppingBag },
    { title: 'Real-time Tracking', description: 'Monitor order status, invoices, deliveries and exceptions instantly.', icon: Truck },
    { title: 'Better Visibility & Control', description: 'Centralize spend data, approvals and branch workflows with ease.', icon: ShieldCheck },
    { title: 'Data-driven Decisions', description: 'Use portal reports to identify trends, optimize budgets and improve compliance.', icon: FileText },
]

const portalCards = [
    {
        title: 'Purchase Requisitions',
        description: 'Create, view and track purchase requisitions raised by your team with approval workflows.',
        bullets: ['Create & submit requisitions', 'Track approval status', 'Save draft & edit', 'Branch-wise requisitions'],
        icon: ClipboardList,
        color: 'from-rose-500 to-pink-500'
    },
    {
        title: 'Purchase Orders',
        description: 'View and manage all purchase orders in one place with linked PR & SO details.',
        bullets: ['All orders at a glance', 'Filter by status', 'Linked PR & SO details', 'Quick actions'],
        icon: Package,
        color: 'from-brand-500 to-brand-600',
    },
    {
        title: 'Ongoing Orders',
        description: 'Monitor orders, invoices, shipment status and delivery progress in real time.',
        bullets: ['Order progress tracking', 'Invoice & package status', 'In process orders', 'Quick action menu'],
        icon: Truck,
        color: 'from-violet-500 to-purple-500',
    },
    {
        title: 'Reports',
        description: 'Access detailed spend reports across branches, items and categories to identify savings.',
        bullets: ['Reports by customer / item', 'PR & PO reports', 'Filter by year, branch, status', 'Export reports'],
        icon: FileText,
        color: 'from-amber-500 to-orange-500',
    },
    {
        title: 'Branches',
        description: 'Manage locations and streamline procurement across multiple sites with branch-level control.',
        bullets: ['Add & manage branches', 'Update branch details', 'Centralized visibility', 'Branch-level control'],
        icon: MapPin,
        color: 'from-emerald-500 to-teal-500',
    },
    {
        title: 'Create Purchase Requisition',
        description: 'Raise a new purchase requisition with all billing, shipping and item details in just a few clicks.',
        bullets: ['Select addresses', 'Add items & quantities', , 'Save as draft or submit'],
        icon: Layers,
        color: 'from-sky-500 to-blue-500',
    },
]

const workflowSteps = [
    { title: 'Create Request', subtitle: 'Raise a purchase requisition with all required details.', icon: ClipboardList, color: 'from-emerald-500 to-teal-500' },
    { title: 'Submit for Approval', subtitle: 'Submit your request for approval to the concerned authority.', icon: Users, color: 'from-sky-500 to-blue-500' },
    { title: 'Approval', subtitle: 'Request is reviewed and approved by authorised approver.', icon: CheckCircle2, color: 'from-amber-500 to-orange-500' },
    { title: 'PO Creation', subtitle: 'Purchase order is created and shared with the vendor.', icon: FileText, color: 'from-violet-500 to-purple-500' },
    { title: 'Order Fulfillment', subtitle: 'Vendor processes the order and ships the items.', icon: Truck, color: 'from-rose-500 to-pink-500' },
    { title: 'Track & Close', subtitle: 'Track order, invoices and packages until completion.', icon: Zap, color: 'from-brand-500 to-brand-600' },
]

export default function PortalPage() {
    return (
        <>
            <Header />
            <main className="bg-[var(--bg-primary)]">

                {/* Hero Section */}
                <section className="relative overflow-hidden py-24">
                    {/* Background decorations — matching careers page */}
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <div className="absolute top-20 left-10 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
                            <div className="max-w-2xl">
                                {/* Badge — same style as careers */}
                                <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-sm font-medium rounded-full bg-brand-600/10 text-brand-500 border border-brand-600/20 backdrop-blur-sm">
                                    <Briefcase className="w-4 h-4" />
                                    Customer Procurement Portal
                                </div>

                                <h1 className="mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] font-display">
                                    Your Procurement.{' '}
                                    <span className="gradient-text text-brand-500  ">Simplified.</span>
                                </h1>

                                <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                                    The Willsmeet Customer Procurement Portal helps your organization issue <strong>purchase requests, track orders, manage approvals</strong> and monitor spend — all in one centralized platform.
                                </p>

                                {/* Highlight cards */}
                                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                                    {portalHighlights.map((item) => {
                                        const Icon = item.icon
                                        return (
                                            <div key={item.title} className="flex gap-3 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md px-5 py-5">
                                                <div className="text-brand-400">
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-white">{item.title}</p>
                                                    <p className="mt-1 text-sm text-gray-400">{item.description}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                {/* CTAs — matching careers buttons */}
                                <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                                    <Link
                                        href="#request"
                                        className="group relative inline-flex items-center gap-2 px-8 py-4 font-semibold about-cta-primary rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-500/25"
                                    >
                                        <span className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-500" />
                                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                        </span>
                                        <span className="relative z-10">Request Portal Access</span>
                                        <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Link>

                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-gray-300 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                                    >
                                        Talk to Sales
                                    </Link>
                                </div>
                            </div>

                            {/* Portal preview card */}
                            <div className="relative mx-auto w-full max-w-xl">
                                <div className="absolute inset-0 -right-10 -top-10 rounded-[40px] bg-brand-500/10 blur-3xl" />
                                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
                                    <div className="px-6 py-5 sm:px-8 sm:py-6">
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <div>
                                                <span className="text-xs uppercase tracking-[0.25em] text-gray-500">Portal</span>
                                                <p className="mt-2 text-sm text-gray-400">Dashboard</p>
                                            </div>
                                            <div className="rounded-2xl border border-green-400 bg-green-200 px-4 py-2 text-black">
                                                LIVE
                                            </div>
                                        </div>

                                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                            {['This Year', 'Branches', 'Status'].map((filter) => (
                                                <button key={filter} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-gray-400 transition hover:border-brand-500/40 hover:bg-white/10 hover:text-white">
                                                    {filter}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="overflow-hidden border-t border-white/10">
                                        <Image
                                            src="/assets/Images/portal.png"
                                            alt="Customer procurement portal dashboard"
                                            width={1200}
                                            height={920}
                                            className="h-auto w-full object-cover"
                                        />
                                    </div>

                                    <div className="border-t border-white/10 bg-white/5 px-6 py-4 sm:px-8">
                                        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-gray-500">
                                            <span>All orders in one view</span>
                                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gray-400">Export</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto max-w-7xl" />

                {/* Portal Cards Section */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <div className="absolute top-10 right-20 w-72 h-72 bg-brand-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-10 left-20 w-80 h-80 bg-brand-400/5 rounded-full blur-3xl" />

                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
                                <Briefcase className="w-4 h-4" />
                                Everything on the Portal
                            </div>
                            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-display mb-4">
                                Manage your procurement{' '}
                                <span className="gradient-text ">end-to-end</span>
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                                Complete visibility and control over your procurement process,
                                from requisition to delivery.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {portalCards.map((card) => {
                                const Icon = card.icon
                                return (
                                    <div
                                        key={card.title}
                                        className="relative p-8 rounded-[2rem] border border-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="relative z-10">
                                            {/* Icon — same style as perks in careers */}
                                            <div className="flex items-center gap-4">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                                                    <Icon className="h-5 w-5" />
                                                </div>

                                                <h3 className="text-xl font-bold text-white font-display tracking-tight">
                                                    {card.title}
                                                </h3>
                                            </div>

                                            <p className="text-gray-400 leading-relaxed text-base mb-5">
                                                {card.description}
                                            </p>

                                            <ul className="space-y-2.5 text-sm text-gray-500">
                                                {card.bullets.map((item) => (
                                                    <li key={item} className="flex items-start gap-3">
                                                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/10 text-brand-400 text-xs">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto max-w-7xl" />

                {/* Workflow Section */}
                <section className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <div className="absolute top-20 left-10 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl animate-pulse" />

                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20">
                                <Zap className="w-4 h-4" />
                                How It Works
                            </div>
                            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-display mb-4">
                                A simple process to{' '}
                                <span className="gradient-text">streamline procurement</span>
                            </h2>
                        </div>

                        <div className="mt-12 grid gap-4 lg:grid-cols-6">
                            {workflowSteps.map((step, index) => {
                                const Icon = step.icon
                                return (
                                    <div key={step.title} className="relative flex flex-col items-center text-center">
                                        {/* Icon — same gradient style as careers perks */}
                                        <div className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-white shadow-xl`}>
                                            <Icon className="h-7 w-7" />
                                        </div>

                                        {index < workflowSteps.length - 1 && (
                                            <span className="absolute right-[-5.5rem] top-8 hidden h-px w-[11rem] bg-white/10 lg:block" />
                                        )}

                                        <span className="mt-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/10 border border-brand-500/20 text-sm font-semibold text-brand-400">
                                            {index + 1}
                                        </span>
                                        <h3 className="mt-4 text-sm font-semibold text-white">{step.title}</h3>
                                        <p className="mt-2 text-xs leading-6 text-gray-500">{step.subtitle}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mx-auto max-w-7xl" />

                {/* Request Access Form Section */}
                <section id="request" className="relative py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-grid opacity-20" />
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-brand-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

                    <div className="relative z-10 mx-auto grid gap-12 lg:grid-cols-[0.95fr_1.05fr] max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-sm font-medium rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 backdrop-blur-sm">
                                <Zap className="w-4 h-4" />
                                Get Started
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold  font-display mb-4 leading-[1.1]">
                                Request Access to the{' '}
                                <span className="gradient-text">Procurement Portal</span>
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-gray-400">
                                Fill out the form and our team will get in touch with you to set up your organization account.
                            </p>

                            <div className="mt-10 space-y-4 rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-md p-8">
                                {[
                                    'Quick Onboarding — Get started in less than 24-48 hours',
                                    'Secure & Reliable — Enterprise-grade security for your data',
                                    'Dedicated Support — Our team is here to help you succeed',
                                ].map((item) => (
                                    <div key={item} className="flex gap-3 text-sm text-gray-400 items-center">
                                        <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-400">
                                            <CheckCircle2 className="h-4 w-4" />
                                        </span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form card — glassmorphism dark style */}
                        <div className="rounded-[2rem] border border-white/5 bg-white/5 backdrop-blur-md p-8">
                            <form className="space-y-6">
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <label className="block">
                                        <span className="block mb-2 text-sm font-medium text-gray-300">Full Name *</span>
                                        <input type="text" placeholder="Enter full name" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 outline-none transition focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20" />
                                    </label>
                                    <label className="block">
                                        <span className="block mb-2 text-sm font-medium text-gray-300">Company Name *</span>
                                        <input type="text" placeholder="Enter company name" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 outline-none transition focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20" />
                                    </label>
                                </div>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <label className="block">
                                        <span className="block mb-2 text-sm font-medium text-gray-300">Email *</span>
                                        <input type="email" placeholder="Enter email" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 outline-none transition focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20" />
                                    </label>
                                    <label className="block">
                                        <span className="block mb-2 text-sm font-medium text-gray-300">Mobile Number *</span>
                                        <input type="tel" placeholder="Enter mobile number" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 outline-none transition focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20" />
                                    </label>
                                </div>
                                <label className="block">
                                    <span className="block mb-2 text-sm font-medium text-gray-300">GST Number (Optional)</span>
                                    <input type="text" placeholder="Enter GST number" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 outline-none transition focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20" />
                                </label>
                                <label className="block">
                                    <span className="block mb-2 text-sm font-medium text-gray-300">Requirement Details</span>
                                    <textarea rows={4} placeholder="Tell us about your requirements" className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-600 outline-none transition focus:border-brand-500/50 focus:ring-2 focus:ring-brand-500/20" />
                                </label>

                                {/* Submit — same shimmer button as careers */}
                                <button
                                    type="submit"
                                    className="group relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold about-cta-primary rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-brand-500/25"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-500" />
                                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </span>
                                    <span className="relative z-10 ">Submit Request</span>
                                    <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </button>
                            </form>
                        </div>
                    </div>
                </section>




            </main>
            <Footer />
        </>
    )
}