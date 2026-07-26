import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import OAuthConsent from "./pages/OAuthConsent";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/precos" element={<Pricing />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/agendamento" element={<Booking />} />
          <Route path="/agenda" element={<Bookings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/.lovable/oauth/consent" element={<OAuthConsent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
