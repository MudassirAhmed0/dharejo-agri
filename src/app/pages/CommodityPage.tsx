import { useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X, Play, Maximize2 } from 'lucide-react';

export function CommodityPage() {
  const { productId } = useParams();
  const [lightbox, setLightbox] = useState<{ type: 'video' | 'image'; src: string; title?: string } | null>(null);
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
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 grayscale mix-blend-overlay"
          style={{ backgroundImage: `url('${product.heroImage}')` }}
        />

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

      {/* Gallery Section */}
      {product.galleryImages.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">From Our Fields</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real images from our {product.title.toLowerCase()} operations in Sakrand, Saleh Pat, and Khairpur.
              </p>
            </div>

            <div className={`grid gap-6 ${(product.galleryImages.length + (product.galleryVideos?.length || 0)) === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : (product.galleryImages.length + (product.galleryVideos?.length || 0)) === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
              
              {/* Render Videos First */}
              {product.galleryVideos && product.galleryVideos.map((vid, idx) => (
                <motion.div
                  key={`vid-${idx}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setLightbox({ type: 'video', src: vid, title: `${product.title} - Video ${idx + 1}` })}
                  className="relative aspect-video rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                >
                  <video
                    src={vid}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-white ml-1" />
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Render Images */}
              {product.galleryImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setLightbox({ type: 'image', src: img, title: `${product.title} - Image ${idx + 1}` })}
                  className="relative aspect-video rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                >
                  <img
                    src={img}
                    alt={`${product.title} - Image ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Maximize2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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
