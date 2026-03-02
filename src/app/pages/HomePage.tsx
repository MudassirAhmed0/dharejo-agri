import { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { StatCard } from '../components/StatCard';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle2, Beef, HeartPulse, Wheat, Home, X, Play } from 'lucide-react';
import { products } from '../data/products';

// Process videos for Full Production Cycle
import sowingVideo from '../../assets/Sowing, Fertiliser and Care.mp4';
import waterVideo from '../../assets/water-arrangement.mp4';
import cuttingVideo from '../../assets/Cutting Process.mp4';
import tedderVideo from '../../assets/Tedder to control moisture.mp4';
import balingVideo from '../../assets/Baling 1/Baling.mp4';
import liningVideo from '../../assets/Lining for the packing.mp4';
import collectionVideo1 from '../../assets/Collection form field/Asset1.mp4';
import collectionVideo2 from '../../assets/Collection form field/Asset2.mp4';

const productionCycle = [
  { src: sowingVideo, title: 'Sowing, Fertiliser & Care' },
  { src: waterVideo, title: 'Water Arrangement' },
  { src: cuttingVideo, title: 'Cutting Process' },
  { src: tedderVideo, title: 'Tedder — Moisture Control' },
  { src: balingVideo, title: 'Baling Operations' },
  { src: liningVideo, title: 'Lining for Packing' },
  { src: collectionVideo1, title: 'Collection from Field' },
  { src: collectionVideo2, title: 'Loading & Dispatch' },
];

export function HomePage() {
  const [lightbox, setLightbox] = useState<{ type: 'video'; src: string; title?: string } | null>(null);

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
            src={cuttingVideo}
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
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
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

      {/* CATTLE FARM SECTION */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[480px]">
                <img
                  src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=1200&auto=format&fit=crop"
                  alt="Cattle grazing at Dharejo Agri farm"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white font-bold text-lg">Supervised Livestock Care</p>
                  <p className="text-white/80 text-sm">Proper feeding, clean housing & regular monitoring</p>
                </div>
              </div>

              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-border hidden md:flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Wheat className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Rhodes Grass Fed</p>
                  <p className="text-xs text-muted-foreground">Own production for livestock</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">Livestock Operations</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Cattle Farm</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Alongside crop production, Dharejo Agri & Cattle Farms also manages a dedicated cattle farm operation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our cattle are raised under supervised care with proper feeding management, clean housing conditions, and regular monitoring. A portion of our own Rhodes Grass production supports livestock nutrition, ensuring consistent feed quality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                The cattle farm strengthens our agricultural cycle by connecting feed production with livestock management under one system.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: HeartPulse, label: 'Supervised Care', desc: 'Regular health monitoring' },
                  { icon: Home, label: 'Clean Housing', desc: 'Maintained shelters' },
                  { icon: Beef, label: 'Proper Feeding', desc: 'Rhodes Grass nutrition' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white p-4 rounded-xl border border-border shadow-sm text-center"
                  >
                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm font-bold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
                    {product.thumbnailVideo ? (
                      <video
                        src={product.thumbnailVideo}
                        poster={product.thumbnail}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                      />
                    ) : (
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
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

      {/* FULL PRODUCTION CYCLE */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">From Field to Dispatch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">Full Production Cycle</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch every stage of our Rhodes Grass production — from sowing to final loading. Hover to preview.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {productionCycle.map((vid, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setLightbox({ type: 'video', src: vid.src, title: vid.title })}
                className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
              >
                <video
                  src={vid.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <Play className="w-5 h-5 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3 pointer-events-none">
                  <p className="text-white font-bold text-xs">{vid.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/rhodes-grass"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-accent transition-all"
            >
              View Full Rhodes Grass Page <ArrowRight className="w-5 h-5" />
            </Link>
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
              href="mailto:dharejoagri@gmail.com" 
              className="px-8 py-4 bg-white border border-border text-foreground font-bold rounded-lg hover:bg-muted transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 p-2 rounded-full"
              onClick={() => setLightbox(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={lightbox.src}
                className="w-full h-full object-contain"
                autoPlay
                controls
                playsInline
              />
              {lightbox.title && (
                <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent">
                  <h3 className="text-white font-bold">{lightbox.title}</h3>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}