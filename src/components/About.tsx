
import { CheckCircle, Users, Award, TrendingUp, Clock } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: Users, text: "500+ Successful Recoveries", color: "text-blue-500" },
    { icon: Award, text: "99% Success Rate", color: "text-green-500" },
    { icon: TrendingUp, text: "$50M+ Assets Recovered", color: "text-purple-500" },
    { icon: Clock, text: "24/7 Expert Support", color: "text-cyan-500" }
  ];

  const process = [
    { number: "01", title: "Identification", desc: "Advanced AI algorithms detect fraudulent activities and trace stolen assets using pattern recognition." },
    { number: "02", title: "Verification", desc: "Thorough verification ensures claims are legitimate and assets are recoverable through blockchain analysis." },
    { number: "03", title: "Recovery", desc: "We work with financial institutions and law enforcement to reclaim your stolen digital assets." },
    { number: "04", title: "Restoration", desc: "Secure and legal restoration of recovered assets to rightful owners with full documentation." }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="text-blue-600 font-semibold mb-2">About AI Security</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Leading the Fight Against
            <span className="text-blue-600"> Digital Fraud</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            In today's digital age, the rise of online fraud has unfortunately been accompanied by sophisticated scams. 
            Our expert team utilizes cutting-edge AI and blockchain technology to recover your lost assets and protect your investments.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <achievement.icon className={`mx-auto mb-4 ${achievement.color}`} size={40} />
              <div className="font-bold text-gray-900 text-lg">{achievement.text}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Recovery Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{step.number}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Trust Our Expertise</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Our dedicated team ensures constant support for your asset protection and recovery needs. 
            We provide customized solutions for digital asset protection and recovery from scams in online gambling, 
            forex, and cryptocurrency, ensuring the security of your assets in today's complex digital environment.
          </p>
          <div className="flex justify-center">
            <CheckCircle className="text-green-400" size={24} />
            <span className="ml-2 font-semibold">Certified Asset Recovery Specialists</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
