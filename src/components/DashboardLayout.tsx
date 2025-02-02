import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "./DashboardSidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted">
        <DashboardSidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;