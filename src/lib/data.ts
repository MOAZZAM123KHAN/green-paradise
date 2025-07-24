// Central data store for restaurant content
import pastaImage from '@/assets/pasta.jpg';
import frenchFriesImage from '@/assets/french-fries.jpg';
import chickenShawarmaImage from '@/assets/chicken-shawarma.jpg';
import fishCurryImage from '@/assets/fish-curry.jpg';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  status: 'Active' | 'Inactive';
  preparationTime?: string;
  ingredients?: string[];
  allergens?: string[];
}

export interface RestaurantInfo {
  name: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  hours: {
    [key: string]: string;
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  specialRequests?: string;
}

// Menu Items Data
export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Pasta Carbonara',
    description: 'Classic Italian pasta with creamy sauce, pancetta, and fresh parmesan cheese.',
    price: 35.00,
    image: pastaImage,
    rating: 4.8,
    category: 'Italian',
    status: 'Active',
    preparationTime: '15-20 mins',
    ingredients: ['Pasta', 'Pancetta', 'Eggs', 'Parmesan', 'Black Pepper'],
    allergens: ['Gluten', 'Eggs', 'Dairy']
  },
  {
    id: '2',
    name: 'Truffle French Fries',
    description: 'Golden crispy french fries with truffle oil, parmesan, and fresh herbs.',
    price: 18.00,
    image: frenchFriesImage,
    rating: 4.5,
    category: 'Sides',
    status: 'Active',
    preparationTime: '10-15 mins',
    ingredients: ['Potatoes', 'Truffle Oil', 'Parmesan', 'Herbs'],
    allergens: ['Dairy']
  },
  {
    id: '3',
    name: 'Chicken Shawarma Wrap',
    description: 'Tender marinated chicken wrapped in fresh pita with vegetables and garlic sauce.',
    price: 25.00,
    image: chickenShawarmaImage,
    rating: 4.7,
    category: 'Middle Eastern',
    status: 'Active',
    preparationTime: '12-18 mins',
    ingredients: ['Chicken', 'Pita Bread', 'Vegetables', 'Garlic Sauce', 'Spices'],
    allergens: ['Gluten', 'Dairy']
  },
  {
    id: '4',
    name: 'Coconut Fish Curry',
    description: 'Spicy and flavorful fish curry with coconut milk, served with jasmine rice.',
    price: 32.00,
    image: fishCurryImage,
    rating: 4.9,
    category: 'Asian',
    status: 'Active',
    preparationTime: '20-25 mins',
    ingredients: ['Fresh Fish', 'Coconut Milk', 'Curry Spices', 'Jasmine Rice', 'Vegetables'],
    allergens: ['Fish']
  },
  {
    id: '5',
    name: 'Margherita Pizza',
    description: 'Wood-fired pizza with fresh mozzarella, tomato sauce, and basil leaves.',
    price: 28.00,
    image: pastaImage, // Using pasta image as placeholder
    rating: 4.6,
    category: 'Italian',
    status: 'Active',
    preparationTime: '18-22 mins',
    ingredients: ['Pizza Dough', 'Tomato Sauce', 'Mozzarella', 'Fresh Basil', 'Olive Oil'],
    allergens: ['Gluten', 'Dairy']
  },
  {
    id: '6',
    name: 'BBQ Beef Ribs',
    description: 'Slow-cooked beef ribs with house BBQ sauce, served with coleslaw.',
    price: 42.00,
    image: chickenShawarmaImage, // Using chicken image as placeholder
    rating: 4.7,
    category: 'American',
    status: 'Active',
    preparationTime: '25-30 mins',
    ingredients: ['Beef Ribs', 'BBQ Sauce', 'Coleslaw', 'House Spices'],
    allergens: ['None']
  },
  {
    id: '7',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with parmesan, croutons, and classic caesar dressing.',
    price: 22.00,
    image: frenchFriesImage, // Using fries image as placeholder
    rating: 4.4,
    category: 'Salads',
    status: 'Active',
    preparationTime: '8-12 mins',
    ingredients: ['Romaine Lettuce', 'Parmesan', 'Croutons', 'Caesar Dressing'],
    allergens: ['Gluten', 'Dairy', 'Eggs']
  },
  {
    id: '8',
    name: 'Thai Green Curry',
    description: 'Authentic Thai green curry with chicken, vegetables, and fragrant rice.',
    price: 29.00,
    image: fishCurryImage, // Using fish curry image as placeholder
    rating: 4.8,
    category: 'Asian',
    status: 'Active',
    preparationTime: '22-28 mins',
    ingredients: ['Chicken', 'Green Curry Paste', 'Coconut Milk', 'Vegetables', 'Thai Rice'],
    allergens: ['None']
  }
];

// Restaurant Information
export const restaurantInfo: RestaurantInfo = {
  name: 'DHABA GREEN PARADISE',
  description: 'Experience the finest cuisine with fresh ingredients, prepared by expert chefs.',
  address: {
    street: '123 Gourmet Boulevard',
    city: 'Downtown',
    state: 'California',
    zipCode: '90210',
    country: 'United States'
  },
  contact: {
    phone: '(555) 123-4567',
    email: 'info@dhabagreenparadise.com',
    website: 'https://dhabagreenparadise.com'
  },
  hours: {
    'Monday': '11:00 AM - 10:00 PM',
    'Tuesday': '11:00 AM - 10:00 PM',
    'Wednesday': '11:00 AM - 10:00 PM',
    'Thursday': '11:00 AM - 10:00 PM',
    'Friday': '11:00 AM - 11:00 PM',
    'Saturday': '11:00 AM - 11:00 PM',
    'Sunday': '12:00 PM - 9:00 PM'
  },
  socialMedia: {
    facebook: 'https://facebook.com/restaurantpro',
    instagram: 'https://instagram.com/restaurantpro',
    twitter: 'https://twitter.com/restaurantpro'
  }
};

// Sample Reservations Data
export const reservationsData: Reservation[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '(555) 111-2222',
    date: '2024-01-15',
    time: '19:00',
    guests: 4,
    status: 'Confirmed',
    specialRequests: 'Window seat preferred'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '(555) 333-4444',
    date: '2024-01-15',
    time: '20:00',
    guests: 2,
    status: 'Pending',
    specialRequests: 'Anniversary dinner'
  },
  {
    id: '3',
    name: 'Mike Johnson',
    email: 'mike@example.com',
    phone: '(555) 555-6666',
    date: '2024-01-16',
    time: '18:30',
    guests: 6,
    status: 'Confirmed',
    specialRequests: 'Business dinner, quiet table'
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    phone: '(555) 777-8888',
    date: '2024-01-16',
    time: '19:30',
    guests: 3,
    status: 'Confirmed'
  }
];