import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Heart, 
  Users, 
  Briefcase, 
  Home, 
  Car,
  Phone,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Shield,
      category: "LIC Insurance",
      title: "Life Insurance Solutions",
      description: "Comprehensive life insurance plans to secure your family's future with guaranteed returns and tax benefits.",
      features: [
        "Term Life Insurance",
        "Endowment Plans", 
        "Money Back Policies",
        "Pension Plans"
      ],
      color: "text-primary"
    },
    {
      icon: Heart,
      category: "HDFC Health Insurance",
      title: "Health Insurance Plans",
      description: "Complete health coverage for you and your family with cashless treatment and comprehensive benefits.",
      features: [
        "Individual Health Plans",
        "Family Floater Plans",
        "Critical Illness Cover",
        "Senior Citizen Plans"
      ],
      color: "text-success-green"
    },
    {
      icon: Briefcase,
      category: "Business Insurance",
      title: "Corporate Solutions",
      description: "Tailored insurance solutions for businesses to protect your assets and employees.",
      features: [
        "Group Life Insurance",
        "Employee Health Plans",
        "Key Person Insurance",
        "Business Loan Protection"
      ],
      color: "text-secondary"
    }
  ];

  const additionalServices = [
    { icon: Users, title: "Family Planning", description: "Complete family insurance planning" },
    { icon: Home, title: "Property Insurance", description: "Home and property protection plans" },
    { icon: Car, title: "Vehicle Insurance", description: "Comprehensive vehicle insurance solutions" }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Insurance Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive insurance solutions tailored to protect what matters most to you and your family
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 border-0 bg-gradient-to-br from-card to-accent/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <div className="text-sm font-semibold text-secondary mb-2">
                  {service.category}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-success-green" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary hover:bg-professional-blue-light transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {additionalServices.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-[var(--shadow-card)] transition-all duration-300 bg-accent/50">
              <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-trust-gold to-trust-gold-light text-secondary-foreground hover:opacity-90 transition-opacity shadow-lg"
          >
            <Phone className="w-5 h-5 mr-2" />
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;