import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Rakesh Srivastava</h3>
            <p className="text-primary-foreground/80">
              Trusted Insurance Advisor | LIC & HDFC Expert
            </p>
          </div>
          <div className="text-sm text-primary-foreground/60">
            <p>&copy; 2024 Rakesh Srivastava Insurance Advisory. All rights reserved.</p>
            <p className="mt-2">
              Licensed Insurance Advisor | IRDA Certified
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
