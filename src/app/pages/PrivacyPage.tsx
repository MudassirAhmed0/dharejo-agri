import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

export function PrivacyPage() {
  const sections = [
    {
      title: '1. Introduction',
      content: 'Dharejo Agri & Cattle Farms ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services. Please read this policy carefully.'
    },
    {
      title: '2. Information We Collect',
      content: 'We may collect personal information that you provide directly to us, including but not limited to: name, email address, phone number, business information, shipping addresses, and payment information. We also collect information automatically through your use of our website, such as IP addresses, browser type, pages visited, and time spent on pages.'
    },
    {
      title: '3. How We Use Your Information',
      content: 'We use the collected information to: process and fulfill your orders, communicate with you about products and services, respond to your inquiries and provide customer support, improve our website and services, send marketing communications (with your consent), comply with legal obligations, and prevent fraud or unauthorized activities.'
    },
    {
      title: '4. Information Sharing and Disclosure',
      content: 'We do not sell or rent your personal information to third parties. We may share your information with: service providers who assist in our operations (e.g., payment processors, logistics partners), legal authorities when required by law or to protect our rights, business partners with your explicit consent, and potential buyers in the event of a merger or acquisition.'
    },
    {
      title: '5. Data Security',
      content: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.'
    },
    {
      title: '6. Cookies and Tracking Technologies',
      content: 'Our website may use cookies and similar tracking technologies to enhance user experience, analyze website traffic, and gather demographic information. You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of certain website features.'
    },
    {
      title: '7. Third-Party Links',
      content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.'
    },
    {
      title: '8. Data Retention',
      content: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When information is no longer needed, we will securely delete or anonymize it.'
    },
    {
      title: '9. Your Rights and Choices',
      content: 'You have the right to: access your personal information, request corrections to inaccurate data, request deletion of your information (subject to legal obligations), opt-out of marketing communications, and withdraw consent for data processing. To exercise these rights, please contact us using the information provided below.'
    },
    {
      title: '10. Children\'s Privacy',
      content: 'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information.'
    },
    {
      title: '11. International Data Transfers',
      content: 'If you are accessing our services from outside Pakistan, please be aware that your information may be transferred to, stored, and processed in Pakistan. By using our services, you consent to the transfer of your information to Pakistan and other countries where we operate.'
    },
    {
      title: '12. Changes to This Privacy Policy',
      content: 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the updated policy on our website with the effective date. Your continued use of our services after changes constitutes acceptance of the updated policy.'
    },
    {
      title: '13. Contact Us',
      content: 'If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at: Email: info@dharejoagri.com, Phone: +92 XXX XXXXXXX, Address: Sakrand, Sindh, Pakistan. We will respond to your inquiry as promptly as possible.'
    },
    {
      title: '14. Compliance',
      content: 'We are committed to complying with applicable data protection laws and regulations in Pakistan. We regularly review and update our data protection practices to ensure ongoing compliance and the protection of your personal information.'
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
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your information
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
              <strong>Your Consent:</strong> By using our website and services, you consent to our Privacy Policy and agree to its terms. If you do not agree with this policy, please do not use our services. We respect your privacy and are committed to protecting your personal information.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
