import React, { useEffect, Suspense, lazy } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';
import LoadingAnimation from './components/LoadingAnimation';
import { ToastProvider } from './contexts/ToastContext';
import ErrorPage from './pages/ErrorPage';
import { registerServiceWorker } from './serviceWorkerRegistration';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const Services = lazy(() => import('./pages/Services'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/Blog'));
const BlogPostPage = lazy(() => import('./pages/BlogPost'));
const ContactPage = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ToastProvider>
        <Suspense fallback={<LoadingAnimation />}>
          <Navbar />
          <ScrollProgressBar />
          <Outlet />
          <Footer />
        </Suspense>
      </ToastProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/blog/:id",
        element: <BlogPostPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms",
        element: <TermsOfService />,
      }
    ]
  }
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
});

function App() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
      registerServiceWorker();
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;