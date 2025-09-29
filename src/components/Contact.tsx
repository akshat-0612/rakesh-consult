import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    // const apiBaseUrl = (import.meta as any).env?.VITE_API_URL || 'http://localhost:5000';
    const apiBaseUrl = 'https://insurance-advisor-backend.vercel.app';

    try {
      const response = await fetch(`${apiBaseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error((data && (data.message || data.error)) || 'Failed to send message');
      }

      toast({
        title: 'Message Sent Successfully!',
        description: 'Thank you for your inquiry. Rakesh will contact you within 24 hours.'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      toast({
        title: 'Failed to send message',
        description: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 99185 02602",
      action: "tel:+919918502602"
    },
    {
      icon: Mail,
      title: "Email",
      details: "rakeshsri.fzd@gmail.com",
      action: "mailto:rakeshsri.fzd@gmail.com"
    },
    {
      icon: MapPin,
      title: "Office",
      details: "LIC of India, Shiva palace, Deokali Bypass, Ayodhya, Uttar Pradesh 224001",
      action: null
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Sun: 9:00 AM - 8:00 PM",
      action: null
    }
  ];

  const services = [
    "LIC Life Insurance",
    "HDFC Health Insurance", 
    "Business Insurance",
    "Family Planning",
    "Investment Advisory",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to secure your future? Contact me today for a free consultation and personalized insurance solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-to-br from-professional-blue to-professional-blue-light text-primary-foreground">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-primary-foreground">
                  Let's Start a Conversation
                </CardTitle>
                <p className="text-primary-foreground/80">
                  I'm here to help you make informed decisions about your insurance needs.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-foreground mb-1">
                          {info.title}
                        </h4>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-primary-foreground/80 hover:text-secondary transition-colors"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-primary-foreground/80">
                            {info.details}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                  <h4 className="font-semibold text-primary-foreground mb-3">
                    Why Choose Me?
                  </h4>
                  <div className="space-y-2">
                    {[
                      "Free initial consultation",
                      "Personalized insurance solutions",
                      "24/7 customer support",
                      "Claims assistance"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-secondary" />
                        <span className="text-primary-foreground/80 text-sm">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-[var(--shadow-professional)]">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Request Free Consultation
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="border-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="border-input"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                      className="border-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Interested *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your insurance needs..."
                    rows={4}
                    className="border-input"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-trust-gold to-trust-gold-light text-secondary-foreground hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;