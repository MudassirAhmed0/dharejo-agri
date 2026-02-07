import { motion } from 'motion/react';
import { useState } from 'react';
import { X, Play } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function GalleryPage() {
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video', src: string, title: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'fields', label: 'Fields' },
    { id: 'harvesting', label: 'Harvesting' },
    { id: 'baling', label: 'Baling' },
    { id: 'storage', label: 'Storage' },
    { id: 'loading', label: 'Loading' }
  ];

  const media: { type: 'image' | 'video'; src: string; title: string; category: string }[] = [
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1630936583832-79091f5945de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaG9kZXMlMjBncmFzcyUyMGZpZWxkJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzcwNDE0NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Rhodes Grass Field',
      category: 'fields'
    },
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1630600967074-3095a8865ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZhcm1pbmclMjBmaWVsZHxlbnwxfHx8fDE3NzA0MTQ1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Lush Green Fields',
      category: 'fields'
    },
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1768984418592-5b54e4fe7af5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBpcnJpZ2F0aW9uJTIwZmllbGR8ZW58MXx8fHwxNzcwNDE0NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Irrigation System',
      category: 'fields'
    },
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1655666614319-3918eba90451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFjdG9yJTIwaGFydmVzdGluZyUyMHdoZWF0fGVufDF8fHx8MTc3MDQxNDU3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Harvesting Operations',
      category: 'harvesting'
    },
    // {
    //   type: 'video' as const,
    //   src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    //   title: 'Harvesting Process',
    //   category: 'harvesting'
    // },
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1659262673818-d7b419542d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXklMjBiYWxpbmclMjBmYXJtaW5nfGVufDF8fHx8MTc3MDQxNDU3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Hay Baling',
      category: 'baling'
    },
    // {
    //   type: 'video' as const,
    //   src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    //   title: 'Baling Process',
    //   category: 'baling'
    // },
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1748769594002-3c12522803e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXklMjBzdG9yYWdlJTIwYmFybnxlbnwxfHx8fDE3NzA0MTQ1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Storage Facility',
      category: 'storage'
    },
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1739433108012-ebec4d134964?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwbGFuZHNjYXBlJTIwcGFraXN0YW58ZW58MXx8fHwxNzcwNDE0NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Farm Landscape',
      category: 'fields'
    },
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1762232621865-6353bef72f54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBsb2FkaW5nJTIwdHJ1Y2t8ZW58MXx8fHwxNzcwNDE0NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Loading Operations',
      category: 'loading'
    },
    // {
    //   type: 'video' as const,
    //   src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    //   title: 'Loading & Dispatch',
    //   category: 'loading'
    // },
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1658881070511-c5aa3a883a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjBmYXJtJTIwbGl2ZXN0b2NrfGVufDF8fHx8MTc3MDQxNDU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Cattle Farm',
      category: 'fields'
    },
    {
      type: 'image' as const,
      src: 'https://images.unsplash.com/photo-1677126577258-1a82fdf1a976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFncmljdWx0dXJlJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NzA0MTQ1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Drone Monitoring',
      category: 'fields'
    }
  ];

  const filteredMedia = activeCategory === 'all' 
    ? media 
    : media.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Explore our operations from field to delivery through images and videos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background sticky top-20 z-40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onClick={() => setSelectedMedia(item)}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all aspect-video bg-muted"
              >
                {item.type === 'image' ? (
                  <ImageWithFallback
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/10">
                    <Play className="w-16 h-16 text-primary" />
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6 text-white w-full">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    {item.type === 'video' && (
                      <p className="text-sm text-white/80 mt-1">Click to play video</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.title}
                className="w-full h-auto rounded-lg"
              />
            ) : (
              <div className="aspect-video">
                <iframe
                  src={selectedMedia.src}
                  title={selectedMedia.title}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            <h3 className="text-white text-2xl font-semibold mt-4 text-center">
              {selectedMedia.title}
            </h3>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
