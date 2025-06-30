
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CreateKeyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateKeyModal = ({ open, onOpenChange }: CreateKeyModalProps) => {
  const [keyName, setKeyName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [scopes, setScopes] = useState({
    read: false,
    write: false,
    admin: false
  });

  const handleCreate = () => {
    // TODO: Implement API key creation logic
    console.log("Creating API key:", { keyName, expirationDate, scopes });
    onOpenChange(false);
  };

  const handleScopeChange = (scope: keyof typeof scopes) => {
    setScopes(prev => ({ ...prev, [scope]: !prev[scope] }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create API Key</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="key-name">Key Name</Label>
            <Input
              id="key-name"
              placeholder="Production Key"
              value={keyName}
              onChange={(e) => setKeyName(e.target.value)}
            />
          </div>
          
          <div className="space-y-3">
            <Label>Scopes/Permissions</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="read"
                  checked={scopes.read}
                  onCheckedChange={() => handleScopeChange('read')}
                />
                <Label htmlFor="read">Read</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="write"
                  checked={scopes.write}
                  onCheckedChange={() => handleScopeChange('write')}
                />
                <Label htmlFor="write">Write</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="admin"
                  checked={scopes.admin}
                  onCheckedChange={() => handleScopeChange('admin')}
                />
                <Label htmlFor="admin">Admin</Label>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="expiration">Expiration Date (Optional)</Label>
            <Input
              id="expiration"
              type="date"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleCreate}>
            Create Key
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
