
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image }) => {
  return (
    <div className="group relative overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-full p-6">
        <h3 className="text-gold font-serif mb-2">{title}</h3>
        <p className="text-gold-light/70 text-sm mb-4">{description}</p>
        <div className="flex items-center text-gold hover:text-gold-light cursor-pointer transition-colors">
          <span className="font-medium mr-2">Explore</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
};

const FeaturedSection: React.FC = () => {
  const features = [
    {
      title: "Exclusive Collection",
      description: "Handcrafted pieces with premium materials",
      image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    },
    {
      title: "Limited Edition",
      description: "Unique designs for the discerning collector",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a3329?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    },
    {
      title: "Heritage Series",
      description: "Timeless classics reimagined for modern luxury",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="gradient-text mb-4">Featured Collections</h2>
            <p className="text-gold-light/80 max-w-xl">
              Discover our most exclusive pieces meticulously crafted for those who appreciate true luxury.
            </p>
          </div>
          <button className="gold-button mt-4 md:mt-0">View All Collections</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
