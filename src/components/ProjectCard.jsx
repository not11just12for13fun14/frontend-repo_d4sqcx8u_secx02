import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-sm ring-1 ring-gray-200/60 dark:ring-white/10"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.images?.[0] || 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop'}
          alt={project.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 dark:text-white">{project.name}</h3>
          <span className="text-xs text-gray-500">{project.year}</span>
        </div>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{project.role}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {project.tags?.map((t) => (
            <span key={t} className="text-xs rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 px-2 py-0.5">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
    </motion.article>
  )
}
