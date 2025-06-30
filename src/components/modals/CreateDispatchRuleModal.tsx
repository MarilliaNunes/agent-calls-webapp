
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface CreateDispatchRuleModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateDispatchRuleModal = ({ open, onOpenChange }: CreateDispatchRuleModalProps) => {
  const [ruleName, setRuleName] = useState("");
  const [ruleType, setRuleType] = useState("");
  const [roomName, setRoomName] = useState("");
  const [trunkSearch, setTrunkSearch] = useState("");
  const [jsonConfig, setJsonConfig] = useState("");

  const handleCreate = () => {
    // TODO: Implement dispatch rule creation logic
    console.log("Creating dispatch rule:", {
      ruleName,
      ruleType,
      roomName,
      trunkSearch,
      jsonConfig
    });
    onOpenChange(false);
  };

  const handleAddAgent = () => {
    // TODO: Implement agent configuration
    console.log("Adding agent configuration");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create a new dispatch rule</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Dispatch Rule Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Dispatch Rule Details</h3>
            
            <div className="space-y-2">
              <Label htmlFor="rule-name">Rule Name</Label>
              <Input
                id="rule-name"
                placeholder="My rule"
                value={ruleName}
                onChange={(e) => setRuleName(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="rule-type">Rule Type</Label>
              <Select value={ruleType} onValueChange={setRuleType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select rule type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="direct">Direct</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="room-name">Room Name</Label>
              <Input
                id="room-name"
                placeholder="my_room"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
            </div>
          </div>

          {/* Agent Dispatch */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Agent Dispatch</h3>
            <p className="text-sm text-muted-foreground">
              Configure an agent to dispatch to LiveKit rooms and enable inbound calling for your agent.
            </p>
            <Button variant="outline" onClick={handleAddAgent}>
              Add Agent
            </Button>
          </div>

          {/* Match Trunks */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Match Trunks</h3>
            <p className="text-sm text-muted-foreground">
              Setup how inbound calls will be dispatched by matching specific trunks.
            </p>
            
            <div className="space-y-2">
              <Label htmlFor="trunk-search">Search by trunk name</Label>
              <Input
                id="trunk-search"
                placeholder="Search trunks..."
                value={trunkSearch}
                onChange={(e) => setTrunkSearch(e.target.value)}
              />
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                No trunks created yet. If no trunks are selected, the rule will match all trunks.
              </p>
            </div>
          </div>

          {/* JSON Editor */}
          <div className="space-y-2">
            <Label htmlFor="json-config">JSON Editor (Optional)</Label>
            <Textarea
              id="json-config"
              placeholder="Full dispatch rule config"
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
