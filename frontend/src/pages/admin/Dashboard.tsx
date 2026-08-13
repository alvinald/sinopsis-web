import { Link } from 'react-router-dom'
import {
  UtensilsCrossed,
  CheckCircle2,
  Users,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react'
import { StatCard } from '@/components/common/StatCard'
import { menus } from '@/data/menu'
import { users } from '@/data/users'
import { roles } from '@/data/roles'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const totalMenus = menus.length
const activeMenus = menus.filter((m) => m.isActive).length
const totalUsers = users.length
const totalRoles = roles.length

const recentMenus = menus.slice(0, 5)
const recentUsers = users.slice(0, 5)

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price)
}

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page title */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Welcome back, Administrator! Here's what's happening at BrewHouse.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" id="stat-cards">
        <StatCard
          title="Total Menu"
          value={totalMenus}
          icon={UtensilsCrossed}
          description="All menu items"
          colorClass="bg-amber-50 text-amber-600"
        />
        <StatCard
          title="Active Menu"
          value={activeMenus}
          icon={CheckCircle2}
          description={`${totalMenus - activeMenus} inactive`}
          colorClass="bg-emerald-50 text-emerald-600"
          trend={{ value: 12, label: 'from last month' }}
        />
        <StatCard
          title="Total Users"
          value={totalUsers}
          icon={Users}
          description="Registered users"
          colorClass="bg-blue-50 text-blue-600"
        />
        <StatCard
          title="Total Roles"
          value={totalRoles}
          icon={ShieldCheck}
          description="User roles defined"
          colorClass="bg-purple-50 text-purple-600"
        />
      </div>

      {/* Recent sections */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Menus */}
        <Card id="recent-menus-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold">Recent Menus</CardTitle>
            <Link
              to="/admin/menus"
              className="flex items-center gap-1 text-xs font-medium text-amber-600 hover:text-amber-800 transition-colors"
            >
              View all <ArrowRight size={12} />
            </Link>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {recentMenus.map((menu) => (
                <div key={menu.id} className="flex items-center gap-3 py-3">
                  <img
                    src={menu.image}
                    alt={menu.name}
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">
                      {menu.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{menu.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">
                      {formatPrice(menu.price)}
                    </p>
                    <Badge variant={menu.isActive ? 'success' : 'secondary'} className="mt-0.5 text-[10px]">
                      {menu.isActive ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Users */}
        <Card id="recent-users-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold">Recent Users</CardTitle>
            <Link
              to="/admin/users"
              className="flex items-center gap-1 text-xs font-medium text-amber-600 hover:text-amber-800 transition-colors"
            >
              View all <ArrowRight size={12} />
            </Link>
          </CardHeader>
          <CardContent>
            <div className="divide-y">
              {recentUsers.map((user) => (
                <div key={user.id} className="flex items-center gap-3 py-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-9 w-9 rounded-full bg-slate-100"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">
                      {user.name}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">{user.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-foreground">{user.role}</p>
                    <Badge
                      variant={user.status === 'Active' ? 'success' : 'secondary'}
                      className="mt-0.5 text-[10px]"
                    >
                      {user.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
