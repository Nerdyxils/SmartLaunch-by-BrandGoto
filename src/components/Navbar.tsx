import React from 'react';
import { Menu, X } from 'lucide-react';
import { useContactForm } from '../SmartLaunchDemo';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { openForm } = useContactForm();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text">SmartLaunch</span>
            <span className="text-sm text-gray-400 ml-2">by BrandGoto</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#pricing" className="text-white hover:text-orange-400 transition-colors">
              Pricing
            </a>
            <a href="#demo" className="text-white hover:text-orange-400 transition-colors">
              Demo
            </a>
            <a href="#faq" className="text-white hover:text-orange-400 transition-colors">
              FAQ
            </a>
            <button className="btn-primary" onClick={openForm}>
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-orange-500 hover:text-orange-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#pricing" 
                className="text-white hover:text-orange-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#demo" 
                className="text-white hover:text-orange-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </a>
              <a 
                href="#faq" 
                className="text-white hover:text-orange-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <button className="btn-primary w-full" onClick={openForm}>
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar; 