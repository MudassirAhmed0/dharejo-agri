import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1654906105615-a3fde4528ab3?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1630936583832-79091f5945de?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1630600967074-3095a8865ca3?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1659262673818-d7b419542d16?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1655666614319-3918eba90451?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1739433108012-ebec4d134964?w=800&auto=format&fit=crop&q=60",
];

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
