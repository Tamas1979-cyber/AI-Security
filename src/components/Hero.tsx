
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
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
              <span className="text-white/90 text-sm">Trusted by 1000+ clients</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Creative
              <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                Solutions
              </span>
              for Your Business
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              I help businesses grow with innovative digital solutions, creative design, and strategic thinking that delivers real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
                View My Work
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce">
                <div className="w-64 h-64 bg-white/30 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-white/40 rounded-full flex items-center justify-center">
                    <div className="text-6xl">👋</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-2xl">✨</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
