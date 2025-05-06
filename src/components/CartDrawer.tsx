
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { useState } from "react";
import CheckoutModal from "./CheckoutModal";
import { toast } from "@/hooks/use-toast";

interface CartDrawerProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartDrawer = ({ isOpen, setIsOpen }: CartDrawerProps) => {
  const { items, updateQuantity, removeFromCart, clearCart, getCartTotal } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checkout",
        variant: "destructive",
      });
      return;
    }
    setIsCheckoutOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
            <SheetDescription>
              Review the items in your cart before checkout
            </SheetDescription>
          </SheetHeader>
          
          <div className="flex flex-col gap-4 py-4 overflow-y-auto max-h-[calc(100vh-200px)]">
            {items.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-muted-foreground">Your cart is empty</p>
                <Button variant="link" onClick={() => setIsOpen(false)}>
                  Browse Products
                </Button>
              </div>
            ) : (
              <>
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center border-b pb-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={item.product.image} 
                        alt={item.product.name} 
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-medium">{item.product.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          ${item.product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border rounded">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-r-none"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-l-none"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-destructive"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="mt-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={clearCart}
                    className="text-muted-foreground"
                  >
                    Clear cart
                  </Button>
                </div>
              </>
            )}
          </div>
          
          <SheetFooter className="sm:justify-between">
            <div className="hidden sm:flex flex-col">
              <h3 className="font-medium">Total</h3>
              <p className="text-lg font-bold">${getCartTotal().toFixed(2)}</p>
            </div>
            <Button onClick={handleCheckout} disabled={items.length === 0}>
              Proceed to Checkout
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      
      <CheckoutModal isOpen={isCheckoutOpen} setIsOpen={setIsCheckoutOpen} />
    </>
  );
};

export default CartDrawer;
