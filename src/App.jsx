import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load all pages — only downloaded when visited
const Home = lazy(() => import('./pages/Home'));
const Biography = lazy(() => import('./pages/Biography'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const ElectionsPage = lazy(() => import('./pages/ElectionsPage'));
const ParliamentPage = lazy(() => import('./pages/ParliamentPage'));
const Contact = lazy(() => import('./pages/Contact'));
const BodoPeaceProcess = lazy(() => import('./pages/BodoPeaceProcess'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));

// Minimal loading spinner
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-primary-orange border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Disable default browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Immediate scroll
    window.scrollTo(0, 0);
    
    // Robustness: ensure scroll happens after layout
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 0);
    
    return () => clearTimeout(timeoutId);
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTop />
          <Header />
          <main className="pt-20">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Biography />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:projectId" element={<ProjectDetail />} />
                <Route path="/elections" element={<ElectionsPage />} />
                <Route path="/parliament" element={<ParliamentPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/bodo-peace-accord" element={<BodoPeaceProcess />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
