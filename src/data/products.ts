
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'hot-coffee' | 'cold-coffee' | 'specialty' | 'pastry' | 'snack';
  tags: string[];
}

export const products: Product[] = [
  // Hot Coffee
  {
    id: 'classic-black',
    name: 'Classic Black Coffee',
    description: 'Rich and bold single-origin coffee, simply brewed to perfection.',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop',
    category: 'hot-coffee',
    tags: ['hot', 'black coffee', 'classic', 'simple']
  },
  {
    id: 'espresso',
    name: 'Espresso Shot',
    description: 'Intense and concentrated coffee served in a small shot.',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?q=80&w=1200&auto=format&fit=crop',
    category: 'hot-coffee',
    tags: ['hot', 'strong', 'black coffee', 'shot']
  },
  {
    id: 'cappuccino',
    name: 'Creamy Cappuccino',
    description: 'Equal parts espresso, steamed milk, and milk foam.',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=1200&auto=format&fit=crop',
    category: 'hot-coffee',
    tags: ['hot', 'milk', 'creamy', 'foam']
  },
  {
    id: 'vanilla-latte',
    name: 'Vanilla Latte',
    description: 'Espresso with steamed milk and a hint of vanilla.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=1200&auto=format&fit=crop',
    category: 'hot-coffee',
    tags: ['hot', 'milk', 'vanilla', 'sweet', 'creamy']
  },
  
  // Cold Coffee
  {
    id: 'cold-brew',
    name: 'Smooth Cold Brew',
    description: 'Coffee steeped for 12 hours for a smooth, less acidic flavor.',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1200&auto=format&fit=crop',
    category: 'cold-coffee',
    tags: ['cold', 'smooth', 'refreshing', 'less acidic']
  },
  {
    id: 'iced-caramel-latte',
    name: 'Iced Caramel Latte',
    description: 'Espresso with cold milk, ice, and caramel syrup.',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?q=80&w=1200&auto=format&fit=crop',
    category: 'cold-coffee',
    tags: ['cold', 'milk', 'caramel', 'sweet', 'ice']
  },
  {
    id: 'mocha-frappuccino',
    name: 'Mocha Frappuccino',
    description: 'Blended coffee with ice, milk, and rich chocolate.',
    price: 6.49,
    image: 'https://images.unsplash.com/photo-1627568067839-8eda7577fc0e?q=80&w=1200&auto=format&fit=crop',
    category: 'cold-coffee',
    tags: ['cold', 'blended', 'chocolate', 'ice', 'sweet']
  },
  
  // Specialty Coffee
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    description: 'Espresso with vanilla syrup, milk, and caramel drizzle.',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1608651057580-4a50b2fc2281?q=80&w=1200&auto=format&fit=crop',
    category: 'specialty',
    tags: ['hot', 'milk', 'caramel', 'vanilla', 'sweet']
  },
  {
    id: 'pumpkin-spice',
    name: 'Pumpkin Spice Latte',
    description: 'Seasonal favorite with espresso, pumpkin spice, and steamed milk.',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1200&auto=format&fit=crop',
    category: 'specialty',
    tags: ['hot', 'seasonal', 'pumpkin', 'spice', 'creamy']
  },
  
  // Pastries
  {
    id: 'chocolate-croissant',
    name: 'Chocolate Croissant',
    description: 'Buttery, flaky croissant filled with rich chocolate.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop',
    category: 'pastry',
    tags: ['breakfast', 'butter', 'flaky', 'chocolate']
  },
  {
    id: 'blueberry-muffin',
    name: 'Blueberry Muffin',
    description: 'Moist muffin packed with juicy blueberries and a crumble topping.',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=1200&auto=format&fit=crop',
    category: 'pastry',
    tags: ['breakfast', 'fruit', 'sweet', 'blueberry']
  },
  {
    id: 'cinnamon-roll',
    name: 'Cinnamon Roll',
    description: 'Soft, warm roll with cinnamon swirl and cream cheese frosting.',
    price: 4.29,
    image: 'https://images.unsplash.com/photo-1598646506899-ac6be1000c2f?q=80&w=1200&auto=format&fit=crop',
    category: 'pastry',
    tags: ['breakfast', 'cinnamon', 'sweet', 'dessert']
  },
  {
    id: 'chocolate-chip-cookies',
    name: 'Chocolate Chip Cookies',
    description: 'Freshly baked cookies with gooey chocolate chips.',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop',
    category: 'pastry',
    tags: ['sweet', 'dessert', 'chocolate', 'cookie']
  },
  
  // Snacks
  {
    id: 'avocado-toast',
    name: 'Avocado Toast',
    description: 'Sourdough toast topped with mashed avocado, salt, and pepper.',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1603046891744-76e7d973459b?q=80&w=1200&auto=format&fit=crop',
    category: 'snack',
    tags: ['breakfast', 'healthy', 'savory', 'avocado']
  },
  {
    id: 'bacon-egg-sandwich',
    name: 'Bacon & Egg Sandwich',
    description: 'Crispy bacon with fried egg on a buttered English muffin.',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=1200&auto=format&fit=crop',
    category: 'snack',
    tags: ['breakfast', 'savory', 'bacon', 'egg', 'sandwich']
  }
];

export const getProductsByCategory = (category: string) => {
  if (category === 'all') {
    return products;
  }
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getProductsBySearch = (search: string) => {
  const searchLower = search.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchLower) || 
    product.description.toLowerCase().includes(searchLower) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchLower))
  );
};
