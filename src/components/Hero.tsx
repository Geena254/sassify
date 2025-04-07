
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden hero-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            Simplify Your Workflow with <span className="gradient-text">SaaSify</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            The all-in-one platform that helps your team collaborate, manage projects,
            and deliver results faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" className="font-medium">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="font-medium">
              Schedule Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-4xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold gradient-text">10,000+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold gradient-text">98%</p>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-3xl font-bold gradient-text">24/7</p>
              <p className="text-gray-600">Expert Support</p>
            </div>
          </div>
          
          {/* App Screenshot */}
          <div className="mt-16 w-full max-w-5xl mx-auto animate-fade-in rounded-xl shadow-2xl border border-gray-200" style={{ animationDelay: '0.4s' }}>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" 
              alt="SaaSify Dashboard" 
              className="rounded-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
