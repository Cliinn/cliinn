
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import Testimonials from '@/components/Testimonials';
import LeadMagnetReminder from '@/components/LeadMagnetReminder';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <Testimonials />
      <LeadMagnetReminder />
      <Footer />
    </div>
  );
};

export default Index;
