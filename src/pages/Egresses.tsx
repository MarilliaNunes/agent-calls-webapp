
import { Header } from "@/components/Header";
import { DataTable } from "@/components/DataTable";

const egressesColumns = [
  { key: "id", title: "ID", sortable: true },
  { key: "startedAt", title: "Started at", sortable: true },
  { key: "lastActiveAt", title: "Last active at", sortable: true },  
  { key: "duration", title: "Duration", sortable: true },
  { key: "status", title: "Status" },
  { key: "sessions", title: "Sessions" },
];

const mockEgressesData: any[] = [];

export default function Egresses() {
  return (
    <div className="flex flex-col">
      <Header 
        title="Egresses" 
        breadcrumbs={["Egresses"]}
        lastUpdated="3 min ago"
        autoRefresh={true}
      />
      
      <main className="flex-1 p-6 space-y-6">
        <DataTable
          title="Egresses"
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
