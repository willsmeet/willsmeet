import Link from 'next/link'
import { Header, Footer } from '@/components'
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #1e293b 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative px-4 mx-auto max-w-2xl text-center py-20">
          {/* 404 Number */}
          <div className="mb-6 relative">
            <span className="text-[150px] sm:text-[200px] font-bold text-blue-100 leading-none select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-6 bg-white rounded-full shadow-xl border border-slate-100">
                <Search className="w-12 h-12 text-blue-600" />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <h1 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Page Not Found
          </h1>
          <p className="mb-8 text-lg text-slate-600 leading-relaxed max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
            >
              <HelpCircle className="w-5 h-5" />
              Contact Support
            </Link>
          </div>

          {/* Quick Links */}
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-sm text-slate-500 mb-4">Maybe you were looking for:</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link 
                href="/solutions" 
                className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-50 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Solutions
              </Link>
              <Link 
                href="/about" 
                className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-50 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                About Us
              </Link>
            
              <Link 
                href="/contact" 
                className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-50 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}