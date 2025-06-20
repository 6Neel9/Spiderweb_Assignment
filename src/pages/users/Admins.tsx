import { DashboardLayout } from "@/components/DashboardLayout";

export default function Admins() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-dashboard-text mb-2">
            Admin Users
          </h1>
          <p className="text-dashboard-muted text-sm">
            Manage administrator accounts and permissions
          </p>
        </div>

        <div className="bg-dashboard-sidebar rounded-lg border border-dashboard-border p-8">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-medium text-dashboard-text">
              Admin Management
            </h3>
            <p className="text-dashboard-muted">
              This page is under development. Admin user management
              functionality coming soon.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
