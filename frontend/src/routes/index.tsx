import { createBrowserRouter } from 'react-router-dom'
import { PublicLayout } from '@/layouts/PublicLayout'
import { AdminLayout } from '@/layouts/AdminLayout'
import { Home } from '@/pages/public/Home'
import { MenuPage } from '@/pages/public/Menu'
import { Dashboard } from '@/pages/admin/Dashboard'
import { MenuList } from '@/pages/admin/menus/MenuList'
import { UserList } from '@/pages/admin/users/UserList'
import { RoleList } from '@/pages/admin/roles/RoleList'
import { PermissionList } from '@/pages/admin/permissions/PermissionList'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'menu', element: <MenuPage /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'menus', element: <MenuList /> },
      { path: 'users', element: <UserList /> },
      { path: 'roles', element: <RoleList /> },
      { path: 'permissions', element: <PermissionList /> },
    ],
  },
])
