
import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { DataTable } from "@/components/DataTable";
import { Phone, Clock, Activity, AlertTriangle } from "lucide-react";

const callsColumns = [
  { key: "id", title: "ID", sortable: true },
  { key: "from", title: "From", sortable: true },
  { key: "to", title: "To", sortable: true },
  { key: "direction", title: "Direction", sortable: true },
  { key: "startedAt", title: "Started at", sortable: true },
  { key: "endedAt", title: "Ended at", sortable: true },
  { key: "duration", title: "Duration", sortable: true },
  { key: "session", title: "Session" },
  { key: "status", title: "Status" },
];

const mockCallsData: any[] = [];

export default function Telephony() {
  return (
    <div className="flex flex-col">
      <Header 
        title="Telephony" 
        breadcrumbs={["Telephony"]}
        lastUpdated="4 min ago"
        autoRefresh={false}
      />
      
      <main className="flex-1 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <MetricCard
            title="Total calls"
            value="0"
            icon={<Phone className="h-4 w-4" />}
            helpTooltip="Total number of calls"
          />
          
          <MetricCard
            title="Total call duration"
            value="0 min"
            icon={<Clock className="h-4 w-4" />}
            helpTooltip="Combined duration of all calls"
          />
          
          <MetricCard
            title="Average call duration"
            value="0 min"
            icon={<Clock className="h-4 w-4" />}
            helpTooltip="Average duration per call"
          />
          
          <MetricCard
            title="Active calls"
            value="0"
            icon={<Activity className="h-4 w-4" />}
            helpTooltip="Currently active calls"
          />
          
          <MetricCard
            title="Calls with issues"
            value="0"
            icon={<AlertTriangle className="h-4 w-4" />}
            helpTooltip="Calls that experienced issues"
          />
        </div>
        
        <DataTable
          title="Calls"
          columns={callsColumns}
          data={mockCallsData}
          searchPlaceholder="Search calls..."
          emptyState={
            <div className="text-muted-foreground">
              <div className="text-sm font-medium">No results.</div>
              <div className="text-xs mt-1">No calls have been made yet.</div>
            </div>
          }
        />
      </main>
    </div>
  );
}
