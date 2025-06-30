
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { RefreshCw, Settings } from "lucide-react";

interface HeaderProps {
  title: string;
  breadcrumbs?: string[];
  lastUpdated?: string;
  autoRefresh?: boolean;
}

export function Header({ title, breadcrumbs = [], lastUpdated, autoRefresh }: HeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Lumen</span>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <span>/</span>
                <span>{crumb}</span>
              </span>
            ))}
          </div>
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
      </div>
      
      <div className="ml-auto flex items-center gap-2 px-4">
        {lastUpdated && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Last updated</span>
            <span className="font-mono">{lastUpdated}</span>
          </div>
        )}
        
        {autoRefresh !== undefined && (
          <div className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Auto-refresh {autoRefresh ? 'on' : 'off'}
            </span>
          </div>
        )}
        
        <Button variant="ghost" size="sm" className="text-muted-foreground">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
