import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart3,
  Users,
  Download,
  Upload,
  Phone,
  Settings,
  ChevronDown,
  PhoneCall,
  Wrench,
  User,
  Key,
  Webhook,
  FolderOpen
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const navigationItems = [
  { title: "Overview", url: "/overview", icon: BarChart3 },
  { title: "Sessions", url: "/sessions", icon: Users },
  { title: "Egresses", url: "/egresses", icon: Download },
  { title: "Ingresses", url: "/ingresses", icon: Upload },
];

const telephonyItems = [
  { title: "Calls", url: "/telephony", icon: PhoneCall },
  { title: "Configuration", url: "/telephony/config", icon: Wrench },
];

const settingsItems = [
  { title: "Project", url: "/settings/project", icon: FolderOpen },
  { title: "Team Members", url: "/settings/members", icon: User },
  { title: "API Keys", url: "/settings/keys", icon: Key },
  { title: "Webhooks", url: "/settings/webhooks", icon: Webhook },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const [telephonyOpen, setTelephonyOpen] = useState(
    currentPath.startsWith("/telephony")
  );
  const [settingsOpen, setSettingsOpen] = useState(
    currentPath.startsWith("/settings")
  );

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="px-0 py-4 bg-card border-r border-border">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider mb-2 px-3">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-0">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-auto p-0">
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors duration-150 ${
                          isActive 
                            ? 'bg-secondary text-foreground' 
                            : 'text-foreground hover:bg-muted'
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4 text-muted-foreground" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Telephony Section */}
        <SidebarGroup className="mt-6">
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible open={telephonyOpen} onOpenChange={setTelephonyOpen}>
                <SidebarMenuItem>
                  <CollapsibleTrigger className={`flex items-center gap-3 px-3 py-2 text-sm font-medium w-full justify-start transition-colors duration-150 ${
                    currentPath.startsWith("/telephony") 
                      ? 'bg-secondary text-foreground' 
                      : 'text-foreground hover:bg-muted'
                  }`}>
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    {!isCollapsed && (
                      <>
                        <span>Telephony</span>
                        <ChevronDown className={`ml-auto h-4 w-4 text-muted-foreground transition-transform duration-200 ${telephonyOpen ? 'rotate-180' : ''}`} />
                      </>
                    )}
                  </CollapsibleTrigger>
                  {!isCollapsed && (
                    <CollapsibleContent>
                      <SidebarMenuSub className="border-l border-border/30 ml-6">
                        {telephonyItems.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton asChild className="h-auto p-0">
                              <NavLink 
                                to={item.url} 
                                className={({ isActive }) =>
                                  `flex items-center gap-3 px-3 py-1.5 text-sm font-medium ml-4 transition-colors duration-150 ${
                                    isActive 
                                      ? 'bg-secondary text-foreground' 
                                      : 'text-foreground hover:bg-muted'
                                  }`
                                }
                              >
                                <item.icon className="h-4 w-4 text-muted-foreground" />
                                <span>{item.title}</span>
                              </NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  )}
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings Section */}
        <SidebarGroup className="mt-6">
          <SidebarGroupContent>
            <SidebarMenu>
              <Collapsible open={settingsOpen} onOpenChange={setSettingsOpen}>
                <SidebarMenuItem>
                  <CollapsibleTrigger className={`flex items-center gap-3 px-3 py-2 text-sm font-medium w-full justify-start transition-colors duration-150 ${
                    currentPath.startsWith("/settings") 
                      ? 'bg-secondary text-foreground' 
                      : 'text-foreground hover:bg-muted'
                  }`}>
                    <Settings className="h-4 w-4 text-muted-foreground" />
                    {!isCollapsed && (
                      <>
                        <span>Settings</span>
                        <ChevronDown className={`ml-auto h-4 w-4 text-muted-foreground transition-transform duration-200 ${settingsOpen ? 'rotate-180' : ''}`} />
                      </>
                    )}
                  </CollapsibleTrigger>
                  {!isCollapsed && (
                    <CollapsibleContent>
                      <SidebarMenuSub className="border-l border-border/30 ml-6">
                        {settingsItems.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton asChild className="h-auto p-0">
                              <NavLink 
                                to={item.url} 
                                className={({ isActive }) =>
                                  `flex items-center gap-3 px-3 py-1.5 text-sm font-medium ml-4 transition-colors duration-150 ${
                                    isActive 
                                      ? 'bg-secondary text-foreground' 
                                      : 'text-foreground hover:bg-muted'
                                  }`
                                }
                              >
                                <item.icon className="h-4 w-4 text-muted-foreground" />
                                <span>{item.title}</span>
                              </NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  )}
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
