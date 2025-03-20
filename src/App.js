import React, { useEffect, Suspense, lazy } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgressBar from './components/ScrollProgressBar';
import ChatWidget from './components/ChatWidget';
import LoadingAnimation from './components/LoadingAnimation';
import { ToastProvider } from './contexts/ToastContext';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorPage from './pages/ErrorPage';

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

function Layout() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
    
    const refreshAOS = () => {
      AOS.refresh();
    };
    
    window.addEventListener('resize', refreshAOS);
    return () => {
      window.removeEventListener('resize', refreshAOS);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
      <ChatWidget />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <ToastProvider>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <LoadingAnimation size="large" text="Loading Prince AI Automation..." />
            </div>
          }>
            <ScrollToTop />
            <ScrollProgressBar />
            <Layout />
          </Suspense>
        </ToastProvider>
      </ErrorBoundary>
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
  basename: "/Prince-Ai-Automation",
  future: {
    v7_startTransition: true
  }
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;