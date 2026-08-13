import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  title: string
  value: number | string
  icon: LucideIcon
  description?: string
  trend?: {
    value: number
    label: string
  }
  colorClass?: string
  className?: string
}

export function StatCard({
  title,
  value,
  icon: Icon,
  description,
  trend,
  colorClass = 'bg-blue-50 text-blue-600',
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md',
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            {value}
          </p>
          {description && (
            <p className="mt-1 text-xs text-muted-foreground">{description}</p>
          )}
          {trend && (
            <p
              className={cn(
                'mt-2 text-xs font-medium',
                trend.value >= 0 ? 'text-emerald-600' : 'text-red-500'
              )}
            >
              {trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)}%{' '}
              <span className="font-normal text-muted-foreground">{trend.label}</span>
            </p>
          )}
        </div>
        <div className={cn('rounded-lg p-2.5', colorClass)}>
          <Icon size={22} />
        </div>
      </div>
    </div>
  )
}
