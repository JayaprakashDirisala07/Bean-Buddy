
import Chatbot from "@/components/Chatbot";
import Header from "@/components/Header";
import ProductsMenu from "@/components/ProductsMenu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Coffee, MessageSquare } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"chat" | "menu">("menu");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <div className="flex-1 md:container mx-auto grid md:grid-cols-2 gap-0 md:gap-6 md:py-6">
        {/* Mobile Tab Selector */}
        <div className="md:hidden grid grid-cols-2 border-b">
          <Button
            variant={activeTab === "menu" ? "default" : "ghost"}
            onClick={() => setActiveTab("menu")}
            className={`rounded-none h-12 ${
              activeTab === "menu" ? "bg-primary text-primary-foreground" : ""
            }`}
          >
            <Coffee className="mr-2 h-4 w-4" />
            Browse Menu
          </Button>
          <Button
            variant={activeTab === "chat" ? "default" : "ghost"}
            onClick={() => setActiveTab("chat")}
            className={`rounded-none h-12 ${
              activeTab === "chat" ? "bg-primary text-primary-foreground" : ""
            }`}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Chat with Buddy AI
          </Button>
        </div>

        {/* Menu Section */}
        <div className={`md:block ${activeTab === "menu" ? "block" : "hidden"}`}>
          <div className="bg-white rounded-lg overflow-hidden border md:shadow-lg">
            <ProductsMenu />
          </div>
        </div>
        
        {/* Chat Section */}
        <div className={`md:block ${activeTab === "chat" ? "block" : "hidden"}`}>
          <div className="bg-white rounded-lg overflow-hidden border md:shadow-lg">
            <Chatbot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
