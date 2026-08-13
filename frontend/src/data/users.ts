export interface User {
  id: number
  name: string
  email: string
  role: string
  status: 'Active' | 'Inactive'
  avatar: string
  createdAt: string
}

export const users: User[] = [
  {
    id: 1,
    name: 'Administrator',
    email: 'admin@cafe.test',
    role: 'Super Admin',
    status: 'Active',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Administrator',
    createdAt: '2024-01-01',
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john@cafe.test',
    role: 'Staff',
    status: 'Active',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=John+Doe',
    createdAt: '2024-01-15',
  },
  {
    id: 3,
    name: 'Jane Doe',
    email: 'jane@cafe.test',
    role: 'Manager',
    status: 'Inactive',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Jane+Doe',
    createdAt: '2024-02-01',
  },
  {
    id: 4,
    name: 'Michael Smith',
    email: 'michael@cafe.test',
    role: 'Staff',
    status: 'Active',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Michael+Smith',
    createdAt: '2024-02-20',
  },
  {
    id: 5,
    name: 'Sarah Johnson',
    email: 'sarah@cafe.test',
    role: 'Manager',
    status: 'Active',
    avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Sarah+Johnson',
    createdAt: '2024-03-05',
  },
]
