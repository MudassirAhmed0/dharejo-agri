import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import logoWhite from '../../assets/logo-white.png';
import { products } from '../data/products';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);

  // Pages where the navbar should be transparent at the top (Dark Hero Backgrounds)
  // Home, Rhodes Grass, and individual Product pages
  const isTransparentPage =
    location.pathname === '/' ||
    location.pathname === '/rhodes-grass' ||
    location.pathname === '/cattle-farm' ||
    products.some(p => p.link === location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we should show the "Scrolled" style (Navy Text / White BG)
  // This happens if:
  // 1. User has scrolled down
  // 2. OR user is on a "Light Page" (Contact, Terms, Privacy, 404)
  const showScrolledStyle = scrolled || !isTransparentPage;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showScrolledStyle ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group relative z-50">
            <div className="p-2 rounded-lg transition-colors">
              <img
                src={showScrolledStyle ? logo : logoWhite}
                alt="Dharejo Agri"
                className="h-10 w-auto md:h-12"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
                showScrolledStyle ? 'text-primary' : 'text-white'
              } hover:text-accent`}
            >
              HOME
            </Link>

            <Link
              to="/rhodes-grass"
              className={`px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
                showScrolledStyle ? 'text-primary' : 'text-white'
              } hover:text-accent`}
            >
              RHODES GRASS
            </Link>

            <Link
              to="/cattle-farm"
              className={`px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
                showScrolledStyle ? 'text-primary' : 'text-white'
              } hover:text-accent`}
            >
              CATTLE FARM
            </Link>

            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setProductMenuOpen(true)}
              onMouseLeave={() => setProductMenuOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
                  showScrolledStyle || productMenuOpen ? 'text-primary' : 'text-white'
                } hover:text-accent`}
              >
                PRODUCTS <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {productMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-56 pt-2"
                  >
                    <div className="bg-white rounded-lg shadow-xl border border-border overflow-hidden">
                      {products.filter(p => p.id !== 'rhodes-grass').map((product) => (
                        <Link
                          key={product.link}
                          to={product.link}
                          className="block px-4 py-3 text-sm text-primary hover:bg-muted hover:text-accent transition-colors"
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className={`ml-4 px-6 py-2.5 text-sm font-bold tracking-wide rounded-full transition-all ${
                showScrolledStyle 
                  ? 'bg-primary text-white hover:bg-accent' 
                  : 'bg-white text-primary hover:bg-accent hover:text-white'
              }`}
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden relative z-50 p-2 rounded-lg transition-colors ${
              mobileMenuOpen ? 'text-white hover:bg-white/20' : showScrolledStyle ? 'text-primary hover:bg-muted' : 'text-white hover:bg-white/20'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-0 bg-primary z-40 pt-24 px-6 overflow-y-auto"
            >
              <div className="flex flex-col space-y-3">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-white border-b border-white/10 pb-3"
                >
                  Home
                </Link>
                <Link
                  to="/rhodes-grass"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-white border-b border-white/10 pb-3"
                >
                  Rhodes Grass
                </Link>
                <Link
                  to="/cattle-farm"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-white border-b border-white/10 pb-3"
                >
                  Cattle Farm
                </Link>

                <div className="py-2">
                  <p className="text-xs font-semibold text-white/50 mb-2 uppercase tracking-widest">Other Products</p>
                  {products.filter(p => p.id !== 'rhodes-grass').map((product) => (
                    <Link
                      key={product.link}
                      to={product.link}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2.5 text-sm font-medium text-white/90 hover:text-accent transition-colors"
                    >
                      {product.title}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-6 py-3 text-center text-sm font-bold bg-accent text-white rounded-lg"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}