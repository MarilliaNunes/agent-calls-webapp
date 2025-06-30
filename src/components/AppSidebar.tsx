import React, { useState } from "react";
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
  FolderOpen,
  Menu
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
  { title: "Overview", url: "/overview", icon: BarChart3, position: "top" },
  { title: "Sessions", url: "/sessions", icon: Users, position: "top" },
  { title: "Egresses", url: "/egresses", icon: Download, position: "top" },
  { title: "Ingresses", url: "/ingresses", icon: Upload, position: "top" },
  { title: "Settings", url: "/settings/project", icon: Settings, position: "bottom" },
];

const telephonyItems = [
  { title: "Calls", url: "/telephony", icon: PhoneCall },
  { title: "Configuration", url: "/telephony/config", icon: Wrench },
];

const collapsibleSections = [
  {
    title: "Telephony",
    icon: Phone,
    position: "top",
    basePath: "/telephony",
    items: telephonyItems
  }
];

export function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const [telephonyOpen, setTelephonyOpen] = useState(
    currentPath.startsWith("/telephony")
  );

  const getSectionState = (basePath: string) => {
    if (basePath === "/telephony") return { open: telephonyOpen, setOpen: setTelephonyOpen };
    return { open: false, setOpen: () => {} };
  };

  const topNavigationItems = navigationItems.filter(item => item.position === "top");
  const bottomNavigationItems = navigationItems.filter(item => item.position === "bottom");
  const topCollapsibleSections = collapsibleSections.filter(section => section.position === "top");
  const bottomCollapsibleSections = collapsibleSections.filter(section => section.position === "bottom");

  const renderNavigationItems = (items: typeof navigationItems) => (
    <>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild className="h-auto p-6">
            <NavLink 
              to={item.url} 
              className={({ isActive }) => {
                // Special handling for Settings - consider active if we're anywhere in /settings/*
                const isSettingsActive = item.title === "Settings" && currentPath.startsWith("/settings");
                const shouldBeActive = isActive || isSettingsActive;
                
                return `flex items-center gap-3 text-sm font-medium transition-colors duration-150 ${
                  isCollapsed ? 'px-4 py-2 justify-start' : 'px-6 py-2 justify-start'
                } ${
                  shouldBeActive
                    ? 'bg-secondary text-foreground' 
                    : 'text-foreground hover:bg-muted'
                }`;
              }}
            >
              <item.icon className="h-4 w-4 text-muted-foreground" />
              {!isCollapsed && <span>{item.title}</span>}
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );

  const renderCollapsibleSection = (section: typeof collapsibleSections[0]) => {
    const { open, setOpen } = getSectionState(section.basePath);
    const shouldOpen = open && !isCollapsed;
    
    const handleClick = (e: React.MouseEvent) => {
      if (!isCollapsed) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    
    return (
      <SidebarMenuItem key={section.title}>
        <Collapsible open={shouldOpen} onOpenChange={setOpen}>
          <SidebarMenuButton asChild className="h-auto p-6">
            <NavLink 
              to={section.basePath} 
              onClick={handleClick}
              className={({ isActive }) => {
                const shouldBeActive = isActive || currentPath.startsWith(section.basePath);
                
                return `flex items-center gap-3 text-sm font-medium transition-colors duration-150 ${
                  isCollapsed ? 'px-4 py-2 justify-center' : 'px-6 py-2 justify-start'
                } ${
                  shouldBeActive
                    ? 'bg-secondary text-foreground' 
                    : 'text-foreground hover:bg-muted'
                }`;
              }}
            >
              <section.icon className="h-4 w-4 text-muted-foreground" />
              {!isCollapsed && (
                <>
                  <span>{section.title}</span>
                  <ChevronDown className={`ml-auto h-4 w-4 text-muted-foreground transition-transform duration-200 ${shouldOpen ? 'rotate-180' : ''}`} />
                </>
              )}
            </NavLink>
          </SidebarMenuButton>
          {!isCollapsed && (
            <CollapsibleContent>
              <SidebarMenuSub className="border-l border-border/30 ml-4">
                {section.items.map((item) => (
                  <SidebarMenuSubItem key={item.title}>
                    <SidebarMenuSubButton asChild className="h-auto p-0">
                      <NavLink 
                        to={item.url} 
                        className={({ isActive }) =>
                          `flex items-center gap-3 py-1.5 text-sm font-medium ml-4 transition-colors duration-150 ${
                            isActive 
                              ? 'bg-secondary text-foreground' 
                              : 'text-foreground hover:bg-muted'
                          }`
                        }
                      >
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          )}
        </Collapsible>
      </SidebarMenuItem>
    );
  };

  return (
    <Sidebar className={isCollapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="px-0 py-0 bg-card border-r border-border flex flex-col h-full">
        {/* Header with logo and hamburger menu */}
        <div className="p-4 border-b border-border">
          {/* Logo and app name */}
          <div className="flex items-center justify-center gap-3 mb-3">
            {!isCollapsed && (
              <>
                {/* LiveKit Logo */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.90198 3.8147e-06C9.21609 3.8147e-06 8.55816 0.275155 8.07309 0.765202L0.757481 8.15435C0.272416 8.64417 0 9.30867 0 10.0015V17.1429H5.14286V6.89632C5.14286 5.92791 5.9201 5.14286 6.87889 5.14286H24V3.8147e-06H9.90198Z" fill="#8C8C8C"/>
                    <path d="M18.8571 17.1186C18.8571 18.0784 18.1015 18.8572 17.1429 18.8572L0 18.8572V24H14.0979C14.7839 24 15.4417 23.7272 15.9268 23.2412L23.2424 15.9138C23.7275 15.4284 24 14.7692 24 14.0822V6.85716H18.8571V17.1186Z" fill="#8C8C8C"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold text-foreground">LiveKit</span>
              </>
            )}
            {isCollapsed && (
              <div className="w-8 h-8 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.90198 3.8147e-06C9.21609 3.8147e-06 8.55816 0.275155 8.07309 0.765202L0.757481 8.15435C0.272416 8.64417 0 9.30867 0 10.0015V17.1429H5.14286V6.89632C5.14286 5.92791 5.9201 5.14286 6.87889 5.14286H24V3.8147e-06H9.90198Z" fill="#8C8C8C"/>
                  <path d="M18.8571 17.1186C18.8571 18.0784 18.1015 18.8572 17.1429 18.8572L0 18.8572V24H14.0979C14.7839 24 15.4417 23.7272 15.9268 23.2412L23.2424 15.9138C23.7275 15.4284 24 14.7692 24 14.0822V6.85716H18.8571V17.1186Z" fill="#8C8C8C"/>
                </svg>
              </div>
            )}
          </div>
          
          {/* Hamburger menu - always visible and centered */}
          <div className="flex justify-center">
            <button 
              onClick={toggleSidebar}
              className="p-2 hover:bg-muted rounded transition-colors duration-150"
            >
              <Menu className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>
        
        {/* Navigation content */}
        <div className="flex flex-col h-full py-4">
        {/* Top Section */}
        <div className="flex-1">
          {/* Main Navigation */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-0">
                {/* Navigation Items and Collapsible Sections together */}
                {renderNavigationItems(topNavigationItems)}
                {topCollapsibleSections.map((section) => renderCollapsibleSection(section))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto">
          {/* Bottom Navigation Items */}
          {bottomNavigationItems.length > 0 && (
            <SidebarGroup className="mb-4">
              <SidebarGroupContent>
                <SidebarMenu className="space-y-0">
                  {renderNavigationItems(bottomNavigationItems)}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )}

          {/* Bottom Collapsible Sections */}
          {bottomCollapsibleSections.map((section) => (
            <SidebarGroup key={section.title} className="mb-4">
              <SidebarGroupContent>
                {renderCollapsibleSection(section)}
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
