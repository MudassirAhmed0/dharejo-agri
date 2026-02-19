import { SEO } from '../components/SEO';

export function TermsPage() {
  return (
    <>
      <SEO title="Terms & Conditions - Dharejo Agri" description="Terms and conditions of supply." />
      <div className="min-h-screen pt-32 pb-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary mb-8">Terms & Conditions</h1>
          <div className="prose prose-lg text-muted-foreground">
            <p>Welcome to Dharejo Agri. Please read these terms and conditions carefully.</p>
            <h3>1. General</h3>
            <p>By accessing this website and placing orders, you agree to these terms.</p>
            <h3>2. Supply & Quality</h3>
            <p>We strive to ensure all agricultural produce meets the agreed quality standards (Moisture, Weight, etc.).</p>
            {/* Add more terms as needed */}
          </div>
        </div>
      </div>
    </>
  );
}
