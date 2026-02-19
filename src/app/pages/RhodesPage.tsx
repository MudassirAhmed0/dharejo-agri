import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { products, processSteps } from '../data/products';
import { ProcessStep } from '../components/ProcessStep';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Gallery } from '../components/Gallery';
import moistureImage from '../../assets/Moisture control.jpeg';
import qualityVideo from '../../assets/Quality.mp4';

export function RhodesPage() {
  const product = products.find(p => p.id === 'rhodes-grass');

  if (!product) return null;

  return (
    <>
      <SEO 
        title="7000 Tons Annual Rhodes Grass Production | Dharejo Agri Sindh" 
        description={product.description} 
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 z-10" />
        {/* Using a video background here too? Or keep static image for variety? 
            Let's keep the high quality image feel for the inner page header content, 
            maybe we can use another video if available, like 'Baleing.mp4' as it's the end product.
            But the user asked used *assets* efficiently. Let's use 'Baleing.mp4' here as well, different crop. 
            Or stick to the unsplash one for now to avoid reusing the same video too much if we don't have enough B-roll.
            Actually we have plenty videos. Let's use 'Baleing.mp4' for the header.
        */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale" />

        <div className="relative z-20 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Rhodes Grass Production in Sakrand & Saleh Pat
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              7000 Tons Annual Production | Export Ready Supply
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#process" 
                className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-accent hover:text-white transition-all"
              >
                View Production Process
              </a>
              <a 
                href="/contact" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary transition-all"
              >
                Bulk Inquiry
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Why Our Rhodes Grass Stands Out</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Rhodes Grass quality depends on timing, moisture control, and field management. 
                We operate across Sakrand and Saleh Pat with large scale field coverage to ensure consistent output.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Proper land leveling before sowing',
                  'Planned irrigation cycles',
                  'Selected seed quality',
                  'Harvesting at correct maturity stage',
                  'Natural field drying',
                  'Moisture level inspection before baling'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src={moistureImage} 
                alt="Moisture Control at Dharejo Agri" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-lg">Moisture Control</p>
                  <p className="text-sm opacity-90">We ensure optimal moisture levels before baling.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section id="process" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Production Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From soil preparation to final dispatch, every stage is managed under our supervision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <ProcessStep 
                key={step.step}
                {...step}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/90 z-10" />
          <video 
            src={qualityVideo}
            className="w-full h-full object-cover opacity-50 grayscale mix-blend-overlay"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Uncompromising Quality Standards</h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Our rigorous quality control process ensures every bale meets export specifications. 
              From field to container, we maintain traceability and consistent standards.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h4 className="font-bold text-lg mb-2 text-accent">Moisture Verified</h4>
                <p className="text-sm opacity-80">Every lot is tested for optimal moisture content to prevent spoilage.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <h4 className="font-bold text-lg mb-2 text-accent">Dense Baling</h4>
                <p className="text-sm opacity-80">High-density double-compressed bales for efficient shipping.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Gallery />

      {/* Supply Capability */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-8">Supply Capability</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
            With 7000 tons annual Rhodes Grass production, Dharejo Agri supports dairy farms, livestock traders, and export shipments with consistent quality and reliable volume.
          </p>

          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all"
          >
            Request a Quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </>
  );
}
