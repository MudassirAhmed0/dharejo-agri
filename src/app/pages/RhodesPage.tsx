import { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { products, processSteps } from '../data/products';
import { ProcessStep } from '../components/ProcessStep';
import { CheckCircle2, ArrowRight, X, Play, Maximize2 } from 'lucide-react';

// Rhodes Grass videos
import rhodesVideo1 from '../../assets/Rhodes Grass/Video1.mp4';
import rhodesVideo2 from '../../assets/Rhodes Grass/Video2.mp4';
import rhodesVideo3 from '../../assets/Rhodes Grass/Video3.mp4';

// Process videos
import sowingVideo from '../../assets/Sowing, Fertiliser and Care.mp4';
import waterVideo from '../../assets/water-arrangement.mp4';
import cuttingVideo from '../../assets/Cutting Process.mp4';
import tedderVideo from '../../assets/Tedder to control moisture.mp4';
import balingVideo from '../../assets/Baling 1/Baling.mp4';
import liningVideo from '../../assets/Lining for the packing.mp4';
import collectionVideo1 from '../../assets/Collection form field/Asset1.mp4';

// Images
import moistureImage from '../../assets/Moisture control.jpeg';
import locationImage from '../../assets/Location.jpeg';

const rhodesVideos = [
  { src: rhodesVideo1, title: 'Rhodes Grass Field Operations' },
  { src: rhodesVideo2, title: 'Growth & Monitoring' },
  { src: rhodesVideo3, title: 'Field Coverage in Sakrand' },
];

const allProcessVideos = [
  { src: sowingVideo, title: 'Sowing, Fertiliser & Care' },
  { src: waterVideo, title: 'Water Arrangement' },
  { src: cuttingVideo, title: 'Cutting Process' },
  { src: tedderVideo, title: 'Tedder to Control Moisture' },
  { src: balingVideo, title: 'Baling Operations' },
  { src: liningVideo, title: 'Lining for Packing' },
  { src: collectionVideo1, title: 'Collection from Field' },
];

export function RhodesPage() {
  const [lightbox, setLightbox] = useState<{ type: 'video' | 'image'; src: string; title?: string } | null>(null);
  const product = products.find((p) => p.id === 'rhodes-grass');

  if (!product) return null;

  return (
    <>
      <SEO
        title="7000 Tons Annual Rhodes Grass Production | Dharejo Agri Sindh"
        description={product.description}
      />

      {/* Hero Section - Video Background */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 z-10" />
        <div className="absolute inset-0 z-0">
          <video
            src={rhodesVideo1}
            className="w-full h-full object-cover opacity-50 grayscale mix-blend-overlay"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

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

      {/* Why Us Section - with real moisture image */}
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

      {/* Quality Assurance Section - video background */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/90 z-10" />
          <video
            src={rhodesVideo3}
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

      {/* Rhodes Grass Video Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Rhodes Grass Operations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch our field operations from sowing to final dispatch across Sakrand and Saleh Pat.
            </p>
          </div>

          {/* Rhodes Grass specific videos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {rhodesVideos.map((vid, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setLightbox({ type: 'video', src: vid.src, title: vid.title })}
                className="relative aspect-video rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 pointer-events-none">
                  <p className="text-white font-bold text-sm">{vid.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Field images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => setLightbox({ type: 'image', src: moistureImage, title: 'Moisture Control Inspection' })}
              className="relative aspect-video rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
            >
              <img src={moistureImage} alt="Moisture Control" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <p className="text-white font-bold text-sm">Moisture Control Inspection</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              onClick={() => setLightbox({ type: 'image', src: locationImage, title: 'Farming Locations — Sakrand & Saleh Pat' })}
              className="relative aspect-video rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
            >
              <img src={locationImage} alt="Field Location" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                <p className="text-white font-bold text-sm">Farming Locations — Sakrand & Saleh Pat</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Supply Capability */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src={rhodesVideo2}
            className="w-full h-full object-cover opacity-15"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

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
              {lightbox.type === 'video' ? (
                <video
                  src={lightbox.src}
                  className="w-full h-full object-contain"
                  autoPlay
                  controls
                  playsInline
                />
              ) : (
                <img
                  src={lightbox.src}
                  alt={lightbox.title || 'Lightbox Image'}
                  className="w-full h-full object-contain"
                />
              )}
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
