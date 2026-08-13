import { useState } from 'react'
import { Plus, Eye, Pencil, Trash2 } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { permissions, permissionModules } from '@/data/permissions'

const moduleColorMap: Record<string, string> = {
  Menu: 'bg-amber-50 text-amber-700 border-amber-200',
  User: 'bg-blue-50 text-blue-700 border-blue-200',
  Role: 'bg-purple-50 text-purple-700 border-purple-200',
  Permission: 'bg-emerald-50 text-emerald-700 border-emerald-200',
}

export function PermissionList() {
  const [moduleFilter, setModuleFilter] = useState('all')

  const filtered = permissions.filter(
    (p) => moduleFilter === 'all' || p.module === moduleFilter
  )

  // Group by module for display
  const grouped = permissionModules
    .filter((mod) => moduleFilter === 'all' || mod === moduleFilter)
    .map((mod) => ({
      module: mod,
      items: filtered.filter((p) => p.module === mod),
    }))

  return (
    <div className="space-y-6">
      <PageHeader
        title="Permission Management"
        description="View and manage all system permissions grouped by module."
        action={
          <Button id="add-permission-btn" className="gap-2">
            <Plus size={16} />
            Add Permission
          </Button>
        }
      />

      {/* Filter */}
      <div className="flex items-center gap-3" id="permission-toolbar">
        <Select value={moduleFilter} onValueChange={setModuleFilter}>
          <SelectTrigger className="w-full sm:w-[200px]" id="permission-module-filter">
            <SelectValue placeholder="All Modules" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Modules</SelectItem>
            {permissionModules.map((mod) => (
              <SelectItem key={mod} value={mod}>
                {mod}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-sm text-muted-foreground">
          {filtered.length} permissions
        </span>
      </div>

      {/* Grouped Tables */}
      <div className="space-y-6" id="permission-tables">
        {grouped.map(({ module, items }) =>
          items.length === 0 ? null : (
            <div key={module} className="rounded-xl border bg-card shadow-sm overflow-hidden">
              {/* Module Header */}
              <div className="flex items-center gap-3 border-b bg-muted/30 px-4 py-3">
                <span
                  className={`rounded-md border px-2.5 py-0.5 text-xs font-semibold ${moduleColorMap[module] ?? 'bg-slate-50 text-slate-700'}`}
                >
                  {module}
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  {items.length} permissions
                </span>
              </div>

              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/20">
                    <TableHead className="w-12">No</TableHead>
                    <TableHead>Permission</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Used By</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {items.map((permission, idx) => (
                    <TableRow key={permission.id}>
                      <TableCell className="text-muted-foreground text-sm">
                        {idx + 1}
                      </TableCell>
                      <TableCell>
                        <code className="rounded bg-muted px-2 py-0.5 text-xs font-mono font-semibold text-foreground">
                          {permission.name}
                        </code>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {permission.description}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {permission.usedByRoles.map((role) => (
                            <Badge
                              key={role}
                              variant="outline"
                              className="text-[10px] font-medium"
                            >
                              {role}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-end gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            title="View"
                            id={`perm-view-${permission.id}`}
                          >
                            <Eye size={15} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            title="Edit"
                            id={`perm-edit-${permission.id}`}
                          >
                            <Pencil size={15} />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            title="Delete"
                            id={`perm-delete-${permission.id}`}
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
          )
        )}
      </div>
    </div>
  )
}
