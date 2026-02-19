import { SEO } from '../components/SEO';

export function PrivacyPage() {
  return (
    <>
      <SEO title="Privacy Policy - Dharejo Agri" description="Our commitment to your privacy." />
      <div className="min-h-screen pt-32 pb-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          <div className="prose prose-lg text-muted-foreground">
            <p>At Dharejo Agri, we respect your privacy and are committed to protecting it.</p>
            <h3>1. Information Collection</h3>
            <p>We collect information when you contact us via the inquiry form or email.</p>
            <h3>2. Use of Information</h3>
            <p>The information is used solely to respond to your queries and process agricultural supply orders.</p>
            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
    </>
  );
}
