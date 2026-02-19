import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found - Dharejo Agri" description="The page you are looking for does not exist." />
      <div className="min-h-screen pt-24 flex items-center justify-center bg-background px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h1 className="text-9xl font-bold text-primary/10 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-primary mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </>
  );
}
