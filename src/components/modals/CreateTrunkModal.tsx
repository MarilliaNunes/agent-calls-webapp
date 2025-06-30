
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface CreateTrunkModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateTrunkModal = ({ open, onOpenChange }: CreateTrunkModalProps) => {
  const [trunkName, setTrunkName] = useState("");
  const [trunkDirection, setTrunkDirection] = useState("");
  const [numbers, setNumbers] = useState("");
  const [jsonConfig, setJsonConfig] = useState("");
  const [mediaEncryption, setMediaEncryption] = useState(false);
  const [includeHeaders, setIncludeHeaders] = useState("");
  const [enableKrisp, setEnableKrisp] = useState(false);

  const handleCreate = () => {
    // TODO: Implement trunk creation logic
    console.log("Creating trunk:", {
      trunkName,
      trunkDirection,
      numbers,
      jsonConfig,
      mediaEncryption,
      includeHeaders,
      enableKrisp
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create a new trunk</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Trunk Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Trunk Details</h3>
            
            <div className="space-y-2">
              <Label htmlFor="trunk-name">Trunk Name</Label>
              <Input
                id="trunk-name"
                placeholder="My trunk"
                value={trunkName}
                onChange={(e) => setTrunkName(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="trunk-direction">Trunk Direction</Label>
              <Select value={trunkDirection} onValueChange={setTrunkDirection}>
                <SelectTrigger>
                  <SelectValue placeholder="Select direction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inbound">Inbound</SelectItem>
                  <SelectItem value="outbound">Outbound</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Numbers */}
          <div className="space-y-2">
            <Label htmlFor="numbers">Numbers</Label>
            <Input
              id="numbers"
              placeholder="+15105550123,+15105550124"
              value={numbers}
              onChange={(e) => setNumbers(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">Comma-separated phone numbers</p>
          </div>

          {/* Optional Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Optional Settings</h3>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Media Encryption (SRTP)</Label>
              </div>
              <Switch
                checked={mediaEncryption}
                onCheckedChange={setMediaEncryption}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="include-headers">Include Headers</Label>
              <Input
                id="include-headers"
                placeholder="Optional headers to include in SIP requests"
                value={includeHeaders}
                onChange={(e) => setIncludeHeaders(e.target.value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Enable Krisp</Label>
                <p className="text-sm text-muted-foreground">
                  <a href="#" className="text-blue-600 hover:underline">Learn more in the docs</a>
                </p>
              </div>
              <Switch
                checked={enableKrisp}
                onCheckedChange={setEnableKrisp}
              />
            </div>
          </div>

          {/* JSON Editor */}
          <div className="space-y-2">
            <Label htmlFor="json-config">JSON Editor (Optional)</Label>
            <Textarea
              id="json-config"
              placeholder="Advanced users can edit full config here"
              value={jsonConfig}
              onChange={(e) => setJsonConfig(e.target.value)}
              rows={5}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleCreate}>
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
