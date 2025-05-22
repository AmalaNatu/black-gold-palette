
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="container-luxury relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="gradient-text mb-6">Timeless Elegance</h1>
          <p className="text-gold-light/80 text-lg md:text-xl mb-10 leading-relaxed">
            Discover our exclusive collection of premium designs crafted with meticulous attention to detail and the finest materials.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="gold-button">Explore Collections</Button>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold/10">Learn More</Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-luxury to-transparent"></div>
    </section>
  );
};

export default HeroSection;
