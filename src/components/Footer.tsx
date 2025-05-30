
import { Heart, Shield, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Shield className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Security
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Leading the fight against digital fraud with AI-powered asset recovery and blockchain security solutions. 
              Protecting your investments in the digital age.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>recovery@aisecurity.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (888) 123-FRAUD</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Global Operations - 50+ Countries</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Asset Recovery</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Blockchain Security</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AI Fraud Detection</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Digital Asset Protection</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Industries</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Cryptocurrency</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Forex Trading</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Online Gambling</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">DeFi Protocols</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Resources</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Free Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2024 AI Security. All rights reserved. Licensed Asset Recovery Specialists.</p>
            </div>
            <div className="text-gray-400 text-sm md:text-right">
              <p className="flex items-center justify-center md:justify-end">
                Securing digital assets with <Heart className="mx-2 text-red-500" size={16} fill="currentColor" /> and expertise
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg border border-blue-800/30">
          <div className="text-center">
            <p className="text-blue-300 text-sm mb-2">🚨 <strong>Emergency Alert:</strong> Been scammed recently?</p>
            <p className="text-gray-300 text-xs">
              Time is critical in asset recovery. Contact our emergency hotline immediately for urgent cases.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
