import { getLenisInstance } from '@/lib/lenis';
import { nextScrollLockOwners } from './scrollLockState';

let activeOwners = new Set<string>();

// Scroll-jack must also pause Lenis (RootLayout), otherwise its virtual-scroll
// engine keeps consuming wheel events and scrolls the document underneath the
// fixed overlay — leaving it at/past the scroll limit once unlocked.
export function lockPageScroll(owner: string) {
  const wasLocked = activeOwners.size > 0;
  activeOwners = nextScrollLockOwners(activeOwners, owner, 'lock');

  if (wasLocked) return;

  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
  document.documentElement.dataset.scrollLocked = 'true';
  getLenisInstance()?.stop();
}

export function unlockPageScroll(owner: string) {
  activeOwners = nextScrollLockOwners(activeOwners, owner, 'unlock');

  if (activeOwners.size > 0) return;

  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
  delete document.documentElement.dataset.scrollLocked;
  getLenisInstance()?.start();
}
