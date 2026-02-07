import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'primary' | 'secondary';
}

export function CTABanner({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  variant = 'primary'
}: CTABannerProps) {
  const bgClass = variant === 'primary' 
    ? 'bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground' 
    : 'bg-gradient-to-r from-secondary via-secondary/90 to-secondary text-secondary-foreground';

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl opacity-95 mb-8 leading-relaxed">
            {description}
          </p>
          <Link
            to={buttonLink}
            className={`inline-flex items-center gap-2 ${
              variant === 'primary' 
                ? 'bg-white hover:bg-white/95 text-primary shadow-lg' 
                : 'bg-white hover:bg-white/95 text-secondary shadow-lg'
            } px-10 py-4 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-2xl`}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}