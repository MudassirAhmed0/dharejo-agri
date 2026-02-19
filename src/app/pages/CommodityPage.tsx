import { useParams, Navigate } from 'react-router-dom';
import { products } from '../data/products';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function CommodityPage() {
  const { productId } = useParams();
  const product = products.find(p => p.link === `/${productId}`);

  if (!product || productId === 'rhodes-grass') {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SEO 
        title={`${product.title} - Dharejo Agri`} 
        description={product.description} 
      />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 z-10" />
        {/* Hero Image Logic */}
        {(() => {
           let heroImg = "https://images.unsplash.com/photo-1625246333195-bf79134a95a2?q=80&w=2000&auto=format&fit=crop";
           if (product.id === 'mustard') heroImg = "https://images.unsplash.com/photo-1503762687835-129979a675fe?q=80&w=2000&auto=format&fit=crop";
           if (product.id === 'wheat') heroImg = "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2000&auto=format&fit=crop";
           if (product.id === 'vegetables') heroImg = "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=2000&auto=format&fit=crop";
           if (product.id === 'dates') heroImg = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2000&auto=format&fit=crop";
           
           return (
             <div 
               className="absolute inset-0 bg-cover bg-center opacity-40 grayscale mix-blend-overlay" 
               style={{ backgroundImage: `url('${heroImg}')` }}
             />
           );
        })()}
        
        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {product.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            {product.description}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8">{product.detailedContent.heading}</h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                {product.detailedContent.body.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border"
            >
              <h3 className="text-xl font-bold text-primary mb-6">Key Highlights</h3>
              <ul className="space-y-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 bg-muted/50 rounded-xl border border-border">
                <h4 className="font-semibold text-primary mb-2">Interested in Bulk Supply?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  We supply {product.title} to local markets and regional partners.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block w-full text-center bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Contact for Rates
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
