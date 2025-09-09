import { motion } from 'framer-motion';
import { SEO } from '../components/layout/SEO';
import { Card } from '../components/ui/Card';
import { Award, Users, Home, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Home, label: 'Properties Sold', value: '500+' },
  { icon: Users, label: 'Happy Clients', value: '1,200+' },
  { icon: Award, label: 'Years Experience', value: '15+' },
  { icon: TrendingUp, label: 'Market Growth', value: '25%' }
];

export const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us | Henkel-Williams Real Estate"
        description="Learn about Henkel-Williams Real Estate's history, mission, and experienced team of real estate professionals serving the community."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Henkel-Williams</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Your trusted partner in real estate for over 15 years, dedicated to helping you find the perfect property.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-blue-600" size={32} />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Founded in 2008, Henkel-Williams Real Estate began with a simple mission: to provide exceptional, 
                personalized service to every client. What started as a small local agency has grown into one of 
                the region's most trusted real estate firms.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Our success is built on deep local market knowledge, innovative marketing strategies, and an 
                unwavering commitment to our clients' goals. We believe that buying or selling a home should 
                be an exciting and rewarding experience.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, we continue to set the standard for excellence in real estate, combining traditional 
                values with modern technology to serve our community better.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Real estate team meeting"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission & Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center h-full">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Integrity</h3>
                <p className="text-slate-600">
                  We conduct business with honesty, transparency, and ethical practices in every transaction.
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6 text-center h-full">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Excellence</h3>
                <p className="text-slate-600">
                  We strive for excellence in every aspect of our service, from initial consultation to closing.
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 text-center h-full">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Community</h3>
                <p className="text-slate-600">
                  We're committed to giving back to the communities we serve and building lasting relationships.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};