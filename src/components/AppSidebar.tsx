
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
  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium border-r-2 border-sidebar-primary" 
      : "hover:bg-sidebar-accent/50 text-sidebar-foreground";

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="px-2 py-4 border-r border-sidebar-border">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider mb-2 px-3">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-9">
                    <NavLink to={item.url} className={getNavClass}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span className="text-sm">{item.title}</span>}
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
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="hover:bg-sidebar-accent/50 text-sidebar-foreground h-9">
                      <Phone className="h-4 w-4" />
                      {!isCollapsed && (
                        <>
                          <span className="text-sm">Telephony</span>
                          <ChevronDown className={`ml-auto h-4 w-4 transition-transform duration-200 ${telephonyOpen ? 'rotate-180' : ''}`} />
                        </>
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {!isCollapsed && (
                    <CollapsibleContent>
                      <SidebarMenuSub className="ml-4 border-l border-sidebar-border/50">
                        {telephonyItems.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton asChild className="h-8">
                              <NavLink to={item.url} className={getNavClass}>
                                <item.icon className="h-4 w-4" />
                                <span className="text-sm">{item.title}</span>
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
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton className="hover:bg-sidebar-accent/50 text-sidebar-foreground h-9">
                      <Settings className="h-4 w-4" />
                      {!isCollapsed && (
                        <>
                          <span className="text-sm">Settings</span>
                          <ChevronDown className={`ml-auto h-4 w-4 transition-transform duration-200 ${settingsOpen ? 'rotate-180' : ''}`} />
                        </>
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {!isCollapsed && (
                    <CollapsibleContent>
                      <SidebarMenuSub className="ml-4 border-l border-sidebar-border/50">
                        {settingsItems.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton asChild className="h-8">
                              <NavLink to={item.url} className={getNavClass}>
                                <item.icon className="h-4 w-4" />
                                <span className="text-sm">{item.title}</span>
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
