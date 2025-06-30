
import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { Activity, Users, Clock, Zap } from "lucide-react";

export default function Overview() {
  const breadcrumbs = [
    { label: "Overview", href: "/overview" }
  ];

  return (
    <div className="flex flex-col">
      <Header 
        title="Overview" 
        breadcrumbs={breadcrumbs}
        lastUpdated="4 min ago"
        autoRefresh={true}
      />
      
      <main className="flex-1 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Connection successes"
            value="1,247"
            subtitle="+12% from last month"
            icon={<Activity className="h-4 w-4" />}
            helpTooltip="Total successful connections in the current period"
          />
          
          <MetricCard
            title="Platforms"
            value="8"
            subtitle="Active platforms"
            icon={<Zap className="h-4 w-4" />}
          />
          
          <MetricCard
            title="Connection type"
            value="WebRTC"
            subtitle="Primary connection method"
            icon={<Activity className="h-4 w-4" />}
          />
          
          <MetricCard
            title="Connection minutes"
            value="24,891"
            subtitle="+18% from last month"
            icon={<Clock className="h-4 w-4" />}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {[
                { time: "2 min ago", event: "New session started in room 'conference-1'" },
                { time: "5 min ago", event: "Participant joined from mobile device" },
                { time: "12 min ago", event: "Recording completed for session abc123" },
                { time: "18 min ago", event: "Egress started for room 'webinar-hall'" },
              ].map((activity, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                  <span className="text-sm text-foreground">{activity.event}</span>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">System Status</h3>
            <div className="space-y-4">
              {[
                { service: "WebRTC Gateway", status: "Operational", color: "text-green-400" },
                { service: "Recording Service", status: "Operational", color: "text-green-400" },
                { service: "Telephony Service", status: "Operational", color: "text-green-400" },
                { service: "API Gateway", status: "Operational", color: "text-green-400" },
              ].map((service, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-foreground">{service.service}</span>
                  <span className={`text-xs font-medium ${service.color}`}>{service.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
