
import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { DataTable } from "@/components/DataTable";
import { Users, Building } from "lucide-react";

const sessionsColumns = [
  { key: "sessionId", header: "Session ID", sortable: true },
  { key: "roomName", header: "Room name", sortable: true },
  { key: "startedAt", header: "Started at", sortable: true },
  { key: "endedAt", header: "Ended at", sortable: true },
  { key: "duration", header: "Duration", sortable: true },
  { key: "participants", header: "Participants", sortable: true },
  { key: "features", header: "Features" },
  { key: "status", header: "Status" },
];

const mockSessionsData: any[] = [];

export default function Sessions() {
  const breadcrumbs = [
    { label: "Sessions", href: "/sessions" }
  ];

  return (
    <div className="flex flex-col">
      <Header 
        title="Sessions" 
        breadcrumbs={breadcrumbs}
        lastUpdated="2 min ago"
        autoRefresh={true}
      />
      
      <main className="flex-1 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <MetricCard
            title="Unique participants"
            value="0"
            subtitle="Active participants"
            icon={<Users className="h-4 w-4" />}
          />
          
          <MetricCard
            title="Total rooms"
            value="0"
            subtitle="Active rooms"
            icon={<Building className="h-4 w-4" />}
          />
        </div>
        
        <DataTable
          columns={sessionsColumns}
          data={mockSessionsData}
          searchPlaceholder="Search sessions..."
          emptyState={
            <div className="text-muted-foreground">
              <div className="text-sm font-medium">No sessions found.</div>
              <div className="text-xs mt-1">Sessions will appear here once participants join rooms.</div>
            </div>
          }
        />
      </main>
    </div>
  );
}
