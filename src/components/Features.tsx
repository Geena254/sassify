
import React from 'react';
import { Zap, BarChart, Users, Shield, Clock, Wrench } from 'lucide-react';

const featuresList = [
  {
    icon: <Zap className="h-8 w-8 text-indigo-500" />,
    title: "Lightning Fast",
    description: "Our platform is optimized for speed and performance, ensuring your team never has to wait."
  },
  {
    icon: <BarChart className="h-8 w-8 text-indigo-500" />,
    title: "Advanced Analytics",
    description: "Get valuable insights with our comprehensive reporting and analytics tools."
  },
  {
    icon: <Users className="h-8 w-8 text-indigo-500" />,
    title: "Team Collaboration",
    description: "Seamlessly work together with real-time editing and communication tools."
  },
  {
    icon: <Shield className="h-8 w-8 text-indigo-500" />,
    title: "Enterprise Security",
    description: "Rest easy knowing your data is protected with bank-level security measures."
  },
  {
    icon: <Clock className="h-8 w-8 text-indigo-500" />,
    title: "Time Tracking",
    description: "Monitor productivity and track billable hours with our intuitive time tracking."
  },
  {
    icon: <Wrench className="h-8 w-8 text-indigo-500" />,
    title: "Customizable Workflow",
    description: "Tailor the platform to your team's specific needs with customizable workflows."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-indigo-600 font-semibold mb-2 block">POWERFUL FEATURES</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Everything You Need to Succeed</h2>
          <p className="text-lg text-gray-600">
            Our platform comes packed with everything you need to streamline your workflow and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-5 p-3 inline-block bg-indigo-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
