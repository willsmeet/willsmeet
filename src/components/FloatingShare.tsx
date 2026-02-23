'use client'

import { useState, useEffect } from 'react'
import { Share2, X, Check, Link2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

const shareButtons = [
  {
    name: 'WhatsApp',
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    color: 'bg-[#25D366] hover:bg-[#20bd5a]',
    getUrl: (url: string, title: string) => 
      `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
  },
  {
    name: 'Facebook',
    icon: Facebook,
    color: 'bg-[#1877F2] hover:bg-[#0d65d9]',
    getUrl: (url: string) => 
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: 'Twitter',
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    color: 'bg-black hover:bg-gray-800',
    getUrl: (url: string, title: string) => 
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    color: 'bg-[#0A66C2] hover:bg-[#084d94]',
    getUrl: (url: string) => 
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    name: 'Email',
    icon: Mail,
    color: 'bg-slate-600 hover:bg-slate-700',
    getUrl: (url: string, title: string) => 
      `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent('Check this out: ' + url)}`,
  },
  {
    name: 'Copy Link',
    icon: Link2,
    color: 'bg-blue-600 hover:bg-blue-700',
    action: 'copy',
  },
]

export default function FloatingShare() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [currentUrl, setCurrentUrl] = useState('')
  const [pageTitle, setPageTitle] = useState('')

  useEffect(() => {
    // Get current page URL and title
    setCurrentUrl(window.location.href)
    setPageTitle(document.title || 'Willsmeet - Workplace Procurement')

    // Show after scrolling
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update URL when route changes (for Next.js)
  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentUrl(window.location.href)
      setPageTitle(document.title || 'Willsmeet - Workplace Procurement')
    }

    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  const handleShare = async (button: typeof shareButtons[0]) => {
    if (button.action === 'copy') {
      await navigator.clipboard.writeText(currentUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      return
    }

    if (button.getUrl) {
      window.open(button.getUrl(currentUrl, pageTitle), '_blank', 'width=600,height=400')
    }
  }

  return (
    <div
      className={cn(
        'fixed right-0 top-1/2 -translate-y-1/2 z-40 transition-all duration-500',
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      )}
    >
      {/* Share Panel */}
      <div
        className={cn(
          'flex flex-col items-end transition-all duration-300',
          isOpen ? 'gap-2' : 'gap-0'
        )}
      >
        {/* Share Buttons */}
        <div
          className={cn(
            'flex flex-col gap-2 transition-all duration-300 overflow-hidden',
            isOpen ? 'max-h-[400px] opacity-100 mr-3' : 'max-h-0 opacity-0'
          )}
        >
          {shareButtons.map((button, index) => {
            const Icon = button.icon
            const isCopyButton = button.action === 'copy'
            
            return (
              <button
                key={button.name}
                onClick={() => handleShare(button)}
                className={cn(
                  'group flex items-center gap-3 pl-4 pr-3 py-3 rounded-l-xl text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl',
                  button.color,
                  isOpen ? 'translate-x-0' : 'translate-x-full'
                )}
                style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
                title={button.name}
              >
                <span className="text-sm font-medium whitespace-nowrap">
                  {isCopyButton && copied ? 'Copied!' : button.name}
                </span>
                {isCopyButton && copied ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Icon />
                )}
              </button>
            )
          })}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'flex items-center gap-2 px-4 py-3 rounded-l-xl text-white shadow-lg transition-all duration-300 hover:scale-105',
            isOpen 
              ? 'bg-slate-800 hover:bg-slate-700' 
              : 'bg-blue-600 hover:bg-blue-700'
          )}
        >
          <span className="text-sm font-medium">
            {isOpen ? 'Close' : 'Share'}
          </span>
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Share2 className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  )
}