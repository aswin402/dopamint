import { getLenisInstance } from '@/lib/lenis';

// Scroll-jack must also pause Lenis (RootLayout), otherwise its virtual-scroll
// engine keeps consuming wheel events and scrolls the document underneath the
// fixed overlay — leaving it at/past the scroll limit once unlocked.
export function lockPageScroll() {
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
  document.documentElement.dataset.scrollLocked = 'true';
  getLenisInstance()?.stop();
}

export function unlockPageScroll() {
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
  delete document.documentElement.dataset.scrollLocked;
  getLenisInstance()?.start();
}
