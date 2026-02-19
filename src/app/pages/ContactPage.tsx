import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';

export function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Farming Locations',
      content: 'Sakrand & Saleh Pat',
      description: 'Main production fields'
    },
    {
      icon: MapPin,
      title: 'Dates Farm',
      content: 'Khairpur, Sindh',
      description: 'Dedicated date cultivation'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'dharejoagri@gmail.com',
      description: 'For bulk inquiries & export'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon-Sat: 9:00 AM - 6:00 PM',
      description: 'Field operations active 24/7'
    }
  ];

  return (
    <>
      <SEO 
        title="Contact Dharejo Agri | Bulk Rhodes Grass Supply" 
        description="Contact Dharejo Agri for bulk Rhodes Grass supply, wheat, or dates. Farming operations in Sakrand, Saleh Pat, and Khairpur." 
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Dharejo Agri</h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Looking for reliable Rhodes Grass suppliers? Need bulk agricultural supply from Sindh?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-lg transition-all text-center"
                >
                  <div className="w-14 h-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{info.title}</h3>
                  <p className="text-xl font-bold text-primary mb-2">{info.content}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-border">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-primary mb-4">Send us a Message</h2>
                <p className="text-muted-foreground">
                  We welcome inquiries from dairy farms, livestock suppliers, and export buyers.
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring outline-none transition-all" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring outline-none transition-all" placeholder="+92..." />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring outline-none transition-all">
                    <option>Bulk Rhodes Grass Supply</option>
                    <option>Wheat / Mustard Inquiry</option>
                    <option>Dates (Khairpur) Inquiry</option>
                    <option>Export Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring outline-none transition-all" placeholder="Tell us about your requirements (Quantity, Location, etc.)"></textarea>
                </div>

                <button className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" /> Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
