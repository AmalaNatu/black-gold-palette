
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-dark border-t border-gold/30 pt-16 pb-8">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-serif mb-4">LUXE</h3>
            <p className="text-gold-light/70 mb-6">
              Crafting timeless elegance since 1884. Our commitment to excellence defines every piece we create.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gold hover:text-gold-light">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gold hover:text-gold-light">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gold hover:text-gold-light">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Collections</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gold-light/70 hover:text-gold transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gold-light/70 hover:text-gold transition-colors">Bestsellers</a></li>
              <li><a href="#" className="text-gold-light/70 hover:text-gold transition-colors">Limited Edition</a></li>
              <li><a href="#" className="text-gold-light/70 hover:text-gold transition-colors">Heritage</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Information</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gold-light/70 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#" className="text-gold-light/70 hover:text-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-gold-light/70 hover:text-gold transition-colors">Craftsmanship</a></li>
              <li><a href="#" className="text-gold-light/70 hover:text-gold transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gold-light/70 hover:text-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gold-light/70 hover:text-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-gold-light/70 hover:text-gold transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-gold-light/70 hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gold-light/50 text-sm">
            © {new Date().getFullYear()} LUXE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gold-light/50 hover:text-gold text-sm transition-colors">Terms</a>
            <a href="#" className="text-gold-light/50 hover:text-gold text-sm transition-colors">Privacy</a>
            <a href="#" className="text-gold-light/50 hover:text-gold text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
