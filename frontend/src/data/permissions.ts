export interface Permission {
  id: number
  name: string
  module: string
  description: string
  usedByRoles: string[]
}

export const permissions: Permission[] = [
  // Menu module
  {
    id: 1,
    name: 'menu-view',
    module: 'Menu',
    description: 'View all menu items and details',
    usedByRoles: ['Super Admin', 'Manager', 'Staff'],
  },
  {
    id: 2,
    name: 'menu-create',
    module: 'Menu',
    description: 'Create new menu items',
    usedByRoles: ['Super Admin', 'Manager'],
  },
  {
    id: 3,
    name: 'menu-update',
    module: 'Menu',
    description: 'Edit and update existing menu items',
    usedByRoles: ['Super Admin', 'Manager'],
  },
  {
    id: 4,
    name: 'menu-delete',
    module: 'Menu',
    description: 'Delete menu items permanently',
    usedByRoles: ['Super Admin'],
  },

  // User module
  {
    id: 5,
    name: 'user-view',
    module: 'User',
    description: 'View user list and profiles',
    usedByRoles: ['Super Admin', 'Manager'],
  },
  {
    id: 6,
    name: 'user-create',
    module: 'User',
    description: 'Create and invite new users',
    usedByRoles: ['Super Admin', 'Manager'],
  },
  {
    id: 7,
    name: 'user-update',
    module: 'User',
    description: 'Edit user profiles and information',
    usedByRoles: ['Super Admin', 'Manager'],
  },
  {
    id: 8,
    name: 'user-delete',
    module: 'User',
    description: 'Remove users from the system',
    usedByRoles: ['Super Admin'],
  },

  // Role module
  {
    id: 9,
    name: 'role-view',
    module: 'Role',
    description: 'View roles and their assignments',
    usedByRoles: ['Super Admin', 'Manager'],
  },
  {
    id: 10,
    name: 'role-create',
    module: 'Role',
    description: 'Create new system roles',
    usedByRoles: ['Super Admin'],
  },
  {
    id: 11,
    name: 'role-update',
    module: 'Role',
    description: 'Modify existing role configurations',
    usedByRoles: ['Super Admin'],
  },
  {
    id: 12,
    name: 'role-delete',
    module: 'Role',
    description: 'Delete roles from the system',
    usedByRoles: ['Super Admin'],
  },

  // Permission module
  {
    id: 13,
    name: 'permission-view',
    module: 'Permission',
    description: 'View all permissions and their details',
    usedByRoles: ['Super Admin'],
  },
  {
    id: 14,
    name: 'permission-create',
    module: 'Permission',
    description: 'Create new system permissions',
    usedByRoles: ['Super Admin'],
  },
  {
    id: 15,
    name: 'permission-update',
    module: 'Permission',
    description: 'Modify existing permission settings',
    usedByRoles: ['Super Admin'],
  },
  {
    id: 16,
    name: 'permission-delete',
    module: 'Permission',
    description: 'Remove permissions from the system',
    usedByRoles: ['Super Admin'],
  },
]

export const permissionModules = ['Menu', 'User', 'Role', 'Permission']
