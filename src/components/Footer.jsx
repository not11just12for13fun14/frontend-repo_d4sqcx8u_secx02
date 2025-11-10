import { siteConfig } from '../content/config'
import { Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 py-10 mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {year} {siteConfig.name}. Available for freelance.</p>
        <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
          <a href={siteConfig.social.linkedin} className="hover:underline" target="_blank" rel="noreferrer">
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={18} />
          </a>
          <a href={siteConfig.social.instagram} className="hover:underline" target="_blank" rel="noreferrer">
            <span className="sr-only">Instagram</span>
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
