import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Hero, Section, Footer } from '../components';
import { companyService } from '../services';
import { CompanyInfo } from '../types';

const Home: React.FC = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const companyData = await companyService.getCompanyInfo();
        
        setCompanyInfo(companyData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !companyInfo) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-propiz-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar transparent />
      
      <Hero
        title="STAY AHEAD"
        subtitle="REVOLUTIONIZE YOUR REAL ESTATE BUSINESS TODAY"
        backgroundImage="/propiz.io 2.mp4"
        ctaText="Explore Properties"
        ctaLink="/properties"
        secondaryCtaText="Join Waitlist"
        secondaryCtaLink="/contact"
      />
      
      <Section
        title="AI-Powered Real Estate Automation"
        subtitle="Propiz.io is not just automation, it's a complete transformation. By eliminating inefficiencies, it empowers agents to focus on closing deals and growing their business."
        backgroundColor="bg-propiz-dark"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Transform Your Business</h3>
            <p className="text-white">Our services offer comprehensive solutions for real estate professionals, from lead generation to administrative tasks management, all powered by cutting-edge AI technology.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">Save Time & Money</h3>
            <p className="text-white">Automation tools can save real estate agents at least 12 hours per week or 624 hours annually, allowing them to focus more on clients and closing deals.</p>
          </div>
        </div>
      </Section>
      <Section
        title="Why Propiz.IO?"
        subtitle="Our comprehensive AI-powered solutions address the key challenges faced by real estate professionals"
        backgroundColor="bg-propiz-primary"
        reverse
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-propiz-primary text-2xl mb-3">⏱️</div>
            <h3 className="text-xl font-semibold mb-2">Time Waste Elimination</h3>
            <p className="text-gray-600">80% of real estate agents face burnout within 2 years due to poor time management. Our automation tools save you valuable time.</p>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-propiz-primary text-2xl mb-3">💰</div>
            <h3 className="text-xl font-semibold mb-2">Increased Revenue</h3>
            <p className="text-gray-600">Property management firms could achieve cost savings of up to 25% through effective time management and automation.</p>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-propiz-primary text-2xl mb-3">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
            <p className="text-gray-600">Real-time market analysis with AI-driven insights helps you make better decisions and optimize your business strategy.</p>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-propiz-primary text-2xl mb-3">📱</div>
            <h3 className="text-xl font-semibold mb-2">Automated Communication</h3>
            <p className="text-gray-600">Responding within 5 minutes boosts lead contact by 900%. Our system ensures no lead goes unattended.</p>
          </motion.div>
        </div>
      </Section>
      
      <Section
        title="How Propiz.IO Works"
        subtitle="A Step-by-Step Breakdown of Real Estate Automation"
        backgroundColor="bg-propiz-dark"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-md"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="text-propiz-primary text-3xl mb-4 font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Initial Setup & Customization</h3>
              <p className="text-gray-700 mb-4">Our team conducts a detailed onboarding session to understand your workflow, existing tools, and pain points. Propiz.io is then configured to integrate with your CRM, email, and property listing platforms.</p>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-md"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="text-propiz-primary text-3xl mb-4 font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Lead Capture & Follow-Up</h3>
              <p className="text-gray-700 mb-4">Automated lead capture from your website and social media, with instant AI-driven responses that qualify leads and schedule visits. Never miss a potential client again.</p>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-md"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="text-propiz-primary text-3xl mb-4 font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Property Match</h3>
              <p className="text-gray-700 mb-4">AI scans available listings and instantly finds the best property matches based on client needs, with smart filters for budget, location, features, and preferences.</p>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
          <motion.button
            className="bg-propiz-primary text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-opacity-90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Waitlist
          </motion.button>
          <p className="text-white mt-4">Be among the first agencies to implement this revolutionary technology</p>
        </div>
      </Section>
      
      <Section
        title="What Our Clients Say"
        subtitle="Hear from our satisfied customers"
        backgroundColor="bg-propiz-primary"
        reverse
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Home Buyer"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">Home Buyer</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">"Propiz made finding my dream home so easy! The virtual tours saved me so much time, and the mortgage calculator helped me understand exactly what I could afford."</p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < 5 ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Property Investor"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Michael Chen</h4>
                <p className="text-sm text-gray-500">Property Investor</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">"As someone who invests in multiple properties, Propiz has been a game-changer. The market analytics and instant valuation tools help me make informed decisions quickly."</p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < 5 ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="First-time Seller"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Emma Rodriguez</h4>
                <p className="text-sm text-gray-500">First-time Seller</p>
              </div>
            </div>
            <p className="text-gray-600 italic mb-4">"I was nervous about selling my first home, but Propiz guided me through every step. Their platform connected me with serious buyers, and I sold for above asking price!"</p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
      
      <Section
        title="Our Impact"
        subtitle="The numbers speak for themselves"
        backgroundColor="bg-propiz-dark"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <motion.div
            className="text-center"
            whileInView={{ scale: [0.5, 1.2, 1] }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold text-propiz-primary mb-2">
              900%
            </div>
            <p className="text-white">Increase in Lead Contact</p>
          </motion.div>
          
          <motion.div
            className="text-center"
            whileInView={{ scale: [0.5, 1.2, 1] }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold text-propiz-primary mb-2">
              25%
            </div>
            <p className="text-white">Cost Savings</p>
          </motion.div>
          
          <motion.div
            className="text-center"
            whileInView={{ scale: [0.5, 1.2, 1] }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold text-propiz-primary mb-2">
              12+
            </div>
            <p className="text-white">Hours Saved Weekly</p>
          </motion.div>
          
          <motion.div
            className="text-center"
            whileInView={{ scale: [0.5, 1.2, 1] }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl font-bold text-propiz-primary mb-2">
              85%
            </div>
            <p className="text-white">Lead Response Rate</p>
          </motion.div>
        </div>
      </Section>
      
      <Footer />
    </div>
  );
};

export default Home;