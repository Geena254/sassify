
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-6 animate-fade-in">
            Transforming How Teams Work
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in">
            Simplify Your Workflow with <span className="gradient-text">SaaSify</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            The all-in-one platform that helps your team collaborate, manage projects,
            and deliver results faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" className="font-medium text-base px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="font-medium text-base px-8 py-6">
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 w-full max-w-4xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold gradient-text mb-1">10,000+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold gradient-text mb-1">98%</p>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-4xl font-bold gradient-text mb-1">24/7</p>
              <p className="text-gray-600">Expert Support</p>
            </div>
          </div>
          
          {/* App Screenshot */}
          <div className="mt-20 w-full max-w-5xl mx-auto animate-fade-in rounded-2xl shadow-2xl border border-gray-200" style={{ animationDelay: '0.4s' }}>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" 
              alt="SaaSify Dashboard" 
              className="rounded-2xl w-full"
            />
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/2 left-10 w-64 h-64 rounded-full bg-blue-400 opacity-10 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 rounded-full bg-purple-400 opacity-10 blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
