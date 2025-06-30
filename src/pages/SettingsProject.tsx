
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const SettingsProject = () => {
  const breadcrumbs = [
    { label: "Settings", href: "/settings" },
    { label: "Project", href: "/settings/project" }
  ];

  const connectionLimits = [
    { type: "Concurrent connections", limit: "1000", peakUsage: "234" },
    { type: "Monthly minutes", limit: "50000", peakUsage: "12430" },
    { type: "Storage (GB)", limit: "100", peakUsage: "45" },
  ];

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      <Header title="Project Settings" breadcrumbs={breadcrumbs} />
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>General</CardTitle>
            <CardDescription>Basic project configuration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="projectName">Project Name</Label>
              <Input type="text" id="projectName" defaultValue="My LiveKit Project" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="projectUrl">Project URL</Label>
              <Input type="text" id="projectUrl" defaultValue="https://my-project.livekit.cloud" readOnly />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="sipUri">SIP URI</Label>
              <Input type="text" id="sipUri" defaultValue="sip:project@livekit.cloud" readOnly />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Options</CardTitle>
            <CardDescription>Configure project behavior</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="autoCreate" defaultChecked />
              <Label htmlFor="autoCreate">Automatically create rooms on participant join</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="adminUnmute" />
              <Label htmlFor="adminUnmute">Admins can unmute tracks</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="pauseVideo" defaultChecked />
              <Label htmlFor="pauseVideo">Pause videos on congestion</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="showOnboarding" defaultChecked />
              <Label htmlFor="showOnboarding">Show onboarding instructions</Label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Enabled Codecs</CardTitle>
            <CardDescription>Select which codecs are available for your project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="opus" defaultChecked />
                <Label htmlFor="opus">Opus</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="audioRed" />
                <Label htmlFor="audioRed">Audio RED</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="h264" defaultChecked />
                <Label htmlFor="h264">H.264</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="vp8" defaultChecked />
                <Label htmlFor="vp8">VP8</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="vp9" />
                <Label htmlFor="vp9">VP9</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="av1" />
                <Label htmlFor="av1">AV1</Label>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Connection Limits</CardTitle>
            <CardDescription>Current usage and limits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {connectionLimits.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{item.type}</span>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Peak (7d): {item.peakUsage}</div>
                    <div className="font-mono">Limit: {item.limit}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Danger Zone</CardTitle>
            <CardDescription>Irreversible and destructive actions</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive">Delete Project</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SettingsProject;
