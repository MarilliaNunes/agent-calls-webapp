import { useState } from "react";
import { Header } from "@/components/Header";
import { MetricCard } from "@/components/MetricCard";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CreateTrunkModal } from "@/components/modals/CreateTrunkModal";
import { CreateDispatchRuleModal } from "@/components/modals/CreateDispatchRuleModal";
import { Plus } from "lucide-react";

const TelephonyConfig = () => {
  const [createTrunkOpen, setCreateTrunkOpen] = useState(false);
  const [createDispatchRuleOpen, setCreateDispatchRuleOpen] = useState(false);

  const inboundTrunksColumns = [
    { key: "id", header: "Trunk ID" },
    { key: "name", header: "Trunk Name" },
    { key: "numbers", header: "Numbers" },
    { key: "createdAt", header: "Created At" },
    { key: "actions", header: "Actions" },
  ];

  const outboundTrunksColumns = [
    { key: "id", header: "Trunk ID" },
    { key: "name", header: "Trunk Name" },
    { key: "numbers", header: "Numbers" },
    { key: "sipUri", header: "SIP URI" },
    { key: "createdAt", header: "Created At" },
    { key: "actions", header: "Actions" },
  ];

  const inboundTrunksData = [
    {
      id: "trunk_001",
      name: "Main Inbound",
      numbers: "+1234567890, +1234567891",
      createdAt: "2024-01-15",
      actions: "Edit | Delete"
    }
  ];

  const outboundTrunksData = [
    {
      id: "trunk_002",
      name: "Main Outbound",
      numbers: "+1234567892",
      sipUri: "sip:outbound@example.com",
      createdAt: "2024-01-15",
      actions: "Edit | Delete"
    }
  ];

  const breadcrumbs = [
    { label: "Telephony", href: "/telephony" },
    { label: "Configuration", href: "/telephony/config" }
  ];

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <Header 
        title="Telephony Configuration" 
        breadcrumbs={breadcrumbs}
        action={
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create New
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setCreateTrunkOpen(true)}>
                Create Trunk
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCreateDispatchRuleOpen(true)}>
                Create Dispatch Rule
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        }
      />
      
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard title="Total Inbound Trunks" value="5" />
        <MetricCard title="Total Outbound Trunks" value="3" />
        <MetricCard title="Total Dispatch Rules" value="12" />
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Inbound Trunks</h3>
          <DataTable 
            columns={inboundTrunksColumns} 
            data={inboundTrunksData}
          />
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Outbound Trunks</h3>
          <DataTable 
            columns={outboundTrunksColumns} 
            data={outboundTrunksData}
          />
        </div>
      </div>

      <CreateTrunkModal 
        open={createTrunkOpen} 
        onOpenChange={setCreateTrunkOpen} 
      />
      <CreateDispatchRuleModal 
        open={createDispatchRuleOpen} 
        onOpenChange={setCreateDispatchRuleOpen} 
      />
    </div>
  );
};

export default TelephonyConfig;
