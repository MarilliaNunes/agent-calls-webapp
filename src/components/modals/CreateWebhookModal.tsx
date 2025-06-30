
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CreateWebhookModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const availableEvents = [
  { id: "room.started", label: "Room Started" },
  { id: "room.ended", label: "Room Ended" },
  { id: "participant.joined", label: "Participant Joined" },
  { id: "participant.left", label: "Participant Left" },
  { id: "track.published", label: "Track Published" },
  { id: "track.unpublished", label: "Track Unpublished" },
];

export const CreateWebhookModal = ({ open, onOpenChange }: CreateWebhookModalProps) => {
  const [webhookName, setWebhookName] = useState("");
  const [targetUrl, setTargetUrl] = useState("");
  const [secret, setSecret] = useState("");
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);

  const handleCreate = () => {
    // TODO: Implement webhook creation logic
    console.log("Creating webhook:", { webhookName, targetUrl, secret, selectedEvents });
    onOpenChange(false);
  };

  const handleEventChange = (eventId: string) => {
    setSelectedEvents(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Webhook</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="webhook-name">Webhook Name</Label>
            <Input
              id="webhook-name"
              placeholder="Production Webhook"
              value={webhookName}
              onChange={(e) => setWebhookName(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="target-url">Target URL</Label>
            <Input
              id="target-url"
              placeholder="https://api.example.com/webhooks/livekit"
              value={targetUrl}
              onChange={(e) => setTargetUrl(e.target.value)}
            />
          </div>
          
          <div className="space-y-3">
            <Label>Select Events</Label>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {availableEvents.map((event) => (
                <div key={event.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={event.id}
                    checked={selectedEvents.includes(event.id)}
                    onCheckedChange={() => handleEventChange(event.id)}
                  />
                  <Label htmlFor={event.id}>{event.label}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="secret">Secret (Optional)</Label>
            <Input
              id="secret"
              placeholder="Used to sign payloads"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              Used to sign webhook payloads for security verification
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleCreate}>
            Create Webhook
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
