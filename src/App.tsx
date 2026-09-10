import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { HomePage } from '@/pages/home/HomePage';
import { ErrorBoundary } from '@/ErrorBoundary';
import { RouteErrorBoundary } from '@/RouteErrorBoundary';
import { lazyWithRetry } from '@/lib/lazyWithRetry';

const NotFoundPage = lazyWithRetry(() => import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));
const WaitlistPage = lazyWithRetry(() => import('@/pages/waitlist/WaitlistPage').then((m) => ({ default: m.WaitlistPage })));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'waitlist',
        element: <WaitlistPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;



