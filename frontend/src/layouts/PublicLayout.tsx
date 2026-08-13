import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/common/Logo'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
]

export function PublicLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" aria-label="BrewHouse Home">
            <Logo size="md" variant="dark" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-amber-900 text-white'
                      : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="flex items-center justify-center rounded-lg p-2 text-stone-600 hover:bg-stone-100 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="border-t border-stone-200 bg-white px-4 pb-4 md:hidden" id="mobile-nav">
            <nav className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-amber-900 text-white'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brand */}
            <div>
              <Logo variant="light" size="md" />
              <p className="mt-4 text-sm leading-relaxed text-stone-400">
                A cozy corner for great coffee, good food, and warm moments. Visit us every day.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-stone-300">
                Navigation
              </h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-stone-400 transition-colors hover:text-amber-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Info */}
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-stone-300">
                Visit Us
              </h3>
              <ul className="space-y-2 text-sm text-stone-400">
                <li>Jl. Kopi Nusantara No. 12</li>
                <li>Jakarta Selatan, Indonesia</li>
                <li className="pt-1">Mon–Fri: 07:00 – 22:00</li>
                <li>Sat–Sun: 08:00 – 23:00</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-stone-800 pt-6 text-center text-xs text-stone-600">
            © {new Date().getFullYear()} BrewHouse. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
