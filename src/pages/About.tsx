import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Section, Footer } from '../components';
import { companyService } from '../services';
import { CompanyInfo } from '../types';

const About: React.FC = () => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanyInfo = async () => {
      try {
        const data = await companyService.getCompanyInfo();
        setCompanyInfo(data);
      } catch (error) {
        console.error('Error fetching company info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyInfo();
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
      <Navbar />
      
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative h-96 mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-propiz-dark to-propiz-primary opacity-90"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About {companyInfo.name}
            </motion.h1>
            <motion.p 
              className="text-xl max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {companyInfo.slogan}
            </motion.p>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          {/* Our Story */}
          <Section
            title="Our Story"
            subtitle="How we're transforming the real estate industry"
            backgroundColor="bg-propiz-primary"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  {companyInfo.description}
                </p>
                <p className="mb-4">
                  Founded in {companyInfo.founded}, {companyInfo.name} has grown from a small startup to a team of {companyInfo.employees} dedicated professionals based in {companyInfo.headquarters}.
                </p>
                <p>
                  Our innovative approach to real estate has helped thousands of people find their dream homes and make smarter property investments.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <motion.div 
                  className="relative w-full h-64 md:h-full rounded-lg overflow-hidden shadow-xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Our office" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </Section>
          
          {/* Mission & Vision */}
          <Section
            title="Mission & Vision"
            subtitle="What drives us forward"
            backgroundColor="bg-propiz-dark"
            reverse
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-propiz-primary">Our Mission</h3>
                <p>{companyInfo.mission}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-propiz-primary">Our Vision</h3>
                <p>{companyInfo.vision}</p>
              </div>
            </div>
          </Section>
          
          {/* Our Values */}
          <Section
            title="Our Values"
            subtitle="The principles that guide everything we do"
            backgroundColor="bg-propiz-primary"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {companyInfo.values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    hover: { duration: 0.3 }
                  }}
                >
                  <div className="w-16 h-16 bg-propiz-primary bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-propiz-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value}</h3>
                </motion.div>
              ))}
            </div>
          </Section>
          
          {/* Our Team */}
          <Section
            title="Our Team"
            subtitle="Meet the people behind Propiz"
            backgroundColor="bg-propiz-dark"
            reverse
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  name: 'John Smith',
                  role: 'CEO & Founder',
                  image: 'https://randomuser.me/api/portraits/men/32.jpg',
                },
                {
                  name: 'Sarah Johnson',
                  role: 'CTO',
                  image: 'https://randomuser.me/api/portraits/women/44.jpg',
                },
                {
                  name: 'Michael Chen',
                  role: 'Head of Product',
                  image: 'https://randomuser.me/api/portraits/men/67.jpg',
                },
                {
                  name: 'Emily Rodriguez',
                  role: 'Lead Designer',
                  image: 'https://randomuser.me/api/portraits/women/33.jpg',
                },
              ].map((member, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md text-center"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    hover: { duration: 0.3 }
                  }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
          
          {/* Stats */}
          <Section
            title="Our Impact"
            subtitle="The numbers speak for themselves"
            backgroundColor="bg-propiz-primary"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div 
                className="text-center"
                whileInView={{ scale: [0.5, 1.2, 1] }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-propiz-primary mb-2">
                  {companyInfo.stats.propertiesSold.toLocaleString()}+
                </div>
                <p className="text-gray-600">Properties Sold</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileInView={{ scale: [0.5, 1.2, 1] }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-propiz-primary mb-2">
                  {companyInfo.stats.happyCustomers.toLocaleString()}+
                </div>
                <p className="text-gray-600">Happy Customers</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileInView={{ scale: [0.5, 1.2, 1] }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-propiz-primary mb-2">
                  {companyInfo.stats.citiesCovered}+
                </div>
                <p className="text-gray-600">Cities Covered</p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                whileInView={{ scale: [0.5, 1.2, 1] }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-propiz-primary mb-2">
                  {companyInfo.stats.averageDaysToSell}
                </div>
                <p className="text-gray-600">Avg. Days to Sell</p>
              </motion.div>
            </div>
          </Section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;