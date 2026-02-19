import { motion } from 'motion/react';
import img1 from '../../assets/WhatsApp Image 2026-02-17 at 17.28.13.jpeg';
import img2 from '../../assets/WhatsApp Image 2026-02-17 at 17.28.32.jpeg';
import img3 from '../../assets/WhatsApp Image 2026-02-17 at 17.28.42.jpeg';
import img4 from '../../assets/WhatsApp Image 2026-02-17 at 17.28.46.jpeg';
import img5 from '../../assets/WhatsApp Image 2026-02-17 at 17.28.56.jpeg';
import img6 from '../../assets/WhatsApp Image 2026-02-17 at 17.29.00.jpeg';
import img7 from '../../assets/WhatsApp Image 2026-02-17 at 17.29.03.jpeg';
import img8 from '../../assets/WhatsApp Image 2026-02-17 at 17.29.04.jpeg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

export function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Field Operations Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our daily operations, monitoring, and field conditions in Sakrand and Saleh Pat.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Field Operation ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
