import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, Check, Bell, BellOff } from "lucide-react";
import { toast } from "sonner";
import {
  requestNotificationPermission,
  isNotificationSupported,
  getNotificationStatus,
} from "@/lib/notifications";
import appLogo from "@/assets/app-logo.png";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState<NotificationPermission | "unsupported">("default");
  const [isRequestingPermission, setIsRequestingPermission] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Check if iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));

    // Check notification status
    setNotificationStatus(getNotificationStatus());

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

  const handleEnableNotifications = async () => {
    setIsRequestingPermission(true);
    try {
      const token = await requestNotificationPermission();
      if (token) {
        setNotificationStatus("granted");
        toast.success("Notifications enabled!", {
          description: "You'll receive alerts when new notices are posted.",
        });
      } else {
        setNotificationStatus(getNotificationStatus());
        if (getNotificationStatus() === "denied") {
          toast.error("Notifications blocked", {
            description: "Please enable notifications in your browser settings.",
          });
        }
      }
    } catch (error) {
      console.error("Error enabling notifications:", error);
      toast.error("Failed to enable notifications");
    } finally {
      setIsRequestingPermission(false);
    }
  };

  return (
    <PageTransition>
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              {/* Logo */}
              <div className="mb-8">
                <img
                  src={appLogo}
                  alt="Chosen Generation"
                  className="w-28 h-28 mx-auto mb-4 drop-shadow-lg"
                />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Install Our App
                </h1>
                <p className="text-lg text-muted-foreground">
                  Get quick access to Chosen Generation right from your home screen!
                </p>
              </div>

              {/* Install Section */}
              <div className="mb-8">
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
                    <Smartphone className="h-12 w-12 mx-auto text-primary mb-4" />
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
                    <Smartphone className="h-12 w-12 mx-auto text-primary mb-4" />
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

              {/* Notifications Section */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Push Notifications
                </h2>
                <p className="text-muted-foreground mb-4">
                  Get notified instantly when new notices are posted!
                </p>

                {!isNotificationSupported() ? (
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <BellOff className="h-5 w-5" />
                    <span>Notifications not supported on this browser</span>
                  </div>
                ) : notificationStatus === "granted" ? (
                  <div className="flex items-center justify-center gap-2 text-green-500">
                    <Check className="h-5 w-5" />
                    <span>Notifications enabled</span>
                  </div>
                ) : notificationStatus === "denied" ? (
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-destructive mb-2">
                      <BellOff className="h-5 w-5" />
                      <span>Notifications blocked</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Please enable notifications in your browser settings
                    </p>
                  </div>
                ) : (
                  <Button
                    onClick={handleEnableNotifications}
                    disabled={isRequestingPermission}
                    className="gap-2"
                  >
                    <Bell className="h-4 w-4" />
                    {isRequestingPermission ? "Enabling..." : "Enable Notifications"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Install;
