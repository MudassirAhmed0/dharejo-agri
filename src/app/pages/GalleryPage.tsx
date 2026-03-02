import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, Play } from 'lucide-react';

// Images
import mustardThumb from '../../assets/Mustard/Thumbnail.jpeg';
import mustardAsset1 from '../../assets/Mustard/Asset1.jpeg';
import mustardAsset2 from '../../assets/Mustard/Asset2.jpeg';
import wheatPrimary from '../../assets/Wheat/Primary.jpeg';
import wheatSecondary from '../../assets/Wheat/Secondary.jpeg';
import datesPrimary from '../../assets/Dates/Primary.jpeg';
import datesSecondary from '../../assets/Dates/Secondary.jpeg';
import moistureControl from '../../assets/Moisture control.jpeg';
import locationImg from '../../assets/Location.jpeg';
import rhodesThumb from '../../assets/rhodes-grass-thumbnail.jpeg';
import vegetablesThumb from '../../assets/vegetables-thumbnail.jpeg';

// Videos
import rhodesVideo1 from '../../assets/Rhodes Grass/Video1.mp4';
import rhodesVideo2 from '../../assets/Rhodes Grass/Video2.mp4';
import rhodesVideo3 from '../../assets/Rhodes Grass/Video3.mp4';
import mustardVideo1 from '../../assets/Mustard/Asset3.mp4';
import mustardVideo2 from '../../assets/Mustard/Asset4.mp4';
import cuttingProcess from '../../assets/Cutting Process.mp4';
import balingVideo from '../../assets/Baling 1/Baling.mp4';
import liningPacking from '../../assets/Lining for the packing.mp4';
import sowingCare from '../../assets/Sowing, Fertiliser and Care.mp4';
import sowingCare2 from '../../assets/Sowing, Fertiliser and Care2.mp4';
import tedderMoisture from '../../assets/Tedder to control moisture.mp4';
import waterArrangement from '../../assets/water-arrangement.mp4';
import collectionField1 from '../../assets/Collection form field/Asset1.mp4';
import collectionField2 from '../../assets/Collection form field/Asset2.mp4';

interface GalleryItem {
  src: string;
  type: 'image' | 'video';
  label: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  // Rhodes Grass
  { src: rhodesThumb, type: 'image', label: 'Rhodes Grass Field', category: 'Rhodes Grass' },
  { src: locationImg, type: 'image', label: 'Farm Location', category: 'Rhodes Grass' },
  { src: moistureControl, type: 'image', label: 'Moisture Control', category: 'Rhodes Grass' },
  { src: rhodesVideo1, type: 'video', label: 'Rhodes Grass — Field Overview', category: 'Rhodes Grass' },
  { src: rhodesVideo2, type: 'video', label: 'Rhodes Grass — Harvesting', category: 'Rhodes Grass' },
  { src: rhodesVideo3, type: 'video', label: 'Rhodes Grass — Processing', category: 'Rhodes Grass' },

  // Mustard
  { src: mustardThumb, type: 'image', label: 'Mustard Thumbnail', category: 'Mustard' },
  { src: mustardAsset1, type: 'image', label: 'Mustard Field', category: 'Mustard' },
  { src: mustardAsset2, type: 'image', label: 'Mustard Crop', category: 'Mustard' },
  { src: mustardVideo1, type: 'video', label: 'Mustard — Field View', category: 'Mustard' },
  { src: mustardVideo2, type: 'video', label: 'Mustard — Growth Stage', category: 'Mustard' },

  // Wheat
  { src: wheatPrimary, type: 'image', label: 'Wheat Field', category: 'Wheat' },
  { src: wheatSecondary, type: 'image', label: 'Wheat Harvest', category: 'Wheat' },

  // Dates
  { src: datesPrimary, type: 'image', label: 'Dates Farm', category: 'Dates' },
  { src: datesSecondary, type: 'image', label: 'Dates Harvest', category: 'Dates' },

  // Mangoes Orchids
  { src: 'https://images.pexels.com/photos/9219974/pexels-photo-9219974.jpeg', type: 'image', label: 'Mango Tree', category: 'Mangoes Orchids' },
  { src: 'https://images.unsplash.com/photo-1629358821360-500f89a5a907?w=800&auto=format&fit=crop&q=80', type: 'image', label: 'Mango Orchard', category: 'Mangoes Orchids' },
  { src: 'https://images.unsplash.com/photo-1653856453410-44220fd90479?w=800&auto=format&fit=crop&q=80', type: 'image', label: 'Mango Harvest', category: 'Mangoes Orchids' },

  // Vegetables
  { src: vegetablesThumb, type: 'image', label: 'Seasonal Vegetables', category: 'Vegetables' },

  // Operations
  { src: cuttingProcess, type: 'video', label: 'Cutting Process', category: 'Operations' },
  { src: balingVideo, type: 'video', label: 'Baling', category: 'Operations' },
  { src: liningPacking, type: 'video', label: 'Lining for Packing', category: 'Operations' },
  { src: sowingCare, type: 'video', label: 'Sowing, Fertiliser & Care', category: 'Operations' },
  { src: sowingCare2, type: 'video', label: 'Sowing & Care — Part 2', category: 'Operations' },
  { src: tedderMoisture, type: 'video', label: 'Tedder — Moisture Control', category: 'Operations' },
  { src: waterArrangement, type: 'video', label: 'Water Arrangement', category: 'Operations' },
  { src: collectionField1, type: 'video', label: 'Collection from Field', category: 'Operations' },
  { src: collectionField2, type: 'video', label: 'Collection from Field — Part 2', category: 'Operations' },
];

const categories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category)))];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <SEO
        title="Gallery | Dharejo Agri"
        description="Browse photos and videos from Dharejo Agri's farming operations — Rhodes Grass, Mustard, Wheat, Dates, and more."
      />

      <div className="min-h-screen pt-24 pb-20">
        {/* Header */}
        <section className="bg-primary text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Gallery</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                A look into our farming operations, fields, and production processes across Sindh.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-background border-b border-border sticky top-[64px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground hover:bg-primary/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all bg-card"
                  onClick={() => setLightbox(item)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    {item.type === 'image' ? (
                      <img
                        src={item.src}
                        alt={item.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <>
                        <video
                          src={item.src}
                          muted
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                            <Play className="w-6 h-6 text-primary ml-1" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-foreground text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full max-h-[85vh]"
              onClick={e => e.stopPropagation()}
            >
              {lightbox.type === 'image' ? (
                <img
                  src={lightbox.src}
                  alt={lightbox.label}
                  className="w-full max-h-[85vh] object-contain rounded-lg"
                />
              ) : (
                <video
                  src={lightbox.src}
                  controls
                  autoPlay
                  className="w-full max-h-[85vh] rounded-lg"
                />
              )}
              <p className="text-white text-center mt-4 text-lg font-semibold">{lightbox.label}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
