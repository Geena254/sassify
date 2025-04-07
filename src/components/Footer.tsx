
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, GitHub } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">SaaSify</div>
            <p className="text-sm mb-6 text-gray-300">
              Simplifying workflows for teams worldwide. Our all-in-one platform helps you collaborate, 
              manage projects, and deliver results faster.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors p-2 bg-gray-800 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 bg-gray-800 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 bg-gray-800 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 bg-gray-800 rounded-full">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors p-2 bg-gray-800 rounded-full">
                <GitHub className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="hover:text-indigo-400 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="text-white font-semibold mb-4">Subscribe to our newsletter</h3>
            <div className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} SaaSify. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
