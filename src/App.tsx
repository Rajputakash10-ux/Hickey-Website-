import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import { useCart } from './hooks/useCart';
import { useShopifyProducts } from './hooks/useShopifyProducts';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppContent() {
  const cart = useCart();
  const { products, featured, loading } = useShopifyProducts();

  return (
    <div className="flex flex-col min-h-screen" style={{ overflowX: 'hidden' }}>
      <AnnouncementBar />
      <Navbar cartCount={cart.totalItems} onCartOpen={() => cart.setIsOpen(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              featured={featured}
              products={products}
              loading={loading}
              onAddToCart={cart.addItem}
              onCartOpen={() => cart.setIsOpen(true)}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <ShopPage
              products={products}
              loading={loading}
              onAddToCart={cart.addItem}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
        {/* Redirect /product to /shop */}
        <Route path="/product" element={<ShopPage products={products} loading={loading} onAddToCart={cart.addItem} />} />
      </Routes>

      <Footer />

      <CartDrawer
        isOpen={cart.isOpen}
        onClose={() => cart.setIsOpen(false)}
        items={cart.items}
        subtotal={cart.subtotal}
        onUpdateQuantity={cart.updateQuantity}
        onRemove={cart.removeItem}
        checkoutUrl={cart.checkoutUrl}
        checkoutLoading={cart.checkoutLoading}
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
