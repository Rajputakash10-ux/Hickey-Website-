import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ExperiencePage from './pages/ExperiencePage';
import JournalPage from './pages/JournalPage';
import AboutPage from './pages/AboutPage';
import { useCart } from './hooks/useCart';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppContent() {
  const cart = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartCount={cart.totalItems} onCartOpen={() => cart.setIsOpen(true)} />

      <Routes>
        <Route path="/" element={<HomePage onAddToCart={cart.addItem} onCartOpen={() => cart.setIsOpen(true)} />} />
        <Route path="/shop" element={<ShopPage onAddToCart={cart.addItem} />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />

      <CartDrawer
        isOpen={cart.isOpen}
        onClose={() => cart.setIsOpen(false)}
        items={cart.items}
        subtotal={cart.subtotal}
        onUpdateQuantity={cart.updateQuantity}
        onRemove={cart.removeItem}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}
