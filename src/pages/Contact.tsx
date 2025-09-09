import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/layout/SEO';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { SITE_CONFIG } from '../utils/constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <SEO
        title="Contact Us | Henkel-Williams Real Estate"
        description="Get in touch with Henkel-Williams Real Estate. Contact our expert agents for all your real estate needs and questions."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to start your real estate journey? Get in touch with our expert team today.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="text-green-600" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600">Thank you for contacting us. We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="buying">Buying a Property</option>
                          <option value="selling">Selling a Property</option>
                          <option value="investment">Investment Opportunities</option>
                          <option value="consultation">Free Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                        placeholder="Tell us about your real estate needs..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2" size={20} />
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="text-blue-600 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-slate-900">Phone</p>
                      <a
                        href={`tel:${SITE_CONFIG.phone}`}
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="text-blue-600 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-slate-900">Email</p>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-blue-600 mt-1" size={20} />
                    <div>
                      <p className="font-medium text-slate-900">Address</p>
                      <p className="text-slate-600">{SITE_CONFIG.address}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Office Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium text-slate-900">Monday - Friday</p>
                      <p className="text-slate-600">9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium text-slate-900">Saturday</p>
                      <p className="text-slate-600">10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium text-slate-900">Sunday</p>
                      <p className="text-slate-600">12:00 PM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="p-6 bg-blue-50 border-blue-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">24/7 Emergency Line</h3>
                <p className="text-slate-600 mb-4">
                  For urgent real estate matters outside business hours.
                </p>
                <a
                  href="tel:(555) 999-0000"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  (555) 999-0000
                </a>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};