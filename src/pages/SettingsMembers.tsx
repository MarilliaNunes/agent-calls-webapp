
import { useState } from "react";
import { Header } from "@/components/Header";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { InviteMemberModal } from "@/components/modals/InviteMemberModal";
import { Plus } from "lucide-react";

const SettingsMembers = () => {
  const [inviteModalOpen, setInviteModalOpen] = useState(false);

  const breadcrumbs = [
    { label: "Settings", href: "/settings" },
    { label: "Team Members", href: "/settings/members" }
  ];

  const columns = [
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "role", header: "Role" },
    { key: "status", header: "Status" },
    { key: "actions", header: "Actions" },
  ];

  const data = [
    {
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      actions: "Edit | Remove"
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Viewer",
      status: "Pending",
      actions: "Edit | Remove"
    }
  ];

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <Header 
        title="Team Members" 
        breadcrumbs={breadcrumbs}
        action={
          <Button onClick={() => setInviteModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Invite Member
          </Button>
        }
      />
      
      <DataTable columns={columns} data={data} />
      
      <InviteMemberModal 
        open={inviteModalOpen} 
        onOpenChange={setInviteModalOpen} 
      />
    </div>
  );
};

export default SettingsMembers;
