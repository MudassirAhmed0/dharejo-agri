import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';


export function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Sakrand, Sindh, Pakistan',
      description: 'Visit our farm operations'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+92 300 1234567', // Placeholder updated to look more realistic pattern if desired, or keep as is. Let's keep generic for now but consistent.
      description: 'Mon-Sat, 8:00 AM - 6:00 PM'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@dharejoagri.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon-Sat: 8:00 AM - 6:00 PM',
      description: 'Sunday: Closed'
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for inquiries about Rhodes grass supply, pricing, or partnership opportunities.
              <br />
              <span className="text-lg mt-2 block opacity-80">Direct contact preferred for faster service.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards - Enhanced Layout */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-card rounded-2xl p-10 shadow-xl border border-border hover:shadow-2xl transition-all text-center flex flex-col items-center justify-center min-h-[250px]"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <info.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{info.title}</h3>
                {info.title === 'Location' ? (
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Sakrand,+Sindh,+Pakistan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl text-primary hover:underline font-semibold mb-2 block"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-xl text-foreground font-semibold mb-2">{info.content}</p>
                )}
                <p className="text-muted-foreground text-lg">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section - Integrated */}
      <section className="py-12 bg-background pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl h-[500px] bg-muted relative group"
          >
            {/* Overlay link to maps */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Sakrand,+Sindh,+Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black/5 hover:bg-black/10 transition-colors z-10"
            >
              <div className="text-center bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 transform group-hover:scale-105 transition-transform">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">Locate Us on Map</h3>
                <p className="text-muted-foreground text-lg">Click to open Google Maps navigation</p>
                <div className="mt-4 inline-flex items-center text-primary font-semibold">
                  Open Maps <Send className="w-4 h-4 ml-2" />
                </div>
              </div>
            </a>
            {/* Placeholder map background pattern or image could go here */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
