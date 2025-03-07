// Export all types from here

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface CompanyStats {
  propertiesSold: number;
  happyCustomers: number;
  citiesCovered: number;
  averageDaysToSell: number;
}

export interface CompanyInfo {
  name: string;
  slogan: string;
  description: string;
  founded: number;
  headquarters: string;
  employees: number;
  mission: string;
  vision: string;
  values: string[];
  features: Feature[];
  testimonials: Testimonial[];
  stats: CompanyStats;
}