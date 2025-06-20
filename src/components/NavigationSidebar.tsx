import { useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  UserCheck,
  User,
  LogOut,
  ChevronDown,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  {
    title: "Events",
    icon: Calendar,
    href: "/",
    hasSubmenu: true,
    submenu: [
      { title: "New Requests", href: "/", count: 15 },
      { title: "Eventlase", href: "/events" },
      { title: "Pending", href: "/pending" },
      { title: "Partial Requests", href: "/partial" },
    ],
  },
  {
    title: "Positions",
    icon: MapPin,
    href: "/positions",
  },
  {
    title: "Contractors",
    icon: Users,
    href: "/contractors",
  },
  {
    title: "Users",
    icon: UserCheck,
    href: "/users",
    hasSubmenu: true,
    submenu: [
      { title: "Admins", href: "/users/admins" },
      { title: "Clients", href: "/users/clients" },
      { title: "Coordinators", href: "/users/coordinators" },
    ],
  },
  {
    title: "Profile",
    icon: User,
    href: "/profile",
  },
];

interface NavigationSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function NavigationSidebar({
  isOpen = true,
  onClose,
}: NavigationSidebarProps) {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(["Events"]);

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title],
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-dashboard-sidebar border-r border-dashboard-border flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b border-dashboard-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <div
                className="rounded-lg flex items-center justify-center"
                style={{ width: "65px", height: "65px" }}
              >
                <img
                  src="https://cdn.builder.io/api/v1/assets/df9a19ee06a44f9d97f6bd8bbcea4654/image-531a3b?format=webp&width=800"
                  alt="Logo"
                  className="rounded-lg object-cover"
                  style={{ width: "65px", height: "65px" }}
                />
              </div>
            </div>

            {/* Mobile Close Button */}
            <button
              onClick={onClose}
              className="lg:hidden text-dashboard-muted hover:text-dashboard-text"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navigationItems.map((item) => {
              const isExpanded = expandedItems.includes(item.title);
              const isActive = location.pathname === item.href;
              // Special case: highlight Events when on event detail pages
              const isEventPage = location.pathname.startsWith("/event/");
              const shouldHighlight =
                isActive || (item.title === "Events" && isEventPage);

              return (
                <li key={item.title}>
                  <div className="relative">
                    {item.hasSubmenu ? (
                      <button
                        onClick={() => toggleExpanded(item.title)}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                          shouldHighlight
                            ? "bg-dashboard-purple text-white"
                            : "text-dashboard-text hover:bg-dashboard-border hover:text-white",
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </div>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition-transform",
                            isExpanded ? "rotate-180" : "",
                          )}
                        />
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => onClose?.()}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                          shouldHighlight
                            ? "bg-dashboard-purple text-white"
                            : "text-dashboard-text hover:bg-dashboard-border hover:text-white",
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </div>

                  {/* Submenu */}
                  {item.hasSubmenu && isExpanded && (
                    <ul className="ml-7 mt-1 space-y-1">
                      {item.submenu?.map((subItem) => (
                        <li key={subItem.title}>
                          <Link
                            to={subItem.href}
                            onClick={() => onClose?.()}
                            className={cn(
                              "flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors",
                              location.pathname === subItem.href ||
                                (subItem.title === "New Requests" &&
                                  location.pathname.startsWith("/event/"))
                                ? "text-dashboard-purple bg-dashboard-purple/10"
                                : "text-dashboard-muted hover:text-dashboard-text hover:bg-dashboard-border",
                            )}
                          >
                            <span>{subItem.title}</span>
                            {subItem.count && (
                              <span className="bg-dashboard-purple text-white text-xs px-1.5 py-0.5 rounded-full">
                                {subItem.count}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-dashboard-border">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-dashboard-text hover:bg-dashboard-border hover:text-white transition-colors">
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
