import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Sprout, TrendingUp, Award, Globe, CheckCircle, ArrowRight, Leaf, Package, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export function HomePage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const features = [
    {
      icon: Sprout,
      title: 'Full Cycle Management',
      description: 'Complete in-house production from irrigation to dispatch',
      color: 'from-green-400 to-emerald-600'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Strict moisture control and quality checking at every stage',
      color: 'from-amber-400 to-orange-600'
    },
    {
      icon: TrendingUp,
      title: 'Growing Capacity',
      description: 'Expanding from 700 to 1,000 tons annually',
      color: 'from-blue-400 to-cyan-600'
    },
    {
      icon: Globe,
      title: 'Export Ready',
      description: 'Serving dairy farms, traders, and international markets',
      color: 'from-purple-400 to-indigo-600'
    }
  ];

  const stats = [
    { value: 700, suffix: '+', label: 'Tons Annually', icon: Package },
    { value: 11, suffix: '', label: 'Production Stages', icon: Target },
    { value: 1000, suffix: '', label: 'Tons Target', icon: TrendingUp },
    { value: 100, suffix: '%', label: 'Quality Control', icon: Award }
  ];

  const processes = [
    'Irrigation & Field Preparation',
    'Sowing & Crop Development',
    'Fertilization & Crop Care',
    'Cutting & Harvesting',
    'Tedding & Moisture Control',
    'Drying & Field Lining',
    'Baling & Collection',
    'Loading & Dispatch'
  ];

  return (
    <div className="min-h-screen">{/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background with Parallax */}
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1630936583832-79091f5945de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaG9kZXMlMjBncmFzcyUyMGZpZWxkJTIwYWdyaWN1bHR1cmV8ZW58MXx8fHwxNzcwNDE0NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Rhodes Grass Field"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 z-20 opacity-20"
        >
          <Leaf className="w-24 h-24 text-white" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 z-20 opacity-20"
        >
          <Sprout className="w-32 h-32 text-white" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          >
            <span className="text-white/90 font-medium">Premium Rhodes Grass Producers</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Dharejo Agri &<br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Cattle Farms
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
          >
            Sakrand, Sindh, Pakistan • From Field to Feed
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/services"
              className="group relative bg-gradient-to-r from-primary via-accent to-primary hover:shadow-2xl text-primary-foreground px-10 py-5 rounded-full transition-all hover:scale-105 inline-flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 font-semibold">Our Process</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              to="/contact"
              className="group bg-white/10 backdrop-blur-md hover:bg-white/20 border-2 border-white text-white px-10 py-5 rounded-full transition-all hover:scale-105 inline-flex items-center justify-center gap-3"
            >
              <span className="font-semibold">Contact Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center p-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full"
            >
              <span className="text-primary font-semibold text-sm tracking-wide">OUR ADVANTAGES</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Dharejo Agri?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Excellence in every stage of Rhodes grass production
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -15, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-2xl transition-all overflow-hidden h-full"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Icon with Gradient */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Corner Accent */}
                  <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary text-white relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-white/90">
              Delivering excellence across every metric
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 border border-white/20"
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl font-bold mb-2"
                >
                  <AnimatedCounter end={stat.value} duration={2} suffix={stat.suffix} />
                </motion.div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Complete Rhodes Grass Production
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Dharejo Agri & Cattle Farms manages the full Rhodes grass production cycle internally—from irrigation and sowing to harvesting, drying, baling, and dispatch—ensuring quality control, moisture balance, and consistent supply.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Current production: <span className="font-semibold text-primary">~700 tons annually</span>, expanding to <span className="font-semibold text-primary">1,000 tons</span> for dairy farms, traders, and export markets.
              </p>
              
              <div className="space-y-3 mb-8">
                {processes.slice(0, 4).map((process, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{process}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-all hover:scale-105"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1659262673818-d7b419542d16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXklMjBiYWxpbmclMjBmYXJtaW5nfGVufDF8fHx8MTc3MDQxNDU3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hay Baling"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-2xl border border-border"
              >
                <div className="text-4xl font-bold text-primary mb-1">700+</div>
                <div className="text-sm text-muted-foreground">Tons Annually</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Join dairy farms, traders, and export markets who trust Dharejo Agri & Cattle Farms for premium Rhodes grass supply.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-primary px-8 py-4 rounded-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}