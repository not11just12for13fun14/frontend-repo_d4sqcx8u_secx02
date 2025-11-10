import { siteConfig } from '../content/config'

export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid gap-8 md:grid-cols-[280px_1fr] items-start">
        <div className="rounded-2xl bg-white dark:bg-gray-800 ring-1 ring-gray-200/60 dark:ring-white/10 p-4">
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop"
            alt="Portrait"
            className="w-full rounded-xl object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">About</h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">{siteConfig.bio}</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <section className="rounded-2xl bg-white dark:bg-gray-800 ring-1 ring-gray-200/60 dark:ring-white/10 p-6">
              <h2 className="font-semibold text-gray-900 dark:text-white">Tools</h2>
              <ul className="mt-3 text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-1">
                {siteConfig.tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>
            <section className="rounded-2xl bg-white dark:bg-gray-800 ring-1 ring-gray-200/60 dark:ring-white/10 p-6">
              <h2 className="font-semibold text-gray-900 dark:text-white">How I work</h2>
              <ol className="mt-3 text-gray-700 dark:text-gray-300 list-decimal pl-5 space-y-1">
                <li>Discovery & alignment</li>
                <li>Concepts & iteration</li>
                <li>Systemization & handoff</li>
                <li>Launch & support</li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
