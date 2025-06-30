
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Overview from "./pages/Overview";
import Sessions from "./pages/Sessions";
import Egresses from "./pages/Egresses";
import Ingresses from "./pages/Ingresses";
import Telephony from "./pages/Telephony";
import TelephonyConfig from "./pages/TelephonyConfig";
import SettingsProject from "./pages/SettingsProject";
import SettingsMembers from "./pages/SettingsMembers";
import SettingsKeys from "./pages/SettingsKeys";
import SettingsWebhooks from "./pages/SettingsWebhooks";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-card">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <Routes>
                <Route path="/" element={<Navigate to="/overview" replace />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/sessions" element={<Sessions />} />
                <Route path="/egresses" element={<Egresses />} />
                <Route path="/ingresses" element={<Ingresses />} />
                <Route path="/telephony" element={<Telephony />} />
                <Route path="/telephony/config" element={<TelephonyConfig />} />
                <Route path="/settings" element={<Navigate to="/settings/project" replace />} />
                <Route path="/settings/project" element={<SettingsProject />} />
                <Route path="/settings/members" element={<SettingsMembers />} />
                <Route path="/settings/keys" element={<SettingsKeys />} />
                <Route path="/settings/webhooks" element={<SettingsWebhooks />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
