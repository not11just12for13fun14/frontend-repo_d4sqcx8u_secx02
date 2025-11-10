import { useState } from 'react'
import { siteConfig } from '../content/config'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    // Fake submit delay to show success micro-interaction
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  return (
    <main className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">Contact</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        For project inquiries, email <a className="underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> or use the form below.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <input type="text" name="fullname" className="hidden" tabIndex="-1" autoComplete="off" />
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300">Name</label>
          <input required className="mt-1 w-full rounded-lg border border-gray-300 bg-white/60 px-3 py-2 dark:border-white/20 dark:bg-transparent" />
        </div>
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300">Email</label>
          <input type="email" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white/60 px-3 py-2 dark:border-white/20 dark:bg-transparent" />
        </div>
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300">Budget range</label>
          <select className="mt-1 w-full rounded-lg border border-gray-300 bg-white/60 px-3 py-2 dark:border-white/20 dark:bg-transparent">
            <option>Under $1k</option>
            <option>$1k–$3k</option>
            <option>$3k–$5k</option>
            <option>$5k+</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300">Message</label>
          <textarea rows="5" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white/60 px-3 py-2 dark:border-white/20 dark:bg-transparent" />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-white shadow-sm transition hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 dark:bg-white dark:text-gray-900"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending…' : status === 'success' ? 'Sent — thank you!' : 'Send Message'}
        </button>
      </form>

      <div className="mt-8 text-sm text-gray-600 dark:text-gray-300">
        Or reach me on{' '}
        <a className="underline" href={siteConfig.social.behance} target="_blank" rel="noreferrer">Behance</a>,{' '}
        <a className="underline" href={siteConfig.social.dribbble} target="_blank" rel="noreferrer">Dribbble</a>,{' '}
        <a className="underline" href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>,{' '}
        <a className="underline" href={siteConfig.social.instagram} target="_blank" rel="noreferrer">Instagram</a>.
      </div>
    </main>
  )
}
