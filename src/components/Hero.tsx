import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Shield, Star, Phone, Mail } from 'lucide-react';
import rakeshPortrait from '@/assets/rakesh-portrait.jpg';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen pt-16 bg-gradient-to-br from-professional-blue to-professional-blue-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full border border-primary-foreground/20"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full border border-primary-foreground/20"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full border border-primary-foreground/20"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-secondary" />
              <span className="text-secondary font-semibold">Trusted Insurance Advisor</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Rakesh
              <span className="block text-secondary">Srivastava</span>
            </h1>
            
            <p className="text-xl mb-4 text-primary-foreground/90">
              Your Dedicated Insurance Expert
            </p>
            
            <p className="text-lg mb-8 text-primary-foreground/80 leading-relaxed">
              With over 32 years of experience in LIC and HDFC health insurance advisory, 
              I help families and businesses secure their future with comprehensive insurance solutions.
            </p>

            <div className="flex items-center space-x-2 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
              <span className="text-primary-foreground/80 ml-2">
                1500+ Satisfied Clients
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-secondary text-secondary-foreground hover:bg-trust-gold-light transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToContact}
                className="bg-transparent border-white/60 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 bg-card/95 backdrop-blur-sm shadow-[var(--shadow-professional)] border-0">
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={rakeshPortrait} 
                    alt="Rakesh Srivastava - Insurance Advisor"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Rakesh Srivastava
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  Certified Insurance Advisor
                </p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>LIC Insurance Specialist</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>HDFC Health Insurance Expert</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;