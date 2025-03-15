import React, { useEffect, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgressBar from './components/ScrollProgressBar';
import BackToTop from './components/BackToTop';
import ChatWidget from './components/ChatWidget';
import LoadingAnimation from './components/LoadingAnimation';
import { ToastProvider } from './contexts/ToastContext';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
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
    <ErrorBoundary>
      <ToastProvider>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><LoadingAnimation /></div>}>
          <ScrollToTop />
          <ScrollProgressBar />
          <div className="min-h-screen">
            <Navbar />
            <Outlet />
            <Footer />
            <BackToTop />
            <ChatWidget />
          </div>
        </Suspense>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;