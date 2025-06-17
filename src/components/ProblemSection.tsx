import React from 'react';
import { Clock, Palette, Monitor, Bot } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: Clock,
      text: "You're buried in repetitive tasks",
      color: "text-red-400"
    },
    {
      icon: Palette,
      text: "Your 'brand' is just a Canva logo",
      color: "text-yellow-400"
    },
    {
      icon: Monitor,
      text: "Your website doesn't convert",
      color: "text-blue-400"
    },
    {
      icon: Bot,
      text: "You're doing what AI should be doing",
      color: "text-purple-400"
    }
  ];

  return (
    <section className="section bg-black/20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              You've got the vision, but{' '}
              <span className="gradient-text">execution is draining.</span>
            </h2>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className={`p-3 rounded-lg bg-gray-800/50 group-hover:bg-gray-700/50 transition-colors`}>
                    <problem.icon className={`w-6 h-6 ${problem.color}`} />
                  </div>
                  <p className="text-lg text-gray-300 group-hover:text-white transition-colors">
                    {problem.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-gray-400 text-lg">
                Sound familiar? You're not alone. Most founders spend 80% of their time on tasks that don't scale.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="card p-8 relative overflow-hidden">
              {/* Frustration Visual */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-red-500/20 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">😤</div>
                  <div className="text-sm text-gray-300">Overwhelmed</div>
                </div>
                <div className="bg-yellow-500/20 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">😵</div>
                  <div className="text-sm text-gray-300">Confused</div>
                </div>
                <div className="bg-blue-500/20 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">😰</div>
                  <div className="text-sm text-gray-300">Stressed</div>
                </div>
                <div className="bg-purple-500/20 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">😫</div>
                  <div className="text-sm text-gray-300">Exhausted</div>
                </div>
              </div>

              {/* Problem Stats */}
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                  <span className="text-gray-300">Time spent on admin</span>
                  <span className="text-red-400 font-semibold">80%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                  <span className="text-gray-300">Tasks that don't scale</span>
                  <span className="text-yellow-400 font-semibold">90%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                  <span className="text-gray-300">Manual processes</span>
                  <span className="text-blue-400 font-semibold">95%</span>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-500/20 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 