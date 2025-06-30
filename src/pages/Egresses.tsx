
import { Header } from "@/components/Header";
import { DataTable } from "@/components/DataTable";

const egressesColumns = [
  { key: "id", header: "ID", sortable: true },
  { key: "startedAt", header: "Started at", sortable: true },
  { key: "lastActiveAt", header: "Last active at", sortable: true },  
  { key: "duration", header: "Duration", sortable: true },
  { key: "status", header: "Status" },
  { key: "sessions", header: "Sessions" },
];

const mockEgressesData: any[] = [];

export default function Egresses() {
  const breadcrumbs = [
    { label: "Egresses", href: "/egresses" }
  ];

  return (
    <div className="flex flex-col">
      <Header 
        title="Egresses" 
        breadcrumbs={breadcrumbs}
        lastUpdated="3 min ago"
        autoRefresh={true}
      />
      
      <main className="flex-1 p-6 space-y-6">
        <DataTable
          columns={egressesColumns}
          data={mockEgressesData}
          searchPlaceholder="Search egresses..."
          emptyState={
            <div className="text-muted-foreground">
              <div className="text-sm font-medium">No egresses found.</div>
              <div className="text-xs mt-1">Egress operations will appear here when initiated.</div>
            </div>
          }
        />
      </main>
    </div>
  );
}
