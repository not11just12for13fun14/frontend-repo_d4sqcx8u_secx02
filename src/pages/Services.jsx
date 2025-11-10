import { siteConfig } from '../content/config'

const SERVICES = [
  {
    title: 'Brand Identity',
    bullets: ['Logo system', 'Color & type', 'Guidelines', 'Applications'],
    timeline: '3–6 weeks',
  },
  {
    title: 'Logo Design',
    bullets: ['Exploration', 'Refinement', 'Lockups', 'Deliverables'],
    timeline: '2–4 weeks',
  },
  {
    title: 'Social Creatives',
    bullets: ['Templates', 'Campaign assets', 'Reels/motion', 'Playbooks'],
    timeline: '1–3 weeks',
  },
  {
    title: 'Packaging',
    bullets: ['Architecture', 'Mockups', 'Print-ready', 'Variants'],
    timeline: '2–5 weeks',
  },
]

function Card({ item }) {
  return (
    <div className="rounded-2xl bg-white dark:bg-gray-800 ring-1 ring-gray-200/60 dark:ring-white/10 p-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
        <span className="text-xs text-gray-500">{item.timeline}</span>
      </div>
      <ul className="mt-4 space-y-1 text-gray-700 dark:text-gray-300 list-disc pl-5">
        {item.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Services() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">Services</h1>
        <p className="text-gray-600 dark:text-gray-300">Tailored scopes, clear deliverables, practical timelines.</p>
      </header>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s) => (
          <Card key={s.title} item={s} />
        ))}
      </section>

      <div className="mt-10 rounded-2xl bg-gray-50 dark:bg-white/5 p-6 text-gray-700 dark:text-gray-300">
        <p>
          For availability and pricing ranges, reach out at{' '}
          <a className="underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
        </p>
      </div>
    </main>
  )
}
