
import { Shield, Brain, Search, Lock, Zap, FileText, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Asset Recovery",
      description: "Expert assistance in recovering assets lost to online scams and fraudulent activities.",
      features: ["Fraud Detection", "Asset Tracing", "Legal Support", "Fund Recovery"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Comprehensive blockchain and cryptocurrency security solutions for digital asset protection.",
      features: ["Wallet Security", "Transaction Monitoring", "Smart Contract Audits", "DeFi Protection"],
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Brain,
      title: "AI Fraud Detection",
      description: "Advanced AI algorithms that analyze patterns to identify and prevent fraudulent activities.",
      features: ["Pattern Recognition", "Real-time Monitoring", "Risk Assessment", "Automated Alerts"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Lock,
      title: "Digital Asset Protection",
      description: "Proactive measures to safeguard your digital investments from emerging threats.",
      features: ["Multi-layer Security", "Cold Storage Solutions", "Access Control", "Backup Systems"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const industries = [
    { icon: Globe, name: "Cryptocurrency Trading", desc: "Recovery from crypto exchange scams and fraudulent ICOs" },
    { icon: FileText, name: "Forex Trading", desc: "Asset recovery from fraudulent forex brokers and trading platforms" },
    { icon: Users, name: "Online Gambling", desc: "Protection and recovery from rigged gambling platforms" },
    { icon: Zap, name: "DeFi Protocols", desc: "Smart contract security and DeFi investment protection" }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-blue-600 font-semibold mb-2">Our Services</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Digital Asset Protection
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We offer tailored solutions to safeguard against scams and recover lost assets using cutting-edge technology 
            and expert knowledge in the digital financial landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
              <CardHeader className="relative">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={28} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4">Industries We Protect</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our expertise spans across various digital financial sectors, providing specialized protection and recovery services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center">
                <industry.icon className="mx-auto mb-4 text-blue-600" size={40} />
                <h4 className="font-bold text-gray-900 mb-2">{industry.name}</h4>
                <p className="text-sm text-gray-600">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
