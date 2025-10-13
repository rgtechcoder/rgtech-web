import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const CTABanner = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
          <Sparkles className="text-white" size={20} />
          <span className="text-white font-medium">AI-Powered Solutions</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Explore Artificial Intelligence for Your Business?
        </h2>

        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Transform your business with cutting-edge AI solutions and intelligent automation
        </p>

        <Button
          onClick={scrollToContact}
          className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;