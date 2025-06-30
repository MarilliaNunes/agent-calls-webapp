
import { useState } from "react";
import { Header } from "@/components/Header";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { CreateKeyModal } from "@/components/modals/CreateKeyModal";
import { Plus } from "lucide-react";

const SettingsKeys = () => {
  const [createKeyModalOpen, setCreateKeyModalOpen] = useState(false);

  const breadcrumbs = [
    { label: "Settings", href: "/settings" },
    { label: "API Keys", href: "/settings/keys" }
  ];

  const columns = [
    { key: "name", header: "Name" },
    { key: "keyId", header: "Key ID" },
    { key: "createdAt", header: "Created At" },
    { key: "lastUsed", header: "Last Used" },
    { key: "expiresAt", header: "Expires At" },
    { key: "actions", header: "Actions" },
  ];

  const data = [
    {
      name: "Production Key",
      keyId: "lk_api_••••••••••••••••",
      createdAt: "2024-01-15",
      lastUsed: "2024-01-20",
      expiresAt: "Never",
      actions: "Edit | Delete"
    },
    {
      name: "Development Key",
      keyId: "lk_api_••••••••••••••••",
      createdAt: "2024-01-10",
      lastUsed: "2024-01-19",
      expiresAt: "2024-12-31",
      actions: "Edit | Delete"
    }
  ];

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <Header 
        title="API Keys" 
        breadcrumbs={breadcrumbs}
        action={
          <Button onClick={() => setCreateKeyModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Create Key
          </Button>
        }
      />
      
      <DataTable columns={columns} data={data} />
      
      <CreateKeyModal 
        open={createKeyModalOpen} 
        onOpenChange={setCreateKeyModalOpen} 
      />
    </div>
  );
};

export default SettingsKeys;
