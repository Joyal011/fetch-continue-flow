import { getMessaging, getToken, onMessage, type Messaging } from "firebase/messaging";
import { app } from "./firebase";

let messaging: Messaging | null = null;

// Initialize messaging only if supported
const initializeMessaging = () => {
  if (typeof window !== "undefined" && "Notification" in window) {
    try {
      messaging = getMessaging(app);
    } catch (error) {
      console.log("Firebase Messaging not supported:", error);
    }
  }
  return messaging;
};

// Request notification permission and get FCM token
export const requestNotificationPermission = async (): Promise<string | null> => {
  try {
    const permission = await Notification.requestPermission();
    
    if (permission !== "granted") {
      console.log("Notification permission denied");
      return null;
    }

    const msg = initializeMessaging();
    if (!msg) {
      console.log("Messaging not available");
      return null;
    }

    // Get FCM token - you'll need to add your VAPID key from Firebase Console
    const token = await getToken(msg, {
      vapidKey: "YOUR_VAPID_KEY", // Replace with your VAPID key from Firebase Console
    });

    console.log("FCM Token:", token);
    return token;
  } catch (error) {
    console.error("Error getting notification permission:", error);
    return null;
  }
};

// Listen for foreground messages
export const onForegroundMessage = (callback: (payload: any) => void) => {
  const msg = initializeMessaging();
  if (!msg) return () => {};

  return onMessage(msg, (payload) => {
    console.log("Foreground message received:", payload);
    callback(payload);
  });
};

// Check if notifications are supported
export const isNotificationSupported = (): boolean => {
  return typeof window !== "undefined" && "Notification" in window && "serviceWorker" in navigator;
};

// Get current notification permission status
export const getNotificationStatus = (): NotificationPermission | "unsupported" => {
  if (!isNotificationSupported()) return "unsupported";
  return Notification.permission;
};
