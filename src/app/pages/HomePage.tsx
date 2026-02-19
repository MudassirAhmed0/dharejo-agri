import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { StatCard } from '../components/StatCard';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { products } from '../data/products';
// Importing a hero video - choosing one that looks good as a background
import heroVideo from '../../assets/Cutting Process.mp4'; 

export function HomePage() {
  return (
    <>
      <SEO 
        title="Rhodes Grass Producers in Sindh | Dharejo Agri Sakrand & Saleh Pat" 
        description="Dharejo Agri produces 7000 tons of Rhodes Grass annually in Sakrand and Saleh Pat, Sindh. Supplier of Mustard, Wheat, Vegetables, and Dates farm at Khairpur." 
      />

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-primary">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60 z-10" />
          <video 
            src={heroVideo}
            className="w-full h-full object-cover opacity-60 grayscale mix-blend-overlay"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-accent border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm">
              PREMIUM AGRI SOLUTIONS
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Leading Rhodes Grass <br/> Producers in Sindh
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl font-light">
              7000 Tons Annual Production | Sakrand & Saleh Pat | Export Ready Supply
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all text-center"
              >
                Request Supply
              </Link>
              <Link 
                to="/rhodes-grass" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all text-center"
              >
                View Production
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT / STATS SECTION */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">About Dharejo Agri</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Experienced Producers, Consistent Supply.</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Dharejo Agri operates across fertile agricultural zones in Sakrand and Saleh Pat, where climate and soil conditions support strong crop growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                From soil preparation to final dispatch, every stage is managed under our supervision to ensure quality, consistency, and reliable year-round supply.
              </p>
              
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                <h4 className="font-bold text-primary mb-3">Core Strengths</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    '7000+ tons annual production',
                    'Farming in Sakrand & Saleh Pat',
                    'Dedicated Dates farm (Khairpur)',
                    'Modern field monitoring'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-accent" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              <StatCard 
                label="Annual Production" 
                value="7000+" 
                subtext="Tons of Rhodes Grass" 
                icon="chart"
                delay={0.1}
              />
              <StatCard 
                label="Locations" 
                value="3" 
                subtext="Sakrand, Saleh Pat, Khairpur" 
                icon="location"
                delay={0.2}
              />
              <StatCard 
                label="Quality" 
                value="100%" 
                subtext="Export Ready Standards" 
                icon="award"
                delay={0.3}
              />
              <div className="bg-primary p-6 rounded-xl flex items-center justify-center text-center">
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">Ready for Export</h4>
                  <p className="text-white/80 text-sm mb-4">Contact us for bulk orders</p>
                  <Link to="/contact" className="text-accent hover:text-white font-bold flex items-center justify-center gap-1 transition-colors">
                    Get in touch <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SHOWCASE */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Agricultural Portfolio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond Rhodes Grass, we cultivate a diverse range of crops to support local and regional food security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => {
              // Image Mapping
              let bgImage = "https://images.unsplash.com/photo-1625246333195-bf79134a95a2?q=80&w=800";
              if (product.id === 'rhodes-grass') bgImage = "https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?q=80&w=800";
              if (product.id === 'mustard') bgImage = "https://images.unsplash.com/photo-1503762687835-129979a675fe?q=80&w=800";
              if (product.id === 'wheat') bgImage = "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800";
              if (product.id === 'vegetables') bgImage = "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=800";
              if (product.id === 'dates') bgImage = "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800";

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-border flex flex-col h-full"
                >
                  <div className="h-56 relative overflow-hidden bg-gray-100">
                    <img 
                      src={bgImage} 
                      alt={product.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{product.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                      {product.description}
                    </p>
                    <Link 
                      to={product.link}
                      className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors mt-auto"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOCATIONS MAP SECTION */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Farming Locations</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Sakrand</h3>
              <p className="text-white/70">Main Rhodes Grass production fields with modern irrigation infrastructure.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Saleh Pat</h3>
              <p className="text-white/70">Expanded agricultural land utilizing crop rotation for Wheat and Mustard.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Khairpur</h3>
              <p className="text-white/70">Dedicated Dates farm under structured supervision and care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Need Bulk Agricultural Supply?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Contact Dharejo Agri today for reliable Rhodes Grass, Wheat, or Dates supply from Sindh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
            >
              Contact Us Now
            </Link>
            <a 
              href="mailto:info@dharejoagri.com" 
              className="px-8 py-4 bg-white border border-border text-foreground font-bold rounded-lg hover:bg-muted transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}