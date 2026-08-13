import { Coffee } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap = {
  sm: { icon: 18, text: 'text-lg' },
  md: { icon: 22, text: 'text-xl' },
  lg: { icon: 28, text: 'text-2xl' },
}

export function Logo({ variant = 'dark', size = 'md', className }: LogoProps) {
  const { icon, text } = sizeMap[size]

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div
        className={cn(
          'flex items-center justify-center rounded-lg p-1.5',
          variant === 'light'
            ? 'bg-white/20 text-white'
            : 'bg-amber-900 text-amber-50'
        )}
      >
        <Coffee size={icon} />
      </div>
      <span
        className={cn(
          'font-bold tracking-tight',
          text,
          variant === 'light' ? 'text-white' : 'text-stone-900'
        )}
      >
        Sinopsis<span className={variant === 'light' ? 'text-amber-300' : 'text-amber-600'}>Coffee</span>
      </span>
    </div>
  )
}
