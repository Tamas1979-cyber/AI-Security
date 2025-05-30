
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-white animate-fade-in">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="text-yellow-400" />
                ))}
              </div>
              <span className="text-white/90 text-sm">Trusted by 500+ Clients Worldwide</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              AI-Powered
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Asset Recovery
              </span>
              & Fraud Protection
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              Expert assistance in recovering assets lost to online scams. We use advanced AI and blockchain technology to trace, recover, and protect your digital investments from fraud.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold">
                Start Recovery Process
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Free Consultation
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-purple-500/40 to-cyan-500/40 rounded-full flex items-center justify-center">
                    <Shield className="text-white" size={80} />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-pulse">
                <Zap className="text-white" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-xl">🔒</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
