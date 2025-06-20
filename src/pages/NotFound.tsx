import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <DashboardLayout>
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-dashboard-text mb-4">404</h1>
          <p className="text-xl text-dashboard-muted mb-6">
            Oops! Page not found
          </p>
          <Button
            onClick={() => navigate("/")}
            className="bg-dashboard-purple hover:bg-dashboard-purple/80"
          >
            Return to Dashboard
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NotFound;
