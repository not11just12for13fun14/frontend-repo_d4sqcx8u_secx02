import { Link, NavLink } from 'react-router-dom'
import { useTheme } from './ThemeProvider'
import { Sun, Moon, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
      isActive
        ? 'text-white bg-gray-900 dark:bg-white dark:text-gray-900'
        : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight">
            <span className="text-gray-900 dark:text-white">ayan</span>
            <span className="text-gray-400"> / </span>
            <span className="text-gray-500">portfolio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/work" className={navLinkClass}>
              Work
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="ml-2 rounded-md p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </nav>

          <button className="md:hidden" onClick={() => setOpen((s) => !s)}>
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-3">
            <div className="flex flex-col gap-2">
              <NavLink to="/work" className={navLinkClass} onClick={() => setOpen(false)}>
                Work
              </NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>
                About
              </NavLink>
              <NavLink to="/services" className={navLinkClass} onClick={() => setOpen(false)}>
                Services
              </NavLink>
              <NavLink to="/contact" className={navLinkClass} onClick={() => setOpen(false)}>
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
