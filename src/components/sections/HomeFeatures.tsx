import { motion } from 'framer-motion';
import { Home, Users, TrendingUp, Award, Shield, Clock } from 'lucide-react';
import { Card } from '../ui/Card';

const features = [
  {
    icon: Home,
    title: 'Premium Properties',
    description: 'Curated selection of luxury homes and investment properties in prime locations.'
  },
  {
    icon: Users,
    title: 'Expert Agents',
    description: 'Experienced professionals with deep local market knowledge and proven track records.'
  },
  {
    icon: TrendingUp,
    title: 'Market Insights',
    description: 'Data-driven analysis and trends to help you make informed real estate decisions.'
  },
  {
    icon: Award,
    title: 'Award-Winning Service',
    description: 'Recognized excellence in customer service and successful property transactions.'
  },
  {
    icon: Shield,
    title: 'Trusted Process',
    description: 'Transparent, secure, and reliable real estate transactions from start to finish.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock assistance for all your real estate needs and questions.'
  }
];

export const HomeFeatures: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Why Choose Henkel-Williams?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            We combine local expertise with innovative technology to deliver exceptional real estate experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="p-6 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};