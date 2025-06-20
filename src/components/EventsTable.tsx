import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockEvents } from "@/lib/data";
import { Event } from "@/lib/types";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 10;

export function EventsTable() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(mockEvents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentEvents = mockEvents.slice(startIndex, endIndex);

  const handleEventClick = (event: Event) => {
    navigate(`/event/${event.id}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "rejected":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    }
  };

  return (
    <div className="bg-dashboard-sidebar rounded-lg border border-dashboard-border overflow-hidden">
      {/* Desktop Table Header */}
      <div className="bg-purple-gradient p-4 hidden md:block">
        <div className="grid grid-cols-6 gap-4 text-white text-sm font-medium">
          <div className="flex items-center gap-2">
            <span>Event Name</span>
            <button className="text-white/70 hover:text-white">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M6 0L8 4H4L6 0ZM6 12L4 8H8L6 12Z" />
              </svg>
            </button>
          </div>
          <div>Event Start</div>
          <div className="flex items-center gap-2">
            <span>Event End</span>
            <button className="text-white/70 hover:text-white">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M6 0L8 4H4L6 0ZM6 12L4 8H8L6 12Z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span>Client Name</span>
            <button className="text-white/70 hover:text-white">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M6 0L8 4H4L6 0ZM6 12L4 8H8L6 12Z" />
              </svg>
            </button>
          </div>
          <div>Contact Info</div>
          <div>Venue</div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="bg-purple-gradient p-4 md:hidden">
        <h3 className="text-white font-medium">Event Requests</h3>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-dashboard-border">
        {currentEvents.map((event, index) => (
          <div
            key={event.id}
            onClick={() => handleEventClick(event)}
            className="p-4 hover:bg-dashboard-border/30 cursor-pointer transition-colors group"
          >
            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-6 gap-4">
              <div className="flex items-center gap-3">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="h-4 w-4 text-dashboard-purple" />
                </button>
                <span className="text-dashboard-text text-sm">
                  {event.eventName}
                </span>
              </div>
              <div className="text-dashboard-text text-sm">
                {event.eventStart}
              </div>
              <div className="text-dashboard-text text-sm">
                {event.eventEnd}
              </div>
              <div className="text-dashboard-text text-sm">
                {event.clientName}
              </div>
              <div className="text-dashboard-text text-sm">
                {event.contactInfo}
              </div>
              <div className="text-dashboard-muted text-sm truncate">
                {event.venue}
              </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-dashboard-text font-medium">
                  {event.eventName}
                </h4>
                <Eye className="h-4 w-4 text-dashboard-purple" />
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-dashboard-muted block">Start Date</span>
                  <span className="text-dashboard-text">
                    {event.eventStart}
                  </span>
                </div>
                <div>
                  <span className="text-dashboard-muted block">End Date</span>
                  <span className="text-dashboard-text">{event.eventEnd}</span>
                </div>
              </div>

              <div className="text-sm">
                <span className="text-dashboard-muted block">Client</span>
                <span className="text-dashboard-text">{event.clientName}</span>
              </div>

              <div className="text-sm">
                <span className="text-dashboard-muted block">Contact</span>
                <span className="text-dashboard-text">{event.contactInfo}</span>
              </div>

              <div className="text-sm">
                <span className="text-dashboard-muted block">Venue</span>
                <span className="text-dashboard-text truncate">
                  {event.venue}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 p-4 border-t border-dashboard-border">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="text-dashboard-muted hover:text-dashboard-text hover:bg-dashboard-border"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {Array.from({ length: Math.min(4, totalPages) }, (_, i) => {
          const pageNum = i + 1;
          return (
            <Button
              key={pageNum}
              variant={currentPage === pageNum ? "default" : "ghost"}
              size="sm"
              onClick={() => setCurrentPage(pageNum)}
              className={cn(
                currentPage === pageNum
                  ? "bg-dashboard-purple text-white hover:bg-dashboard-purple/80"
                  : "text-dashboard-muted hover:text-dashboard-text hover:bg-dashboard-border",
              )}
            >
              {pageNum}
            </Button>
          );
        })}

        <Button
          variant="ghost"
          size="sm"
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalPages, prev + 1))
          }
          disabled={currentPage === totalPages}
          className="text-dashboard-muted hover:text-dashboard-text hover:bg-dashboard-border"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
