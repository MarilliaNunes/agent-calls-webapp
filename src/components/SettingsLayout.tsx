import { ReactNode } from "react";
import { SettingsSubmenu } from "./SettingsSubmenu";

interface SettingsLayoutProps {
  children: ReactNode;
}

export function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="flex flex-1 bg-background">
      <SettingsSubmenu />
      <div className="flex-1 min-h-0">
        {children}
      </div>
    </div>
  );
} 