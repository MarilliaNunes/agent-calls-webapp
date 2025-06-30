import { NavLink, useLocation } from "react-router-dom";
import {
  User,
  Key,
  Webhook,
  FolderOpen
} from "lucide-react";

const settingsItems = [
  { title: "Project", url: "/settings/project", icon: FolderOpen },
  { title: "Team Members", url: "/settings/members", icon: User },
  { title: "API Keys", url: "/settings/keys", icon: Key },
  { title: "Webhooks", url: "/settings/webhooks", icon: Webhook },
];

export function SettingsSubmenu() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="w-56 border-r border-border bg-background">
      <div className="p-6">
        <nav className="space-y-1">
          {settingsItems.map((item) => (
            <NavLink
              key={item.title}
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
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
} 