
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Sassify</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Testimonials</a>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">Pricing</a>
            <a href="#faq" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">FAQ</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-medium">Sign In</Button>
            <Button className="font-medium bg-gradient-to-r from-indigo-600 to-purple-600">Try For Free</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-5 space-y-4">
            <a href="#features" className="block text-gray-700 hover:text-indigo-600 font-medium" onClick={toggleMenu}>Features</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-indigo-600 font-medium" onClick={toggleMenu}>Testimonials</a>
            <a href="#pricing" className="block text-gray-700 hover:text-indigo-600 font-medium" onClick={toggleMenu}>Pricing</a>
            <a href="#faq" className="block text-gray-700 hover:text-indigo-600 font-medium" onClick={toggleMenu}>FAQ</a>
            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
              <Button variant="ghost" className="w-full justify-center font-medium">Sign In</Button>
              <Button className="w-full justify-center font-medium">Try For Free</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
