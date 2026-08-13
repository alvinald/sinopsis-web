import { useState } from 'react'
import { Search } from 'lucide-react'
import { MenuCard } from '@/components/common/MenuCard'
import { menus, categories } from '@/data/menu'

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = menus.filter((m) => {
    const matchCategory = activeCategory === 'All' || m.category === activeCategory
    const matchSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch && m.isActive
  })

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-stone-900 py-16 text-center" id="menu-hero">
        <div className="mx-auto max-w-2xl px-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
            Explore
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white sm:text-5xl">
            Our Menu
          </h1>
          <p className="mt-4 text-stone-400">
            Handcrafted drinks, fresh bites, and decadent desserts — made with love
            every single day.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-10 border-b border-stone-200 bg-white/95 py-4 backdrop-blur-md shadow-sm" id="menu-filters">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative max-w-sm flex-1">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
              />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-stone-200 bg-stone-50 py-2 pl-9 pr-4 text-sm text-stone-700 placeholder:text-stone-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
                id="menu-search-input"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2" id="menu-category-filters">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  id={`category-${cat.toLowerCase()}`}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-amber-700 text-white shadow-sm'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12" id="menu-grid">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <span className="text-5xl">☕</span>
              <h3 className="mt-4 text-lg font-semibold text-stone-700">
                No items found
              </h3>
              <p className="mt-1 text-sm text-stone-400">
                Try a different search or category.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All')
                  setSearchQuery('')
                }}
                className="mt-4 rounded-full bg-amber-700 px-5 py-2 text-sm font-semibold text-white hover:bg-amber-800"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <p className="mb-6 text-sm text-stone-400">
                Showing <span className="font-semibold text-stone-700">{filtered.length}</span> items
                {activeCategory !== 'All' && (
                  <span> in <span className="font-semibold text-stone-700">{activeCategory}</span></span>
                )}
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filtered.map((menu) => (
                  <MenuCard key={menu.id} menu={menu} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
