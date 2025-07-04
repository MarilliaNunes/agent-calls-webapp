import { useState } from "react";
import { Header } from "@/components/Header";
import { SettingsLayout } from "@/components/SettingsLayout";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreateWebhookModal } from "@/components/modals/CreateWebhookModal";
import { Plus, ExternalLink } from "lucide-react";

const SettingsWebhooks = () => {
  const [createWebhookModalOpen, setCreateWebhookModalOpen] = useState(false);

  const breadcrumbs = [
    { label: "Settings", href: "/settings" },
    { label: "Webhooks", href: "/settings/webhooks" }
  ];

  const columns = [
    { key: "name", header: "Name" },
    { key: "url", header: "URL" },
    { key: "signedWith", header: "Signed With" },
    { key: "actions", header: "Actions" },
  ];

  const data = [
    {
      name: "Production Webhook",
      url: "https://api.example.com/webhooks/livekit",
      signedWith: "••••••••••••••••",
      actions: "Test | Edit | Delete"
    }
  ];

  return (
    <div className="flex flex-col h-full">
      <Header 
        title="Webhooks" 
        breadcrumbs={breadcrumbs}
        action={
          <Button onClick={() => setCreateWebhookModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Create Webhook
          </Button>
        }
      />

      <SettingsLayout>
        <div className="flex-1 p-6 space-y-6 overflow-auto">
          <Card>
            <CardHeader>
              <CardTitle>About Webhooks</CardTitle>
              <CardDescription>
                Webhooks allow you to receive real-time notifications when events occur in your LiveKit project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Documentation
              </Button>
            </CardContent>
          </Card>
          
          <DataTable columns={columns} data={data} />
        </div>
      </SettingsLayout>
      
      <CreateWebhookModal 
        open={createWebhookModalOpen} 
        onOpenChange={setCreateWebhookModalOpen} 
      />
    </div>
  );
};

export default SettingsWebhooks;
