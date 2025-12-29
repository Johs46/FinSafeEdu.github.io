import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ArtikelPage from "./pages/ArtikelPage";
import ArtikelDetailPage from "./pages/ArtikelDetailPage";
import VideoPage from "./pages/VideoPage";
import InfografisPage from "./pages/InfografisPage";
import KuisPage from "./pages/KuisPage";
import AIAdvisorPage from "./pages/AIAdvisorPage";
import PelaporanPage from "./pages/PelaporanPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/artikel" element={<ArtikelPage />} />
          <Route path="/artikel/:id" element={<ArtikelDetailPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/infografis" element={<InfografisPage />} />
          <Route path="/kuis" element={<KuisPage />} />
          <Route path="/ai-advisor" element={<AIAdvisorPage />} />
          <Route path="/pelaporan" element={<PelaporanPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
