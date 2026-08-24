import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Top-level crash guard: a runtime error in any section (e.g. WebGL context
 * loss in BurnTransition) must not white-screen the whole app.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Unhandled render error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f3f2e6] px-6 text-center text-[#141820]">
          <h1 className="text-3xl font-bold tracking-tight">Something went wrong</h1>
          <p className="max-w-md text-sm text-neutral-600">
            An unexpected error occurred while rendering the page. Reloading usually fixes it.
          </p>
          {this.state.error && (
            <pre className="max-w-full overflow-auto rounded-lg bg-neutral-900 p-4 text-left text-xs text-neutral-200">
              {this.state.error.message}
            </pre>
          )}
          <button
            onClick={() => window.location.reload()}
            className="rounded-xl bg-[#141820] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
