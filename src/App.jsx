import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Marketplace from './pages/Marketplace';
import AIRecommendations from './pages/AIRecommendations';
import PrototypeMachine from './pages/PrototypeMachine';
import Signup from './pages/Signup';
import FarmerDashboard from './pages/FarmerDashboard';
import AdminPanel from './pages/AdminPanel';
export function App() {
  return <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-neutral-light">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/ai-recommendations" element={<AIRecommendations />} />
            <Route path="/prototype-machine" element={<PrototypeMachine />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>;
}