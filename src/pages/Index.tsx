
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedSection from '../components/FeaturedSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-luxury">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
