
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/data/products";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-primary font-bold">${product.price.toFixed(2)}</p>
        <p className="text-muted-foreground text-sm my-2 line-clamp-2 flex-grow">
          {product.description}
        </p>
        
        <Button 
          onClick={() => addToCart(product)}
          className="bg-primary hover:bg-primary/90 w-full mt-2"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
