
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "SaaSify has completely transformed how our team collaborates. We're now 35% more productive!",
    author: "Sarah Johnson",
    role: "Product Manager, TechCorp",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    quote: "The analytics dashboard gives us insights we never had before. It's like having a data scientist on the team.",
    author: "Mark Wilson",
    role: "CEO, Startup Studio",
    avatar: "https://i.pravatar.cc/150?img=60"
  },
  {
    quote: "Customer support is exceptional. Any time we've had questions, the team responds within minutes.",
    author: "Jessica Chen",
    role: "Operations Director, GrowthCo",
    avatar: "https://i.pravatar.cc/150?img=47"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Teams Everywhere</h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex-1">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-semibold mb-4">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {/* Company logos */}
            <div className="h-8 bg-gray-400/20 text-gray-500 px-4 rounded-md flex items-center">Company 1</div>
            <div className="h-8 bg-gray-400/20 text-gray-500 px-4 rounded-md flex items-center">Company 2</div>
            <div className="h-8 bg-gray-400/20 text-gray-500 px-4 rounded-md flex items-center">Company 3</div>
            <div className="h-8 bg-gray-400/20 text-gray-500 px-4 rounded-md flex items-center">Company 4</div>
            <div className="h-8 bg-gray-400/20 text-gray-500 px-4 rounded-md flex items-center">Company 5</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
