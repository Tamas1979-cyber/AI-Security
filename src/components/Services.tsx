
import { Palette, Code, Smartphone, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love to interact with.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building fast, responsive websites using modern technologies and best practices.",
      features: ["Frontend Development", "Backend Integration", "Performance Optimization", "SEO"]
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Developing native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Native Development", "App Store Optimization", "User Analytics"]
    },
    {
      icon: TrendingUp,
      title: "Digital Strategy",
      description: "Helping businesses grow with data-driven digital marketing and strategy.",
      features: ["Market Analysis", "Brand Strategy", "Growth Hacking", "Analytics Setup"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-purple-600 font-semibold mb-2">Services</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What I Can Do For You
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I offer a comprehensive range of digital services to help your business thrive in the modern marketplace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card-gradient border-0">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={24} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
