import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { useEffect } from 'react';

/**
 * Route-level Error Boundary for React Router v6+.
 * Provides a clean Dopamint Renaissance branded recovery screen and
 * automatically handles stale deployment chunk 404 errors.
 */
export function RouteErrorBoundary() {
  const error = useRouteError() as any;

  const isChunkError =
    error?.message?.includes?.('Failed to fetch dynamically imported module') ||
    error?.message?.includes?.('error loading dynamically imported module') ||
    error?.message?.includes?.('Importing a module script failed');

  useEffect(() => {
    if (isChunkError) {
      const hasReloaded = sessionStorage.getItem('route_chunk_retry');
      if (!hasReloaded) {
        sessionStorage.setItem('route_chunk_retry', 'true');
        window.location.reload();
      }
    }
  }, [isChunkError]);

  if (isChunkError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f3f2e6] px-6 text-center text-[#141820]">
        <h1 className="text-2xl font-bold tracking-tight">Updating application...</h1>
        <p className="max-w-md text-sm text-neutral-600">
          A new version of Dopamint has been deployed. Refreshing to load the latest release.
        </p>
        <button
          onClick={() => {
            sessionStorage.removeItem('route_chunk_retry');
            window.location.reload();
          }}
          className="rounded-xl bg-[#141820] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
        >
          Click to refresh
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f3f2e6] px-6 text-center text-[#141820]">
      <h1 className="text-3xl font-bold tracking-tight">Something went wrong</h1>
      <p className="max-w-md text-sm text-neutral-600">
        {isRouteErrorResponse(error)
          ? `${error.status} ${error.statusText}`
          : error?.message || 'An unexpected error occurred while loading this page.'}
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => window.location.reload()}
          className="rounded-xl border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#141820] transition-colors hover:bg-neutral-100"
        >
          Reload page
        </button>
        <button
          onClick={() => (window.location.href = '/')}
          className="rounded-xl bg-[#141820] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}
