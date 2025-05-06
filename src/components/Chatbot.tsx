
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { useChat } from "@/contexts/ChatContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const { messages, isTyping, sendMessage } = useChat();
  const { addToCart } = useCart();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    sendMessage(input);
    setInput("");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-72px)] bg-secondary/30">
      <div className="bg-background p-3 border-b">
        <h2 className="font-semibold text-center">Chat with AI</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
          >
            <div
              className={`relative max-w-[80%] px-4 py-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-primary text-primary-foreground chat-message-right"
                  : "bg-card chat-message-left"
              }`}
              style={{ "--message-bg": message.sender === "user" ? "hsl(var(--primary))" : "hsl(var(--card))" } as any}
            >
              {message.sender === "bot" && (
                <div className="flex items-center mb-2">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src="https://images.unsplash.com/photo-1518057111178-44a106bad149?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.0.3" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-medium">Bean Buddy</span>
                </div>
              )}
              <p>{message.text}</p>
              
              {message.products && message.products.length > 0 && (
                <div className="mt-3 grid grid-cols-1 gap-2">
                  {message.products.slice(0, 3).map((product) => (
                    <div
                      key={product.id}
                      className="bg-background rounded-md p-2 flex justify-between items-center"
                    >
                      <div className="flex items-center space-x-2">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-12 w-12 rounded object-cover"
                        />
                        <div>
                          <h4 className="text-sm font-medium">{product.name}</h4>
                          <p className="text-xs">${product.price.toFixed(2)}</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => addToCart(product)}
                        className="h-8"
                      >
                        Add
                      </Button>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="text-xs opacity-70 mt-1 text-right">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-card rounded-lg px-4 py-3 max-w-[80%]">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSend} className="p-3 border-t bg-background">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask for coffee recommendations..."
            className="flex-1"
            disabled={isTyping}
          />
          <Button 
            type="submit" 
            disabled={isTyping || !input.trim()}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;
