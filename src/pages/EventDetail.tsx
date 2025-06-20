import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/components/DashboardLayout";
import { mockEvents } from "@/lib/data";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "event-details", label: "Event Details", active: false },
  {
    id: "assign-coordinator",
    label: "Assign Coordinator/Coordinators",
    active: true,
  },
  { id: "session-management", label: "Session Management", active: false },
  { id: "generate-sow", label: "Generate SOW", active: false },
];

const meetingRooms = [
  {
    id: 1,
    name: "Meeting Room 1",
    positions: 10,
    date: "From 8am | 9 Jan 2024 - Ends at 7pm | 9 Jan 2024",
    schedule: "from 8am - 7pm",
  },
  {
    id: 2,
    name: "Meeting Room 2",
    positions: 12,
    date: "From 8am | 9 Jan 2024 - Ends at 7pm | 9 Jan 2024",
    schedule: "from 8am - 7pm",
  },
  {
    id: 3,
    name: "Meeting Room 3",
    positions: 8,
    date: "From 8am | 9 Jan 2024 - Ends at 7pm | 9 Jan 2024",
    schedule: "from 8am - 7pm",
  },
  {
    id: 4,
    name: "Meeting Room 4",
    positions: 15,
    date: "From 8am | 9 Jan 2024 - Ends at 7pm | 9 Jan 2024",
    schedule: "from 8am - 7pm",
  },
  {
    id: 5,
    name: "Meeting Room 5",
    positions: 6,
    date: "From 8am | 9 Jan 2024 - Ends at 7pm | 9 Jan 2024",
    schedule: "from 8am - 7pm",
  },
];

