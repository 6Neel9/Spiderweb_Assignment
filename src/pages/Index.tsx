import { DashboardLayout } from "@/components/DashboardLayout";
import { EventsTable } from "@/components/EventsTable";

export default function Index() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-dashboard-text mb-2">
            Event Requests
          </h1>
          <p className="text-dashboard-muted text-sm">
            Manage and review all incoming event requests
          </p>
        </div>

        <EventsTable />
      </div>
    </DashboardLayout>
  );
}
