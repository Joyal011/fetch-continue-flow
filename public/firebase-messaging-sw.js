// Firebase Messaging Service Worker
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDy0NzsSSNByj2Qg8wLooVBqq7F7aF54",
  authDomain: "chosen-generation-b826d.firebaseapp.com",
  projectId: "chosen-generation-b826d",
  storageBucket: "chosen-generation-b826d.appspot.com",
  messagingSenderId: "378528654100",
  appId: "1:378528654100:web:ec2d52c93d4299a97d31",
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Background message received:', payload);
  
  const notificationTitle = payload.notification?.title || 'New Notice';
  const notificationOptions = {
    body: payload.notification?.body || 'You have a new notice from Chosen Generation',
    icon: '/pwa-192x192.png',
    badge: '/pwa-192x192.png',
    vibrate: [200, 100, 200],
    tag: 'notice-notification',
    data: payload.data,
    actions: [
      { action: 'view', title: 'View Notice' },
      { action: 'close', title: 'Close' }
    ]
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'view' || !event.action) {
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
        // If app is already open, focus it
        for (const client of clientList) {
          if (client.url.includes('/notice') && 'focus' in client) {
            return client.focus();
          }
        }
        // Otherwise open new window
        if (clients.openWindow) {
          return clients.openWindow('/notice');
        }
      })
    );
  }
});
