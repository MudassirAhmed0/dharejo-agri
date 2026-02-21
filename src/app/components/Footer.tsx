import { Link } from 'react-router-dom';
import { MapPin, Mail, Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import logoWhite from '../../assets/logo-white.png';
import { products } from '../data/products';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <img
              src={logoWhite}
              alt="Dharejo Agri"
              className="h-16 w-auto"
            />
            <p className="text-primary-foreground/80 leading-relaxed text-sm">
              Dharejo Agri stands for agricultural strength built on experience and disciplined field control. 
              We are leading producers of Rhodes Grass, specializing in large scale cultivated supply.
            </p>
             
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-white transition-colors hover:translate-x-1 inline-block">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-white transition-colors hover:translate-x-1 inline-block">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-white transition-colors hover:translate-x-1 inline-block">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-primary-foreground/70 hover:text-white transition-colors hover:translate-x-1 inline-block">Privacy Policy</Link>
              </li>
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-accent">Our Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.link}>
                  <Link 
                    to={product.link}
                    className="text-primary-foreground/70 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-accent">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div className="text-sm text-primary-foreground/80">
                  <p className="font-semibold text-white">Sakrand & Saleh Pat</p>
                  <p>Main Production Fields</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div className="text-sm text-primary-foreground/80">
                  <p className="font-semibold text-white">Khairpur</p>
                  <p>Dates Farm</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@dharejoagri.com" className="text-sm text-primary-foreground/80 hover:text-white break-all">
                  info@dharejoagri.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} Dharejo Agri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}