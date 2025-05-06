
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { ShoppingCart, Coffee } from "lucide-react";
import { useState } from "react";
import CartDrawer from "./CartDrawer";

const Header = () => {
  const { getCartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Coffee className="w-8 h-8 mr-2 text-primary" />
          <h1 className="text-xl font-bold text-primary">Bean Buddy</h1>
        </div>
        
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => setIsCartOpen(true)}
          className="flex items-center gap-2 border-primary hover:bg-primary/10"
        >
          <ShoppingCart className="h-4 w-4" />
          <span>Cart</span>
          {getCartCount() > 0 && (
            <span className="ml-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {getCartCount()}
            </span>
          )}
        </Button>
      </div>
      
      <CartDrawer isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
    </header>
  );
};

export default Header;
