import { Search, Bell, MessageSquare, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { mockUser } from "@/lib/data";

interface DashboardHeaderProps {
  onMenuClick?: () => void;
}

export function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 border-b border-dashboard-border bg-dashboard-bg/80 backdrop-blur-sm">
      <div className="flex items-center gap-4 flex-1">
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuClick}
          className="lg:hidden text-dashboard-muted hover:text-dashboard-text hover:bg-dashboard-border"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="relative max-w-md w-full hidden sm:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dashboard-muted h-4 w-4" />
          <Input
            placeholder="Search here"
            className="pl-10 bg-dashboard-sidebar border-dashboard-border text-dashboard-text placeholder:text-dashboard-muted focus:border-dashboard-purple"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-dashboard-sidebar rounded-lg transition-colors">
          <MessageSquare className="h-5 w-5 text-dashboard-muted hover:text-dashboard-text" />
        </button>
        <button className="p-2 hover:bg-dashboard-sidebar rounded-lg transition-colors">
          <Bell className="h-5 w-5 text-dashboard-muted hover:text-dashboard-text" />
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-dashboard-border">
          <Avatar style={{ width: "81px", height: "81px" }}>
            <AvatarImage
              src="https://cdn.builder.io/api/v1/assets/df9a19ee06a44f9d97f6bd8bbcea4654/image-b7c910?format=webp&width=800"
              alt={mockUser.name}
            />
            <AvatarFallback className="bg-dashboard-purple text-white text-sm">
              {mockUser.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="text-sm hidden md:block">
            <p className="text-dashboard-text font-medium">
              Hi, {mockUser.name}
            </p>
            <p className="text-dashboard-muted text-xs">welcome back!</p>
          </div>
        </div>
      </div>
    </header>
  );
}
