
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, getProductsBySearch } from '../data/products';
import { useCart } from './CartContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  products?: Product[];
}

interface ChatContextType {
  messages: Message[];
  isTyping: boolean;
  sendMessage: (text: string) => void;
  clearChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: "Hello! I'm your Bean Buddy assistant. How can I help you today? You can ask for coffee recommendations, inquire about our menu, or place an order directly with me.",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  
  const [isTyping, setIsTyping] = useState(false);
  const { addToCart } = useCart();

  // Simple NLP to detect coffee-related queries
  const processMessage = (text: string): string => {
    const lowerText = text.toLowerCase();
    
    // Coffee recommendations
    if (
      lowerText.includes('recommend') || 
      lowerText.includes('suggestion') || 
      lowerText.includes('what do you have') ||
      lowerText.includes('what should i')
    ) {
      return "I'd be happy to recommend something! Are you looking for hot coffee, cold coffee, or maybe something to eat with your coffee?";
    }
    
    // Hot coffee queries
    if (
      lowerText.includes('hot coffee') || 
      lowerText.includes('warm drink') || 
      (lowerText.includes('hot') && lowerText.includes('drink'))
    ) {
      return "For hot coffee lovers, we have Classic Black Coffee, Espresso Shot, Cappuccino, and Vanilla Latte. Would you like to try any of these?";
    }
    
    // Cold coffee queries
    if (
      lowerText.includes('cold coffee') || 
      lowerText.includes('iced') || 
      lowerText.includes('cold brew') ||
      (lowerText.includes('cold') && lowerText.includes('drink'))
    ) {
      return "For something refreshing, try our Smooth Cold Brew, Iced Caramel Latte, or Mocha Frappuccino. Would you like to add any of these to your cart?";
    }
    
    // Specialty coffee queries
    if (
      lowerText.includes('special') || 
      lowerText.includes('unique') || 
      lowerText.includes('signature')
    ) {
      return "Our specialty coffees include the Caramel Macchiato and seasonal Pumpkin Spice Latte. These are customer favorites!";
    }
    
    // Pastry queries
    if (
      lowerText.includes('pastry') || 
      lowerText.includes('sweet') || 
      lowerText.includes('dessert') ||
      lowerText.includes('croissant') ||
      lowerText.includes('muffin') ||
      lowerText.includes('cookie')
    ) {
      return "We have delicious pastries including Chocolate Croissants, Blueberry Muffins, Cinnamon Rolls, and Chocolate Chip Cookies. Perfect with your coffee!";
    }
    
    // Snack queries
    if (
      lowerText.includes('food') || 
      lowerText.includes('snack') || 
      lowerText.includes('eat') ||
      lowerText.includes('hungry') ||
      lowerText.includes('breakfast') ||
      lowerText.includes('sandwich')
    ) {
      return "For something more substantial, try our Avocado Toast or Bacon & Egg Sandwich. They're perfect for breakfast or a quick meal!";
    }
    
    // Specific product queries
    if (lowerText.includes('black coffee') || lowerText.includes('regular coffee')) {
      return "Our Classic Black Coffee is rich and bold, simply brewed to perfection. Would you like to add it to your cart?";
    }
    
    if (lowerText.includes('espresso')) {
      return "Our Espresso Shot is intense and concentrated, perfect for a quick energy boost. Would you like to try it?";
    }
    
    if (lowerText.includes('cappuccino')) {
      return "Our Creamy Cappuccino has equal parts espresso, steamed milk, and milk foam. It's one of our most popular drinks!";
    }
    
    if (lowerText.includes('latte')) {
      return "We have a delicious Vanilla Latte with espresso, steamed milk, and a hint of vanilla. For cold options, try our Iced Caramel Latte!";
    }
    
    // Fallback response
    return "I'm here to help you order coffee and snacks. You can ask about our hot coffees, cold coffees, specialty drinks, pastries, or snacks. What are you in the mood for today?";
  };

  // Find products based on message content
  const findRelevantProducts = (text: string): Product[] => {
    // This is a simple implementation - in a real app, this would use more sophisticated NLP
    const searchTerms = text.toLowerCase();
    return getProductsBySearch(searchTerms);
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      const relevantProducts = findRelevantProducts(text);
      const botResponse = processMessage(text);
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
        products: relevantProducts.length > 0 ? relevantProducts : undefined
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'welcome',
        text: "Hello! I'm your Bean Buddy assistant. How can I help you today?",
        sender: 'bot',
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <ChatContext.Provider value={{ messages, isTyping, sendMessage, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
