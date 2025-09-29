import React from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Heart, Users, Building, Phone, Mail } from 'lucide-react';

const Plans = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const licPlans = [
    {
      name: "LIC New Jeevan Anand",
      type: "Endowment Plan",
      minAge: "18 years",
      maxAge: "50 years",
      policyTerm: "15-35 years",
      premiumPayingTerm: "Limited/Regular",
      features: [
        "Life coverage with maturity benefits",
        "Bonus participation",
        "Loan facility after 3 years",
        "Tax benefits under Section 80C"
      ],
      minPremium: "₹1,23,000",
      icon: Shield
    },
    {
      name: "LIC New Tech Term",
      type: "Term Insurance",
      minAge: "18 years",
      maxAge: "65 years",
      policyTerm: "10-40 years",
      premiumPayingTerm: "Regular/Limited",
      features: [
        "Pure term insurance with high coverage",
        "Online policy management",
        "Flexible premium payment options",
        "Affordable premiums"
      ],
      minPremium: "₹6,000",
      icon: Shield
    },
    {
      name: "LIC Aadhar Stambh",
      type: "Term Insurance",
      minAge: "18 years",
      maxAge: "65 years",
      policyTerm: "10-40 years",
      premiumPayingTerm: "Regular",
      features: [
        "Simple underwriting process",
        "Level premium throughout term",
        "Optional accidental death benefit",
        "Tax benefits available"
      ],
      minPremium: "₹5,500",
      icon: Users
    },
    {
      name: "LIC New Jeevan Shanti",
      type: "Pension Plan",
      minAge: "30 years",
      maxAge: "79 years",
      policyTerm: "Whole Life",
      premiumPayingTerm: "Single/Limited",
      features: [
        "Immediate or deferred annuity",
        "Multiple annuity options",
        "Guaranteed income for life",
        "Purchase price refund option"
      ],
      minPremium: "₹1,50,000",
      icon: Heart
    }
  ];

  const hdfcPlans = [
    {
      name: "HDFC Life Click 2 Protect Plus",
      type: "Term Insurance",
      minAge: "18 years",
      maxAge: "65 years",
      policyTerm: "10-40 years",
      premiumPayingTerm: "Regular/Limited",
      features: [
        "High life coverage at low cost",
        "Terminal illness benefit",
        "Multiple payout options",
        "Easy online process"
      ],
      minPremium: "₹5,000",
      icon: Shield
    },
    {
      name: "HDFC Life Sanchay Plus",
      type: "Savings Plan",
      minAge: "0 years",
      maxAge: "65 years",
      policyTerm: "10-25 years",
      premiumPayingTerm: "Regular/Limited",
      features: [
        "Guaranteed additions",
        "Loyalty additions",
        "Life coverage with savings",
        "Tax benefits under Section 80C"
      ],
      minPremium: "₹25,000",
      icon: Building
    },
    {
      name: "HDFC Life ProGrowth Plus",
      type: "ULIP",
      minAge: "0 years",
      maxAge: "65 years",
      policyTerm: "10-30 years",
      premiumPayingTerm: "Regular/Limited",
      features: [
        "Market-linked returns",
        "Multiple fund options",
        "Partial withdrawal facility",
        "Top-up facility available"
      ],
      minPremium: "₹18,000",
      icon: Users
    },
    {
      name: "HDFC Life Pension Guaranteed",
      type: "Pension Plan",
      minAge: "30 years",
      maxAge: "75 years",
      policyTerm: "Whole Life",
      premiumPayingTerm: "Single/Regular",
      features: [
        "Guaranteed pension for life",
        "Immediate or deferred options",
        "Spouse pension benefit",
        "Purchase price return"
      ],
      minPremium: "₹1,00,000",
      icon: Heart
    }
  ];

  const PlanCard = ({ plan, company }: { plan: any, company: string }) => {
    const IconComponent = plan.icon;
    
    return (
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <IconComponent className="w-8 h-8 text-primary" />
            <Badge variant="outline" className={company === 'LIC' ? 'border-blue-500 text-blue-700' : 'border-red-500 text-red-700'}>
              {company}
            </Badge>
          </div>
          <CardTitle className="text-xl">{plan.name}</CardTitle>
          <CardDescription className="text-lg font-medium text-primary">
            {plan.type}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-muted-foreground">Entry Age:</span>
              <p>{plan.minAge} - {plan.maxAge}</p>
            </div>
            <div>
              <span className="font-medium text-muted-foreground">Policy Term:</span>
              <p>{plan.policyTerm}</p>
            </div>
            <div>
              <span className="font-medium text-muted-foreground">Premium Term:</span>
              <p>{plan.premiumPayingTerm}</p>
            </div>
            <div>
              <span className="font-medium text-muted-foreground">Min Premium:</span>
              <p className="font-semibold text-primary">{plan.minPremium}</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-2">Key Features:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {plan.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <Button 
            className="w-full mt-4"
            onClick={scrollToContact}
          >
            Get Quote
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 pt-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Insurance Plans</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our comprehensive range of LIC and HDFC insurance plans designed to secure your future
            </p>
          </div>
        </div>
      </div>

      {/* LIC Plans Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              LIC Insurance Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by millions of Indians, LIC offers comprehensive life insurance solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {licPlans.map((plan, index) => (
              <PlanCard key={index} plan={plan} company="LIC" />
            ))}
          </div>
        </div>
      </section>

      {/* HDFC Plans Section */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              HDFC Life Insurance Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern insurance solutions with flexible options and competitive premiums
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hdfcPlans.map((plan, index) => (
              <PlanCard key={index} plan={plan} company="HDFC" />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Help Choosing the Right Plan?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              I'm here to help you find the perfect insurance solution for your needs. Get personalized recommendations and expert advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +91 99185 02602
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Mail className="w-5 h-5 mr-2" />
                Email: rakeshsri.fzd@gmail.com
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;