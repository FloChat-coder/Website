import { Suspense, lazy } from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import paths from './paths';
import MainLayout from 'layouts/main-layout';
import Splash from 'components/loading/Splash';
import PageLoader from 'components/loading/PageLoader';

const App = lazy(() => import('App'));
const Dashboard = lazy(() => import('pages/dashboard'));

// Internal App Pages
const GoogleSheets = lazy(() => import('pages/integrations/GoogleSheets'));
const AiSettings = lazy(() => import('pages/ai-configuration/AiSettings'));

const router = createBrowserRouter(
  [
    {
      element: (
        <Suspense fallback={<Splash />}>
          <App />
        </Suspense>
      ),
      children: [
        {
          path: '/',
          element: (
            <MainLayout>
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            </MainLayout>
          ),
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
            {
              path: paths.integrations.googleSheets,
              element: <GoogleSheets />,
            },
            {
              path: paths.ai.prompt,
              element: <AiSettings />,
            },
            {
              path: paths.ai.apiKeys,
              element: <AiSettings />, 
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <Dashboard />, 
    },
  ],
  {
    basename: '/', 
  },
);

export default router;