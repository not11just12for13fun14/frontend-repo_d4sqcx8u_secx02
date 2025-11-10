import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from '../content/projects.json'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug])

  if (!project) {
    return (
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Not found</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          That case study doesn’t exist. <Link className="underline" to="/work">Back to work</Link>.
        </p>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="sticky top-16 z-30 -mx-4 sm:-mx-6 lg:mx-0 bg-white/70 dark:bg-gray-900/60 backdrop-blur p-4 sm:p-6">
        <nav className="flex gap-4 text-sm text-gray-600 dark:text-gray-300">
          <a href="#overview" className="hover:underline">Overview</a>
          <a href="#process" className="hover:underline">Process</a>
          <a href="#visuals" className="hover:underline">Visuals</a>
          <a href="#outcome" className="hover:underline">Outcome</a>
        </nav>
      </header>

      <section id="overview" className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">{project.name}</h1>
        <p className="text-gray-600 dark:text-gray-300">{project.role} • {project.year}</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{project.problem}</p>
      </section>

      <section id="process" className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Process</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{project.process}</p>
      </section>

      <section id="visuals" className="mt-10 grid gap-4">
        {project.images?.map((src) => (
          <figure key={src} className="rounded-2xl overflow-hidden ring-1 ring-gray-200/60 dark:ring-white/10">
            <img src={src} alt={project.name} className="w-full h-auto" loading="lazy" />
          </figure>
        ))}
      </section>

      <section id="outcome" className="mt-10">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Outcome</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{project.outcome}</p>
      </section>

      <div className="mt-12">
        <Link className="underline" to="/work">← Back to work</Link>
      </div>
    </main>
  )
}
