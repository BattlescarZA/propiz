import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Footer, Button } from '../components';
import { propertyService } from '../services';
import { Property } from '../types';

const Properties: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000000]);
  const [bedroomFilter, setBedroomFilter] = useState<number | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await propertyService.getProperties();
        setProperties(data);
        setFilteredProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    // Filter properties based on search term, price range, and bedrooms
    const filtered = properties.filter((property) => {
      const matchesSearch = 
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesPrice = 
        property.price >= priceRange[0] && property.price <= priceRange[1];
      
      const matchesBedrooms = 
        bedroomFilter === null || property.bedrooms === bedroomFilter;
      
      return matchesSearch && matchesPrice && matchesBedrooms;
    });

    setFilteredProperties(filtered);
  }, [searchTerm, priceRange, bedroomFilter, properties]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    const isMin = e.target.id === 'min-price';
    
    setPriceRange((prev) => {
      if (isMin) {
        return [value, prev[1]];
      } else {
        return [prev[0], value];
      }
    });
  };

  const handleBedroomFilter = (bedrooms: number | null) => {
    setBedroomFilter(bedrooms);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-propiz-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-propiz-dark to-propiz-primary text-white">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-2 text-white">Properties</h1>
            <p className="text-gray-200 mb-8">Find your dream property from our extensive collection</p>
          </motion.div>
          
          {/* Filters */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Search */}
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search by location, title, etc."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-propiz-primary"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              
              {/* Price Range */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <input
                      type="number"
                      id="min-price"
                      placeholder="Min"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-propiz-primary"
                      value={priceRange[0]}
                      onChange={handlePriceChange}
                      min={0}
                      max={priceRange[1]}
                    />
                  </div>
                  <span className="text-gray-500">to</span>
                  <div className="flex-1">
                    <input
                      type="number"
                      id="max-price"
                      placeholder="Max"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-propiz-primary"
                      value={priceRange[1]}
                      onChange={handlePriceChange}
                      min={priceRange[0]}
                    />
                  </div>
                </div>
              </div>
              
              {/* Bedrooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bedrooms
                </label>
                <div className="flex space-x-2">
                  <button
                    className={`px-3 py-1 rounded-md ${
                      bedroomFilter === null
                        ? 'bg-propiz-primary text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => handleBedroomFilter(null)}
                  >
                    Any
                  </button>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      className={`px-3 py-1 rounded-md ${
                        bedroomFilter === num
                          ? 'bg-propiz-primary text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                      onClick={() => handleBedroomFilter(num)}
                    >
                      {num}+
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Property Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative">
                    <img
                      src={property.imageUrl}
                      alt={property.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-propiz-primary text-white px-3 py-1 rounded-md font-semibold">
                      ${property.price.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                    <p className="text-gray-500 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {property.location}
                    </p>
                    
                    <p className="text-gray-700 mb-4 line-clamp-2">{property.description}</p>
                    
                    <div className="flex justify-between text-gray-600 mb-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span>{property.bedrooms} bd</span>
                      </div>
                      
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{property.bathrooms} ba</span>
                      </div>
                      
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                        </svg>
                        <span>{property.area} sqft</span>
                      </div>
                    </div>
                    
                    <Button
                      text="View Details"
                      link={`/properties/${property.id}`}
                      variant="primary"
                      fullWidth
                    />
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                <p className="text-gray-600">Try adjusting your search filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Properties;