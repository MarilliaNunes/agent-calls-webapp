
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Download } from "lucide-react";

interface Column {
  key: string;
  header: string;
  sortable?: boolean;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, any>[];
  searchPlaceholder?: string;
  emptyState?: ReactNode;
  actions?: ReactNode;
}

export function DataTable({ 
  columns, 
  data, 
  searchPlaceholder = "Search...",
  emptyState,
  actions 
}: DataTableProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {actions}
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder={searchPlaceholder}
            className="pl-9"
          />
        </div>
      </div>
      
      <div className="rounded-md border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                {columns.map((column) => (
                  <th key={column.key} className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    <div className="flex items-center gap-2">
                      {column.header}
                      {column.sortable && (
                        <Button variant="ghost" size="sm" className="h-4 w-4 p-0">
                          ↕
                        </Button>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="p-4 text-center">
                    {emptyState || (
                      <div className="text-muted-foreground">
                        <div className="text-sm font-medium">No results.</div>
                        <div className="text-xs mt-1">No data matches your current filters.</div>
                      </div>
                    )}
                  </td>
                </tr>
              ) : (
                data.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                    {columns.map((column) => (
                      <td key={column.key} className="p-4 align-middle">
                        {row[column.key] || '-'}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
