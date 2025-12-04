import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toast } from "sonner";
import SplashScreen from "./components/SplashScreen";
import { onForegroundMessage, isNotificationSupported } from "./lib/notifications";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import Notice from "./pages/Notice";
import Install from "./pages/Install";
import YouthCamp2025 from "./pages/YouthCamp2025";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Register service worker for FCM
    if ("serviceWorker" in navigator && isNotificationSupported()) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          console.log("FCM Service Worker registered:", registration.scope);
        })
        .catch((error) => {
          console.log("FCM Service Worker registration failed:", error);
        });

      // Listen for foreground messages
      const unsubscribe = onForegroundMessage((payload) => {
        toast(payload.notification?.title || "New Notice", {
          description: payload.notification?.body,
          action: {
            label: "View",
            onClick: () => window.location.href = "/notice",
          },
        });
      });

      return () => unsubscribe();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/media" element={<Media />} />
            <Route path="/notice" element={<Notice />} />
            <Route path="/install" element={<Install />} />
            <Route path="/youth-camp-2025" element={<YouthCamp2025 />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
