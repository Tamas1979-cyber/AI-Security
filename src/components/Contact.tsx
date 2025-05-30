
import { Mail, Phone, MapPin, Send, Clock, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      value: "recovery@aisecurity.com",
      link: "mailto:recovery@aisecurity.com",
      description: "24/7 email support for urgent cases"
    },
    {
      icon: Phone,
      title: "Emergency Hotline",
      value: "+1 (888) 123-FRAUD",
      link: "tel:+18881234873",
      description: "Immediate assistance for active fraud"
    },
    {
      icon: MapPin,
      title: "Global Operations",
      value: "Worldwide Coverage",
      link: "#",
      description: "Serving clients in 50+ countries"
    }
  ];

  const whyChooseUs = [
    { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance when you need it most" },
    { icon: Shield, title: "100% Confidential", desc: "Your privacy and security are our top priority" },
    { icon: Zap, title: "Fast Response", desc: "Quick action to minimize losses and maximize recovery" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-blue-600 font-semibold mb-2">Get Help Now</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Start Your Asset Recovery Today
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Don't let fraudsters keep your hard-earned money. Contact our expert team for a free consultation 
            and take the first step toward recovering your assets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {whyChooseUs.map((item, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white" size={32} />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{info.title}</CardTitle>
                      <a 
                        href={info.link}
                        className="text-blue-600 hover:text-blue-700 transition-colors font-semibold block mb-1"
                      >
                        {info.value}
                      </a>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">🚨 Urgent Recovery Needed?</h4>
              <p className="text-sm mb-4">
                If you've recently been scammed or suspect ongoing fraud, contact us immediately. 
                Time is critical in asset recovery cases.
              </p>
              <Button className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
                Emergency Contact
              </Button>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="h-fit border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Free Case Evaluation</CardTitle>
              <p className="text-blue-100">Tell us about your situation and we'll help you recover your assets</p>
            </CardHeader>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                      Amount Lost (USD)
                    </label>
                    <Input id="amount" placeholder="$10,000" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="incident" className="block text-sm font-medium text-gray-700 mb-2">
                    Describe Your Situation *
                  </label>
                  <Textarea 
                    id="incident" 
                    rows={5}
                    placeholder="Please provide details about the fraud incident, platform involved, dates, and any evidence you have..."
                    required
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3" size="lg">
                  Start Recovery Process
                  <Send className="ml-2" size={20} />
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. All information is kept strictly confidential.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
