import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      image: "PS",
      rating: 5,
      text: "Rakesh helped us choose the perfect health insurance plan for our family. His expertise and patient guidance made the complex process so simple. Highly recommended!",
      plan: "HDFC Health Insurance"
    },
    {
      name: "Amit Kumar",
      role: "Business Owner",
      image: "AK", 
      rating: 5,
      text: "Outstanding service! Rakesh structured a comprehensive life insurance portfolio that perfectly fits our business needs. His professionalism is unmatched.",
      plan: "LIC Business Solutions"
    },
    {
      name: "Sunita Verma",
      role: "Teacher",
      image: "SV",
      rating: 5,
      text: "Very knowledgeable and trustworthy advisor. Rakesh explained all the policy details clearly and helped us save significantly on premiums while getting better coverage.",
      plan: "LIC Family Plan"
    },
    {
      name: "Rajesh Gupta",
      role: "Engineer",
      image: "RG",
      rating: 5,
      text: "Excellent customer service! When we needed to file a claim, Rakesh was there every step of the way. He truly cares about his clients' well-being.",
      plan: "HDFC Critical Illness"
    },
    {
      name: "Meera Joshi",
      role: "Doctor",
      image: "MJ",
      rating: 5,
      text: "As a healthcare professional, I appreciate Rakesh's deep understanding of health insurance. He recommended a plan that covers all our medical needs perfectly.",
      plan: "HDFC Comprehensive Health"
    },
    {
      name: "Vikash Singh",
      role: "Entrepreneur",
      image: "VS",
      rating: 5,
      text: "Rakesh's investment advisory alongside insurance planning is excellent. He helped us create a balanced portfolio that secures our family's future.",
      plan: "LIC Investment Plus"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What My Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from satisfied clients who trust me with their insurance needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-secondary opacity-50" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-primary font-medium">
                      {testimonial.plan}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-[var(--gradient-hero)] text-primary-foreground">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-2xl font-bold">4.9/5</span>
            </div>
            <p className="text-primary-foreground/90">
              Based on 500+ client reviews
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;