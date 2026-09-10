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
    const hasForceRefreshed = sessionStorage.getItem('chunk_retry');

    try {
      const component = await componentImport();
      sessionStorage.removeItem('chunk_retry');
      return component.default ? component : { default: component };
    } catch (error: any) {
      const isChunkError =
        error?.message?.includes('Failed to fetch dynamically imported module') ||
        error?.message?.includes('error loading dynamically imported module') ||
        error?.message?.includes('Importing a module script failed');

      if (isChunkError && !hasForceRefreshed) {
        sessionStorage.setItem('chunk_retry', 'true');
        window.location.reload();
        return { default: (() => null) as unknown as T };
      }

      // If already refreshed or not a chunk error, rethrow to ErrorBoundary
      throw error;
    }
  });
}
