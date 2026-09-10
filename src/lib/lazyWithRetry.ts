import { lazy, type ComponentType } from 'react';

/**
 * Resilient lazy-loading wrapper.
 * If a dynamically imported chunk fails to load (common during/after a new deployment
 * because the old hashed file name no longer exists on the server), this wrapper
 * automatically reloads the window once to fetch the latest application bundle.
 */
export function lazyWithRetry<T extends ComponentType<any>>(
  componentImport: () => Promise<{ default: T } | any>
) {
  return lazy(async () => {
    try {
      const component = await componentImport();
      try {
        sessionStorage.removeItem('chunk_retry_ts');
      } catch {}
      return component.default ? component : { default: component };
    } catch (error: any) {
      const isChunkError =
        error?.message?.includes('Failed to fetch dynamically imported module') ||
        error?.message?.includes('error loading dynamically imported module') ||
        error?.message?.includes('Importing a module script failed');

      let canRetry = false;
      try {
        const lastRetry = sessionStorage.getItem('chunk_retry_ts');
        const now = Date.now();
        if (!lastRetry || now - Number(lastRetry) > 30000) {
          sessionStorage.setItem('chunk_retry_ts', String(now));
          canRetry = true;
        }
      } catch {}

      if (isChunkError && canRetry) {
        window.location.reload();
        return { default: (() => null) as unknown as T };
      }

      // If already refreshed or not a chunk error, rethrow to ErrorBoundary
      throw error;
    }
  });
}
