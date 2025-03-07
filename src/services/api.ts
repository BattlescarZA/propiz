import axios from 'axios';
import { Property } from '../types';

// Create an axios instance with default config
// Using a relative path to avoid CORS issues
const api = axios.create({
  baseURL: '/api', // Changed to relative path
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Mock data in case the API is not available
const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    description: 'A stunning modern villa with panoramic ocean views, featuring 5 bedrooms, 6 bathrooms, and a private infinity pool.',
    price: 1250000,
    location: 'Malibu, CA',
    bedrooms: 5,
    bathrooms: 6,
    area: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '2',
    title: 'Downtown Penthouse',
    description: 'Luxurious penthouse in the heart of the city with floor-to-ceiling windows, 3 bedrooms, 3.5 bathrooms, and a rooftop terrace.',
    price: 890000,
    location: 'New York, NY',
    bedrooms: 3,
    bathrooms: 3.5,
    area: 2800,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '3',
    title: 'Countryside Retreat',
    description: 'Peaceful countryside home on 5 acres with 4 bedrooms, 3 bathrooms, a barn, and beautiful mountain views.',
    price: 675000,
    location: 'Aspen, CO',
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    imageUrl: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '4',
    title: 'Beachfront Condo',
    description: 'Beautiful beachfront condo with 2 bedrooms, 2 bathrooms, and a spacious balcony overlooking the ocean.',
    price: 550000,
    location: 'Miami, FL',
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '5',
    title: 'Urban Loft',
    description: 'Stylish urban loft in a converted warehouse with 1 bedroom, 1 bathroom, high ceilings, and industrial finishes.',
    price: 425000,
    location: 'Chicago, IL',
    bedrooms: 1,
    bathrooms: 1,
    area: 1100,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: '6',
    title: 'Mountain Cabin',
    description: 'Cozy mountain cabin with 3 bedrooms, 2 bathrooms, a stone fireplace, and stunning forest views.',
    price: 380000,
    location: 'Denver, CO',
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];

// Mock company info
const mockCompanyInfo = {
  name: 'Propiz',
  slogan: 'Find Your Dream Property',
  description: 'Propiz is a leading real estate platform that connects buyers, sellers, and renters with the perfect properties. Our innovative technology and expert team make finding your dream home easier than ever.',
  founded: 2020,
  headquarters: 'San Francisco, CA',
  employees: 120,
  mission: 'To revolutionize the real estate industry by providing a transparent, efficient, and user-friendly platform for all property transactions.',
  vision: 'To be the most trusted and innovative real estate platform worldwide, making property transactions accessible to everyone.',
  values: [
    'Innovation',
    'Transparency',
    'Integrity',
    'Customer-First',
    'Excellence'
  ],
  features: [
    {
      title: 'Smart Property Search',
      description: 'Our AI-powered search helps you find exactly what you\'re looking for.',
      icon: 'search'
    },
    {
      title: 'Virtual Tours',
      description: 'Explore properties from the comfort of your home with immersive 3D tours.',
      icon: 'vr'
    },
    {
      title: 'Instant Valuation',
      description: 'Get an accurate estimate of your property\'s value in seconds.',
      icon: 'calculator'
    },
    {
      title: 'Secure Transactions',
      description: 'Complete your property transactions safely and securely on our platform.',
      icon: 'shield'
    }
  ],
  testimonials: [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Home Buyer',
      comment: 'Propiz made finding my dream home so easy! The virtual tours saved me so much time, and the mortgage calculator helped me understand exactly what I could afford.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Property Investor',
      comment: 'As someone who invests in multiple properties, Propiz has been a game-changer. The market analytics and instant valuation tools help me make informed decisions quickly.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'First-time Seller',
      comment: 'I was nervous about selling my first home, but Propiz guided me through every step. Their platform connected me with serious buyers, and I sold for above asking price!',
      rating: 4,
      avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
  ],
  stats: {
    propertiesSold: 15000,
    happyCustomers: 25000,
    citiesCovered: 120,
    averageDaysToSell: 28
  }
};

// API functions
export const propertyService = {
  // Get all properties
  getProperties: async (): Promise<Property[]> => {
    // Using mock data directly to avoid CORS issues
    return mockProperties;
  },

  // Get a single property by ID
  getPropertyById: async (id: string): Promise<Property | null> => {
    // Using mock data directly to avoid CORS issues
    return mockProperties.find(property => property.id === id) || null;
  },

  // Search properties
  searchProperties: async (query: string): Promise<Property[]> => {
    // Using mock data directly to avoid CORS issues
    return mockProperties.filter(property =>
      property.title.toLowerCase().includes(query.toLowerCase()) ||
      property.description.toLowerCase().includes(query.toLowerCase()) ||
      property.location.toLowerCase().includes(query.toLowerCase())
    );
  }
};

// Company info service
export const companyService = {
  getCompanyInfo: async () => {
    // Using mock data directly to avoid CORS issues
    return mockCompanyInfo;
  }
};

export default api;