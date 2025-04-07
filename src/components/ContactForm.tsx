
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    
    toast({
      title: "Form submitted!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="section-padding gradient-bg text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-6">
              Join thousands of companies already using SaaSify to transform their workflow and boost productivity.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-white/10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-sm text-white/80">support@saasify.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 p-2 bg-white/10 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-sm text-white/80">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?" 
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  rows={4}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-white/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
