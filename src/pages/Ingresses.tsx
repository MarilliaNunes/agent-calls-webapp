
import { Header } from "@/components/Header";
import { DataTable } from "@/components/DataTable";

const ingressesColumns = [
  { key: "id", title: "ID", sortable: true },
  { key: "startedAt", title: "Started at", sortable: true },
  { key: "duration", title: "Duration", sortable: true },
  { key: "status", title: "Status" },
  { key: "type", title: "Type" },
  { key: "source", title: "Source" },
  { key: "destination", title: "Destination" },
];

const mockIngressesData: any[] = [];

export default function Ingresses() {
  return (
    <div className="flex flex-col">
      <Header 
        title="Ingresses" 
        breadcrumbs={["Ingresses"]}
        lastUpdated="1 min ago"
        autoRefresh={true}
      />
      
      <main className="flex-1 p-6 space-y-6">
        <DataTable
          title="Ingresses"
          columns={ingressesColumns}
          data={mockIngressesData}
          searchPlaceholder="Search ingresses..."
          emptyState={
            <div className="text-muted-foreground">
              <div className="text-sm font-medium">No ingresses found.</div>
              <div className="text-xs mt-1">Ingress operations will appear here when configured.</div>
            </div>
          }
        />
      </main>
    </div>
  );
}
