import { Plus, Eye, Pencil, Trash2 } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { roles } from '@/data/roles'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export function RoleList() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Role Management"
        description="Define and manage user roles and their permission sets."
        action={
          <Button id="add-role-btn" className="gap-2">
            <Plus size={16} />
            Add Role
          </Button>
        }
      />

      {/* Table */}
      <div className="rounded-xl border bg-card shadow-sm overflow-hidden" id="role-table">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-12">No</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-center">Users</TableHead>
              <TableHead className="text-center">Permissions</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roles.map((role, idx) => (
              <TableRow key={role.id}>
                <TableCell className="text-muted-foreground text-sm">{idx + 1}</TableCell>
                <TableCell>
                  <div>
                    <p className="font-semibold text-foreground">{role.name}</p>
                  </div>
                </TableCell>
                <TableCell className="max-w-xs">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {role.description}
                  </p>
                </TableCell>
                <TableCell className="text-center">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-700">
                    {role.userCount}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-purple-50 px-2 text-xs font-bold text-purple-700">
                    {role.permissionCount}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge variant={role.status === 'Active' ? 'success' : 'secondary'}>
                    {role.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {formatDate(role.createdAt)}
                </TableCell>
                <TableCell>
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon" title="View" id={`role-view-${role.id}`}>
                      <Eye size={15} />
                    </Button>
                    <Button variant="ghost" size="icon" title="Edit" id={`role-edit-${role.id}`}>
                      <Pencil size={15} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      title="Delete"
                      id={`role-delete-${role.id}`}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 size={15} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="text-xs text-muted-foreground">
        {roles.length} roles configured
      </p>
    </div>
  )
}
