import { DashboardLayout } from "@/components/DashboardLayout";

export default function Positions() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-dashboard-text mb-2">
            Positions
          </h1>
          <p className="text-dashboard-muted text-sm">
            Manage job positions and staff assignments
          </p>
        </div>

        <div className="bg-dashboard-sidebar rounded-lg border border-dashboard-border p-8">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-medium text-dashboard-text">
              Positions Management
            </h3>
            <p className="text-dashboard-muted">
              This page is under development. Positions management functionality
              coming soon.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
