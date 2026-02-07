import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Back to Home
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
