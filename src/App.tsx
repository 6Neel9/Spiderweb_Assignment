import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EventDetail from "./pages/EventDetail";
import Events from "./pages/Events";
import Pending from "./pages/Pending";
import PartialRequests from "./pages/PartialRequests";
import Positions from "./pages/Positions";
import Contractors from "./pages/Contractors";
import Users from "./pages/Users";
import Admins from "./pages/users/Admins";
import Clients from "./pages/users/Clients";
import Coordinators from "./pages/users/Coordinators";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

//
import '@fontsource/kanit/300.css';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/partial" element={<PartialRequests />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/contractors" element={<Contractors />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/admins" element={<Admins />} />
          <Route path="/users/clients" element={<Clients />} />
          <Route path="/users/coordinators" element={<Coordinators />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
