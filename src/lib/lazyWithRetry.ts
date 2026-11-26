import { lazy, type ComponentType } from 'react';

/**
 * Resilient lazy-loading wrapper.
 * If a dynamically imported chunk fails to load (common during/after a new deployment
 * because the old hashed file name no longer exists on the server), this wrapper
 * automatically reloads the window once to fetch the latest application bundle.
 */
export function lazyWithRetry<P extends object = Record<string, never>>(
  componentImport: () => Promise<{ default: ComponentType<P> } | ComponentType<P>>
) {
  return lazy<ComponentType<P>>(async () => {
    try {
      const component = await componentImport();
      try {
        sessionStorage.removeItem('chunk_retry_ts');
      } catch {
        // Storage restricted (e.g. mobile private mode)
      }
      return typeof component === 'object' && component !== null && 'default' in component
        ? component
        : { default: component };
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : typeof error === 'object' &&
              error !== null &&
              'message' in error &&
              typeof (error as { message?: unknown }).message === 'string'
            ? (error as { message: string }).message
            : '';

      const isChunkError =
        errorMessage.includes('Failed to fetch dynamically imported module') ||
        errorMessage.includes('error loading dynamically imported module') ||
        errorMessage.includes('Importing a module script failed');

      let canRetry = false;
      try {
        const lastRetry = sessionStorage.getItem('chunk_retry_ts');
        const now = Date.now();
        if (!lastRetry || now - Number(lastRetry) > 30000) {
          sessionStorage.setItem('chunk_retry_ts', String(now));
          canRetry = true;
        }
      } catch {
        // Storage restricted (e.g. mobile private mode)
      }

      if (isChunkError && canRetry) {
        window.location.reload();
        return { default: (() => null) as ComponentType<P> };
      }

      // If already refreshed or not a chunk error, rethrow to ErrorBoundary
      throw error;
    }
  });
}