const positionData = [
  {
    position: "Camera I (indoor)",
    type: "9 am - 7 pm",
    info: "LP default",
    quantity: 20,
  },
  {
    position: "Camera I (indoor)",
    type: "9 am - 7 pm",
    info: "LP default",
    quantity: 20,
  },
  {
    position: "Camera I (indoor)",
    type: "9 am - 7 pm",
    info: "LP default",
    quantity: 20,
  },
  {
    position: "Camera I (indoor)",
    type: "9 am - 7 pm",
    info: "LP default",
    quantity: 20,
  },
  {
    position: "Camera I (indoor)",
    type: "9 am - 7 pm",
    info: "LP default",
    quantity: 20,
  },
  {
    position: "Camera I (indoor)",
    type: "9 am - 7 pm",
    info: "LP default",
    quantity: 20,
  },
];

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("assign-coordinator");

  const event = mockEvents.find((e) => e.id === id);

  if (!event) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center space-y-4">
            <h2 className="text-xl font-semibold text-dashboard-text">
              Event Not Found
            </h2>
            <p className="text-dashboard-muted">
              The requested event could not be found.
            </p>
            <Button
              onClick={() => navigate("/")}
              className="bg-dashboard-purple hover:bg-dashboard-purple/80"
            >
              Back to Events
            </Button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header with Back Button and Event Name */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="text-dashboard-muted hover:text-dashboard-text hover:bg-dashboard-border"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-xl font-medium text-dashboard-text">
            Event Name (Venue Details)
          </h1>
        </div>

        {/* Main Content Card */}
        <div className="bg-dashboard-sidebar rounded-lg border border-dashboard-border overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-dashboard-border">
            <div className="flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap",
                    activeTab === tab.id
                      ? "bg-dashboard-purple text-white"
                      : "text-dashboard-muted hover:text-dashboard-text hover:bg-dashboard-border",
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === "assign-coordinator" && (
            <div className="p-5 space-y-0">
              {/* Top Section - Assign Coordinator and Event Details in boxes */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                {/* Assign Coordinator Box */}
                <div className="bg-dashboard-sidebar rounded-lg border border-dashboard-border p-4">
                  <h3 className="text-dashboard-text font-medium mb-3 text-sm">
                    Assign Coordinator
                  </h3>
                  <div className="space-y-2">
                    <select className="w-full bg-dashboard-bg border border-dashboard-border rounded-md px-3 py-2 text-dashboard-text text-sm">
                      <option>Search Coordinators</option>
                    </select>
                    <button className="text-dashboard-purple text-sm hover:underline">
                      Add New Coordinator
                    </button>
                  </div>
                </div>

                {/* Event Name Box */}
                <div className="bg-dashboard-sidebar rounded-lg border border-dashboard-border p-4">
                  <h3 className="text-dashboard-text font-medium mb-3 text-sm">
                    Event Name (Venue Here)
                  </h3>
                  <div className="space-y-1 text-xs text-dashboard-muted">
                    <p>
                      Start: 12-12-2023 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; End:
                      15-12-2023
                    </p>
                    <p>
                      Venue Address: Some Location 12, Name Here, City, State
                    </p>
                  </div>
                </div>
              </div>

              {/* Assign Contractor Section - All in one container */}
              <div className="bg-dashboard-sidebar rounded-lg border border-dashboard-border p-6">
                <h3 className="text-dashboard-text font-medium mb-4 text-sm">
                  Assign Contractor
                </h3>

                {/* Meeting Rooms and Positions - Side by Side Layout */}
                <div className="flex flex-row gap-6 mb-4">
                  {/* Meeting Rooms - In their own box */}
                  <div className="bg-dashboard-bg rounded-md border border-dashboard-border p-4 flex-shrink-0 w-80">
                    <div className="flex flex-col gap-2">
                      {meetingRooms.map((room, index) => (
                        <div
                          key={room.id}
                          className={`rounded-md border overflow-hidden ${
                            index === 0
                              ? "bg-purple-gradient border-dashboard-purple"
                              : "bg-dashboard-sidebar border-dashboard-border"
                          }`}
                        >
                          <div
                            className={`p-2 ${index === 0 ? "text-white" : "text-dashboard-text"}`}
                          >
                            <h4 className="font-medium text-xs">{room.name}</h4>
                            <p
                              className={`text-[10px] ${index === 0 ? "text-white/90" : "text-dashboard-muted"}`}
                            >
                              {room.date}
                            </p>
                            <div
                              className={`mt-1 rounded px-1.5 py-0.5 ${
                                index === 0
                                  ? "bg-white/20"
                                  : "bg-dashboard-border"
                              }`}
                            >
                              <span className="text-[10px] font-medium">
                                {room.positions} Positions
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Positions Table - Filled with larger fonts */}
                  <div className="flex-1 bg-dashboard-bg rounded-md border border-dashboard-border overflow-hidden">
                    <div className="bg-dashboard-border/30 p-3 border-b border-dashboard-border">
                      <h4 className="text-dashboard-text font-medium text-sm">
                        Positions
                      </h4>
                    </div>

                    <div className="p-0">
                      {/* Table Header */}
                      <div className="grid grid-cols-5 gap-3 p-3 border-b border-dashboard-border text-xs font-medium text-dashboard-muted bg-dashboard-border/10">
                        <div>Position</div>
                        <div>Type</div>
                        <div>Info</div>
                        <div>Quantity</div>
                        <div>Select Contractor</div>
                      </div>

                      {/* Table Rows - Larger fonts and better filled */}
                      {positionData.map((position, index) => (
                        <div
                          key={index}
                          className="grid grid-cols-5 gap-3 p-3 border-b border-dashboard-border/20 hover:bg-dashboard-border/5"
                        >
                          <div className="text-xs text-dashboard-text font-medium">
                            {position.position}
                          </div>
                          <div className="text-xs text-dashboard-text">
                            {position.type}
                          </div>
                          <div className="text-xs text-dashboard-text">
                            {position.info}
                          </div>
                          <div className="text-xs text-dashboard-text font-medium">
                            {position.quantity}
                          </div>
                          <div>
                            <select className="w-full bg-dashboard-sidebar border border-dashboard-border rounded px-2 py-1.5 text-xs text-dashboard-text">
                              <option>Select Contractor</option>
                            </select>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Simple Navigation - Just arrows, no numbers */}
                <div className="flex items-center justify-center gap-4 mb-4">
                  <button className="p-2 text-dashboard-muted hover:text-dashboard-text hover:bg-dashboard-border rounded">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button className="p-2 text-dashboard-muted hover:text-dashboard-text hover:bg-dashboard-border rounded">
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Save Button - Centered at bottom */}
                <div className="flex justify-center">
                  <Button className="bg-purple-gradient hover:opacity-90 text-white px-6 py-2 text-sm font-medium rounded">
                    Save Edits
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Other Tab Placeholders */}
          {activeTab !== "assign-coordinator" && (
            <div className="p-8 text-center">
              <h3 className="text-lg font-medium text-dashboard-text mb-2">
                {tabs.find((t) => t.id === activeTab)?.label}
              </h3>
              <p className="text-dashboard-muted">
                This section is under development.
              </p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
