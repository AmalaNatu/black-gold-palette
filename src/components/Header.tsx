
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative border-b border-gold/30 py-4">
      <div className="container-luxury flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-serif tracking-wider">LUXE</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gold hover:text-gold-light transition-colors font-medium">
            Home
          </Link>
          <Link to="/products" className="text-gold hover:text-gold-light transition-colors font-medium">
            Products
          </Link>
          <Link to="/collections" className="text-gold hover:text-gold-light transition-colors font-medium">
            Collections
          </Link>
          <Link to="/about" className="text-gold hover:text-gold-light transition-colors font-medium">
            About
          </Link>
          <Link to="/contact" className="text-gold hover:text-gold-light transition-colors font-medium">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gold" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-luxury-dark z-50 pt-20">
          <nav className="flex flex-col items-center space-y-8 p-6">
            <Link 
              to="/" 
              className="text-2xl text-gold hover:text-gold-light transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-2xl text-gold hover:text-gold-light transition-colors"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link 
              to="/collections" 
              className="text-2xl text-gold hover:text-gold-light transition-colors"
              onClick={toggleMenu}
            >
              Collections
            </Link>
            <Link 
              to="/about" 
              className="text-2xl text-gold hover:text-gold-light transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-2xl text-gold hover:text-gold-light transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
