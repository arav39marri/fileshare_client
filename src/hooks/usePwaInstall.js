import { useState, useEffect } from 'react';

/**
 * Hook that captures the browser's beforeinstallprompt event
 * and returns a function to trigger the native PWA install prompt.
 */
export function usePwaInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      // Prevent the default mini-infobar from showing
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const triggerInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log('PWA install outcome:', outcome);
    setDeferredPrompt(null);
  };

  return { canInstall: !!deferredPrompt, triggerInstall };
}
