import { motion } from 'motion/react';
import { 
  Droplets, 
  Sprout, 
  Leaf, 
  Scissors, 
  Wind, 
  Sun, 
  Package, 
  Truck, 
  Satellite, 
  Gauge,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      icon: Droplets,
      title: 'Water Management & Field Preparation',
      description: 'Advanced irrigation systems and field preparation techniques ensure optimal soil conditions and water distribution for Rhodes grass cultivation.',
      features: ['Drip irrigation systems', 'Soil analysis', 'Land leveling', 'Water scheduling']
    },
    {
      icon: Sprout,
      title: 'Sowing & Crop Development',
      description: 'Precision sowing methods and high-quality seeds ensure uniform crop emergence and healthy stand establishment.',
      features: ['Premium seed selection', 'Optimal sowing density', 'Timing optimization', 'Growth monitoring']
    },
    {
      icon: Leaf,
      title: 'Fertilization & Crop Care',
      description: 'Balanced nutrient management and integrated crop care programs maximize yield and quality while maintaining sustainability.',
      features: ['Soil testing', 'Custom fertilizer plans', 'Pest management', 'Disease control']
    },
    {
      icon: Scissors,
      title: 'Cutting & Harvesting',
      description: 'Timely harvesting at optimal maturity ensures maximum nutritional value and palatability of the Rhodes grass.',
      features: ['Maturity assessment', 'Modern equipment', 'Efficient cutting', 'Minimal losses']
    },
    {
      icon: Wind,
      title: 'Tedding & Moisture Control',
      description: 'Specialized tedding processes ensure uniform drying and prevent mold formation while maintaining optimal moisture levels.',
      features: ['Uniform spreading', 'Multiple tedding passes', 'Weather monitoring', 'Moisture testing']
    },
    {
      icon: Sun,
      title: 'Drying & Field Lining',
      description: 'Natural sun-drying methods combined with proper field lining techniques preserve nutritional quality and facilitate efficient collection.',
      features: ['Sun exposure optimization', 'Organized rows', 'Protection from weather', 'Quality preservation']
    },
    {
      icon: Package,
      title: 'Baling & Collection',
      description: 'State-of-the-art baling equipment produces consistent, high-density bales that are easy to handle, transport, and store.',
      features: ['Modern balers', 'Consistent size', 'Proper compression', 'Quick collection']
    },
    {
      icon: Truck,
      title: 'Loading & Dispatch',
      description: 'Efficient loading systems and logistics management ensure safe transportation and timely delivery to customers.',
      features: ['Careful handling', 'Secure loading', 'Timely dispatch', 'Tracking systems']
    },
    {
      icon: Satellite,
      title: 'Satellite Monitoring & Farm Management',
      description: 'Advanced satellite technology and data analytics optimize farm operations, crop health monitoring, and decision-making.',
      features: ['Crop health monitoring', 'Growth tracking', 'Yield prediction', 'Resource optimization']
    },
    {
      icon: Gauge,
      title: 'Moisture Control & Quality Checking',
      description: 'Rigorous quality control processes and moisture testing ensure every bale meets premium standards for livestock consumption.',
      features: ['Moisture meters', 'Quality inspections', 'Standard compliance', 'Documentation']
    },
    {
      icon: TrendingUp,
      title: 'Production Capacity & Expansion',
      description: 'Strategic expansion plans and capacity building initiatives ensure consistent supply growth to meet increasing market demand.',
      features: ['Current: 700 tons/year', 'Target: 1,000 tons/year', 'Market expansion', 'Infrastructure development']
    }
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Complete Rhodes grass production cycle managed in-house for maximum quality control and consistency
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                {/* Icon & Title */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="lg:w-1/2 bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-2xl transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Features */}
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                        className="flex items-center gap-3 bg-muted/50 rounded-lg p-4 hover:bg-muted transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Production Excellence</h2>
            <p className="text-xl text-primary-foreground/90">
              Numbers that reflect our commitment to quality and scale
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '700+', label: 'Tons Annually' },
              { number: '1000', label: 'Target Capacity' },
              { number: '11', label: 'Core Services' },
              { number: '100%', label: 'Quality Assured' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
