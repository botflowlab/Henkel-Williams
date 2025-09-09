import { motion } from 'framer-motion';
import { SEO } from '../components/layout/SEO';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    price: '$1,250,000',
    location: 'Beverly Hills, CA',
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    featured: true
  },
  {
    id: 2,
    title: 'Contemporary Downtown Condo',
    price: '$750,000',
    location: 'Downtown, CA',
    beds: 2,
    baths: 2,
    sqft: 1800,
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    featured: false
  },
  {
    id: 3,
    title: 'Charming Family Home',
    price: '$650,000',
    location: 'Suburban Heights, CA',
    beds: 3,
    baths: 2,
    sqft: 2400,
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    featured: false
  },
  {
    id: 4,
    title: 'Waterfront Estate',
    price: '$2,100,000',
    location: 'Malibu, CA',
    beds: 5,
    baths: 4,
    sqft: 4500,
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    featured: true
  },
  {
    id: 5,
    title: 'Urban Loft',
    price: '$550,000',
    location: 'Arts District, CA',
    beds: 1,
    baths: 1,
    sqft: 1200,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    featured: false
  },
  {
    id: 6,
    title: 'Mountain Retreat',
    price: '$850,000',
    location: 'Big Bear, CA',
    beds: 3,
    baths: 2,
    sqft: 2800,
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    featured: false
  }
];

export const Properties: React.FC = () => {
  return (
    <>
      <SEO
        title="Properties | Henkel-Williams Real Estate"
        description="Browse our curated selection of premium properties including luxury homes, condos, and investment opportunities."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Properties</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover exceptional homes and investment opportunities in prime locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="overflow-hidden">
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-64 object-cover"
                    />
                    {property.featured && (
                      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                    <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                      <Heart size={20} className="text-slate-600" />
                    </button>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-slate-500 mb-2">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{property.title}</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-4">{property.price}</p>
                    
                    <div className="flex items-center justify-between text-slate-600 mb-6">
                      <div className="flex items-center">
                        <Bed size={16} className="mr-1" />
                        <span className="text-sm">{property.beds} beds</span>
                      </div>
                      <div className="flex items-center">
                        <Bath size={16} className="mr-1" />
                        <span className="text-sm">{property.baths} baths</span>
                      </div>
                      <div className="flex items-center">
                        <Square size={16} className="mr-1" />
                        <span className="text-sm">{property.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>
                    
                    <Button className="w-full">View Details</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};