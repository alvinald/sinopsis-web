import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  UtensilsCrossed,
  Users,
  ShieldCheck,
  KeyRound,
  ChevronLeft,
  Menu,
  Bell,
  Settings,
} from 'lucide-react'
import { Logo } from '@/components/common/Logo'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface SidebarItem {
  to: string
  label: string
  icon: React.ComponentType<{ size?: number; className?: string }>
}

const mainNav: SidebarItem[] = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard },
]

const masterNav: SidebarItem[] = [
  { to: '/admin/menus', label: 'Menu', icon: UtensilsCrossed },
  { to: '/admin/users', label: 'Users', icon: Users },
  { to: '/admin/roles', label: 'Roles', icon: ShieldCheck },
  { to: '/admin/permissions', label: 'Permissions', icon: KeyRound },
]

interface NavItemProps {
  item: SidebarItem
  collapsed: boolean
  onClick?: () => void
}

function NavItem({ item, collapsed, onClick }: NavItemProps) {
  const location = useLocation()
  const isActive =
    item.to === '/admin'
      ? location.pathname === '/admin'
      : location.pathname.startsWith(item.to)

  return (
    <NavLink
      to={item.to}
      end={item.to === '/admin'}
      onClick={onClick}
      title={collapsed ? item.label : undefined}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150',
        isActive
          ? 'bg-amber-600 text-white shadow-sm'
          : 'text-slate-400 hover:bg-slate-800 hover:text-white',
        collapsed && 'justify-center px-2'
      )}
    >
      <item.icon size={18} className="shrink-0" />
      {!collapsed && <span>{item.label}</span>}
    </NavLink>
  )
}

export function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-30 flex flex-col bg-slate-900 transition-all duration-300 lg:relative lg:translate-x-0',
          collapsed ? 'w-16' : 'w-64',
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        {/* Sidebar Header */}
        <div
          className={cn(
            'flex h-16 items-center border-b border-slate-800 px-4',
            collapsed ? 'justify-center' : 'justify-between'
          )}
        >
          {!collapsed && (
            <Link to="/admin">
              <Logo variant="light" size="sm" />
            </Link>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white lg:flex"
            aria-label="Toggle sidebar"
            id="sidebar-collapse-btn"
          >
            <ChevronLeft
              size={18}
              className={cn('transition-transform', collapsed && 'rotate-180')}
            />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {/* Main */}
          {mainNav.map((item) => (
            <NavItem
              key={item.to}
              item={item}
              collapsed={collapsed}
              onClick={() => setMobileOpen(false)}
            />
          ))}

          {/* Master section */}
          <div className="pt-4">
            {!collapsed && (
              <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                Master
              </p>
            )}
            {collapsed && <Separator className="my-2 bg-slate-800" />}
            <div className="space-y-1">
              {masterNav.map((item) => (
                <NavItem
                  key={item.to}
                  item={item}
                  collapsed={collapsed}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </div>
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className={cn('border-t border-slate-800 p-3', collapsed && 'flex justify-center')}>
          <Link
            to="/"
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-xs text-slate-400 hover:bg-slate-800 hover:text-white transition-colors',
              collapsed && 'justify-center px-2'
            )}
            title={collapsed ? 'Public Site' : undefined}
          >
            <Settings size={16} className="shrink-0" />
            {!collapsed && 'Public Site'}
          </Link>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm sm:px-6">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            aria-label="Open sidebar"
            id="admin-mobile-menu-btn"
          >
            <Menu size={20} />
          </button>

          <div className="hidden lg:block" />

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              aria-label="Notifications"
              id="notification-btn"
            >
              <Bell size={18} />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-amber-500" />
            </button>

            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=Administrator" alt="Admin" />
                <AvatarFallback className="bg-amber-100 text-amber-700 text-xs font-bold">AD</AvatarFallback>
              </Avatar>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-slate-900">Administrator</p>
                <p className="text-xs text-slate-500">Super Admin</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
