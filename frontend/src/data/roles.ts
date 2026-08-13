export interface Role {
  id: number
  name: string
  description: string
  userCount: number
  permissionCount: number
  status: 'Active' | 'Inactive'
  createdAt: string
}

export const roles: Role[] = [
  {
    id: 1,
    name: 'Super Admin',
    description: 'Full access to all system features including settings, user management, and data.',
    userCount: 1,
    permissionCount: 16,
    status: 'Active',
    createdAt: '2024-01-01',
  },
  {
    id: 2,
    name: 'Manager',
    description: 'Manage cafe operations including menus, orders, and staff oversight.',
    userCount: 2,
    permissionCount: 10,
    status: 'Active',
    createdAt: '2024-01-01',
  },
  {
    id: 3,
    name: 'Staff',
    description: 'Basic operational access to view menus and handle day-to-day tasks.',
    userCount: 2,
    permissionCount: 4,
    status: 'Active',
    createdAt: '2024-01-01',
  },
]
