
import { Header } from "@/components/Header";
import { DataTable } from "@/components/DataTable";

const ingressesColumns = [
  { key: "id", header: "ID", sortable: true },
  { key: "startedAt", header: "Started at", sortable: true },
  { key: "duration", header: "Duration", sortable: true },
  { key: "status", header: "Status" },
  { key: "type", header: "Type" },
  { key: "source", header: "Source" },
  { key: "destination", header: "Destination" },
];

const mockIngressesData: any[] = [];

export default function Ingresses() {
  const breadcrumbs = [
    { label: "Ingresses", href: "/ingresses" }
  ];

  return (
    <div className="flex flex-col">
      <Header 
        title="Ingresses" 
        breadcrumbs={breadcrumbs}
        lastUpdated="1 min ago"
        autoRefresh={true}
      />
      
      <main className="flex-1 p-6 space-y-6">
        <DataTable
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
