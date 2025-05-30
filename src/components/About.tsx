
import { CheckCircle } from 'lucide-react';

const About = () => {
  const achievements = [
    "5+ Years of Experience",
    "100+ Projects Completed",
    "50+ Happy Clients",
    "Award-Winning Designs"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-4xl">💡</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 animate-fade-in">
            <div className="text-purple-600 font-semibold mb-2">About Me</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Passionate About Creating
              <span className="text-purple-600"> Digital Experiences</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-6">
              I'm a creative professional who specializes in bringing ideas to life through innovative design and development. With a passion for clean, functional solutions, I help businesses establish their digital presence and connect with their audience.
            </p>
            
            <p className="text-gray-600 mb-8">
              My approach combines strategic thinking with creative execution, ensuring that every project not only looks great but also delivers measurable results for my clients.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
