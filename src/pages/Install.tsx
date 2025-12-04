import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, Check } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Check if iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));

    // Listen for install prompt
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <Smartphone className="h-20 w-20 mx-auto text-primary mb-4" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Install Our App
                </h1>
                <p className="text-lg text-muted-foreground">
                  Get quick access to Chosen Generation right from your home screen!
                </p>
              </div>

              {isInstalled ? (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6">
                  <Check className="h-12 w-12 mx-auto text-green-500 mb-4" />
                  <h2 className="text-xl font-semibold text-foreground mb-2">
                    App Already Installed!
                  </h2>
                  <p className="text-muted-foreground">
                    You already have the app installed on your device.
                  </p>
                </div>
              ) : isIOS ? (
                <div className="bg-card border border-border rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Install on iOS
                  </h2>
                  <ol className="text-left text-muted-foreground space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">1</span>
                      <span>Tap the <strong>Share</strong> button at the bottom of Safari</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">2</span>
                      <span>Scroll down and tap <strong>"Add to Home Screen"</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">3</span>
                      <span>Tap <strong>"Add"</strong> in the top right corner</span>
                    </li>
                  </ol>
                </div>
              ) : deferredPrompt ? (
                <Button onClick={handleInstall} size="lg" className="gap-2">
                  <Download className="h-5 w-5" />
                  Install App
                </Button>
              ) : (
                <div className="bg-card border border-border rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-4">
                    Install on Android
                  </h2>
                  <ol className="text-left text-muted-foreground space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">1</span>
                      <span>Tap the <strong>menu icon</strong> (⋮) in your browser</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">2</span>
                      <span>Tap <strong>"Install app"</strong> or <strong>"Add to Home screen"</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">3</span>
                      <span>Tap <strong>"Install"</strong> to confirm</span>
                    </li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Install;
