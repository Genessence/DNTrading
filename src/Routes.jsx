import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import LandingPage from './pages/landing-page';
import ProductsPage from './pages/ProductsPage';
import BiodegradablePackaging from 'pages/products/BiodegradablePackaging';
import BubbleBags from 'pages/products/BubbleBags';
import StretchFilm from 'pages/products/StretchFilm';
import LDPEPouches from 'pages/products/LDPEPouches';
import PPStrip from 'pages/products/PPStrip';
import PETStrip from 'pages/products/PETStrip';
import SandingBelts from 'pages/products/SandingBelts';
import EmeryBelts from 'pages/products/EmeryBelts';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/biodegradable-packaging" element={<BiodegradablePackaging />} />
        <Route path="/products/bubble-bags" element={<BubbleBags />} />
        <Route path="/products/stretch-film" element={<StretchFilm />} />
        <Route path="/products/ldpe-pouches" element={<LDPEPouches />} />
        <Route path="/products/pp-strip" element={<PPStrip />} />
        <Route path="/products/pet-strip" element={<PETStrip />} />
        <Route path="/products/sanding-belts" element={<SandingBelts />} />
        <Route path="/products/emery-belts" element={<EmeryBelts />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
