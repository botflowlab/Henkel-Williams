import { motion } from 'framer-motion';
import { SEO } from '../components/layout/SEO';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { NewsletterForm } from '../components/ui/NewsletterForm';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '2024 Real Estate Market Trends: What Buyers Need to Know',
    excerpt: 'Discover the latest market trends and insights that will help you make informed decisions in today\'s real estate market.',
    author: 'Sarah Williams',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    slug: '2024-real-estate-market-trends'
  },
  {
    id: 2,
    title: 'First-Time Homebuyer\'s Complete Guide',
    excerpt: 'Everything you need to know about buying your first home, from financing options to closing procedures.',
    author: 'Michael Henkel',
    date: '2024-01-10',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    slug: 'first-time-homebuyer-guide'
  },
  {
    id: 3,
    title: 'Staging Your Home for Maximum Sale Price',
    excerpt: 'Professional tips and tricks to stage your home effectively and attract potential buyers.',
    author: 'Emily Rodriguez',
    date: '2024-01-05',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    slug: 'staging-home-maximum-sale-price'
  },
  {
    id: 4,
    title: 'Investment Properties: Building Wealth Through Real Estate',
    excerpt: 'Learn how to identify profitable investment opportunities and build long-term wealth through real estate.',
    author: 'David Chen',
    date: '2023-12-28',
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    slug: 'investment-properties-building-wealth'
  },
  {
    id: 5,
    title: 'Understanding Mortgage Options in 2024',
    excerpt: 'A comprehensive breakdown of different mortgage types and how to choose the right one for your situation.',
    author: 'Lisa Thompson',
    date: '2023-12-20',
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    slug: 'understanding-mortgage-options-2024'
  },
  {
    id: 6,
    title: 'Luxury Home Features That Add Value',
    excerpt: 'Discover which luxury features and amenities provide the best return on investment for high-end properties.',
    author: 'Robert Martinez',
    date: '2023-12-15',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    slug: 'luxury-home-features-add-value'
  }
];

export const Blog: React.FC = () => {
  return (
    <>
      <SEO
        title="Real Estate Blog | Henkel-Williams Real Estate"
        description="Stay informed with the latest real estate news, market trends, and expert advice from Henkel-Williams Real Estate professionals."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Real Estate Insights</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay informed with expert advice, market trends, and valuable insights from our real estate professionals.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover className="overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center text-slate-500 text-sm mb-3">
                          <User size={16} className="mr-1" />
                          <span className="mr-4">{post.author}</span>
                          <Calendar size={16} className="mr-1" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        
                        <h2 className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors">
                          <a href={`/blog/${post.slug}`}>{post.title}</a>
                        </h2>
                        
                        <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                        
                        <Button variant="outline" size="sm" className="group">
                          Read More
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Stay Updated</h3>
                <p className="text-slate-600 mb-4">
                  Get the latest real estate insights and market updates delivered to your inbox.
                </p>
                <NewsletterForm />
              </Card>
            </motion.div>

            {/* Recent Posts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="border-b border-slate-200 last:border-b-0 pb-4 last:pb-0">
                      <h4 className="font-medium text-slate-900 hover:text-blue-600 transition-colors mb-1">
                        <a href={`/blog/${post.slug}`}>{post.title}</a>
                      </h4>
                      <p className="text-sm text-slate-500">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {['Market Trends', 'Buying Tips', 'Selling Advice', 'Investment', 'Luxury Homes'].map((category) => (
                    <a
                      key={category}
                      href={`/blog/category/${category.toLowerCase().replace(' ', '-')}`}
                      className="block text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};