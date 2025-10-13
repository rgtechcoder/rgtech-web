import React from 'react';
import { BarChart3, Workflow, Eye, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const iconMap = {
  BarChart3: BarChart3,
  Workflow: Workflow,
  Eye: Eye,
  MessageSquare: MessageSquare
};

const AISolutions = ({ aiSolutions }) => {
  return (
    <section id="ai-solutions" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Experience the Power of <span className="text-cyan-400">AI</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Transform your business with intelligent automation and advanced analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiSolutions.map((solution) => {
            const IconComponent = iconMap[solution.icon];
            return (
              <Card
                key={solution.id}
                className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-3">
                    {IconComponent && <IconComponent className="text-white" size={28} />}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-100 text-sm">
                    {solution.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AISolutions;