import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AwardsPage from './pages/AwardsPage';
import GrantedIPPage from './pages/GrantedIPPage';
import MediaPage from './pages/MediaPage';
import AvenuesPage from './pages/AvenuesPage';
import EventsPage from './pages/EventsPage';
import ProstheticHandPage from './pages/ProstheticHandPage';

// ScrollToTop component to handle scroll reset on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="font-sans antialiased text-gray-900 bg-white relative">
        <div className="relative">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/awards" element={<AwardsPage />} />
              <Route path="/granted-ips" element={<GrantedIPPage />} />
              <Route path="/media-coverage" element={<MediaPage />} />
              <Route path="/avenues" element={<AvenuesPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/prosthetic-hand" element={<ProstheticHandPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
