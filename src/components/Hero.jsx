import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90 dark:from-[#0B1220]/70 dark:via-[#0B1220]/20 dark:to-[#0B1220]/95" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          ayan kumar roy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-lg sm:text-xl text-gray-600 dark:text-gray-300"
        >
          Senior Graphic Designer / Visual Designer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-2xl text-gray-700 dark:text-gray-300"
        >
          Designing bold, memorable brands that move people and business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-white shadow-sm transition hover:scale-[1.02] active:scale-[0.98] dark:bg-white dark:text-gray-900"
          >
            View Work
          </a>
          <a
            href="#resume"
            className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-gray-900 shadow-sm transition hover:scale-[1.02] active:scale-[0.98] dark:border-white/20 dark:bg-transparent dark:text-white"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
