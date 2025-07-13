import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";

import Dashboard from "./pages/Dashboard";
import LearningModules from "./pages/LearningModules";
import AIChat from "./pages/AIChat";
import Flashcards from "./pages/Flashcards";
import Summaries from "./pages/Summaries";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";
import Upgrade from "./pages/Upgrade";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster /> {/* ← fixed */}
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/modules" element={<LearningModules />} />
            <Route path="/chat" element={<AIChat />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/summaries" element={<Summaries />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
