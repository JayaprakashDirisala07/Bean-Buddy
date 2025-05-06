
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product, getProductsByCategory } from "@/data/products";
import { useState } from "react";
import ProductCard from "./ProductCard";

const categories = [
  { id: "all", name: "All Items" },
  { id: "hot-coffee", name: "Hot Coffee" },
  { id: "cold-coffee", name: "Cold Coffee" },
  { id: "specialty", name: "Specialty" },
  { id: "pastry", name: "Pastries" },
  { id: "snack", name: "Snacks" },
];

const ProductsMenu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const products = getProductsByCategory(activeCategory);

  return (
    <div className="h-[calc(100vh-72px)] overflow-y-auto flex flex-col">
      <div className="p-4 bg-background sticky top-0 z-10 border-b">
        <h2 className="font-semibold text-xl mb-4">Our Menu</h2>
        
        <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="grid grid-cols-3 sm:grid-cols-6 mb-4">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsMenu;
