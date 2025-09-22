import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  Trophy, 
  Clock,
  CheckCircle,
  Star
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Clock, value: "15+", label: "Years Experience" },
    { icon: Trophy, value: "50+", label: "Awards Won" },
    { icon: Star, value: "4.9", label: "Client Rating" }
  ];

  const achievements = [
    "Top Performing LIC Agent - 2023",
    "HDFC Health Insurance Excellence Award",
    "Client Service Excellence - 2022",
    "Million Dollar Round Table Member"
  ];

  const expertise = [
    "Life Insurance Planning",
    "Health Insurance Consultation", 
    "Retirement Planning",
    "Tax Saving Strategies",
    "Investment Advisory",
    "Risk Assessment"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About Rakesh Srivastava
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A trusted insurance advisor dedicated to helping families and businesses secure their financial future
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Your Trusted Insurance Partner
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of dedicated service in the insurance industry, I have built my career 
              on a foundation of trust, expertise, and unwavering commitment to my clients' financial security.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              As a certified advisor for both LIC and HDFC Health Insurance, I specialize in creating 
              comprehensive insurance solutions that protect what matters most - your family, your health, 
              and your financial future.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center bg-card shadow-[var(--shadow-card)]">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="p-6 bg-card shadow-[var(--shadow-card)]">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-6 h-6 text-secondary" />
                <h4 className="text-xl font-semibold text-foreground">
                  Achievements & Recognition
                </h4>
              </div>
              
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-success-green" />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-card shadow-[var(--shadow-card)]">
              <div className="flex items-center space-x-3 mb-4">
                <Trophy className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-semibold text-foreground">
                  Areas of Expertise
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="bg-accent text-accent-foreground hover:bg-accent/80"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-br from-professional-blue to-professional-blue-light text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-4">
            My Commitment to You
          </h3>
          <p className="text-lg text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
            "I believe that insurance is not just about policies and premiums - it's about peace of mind. 
            My mission is to understand your unique needs and provide personalized solutions that give you 
            and your family the confidence to face the future with security and optimism."
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <span className="text-2xl font-script text-secondary">Rakesh Srivastava</span>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;