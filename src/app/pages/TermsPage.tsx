import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

export function TermsPage() {
  const sections = [
    {
      title: '1. Introduction',
      content: 'These Terms and Conditions govern your use of Dharejo Agri & Cattle Farms\' services and website. By engaging with our services or accessing our website, you agree to be bound by these terms. Please read them carefully before proceeding with any business transactions.'
    },
    {
      title: '2. Services Provided',
      content: 'Dharejo Agri & Cattle Farms specializes in Rhodes grass production, including cultivation, harvesting, baling, and distribution. We manage the complete production cycle from field preparation to final dispatch. Our services are provided to dairy farms, livestock traders, and export markets.'
    },
    {
      title: '3. Quality Standards',
      content: 'We maintain strict quality control measures throughout the production process. All Rhodes grass products undergo moisture control testing and quality inspection before dispatch. We guarantee that our products meet industry standards for livestock consumption, subject to proper storage and handling by the customer.'
    },
    {
      title: '4. Orders and Pricing',
      content: 'All orders are subject to availability and confirmation. Prices are quoted based on current market conditions and may vary. We reserve the right to adjust pricing based on production costs, market demand, and other relevant factors. Confirmed orders will be honored at the agreed price.'
    },
    {
      title: '5. Payment Terms',
      content: 'Payment terms will be agreed upon at the time of order confirmation. We accept various payment methods as specified in the order agreement. Late payments may incur additional charges. Full payment must be received before dispatch unless alternative credit terms have been arranged.'
    },
    {
      title: '6. Delivery and Transportation',
      content: 'We provide loading services at our facility. Transportation arrangements can be made through our logistics partners or by the customer. Delivery timelines are estimates and may vary based on weather conditions, production schedules, and transportation availability. Risk transfers to the buyer upon loading unless otherwise specified.'
    },
    {
      title: '7. Product Inspection',
      content: 'Customers have the right to inspect products before loading. Any concerns about product quality must be raised immediately. Once products are loaded and leave our facility, claims regarding quality or quantity must be reported within 24 hours with supporting evidence.'
    },
    {
      title: '8. Cancellations and Returns',
      content: 'Order cancellations must be made in writing and are subject to our approval. Cancellation fees may apply depending on the stage of production or preparation. Due to the perishable nature of our products, returns are only accepted in cases of proven quality defects as determined by independent inspection.'
    },
    {
      title: '9. Force Majeure',
      content: 'We shall not be liable for any failure to perform our obligations due to circumstances beyond our reasonable control, including but not limited to natural disasters, weather conditions, crop failures, government restrictions, or other force majeure events.'
    },
    {
      title: '10. Intellectual Property',
      content: 'All content on our website, including text, images, logos, and designs, is the property of Dharejo Agri & Cattle Farms and protected by intellectual property laws. Unauthorized use, reproduction, or distribution is prohibited.'
    },
    {
      title: '11. Limitation of Liability',
      content: 'Our liability is limited to the value of the products supplied. We are not liable for any indirect, consequential, or incidental damages arising from the use of our products or services. Customers are responsible for proper storage and use of products after delivery.'
    },
    {
      title: '12. Governing Law',
      content: 'These terms and conditions are governed by the laws of Pakistan. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Sindh, Pakistan.'
    },
    {
      title: '13. Amendments',
      content: 'We reserve the right to modify these terms and conditions at any time. Changes will be posted on our website with the effective date. Continued use of our services after modifications constitutes acceptance of the updated terms.'
    },
    {
      title: '14. Contact Information',
      content: 'For questions or concerns regarding these terms and conditions, please contact us at info@dharejoagri.com or visit our office in Sakrand, Sindh, Pakistan.'
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
            <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-primary-foreground/70 mt-4">
              Last Updated: February 8, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border"
              >
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-muted/50 rounded-xl border border-border"
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Note:</strong> By accessing our website or engaging with our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
