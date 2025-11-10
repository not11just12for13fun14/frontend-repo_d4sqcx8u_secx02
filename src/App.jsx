import { Routes, Route, Link } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './pages/Work'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import CaseStudy from './pages/CaseStudy'
import Footer from './components/Footer'

function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Selected Work</h2>
            <p className="text-gray-600 dark:text-gray-300">Recent projects across branding, UI, and social.</p>
          </div>
          <Link to="/work" className="text-sm underline">View all</Link>
        </header>
        <Work />
      </section>
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B1220] text-gray-900 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case/:slug" element={<CaseStudy />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
