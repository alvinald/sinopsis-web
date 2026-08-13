import { Link } from 'react-router-dom'
import type { Menu } from '@/data/menu'
import { cn } from '@/lib/utils'

interface MenuCardProps {
  menu: Menu
  className?: string
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price)
}

export function MenuCard({ menu, className }: MenuCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-amber-200',
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <img
          src={menu.image}
          alt={menu.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category tag */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-700 backdrop-blur-sm shadow-sm">
          {menu.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
          {menu.name}
        </h3>
        <p className="mt-1.5 text-sm text-stone-500 line-clamp-2 leading-relaxed">
          {menu.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-amber-700">
            {formatPrice(menu.price)}
          </span>
        </div>
      </div>
    </div>
  )
}
