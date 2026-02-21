import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, HeartPulse, Home, Beef, Wheat, Eye, Repeat } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=800&auto=format&fit=crop",
    alt: "Cattle grazing in open field"
  },
  {
    src: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=800&auto=format&fit=crop",
    alt: "Livestock housing and shelter"
  },
  {
    src: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=800&auto=format&fit=crop",
    alt: "Cattle feeding on grass"
  },
  {
    src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=800&auto=format&fit=crop",
    alt: "Cattle barn and feeding area"
  },
];

export function CattleFarmPage() {
  return (
    <>
      <SEO
        title="Cattle Farm Operations | Dharejo Agri & Cattle Farms"
        description="Dharejo Agri operates a managed cattle farm in Sakrand and Saleh Pat with supervised care, clean housing, and Rhodes Grass-based nutrition."
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 grayscale mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2000&auto=format&fit=crop')" }}
        />

        <div className="relative z-20 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-accent border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm">
              LIVESTOCK OPERATIONS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Cattle Farm Operations
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-3xl mx-auto">
              Managed livestock care integrated with our Rhodes Grass production system
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all"
              >
                Get in Touch
              </Link>
              <Link
                to="/rhodes-grass"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all"
              >
                View Rhodes Grass
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">About Our Cattle Farm</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Structured Livestock Management</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Dharejo Agri & Cattle Farms operates a managed cattle farm alongside its agricultural production in Sakrand and Saleh Pat.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The integration of Rhodes Grass production with cattle management allows better feed control and stable livestock care.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our cattle farm reflects the same structured approach we apply in crop production — discipline, observation, and consistency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=1200&auto=format&fit=crop"
                alt="Cattle at Dharejo Agri farm"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-lg">Supervised Daily Care</p>
                  <p className="text-sm opacity-90">Clean conditions & regular health monitoring</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Focus Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every aspect of our cattle operation is managed with the same discipline we bring to our crop production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Beef,
                title: 'Proper Feeding Management',
                description: 'Structured feeding schedules with balanced nutrition to maintain cattle health and growth consistency.'
              },
              {
                icon: Home,
                title: 'Clean & Organized Housing',
                description: 'Well-maintained livestock shelters with regular cleaning and proper ventilation for animal comfort.'
              },
              {
                icon: Wheat,
                title: 'Rhodes Grass Nutrition',
                description: 'A portion of our own Rhodes Grass production supports livestock feeding, ensuring consistent and quality nutrition.'
              },
              {
                icon: Eye,
                title: 'Routine Monitoring',
                description: 'Regular health checks and daily supervision to ensure early detection and prevention of issues.'
              },
              {
                icon: HeartPulse,
                title: 'Supervised Care',
                description: 'Dedicated personnel overseeing cattle well-being, feeding routines, and housing conditions around the clock.'
              },
              {
                icon: Repeat,
                title: 'Integrated Agri-Cycle',
                description: 'Feed production and livestock management connected under one system for better control and efficiency.'
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Strip */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Farm Operations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our cattle farm operations and daily management.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                  <p className="text-white text-sm font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connection to Rhodes Grass */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Feed Production Meets Livestock Care</h2>
              <p className="text-xl text-white/85 leading-relaxed mb-8">
                The cattle farm strengthens our agricultural cycle by connecting feed production with livestock management under one system. Our own Rhodes Grass ensures consistent, quality nutrition for our cattle.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Own Rhodes Grass used for cattle feed',
                  'Reduced dependency on external suppliers',
                  'Consistent feed quality year-round',
                  'Integrated farm-to-livestock cycle',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-white/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/rhodes-grass"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all"
              >
                View Rhodes Grass Production <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1200&auto=format&fit=crop"
                alt="Green grass field for cattle feed"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Interested in Our Cattle Operations?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Contact Dharejo Agri & Cattle Farms for inquiries about our livestock and agricultural operations.
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
    </>
  );
}
