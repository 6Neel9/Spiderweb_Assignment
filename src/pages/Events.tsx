import { DashboardLayout } from "@/components/DashboardLayout";

export default function Events() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-dashboard-text mb-2">
            Events
          </h1>
          <p className="text-dashboard-muted text-sm">
            Manage all events and their details
          </p>
        </div>

        <div className="bg-dashboard-sidebar rounded-lg border border-dashboard-border p-8">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-medium text-dashboard-text">
              Events Page
            </h3>
            <p className="text-dashboard-muted">
              This page is under development. Full events management
              functionality coming soon.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
