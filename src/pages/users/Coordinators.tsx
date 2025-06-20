import { DashboardLayout } from "@/components/DashboardLayout";

export default function Coordinators() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-dashboard-text mb-2">
            Coordinator Users
          </h1>
          <p className="text-dashboard-muted text-sm">
            Manage coordinator accounts and their assignments
          </p>
        </div>

        <div className="bg-dashboard-sidebar rounded-lg border border-dashboard-border p-8">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-medium text-dashboard-text">
              Coordinator Management
            </h3>
            <p className="text-dashboard-muted">
              This page is under development. Coordinator user management
              functionality coming soon.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
