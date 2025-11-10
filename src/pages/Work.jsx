import { useEffect, useMemo, useState } from 'react'
import projectsData from '../content/projects.json'
import ProjectCard from '../components/ProjectCard'

export default function Work() {
  const [filter, setFilter] = useState('All')
  const filters = ['All', 'Branding', 'Logos', 'Social', 'UI/UX', 'Packaging']

  const projects = useMemo(() => {
    if (filter === 'All') return projectsData
    return projectsData.filter((p) => p.tags.includes(filter))
  }, [filter])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-8">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Selected Work</h1>
          <p className="text-gray-600 dark:text-gray-300">Filter by category</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm border transition ${
                filter === f
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-white/20 dark:text-gray-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </header>

      <section id="work" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>
    </main>
  )
}
